import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ScrollReveal } from '../common/ScrollReveal';
import { AnimatedText } from '../common/AnimatedText';
import { StaggerReveal } from '../common/StaggerReveal';
import { StaggerItem } from '../common/StaggerItem';
import { LazyImage } from '../common/LazyImage';
import type { Messages } from '../../i18n';
import { projectCopy } from '../../i18n/projectCopy';
import { useLanguage } from '../../hooks/useLanguage';

type ProjectsSectionProps = {
  t: Messages;
};

function handleSpotlight(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
}

export function ProjectsSection({ t }: ProjectsSectionProps) {
  const { lang } = useLanguage();
  const localizedProjects = projectCopy[lang].items;
  const labels = projectCopy[lang].labels;
  const previewProjects = projects.slice(0, 6);

  return (
    <ScrollReveal className="panel projectsPreviewPanel">
      <div className="projectsPreviewHeader">
        <div>
          <AnimatedText className="kicker" as="p">{labels.featuredWork}</AnimatedText>
          <AnimatedText as="h2" delay={0.08}>{t.projectsTitle}</AnimatedText>
          <AnimatedText className="subtitle" as="p" delay={0.16}>{t.projectsIntro}</AnimatedText>
        </div>
        <AnimatedText delay={0.24} as="div">
          <Link to="/projects" className="text-link">{t.viewAllProjects}</Link>
        </AnimatedText>
      </div>

      <StaggerReveal className="projectsEditorialGrid">
        {previewProjects.map((project, index) => {
          const projectText = localizedProjects[project.slug];

          return (
            <StaggerItem key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                style={{ display: 'contents' }}
                aria-label={`${labels.viewProjectAria}: ${projectText.title}`}
              >
                <article
                  className={`projectEditorialCard projectEditorialCard--${index + 1}`}
                  onMouseMove={handleSpotlight}
                >
                  <div className="projectEditorialMedia">
                    <LazyImage src={project.image} alt={projectText.title} fetchPriority="low" />
                  </div>

                  <div className="projectEditorialOverlay" />
                  <div className="projectEditorialSpotlight" />

                  <div className="projectEditorialContent">
                    <div className="projectEditorialTop">
                      <span className="projectEditorialTag">{projectText.category}</span>
                      <small>{projectText.status}</small>
                    </div>
                    <h3>{projectText.title}</h3>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerReveal>

      <div className="projectsMobileCarousel">
        <div className="projectCarouselTrack">
          {previewProjects.map((project) => {
            const projectText = localizedProjects[project.slug];

            return (
              <article key={project.slug} className="projectCarouselSlide">
                <Link
                  to={`/projects/${project.slug}`}
                  style={{ display: 'contents' }}
                  aria-label={`${labels.viewProjectAria}: ${projectText.title}`}
                >
                  <div
                    className="projectEditorialCard"
                    onMouseMove={handleSpotlight}
                  >
                    <div className="projectEditorialMedia">
                      <LazyImage src={project.image} alt={projectText.title} fetchPriority="low" />
                    </div>
                    <div className="projectEditorialOverlay" />
                    <div className="projectEditorialSpotlight" />
                    <div className="projectEditorialContent">
                      <div className="projectEditorialTop">
                        <span className="projectEditorialTag">{projectText.category}</span>
                        <small>{projectText.status}</small>
                      </div>
                      <h3>{projectText.title}</h3>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
