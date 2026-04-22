import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ScrollReveal } from '../common/ScrollReveal';
import { AnimatedText } from '../common/AnimatedText';
import { StaggerReveal } from '../common/StaggerReveal';
import { StaggerItem } from '../common/StaggerItem';
import type { Messages } from '../../i18n';

type ProjectsSectionProps = {
  t: Messages;
};

/** Updates --spot-x/--spot-y CSS vars on the card for the spotlight effect */
function handleSpotlight(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
}

export function ProjectsSection({ t }: ProjectsSectionProps) {
  const previewProjects = projects.slice(0, 6);

  return (
    <ScrollReveal className="panel projectsPreviewPanel">
      <div className="projectsPreviewHeader">
        <div>
          <AnimatedText className="kicker" as="p">Featured Work</AnimatedText>
          <AnimatedText as="h2" delay={0.08}>{t.projectsTitle}</AnimatedText>
          <AnimatedText className="subtitle" as="p" delay={0.16}>{t.projectsIntro}</AnimatedText>
        </div>
        <AnimatedText delay={0.24} as="div">
          <Link to="/projects" className="text-link">{t.viewAllProjects}</Link>
        </AnimatedText>
      </div>

      {/* ── Desktop / tablet grid ── */}
      <StaggerReveal className="projectsEditorialGrid">
        {previewProjects.map((project, index) => (
          <StaggerItem key={project.title}>
            {/* Wrap in Link so clicks navigate */}
            <Link
              to={`/projects/${project.slug ?? ''}`}
              style={{ display: 'contents' }}
              aria-label={`View project: ${project.title}`}
            >
              <article
                className={`projectEditorialCard projectEditorialCard--${index + 1}`}
                onMouseMove={handleSpotlight}
              >
                <div className="projectEditorialMedia">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="projectEditorialOverlay" />

                {/* Spotlight layer — was declared in CSS but missing from DOM */}
                <div className="projectEditorialSpotlight" />

                <div className="projectEditorialContent">
                  <div className="projectEditorialTop">
                    <span className="projectEditorialTag">{project.category}</span>
                    <small>{project.status}</small>
                  </div>
                  <h3>{project.title}</h3>
                </div>
              </article>
            </Link>
          </StaggerItem>
        ))}
      </StaggerReveal>

      {/* ── Mobile carousel ── */}
      <div className="projectsMobileCarousel">
        <div className="projectCarouselTrack">
          {previewProjects.map((project) => (
            <article key={project.title} className="projectCarouselSlide">
              <Link
                to={`/projects/${project.slug ?? ''}`}
                style={{ display: 'contents' }}
              >
                <div
                  className="projectEditorialCard"
                  onMouseMove={handleSpotlight}
                >
                  <div className="projectEditorialMedia">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="projectEditorialOverlay" />
                  <div className="projectEditorialSpotlight" />
                  <div className="projectEditorialContent">
                    <div className="projectEditorialTop">
                      <span className="projectEditorialTag">{project.category}</span>
                      <small>{project.status}</small>
                    </div>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}