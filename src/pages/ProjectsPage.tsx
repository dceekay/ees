import { useMemo, useState, useEffect, useRef } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/projects.css';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState<any | null>(null);

  const heroRef = useRef<HTMLDivElement | null>(null);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const featured = projects[0];

  // ================= GSAP (SAFE ONLY) =================
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

  // ================= ESC MODAL =================
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <PageLayout>
      {/* ================= HERO ================= */}
      <section className="projectsHero" ref={heroRef}>
        <h1>{t.projectsPageTitle}</h1>
        <p>
          {t.projectsHeroSubtitle}
        </p>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="featuredProject">
        <div className="featuredInner">
          <img src={featured.image} alt={featured.title} />

          <div className="featuredContent">
            <span>{t.projectsFeaturedLabel}</span>
            <h2>{featured.title}</h2>
            <p>
              {featured.category} • {featured.status}
            </p>

            <button onClick={() => setSelected(featured)}>
              {t.projectsViewCaseStudy}
            </button>
          </div>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <div className="projectsFilters">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= MASONRY GRID ================= */}
      <motion.section className="projectsGrid">
        <AnimatePresence mode="wait">
          {filtered.map((project, index) => (
            <motion.div
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
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(project)}
            >
              <div className="projectImageWrap">
                <img src={project.image} alt={project.title} />
                <div className="projectOverlay" />
              </div>

              <div className="projectContent">
                <span className="projectCategory">
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p className="projectStatus">{project.status}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="projectModalOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="projectModal"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.image} alt={selected.title} />

              <div className="projectModalContent">
                <h2>{selected.title}</h2>
                <p className="meta">
                  {selected.category} • {selected.status}
                </p>

                <p>
                  {t.projectsModalDescription}
                </p>

                <Link
                  to={`/projects/${selected.slug}`}
                  className="modalBtn"
                >
                  {t.projectsOpenProject}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}