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
  const previewProjects = projects.slice(0, 4);

  return (
    <ScrollReveal className="panel projectsPreviewPanel">
      <div className="projectsPreviewHeader">
        <div>
          <AnimatedText className="kicker" as="p">
            Featured Projects
          </AnimatedText>

          <AnimatedText as="h2" delay={0.06}>
            {t.projectsTitle}
          </AnimatedText>

          <AnimatedText className="subtitle" as="p" delay={0.12}>
            {t.projectsIntro}
          </AnimatedText>
        </div>

        <AnimatedText delay={0.2} as="div">
          <Link to="/projects" className="text-link">
            {t.viewAllProjects}
          </Link>
        </AnimatedText>
      </div>

      <StaggerReveal className="projectsShowcaseGrid">
        {previewProjects.map((project, index) => (
          <StaggerItem key={project.title}>
            <article
              className={`projectShowcaseCard projectShowcaseCard--${index + 1}`}
            >
              <div className="projectShowcaseMedia">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="projectShowcaseOverlay">
                <div className="projectShowcaseMeta">
                  <span>{project.category}</span>
                  <small>{project.status}</small>
                </div>

                <h3>{project.title}</h3>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </ScrollReveal>
  );
}