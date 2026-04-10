import { PageLayout } from '../components/layout/PageLayout';
import { projects } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';

export function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="panel reveal">
        <h1>{t.projectsPageTitle}</h1>
        <p className="subtitle">{t.projectsPageIntro}</p>

        <div className="projectsShowcaseGrid" style={{ marginTop: '1.5rem' }}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`projectShowcaseCard ${index === 0 ? 'projectShowcaseCard--1' : ''}`}
            >
              <img src={project.image} alt={project.title} />

              <div className="projectShowcaseOverlay">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <small>{project.status}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}