import { useMemo, useState, useEffect, useRef } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { projectCopy } from '../i18n/projectCopy';
import { useLanguage } from '../hooks/useLanguage';
import { LazyImage } from '../components/common/LazyImage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/projects.css';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsPage({ toggleTheme }: { toggleTheme: () => void }) {
  const { lang, t } = useLanguage();
  const localizedProjects = projectCopy[lang].items;
  const labels = projectCopy[lang].labels;
  const [activeCategory, setActiveCategory] = useState('all');
  const heroRef = useRef<HTMLDivElement | null>(null);

  const categories = useMemo(() => {
    return [
      { key: 'all', label: labels.all },
      ...Array.from(new Set(projects.map((p) => p.categoryKey))).map((categoryKey) => {
        const project = projects.find((item) => item.categoryKey === categoryKey);
        return {
          key: categoryKey,
          label: project ? localizedProjects[project.slug].category : categoryKey,
        };
      }),
    ];
  }, [labels.all, localizedProjects]);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.categoryKey === activeCategory);
  }, [activeCategory]);

  const featured = projects[0];
  const featuredCopy = localizedProjects[featured.slug];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projectsHero h1', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.projectsHero p', {
        y: 30,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.featuredInner', {
        scrollTrigger: {
          trigger: '.featuredProject',
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <PageLayout toggleTheme={toggleTheme}>
      <section className="projectsHero" ref={heroRef}>
        <h1>{t.projectsPageTitle}</h1>
        <p>{t.projectsHeroSubtitle}</p>
      </section>

      <section className="featuredProject">
        <div className="featuredInner">
          <LazyImage src={featured.image} alt={featuredCopy.title} fetchPriority="high" />

          <div className="featuredContent">
            <span>{t.projectsFeaturedLabel}</span>
            <h2>{featuredCopy.title}</h2>
            <p>
              {featuredCopy.category} - {featuredCopy.status}
            </p>

            <Link to={`/projects/${featured.slug}`} className="featuredProjectLink">
              {t.projectsViewCaseStudy}
            </Link>
          </div>
        </div>
      </section>

      <div className="projectsFilters">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={activeCategory === cat.key ? 'active' : ''}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.section className="projectsGrid">
        <AnimatePresence mode="wait">
          {filtered.map((project, index) => {
            const projectText = localizedProjects[project.slug];

            return (
              <motion.article
                key={project.slug}
                className="projectCard"
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: 'blur(6px)',
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: 'easeOut',
                  delay: index * 0.03,
                }}
              >
                <Link to={`/projects/${project.slug}`} className="projectCardLink">
                  <div className="projectImageWrap">
                    <LazyImage src={project.image} alt={projectText.title} fetchPriority="low" />
                  </div>

                  <div className="projectContent">
                    <span className="projectCategory">{projectText.category}</span>
                    <h3>{projectText.title}</h3>
                    <p>{projectText.description}</p>
                    <div className="projectCardMeta">
                      <span className="projectStatus">{projectText.status}</span>
                      <span className="projectOpenLabel">{t.projectsOpenProject}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.section>
    </PageLayout>
  );
}
