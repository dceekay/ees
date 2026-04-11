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

export function ProjectsSection({ t }: ProjectsSectionProps) {
  const previewProjects = projects.slice(0, 6);

  return (
    <ScrollReveal className="panel projectsPreviewPanel">
      <div className="projectsPreviewHeader">
        <div>
          <AnimatedText className="kicker" as="p">
            Featured Work
          </AnimatedText>

          <AnimatedText as="h2" delay={0.08}>
            {t.projectsTitle}
          </AnimatedText>

          <AnimatedText className="subtitle" as="p" delay={0.16}>
            {t.projectsIntro}
          </AnimatedText>
        </div>

        <AnimatedText delay={0.24} as="div">
          <Link to="/projects" className="text-link">
            {t.viewAllProjects}
          </Link>
        </AnimatedText>
      </div>

      {/* Desktop / tablet grid */}
      <StaggerReveal className="projectsEditorialGrid">
        {previewProjects.map((project, index) => (
          <StaggerItem key={project.title}>
            <article
              className={`projectEditorialCard projectEditorialCard--${index + 1}`}
            >
              <div className="projectEditorialMedia">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="projectEditorialOverlay" />

              <div className="projectEditorialContent">
                <div className="projectEditorialTop">
                  <span className="projectEditorialTag">{project.category}</span>
                  <small>{project.status}</small>
                </div>

                <h3>{project.title}</h3>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      {/* Mobile carousel */}
      <div className="projectsMobileCarousel">
        <div className="projectCarouselTrack">
          {previewProjects.map((project) => (
            <article key={project.title} className="projectCarouselSlide">
              <div className="projectEditorialCard">
                <div className="projectEditorialMedia">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="projectEditorialOverlay" />

                <div className="projectEditorialContent">
                  <div className="projectEditorialTop">
                    <span className="projectEditorialTag">{project.category}</span>
                    <small>{project.status}</small>
                  </div>

                  <h3>{project.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}