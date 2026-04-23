import { useMemo, useState, useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../styles/projects.css';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState<any | null>(null);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const featured = projects[0];

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
      <section className="projectsHero">
        <h1>Our Projects</h1>
        <p>Precision-built spaces defined by detail, balance, and craftsmanship.</p>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="featuredProject">
        <div className="featuredInner">
          <img src={featured.image} alt={featured.title} />

          <div className="featuredContent">
            <span>Featured Project</span>
            <h2>{featured.title}</h2>
            <p>{featured.category} • {featured.status}</p>

            <button onClick={() => setSelected(featured)}>
              View Case Study
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

      {/* ================= GRID ================= */}
      <motion.section layout className="projectsGrid">
        <AnimatePresence>
          {filtered.map(project => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ y: -6 }}
              className="projectCard"
              onClick={() => setSelected(project)}
            >
              <div className="projectImageWrap">
                <img src={project.image} alt={project.title} />
                <div className="projectOverlay" />
              </div>

              <div className="projectContent">
                <span className="projectCategory">{project.category}</span>
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
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.image} alt={selected.title} />

              <div className="projectModalContent">
                <h2>{selected.title}</h2>
                <p className="meta">
                  {selected.category} • {selected.status}
                </p>

                <p>{selected.description}</p>

                <Link to={`/projects/${selected.slug}`} className="modalBtn">
                  Open Project
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}