import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { LazyImage } from '../components/common/LazyImage';
import { getProjectBySlug } from '../data/projects';
import { getProjectCopy, projectCopy } from '../i18n/projectCopy';
import { useLanguage } from '../hooks/useLanguage';
import type { Project } from '../types/content';
import '../styles/projects.css';

const projectGalleryCache = new Map<string, string[]>();
const IMAGE_EXTENSIONS = ['jpeg', 'jpg'] as const;

async function fetchExistingProjectImages(project: Project) {
  if (projectGalleryCache.has(project.imageFolder)) {
    return projectGalleryCache.get(project.imageFolder)!;
  }

  const candidates = Array.from({ length: 16 }, (_, index) => index + 1)
    .flatMap((index) => IMAGE_EXTENSIONS.map((extension) => `${project.imageFolder}/${index}.${extension}`));

  const results = await Promise.all(candidates.map(async (src) => {
    try {
      const response = await fetch(src, { method: 'HEAD' });
      return response.ok ? src : null;
    } catch {
      return null;
    }
  }));

  const discoveredImages = results.filter((src): src is string => Boolean(src));
  const dedupedGallery = Array.from(new Set([...project.gallery, ...discoveredImages]));
  projectGalleryCache.set(project.imageFolder, dedupedGallery);

  return dedupedGallery;
}

export function ProjectDetailPage({ toggleTheme }: { toggleTheme: () => void }) {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const project = getProjectBySlug(slug);
  const projectText = getProjectCopy(lang, slug);
  const labels = projectCopy[lang].labels;
  const [gallery, setGallery] = useState<string[]>(project?.gallery ?? []);

  useEffect(() => {
    if (!project) {
      return;
    }

    let isActive = true;

    fetchExistingProjectImages(project).then((images) => {
      if (isActive) {
        setGallery(images);
      }
    });

    return () => {
      isActive = false;
    };
  }, [project]);

  if (!project || !projectText) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PageLayout toggleTheme={toggleTheme}>
      <main className="projectDetail">
        <motion.div
          className="projectDetailIntro"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link to="/projects" className="projectBackLink">{labels.backToProjects}</Link>
          <p className="projectDetailKicker">{projectText.category}</p>
          <h1>{projectText.title}</h1>
          <p className="projectDetailLead">{projectText.description}</p>

          <div className="projectDetailMeta">
            <span>{projectText.status}</span>
            <span>{projectText.location}</span>
            <span>{labels.imageFolder}: {project.imageFolder}</span>
          </div>
        </motion.div>

        <motion.section
          className="projectDetailHero"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
        >
          <LazyImage src={project.image} alt={projectText.title} fetchPriority="high" />
        </motion.section>

        <section className="projectDetailBody">
          <div className="projectDetailCopy">
            <h2>{labels.projectBrief}</h2>
            <p>{projectText.brief}</p>

            <h2>{labels.details}</h2>
            {projectText.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>

          <div className="projectDetailSideRail">
            <aside className="projectDetailAside">
              <span>{labels.services}</span>
              <ul>
                {projectText.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </aside>

            <aside className="projectDetailAside">
              <span>{labels.uploadMoreImagesTo}</span>
              <strong>{project.imageFolder}</strong>
            </aside>
          </div>
        </section>

        <section className="projectGallery" aria-label={`${projectText.title} ${labels.galleryLabel}`}>
          {gallery.map((image, index) => (
            <motion.div
              className="projectGalleryItem"
              key={image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <LazyImage src={image} alt={`${projectText.title} ${index + 1}`} fetchPriority="low" />
            </motion.div>
          ))}
        </section>

        <section className="projectPlaceholderSection" aria-label={`${projectText.title} ${labels.photoPlaceholders}`}>
          <div className="projectPlaceholderHeader">
            <p className="projectDetailKicker">{labels.upcomingImages}</p>
            <h2>{labels.photoPlaceholders}</h2>
          </div>

          <div className="projectPlaceholderGrid">
            {projectText.placeholders.map((label, index) => (
              <div className="projectImagePlaceholder" key={label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{label}</strong>
                <small>{labels.uploadImage}</small>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
