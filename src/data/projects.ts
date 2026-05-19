import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    image: '/images/project1.jpeg',
    slug: 'signature-residential-development',
    categoryKey: 'luxury-residential',
    imageFolder: '/images/projects/signature-residential-development',
    gallery: ['/images/project1.jpeg', '/images/project10.jpeg', '/images/project11.jpeg', '/images/project12.jpeg'],
  },
  {
    image: '/images/project2.jpeg',
    slug: 'boutique-offices-retail-hub',
    categoryKey: 'commercial-development',
    imageFolder: '/images/projects/boutique-offices-retail-hub',
    gallery: ['/images/project2.jpeg', '/images/office.jpeg', '/images/site.png', '/images/site2.png'],
  },
  {
    image: '/images/project3.jpeg',
    slug: 'seafront-villas-collection',
    categoryKey: 'private-villas',
    imageFolder: '/images/projects/seafront-villas-collection',
    gallery: ['/images/project3.jpeg', '/images/project30.jpeg', '/images/project31.jpeg', '/images/project32.jpeg'],
  },
  {
    image: '/images/project4.jpeg',
    slug: 'premium-interior-living-concept',
    categoryKey: 'interior-design',
    imageFolder: '/images/projects/premium-interior-living-concept',
    gallery: ['/images/project4.jpeg', '/images/interior.png', '/images/palor1.jpeg', '/images/dining1.jpeg'],
  },
  {
    image: '/images/project25.jpeg',
    slug: 'modern-living-room-makeover',
    categoryKey: 'mixed-use-development',
    imageFolder: '/images/projects/modern-living-room-makeover',
    gallery: ['/images/project25.jpeg', '/images/project26.jpeg', '/images/project27.jpeg', '/images/project28.jpeg'],
  },
  {
    image: '/images/project6.jpeg',
    slug: 'executive-workspace-transformation',
    categoryKey: 'office-interiors',
    imageFolder: '/images/projects/executive-workspace-transformation',
    gallery: ['/images/project6.jpeg', '/images/kont.jpeg', '/images/build1.jpeg', '/images/ground.jpeg'],
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
