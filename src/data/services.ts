// src/data/services.ts

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  body: string;
  image: string; // Custom image path for each service
};

export const services: Service[] = [
  {
    slug: 'construction-development',
    title: 'Construction & Development',
    shortDescription:
      'End-to-end construction solutions built for durability and performance.',
    description:
      'We deliver complete construction solutions from planning to execution with precision and quality.',
    image: '/images/ext.png', // Custom image
    body: `
We deliver end-to-end construction solutions that transform concepts into
lasting architectural realities. From early-stage planning and structural
engineering to final execution, every phase is handled with precision,
discipline, and a commitment to excellence.

Our approach ensures not only structural integrity, but also long-term
performance, sustainability, and value. We work closely with clients,
consultants, and partners to ensure every project is delivered on time,
on budget, and beyond expectations.

Every structure we build reflects a balance between technical expertise,
material quality, and refined craftsmanship.
    `.trim(),
  },

  {
    slug: 'architecture-design',
    title: 'Architecture & Design',
    shortDescription:
      'Modern architectural solutions blending creativity and function.',
    description:
      'We design intelligent, functional, and visually compelling spaces.',
    image: '/images/ground.jpeg', // Custom image
    body: `
Our architectural process is driven by clarity, creativity, and purpose.
We design spaces that are not only visually compelling, but also
functionally intelligent and contextually relevant.

From residential concepts to large-scale developments, we integrate
modern design principles with timeless aesthetics. Each project is
approached with a focus on spatial harmony, natural light, and
long-term usability.

We believe great architecture is not just seen — it is experienced.
    `.trim(),
  },

  {
    slug: 'interior-design',
    title: 'Interior Design',
    shortDescription:
      'Elegant interiors tailored for comfort, identity, and lifestyle.',
    description:
      'We create refined interior spaces that balance beauty and functionality.',
    image: '/images/project27.jpeg', // Custom image
    body: `
We create interiors that reflect identity, comfort, and sophistication.
Every element is carefully curated — from materials and textures to
lighting and spatial flow — to deliver a cohesive and elevated experience.

Our interiors are designed to enhance everyday living while maintaining
a strong sense of style and refinement. Whether residential or commercial,
we ensure each space feels intentional, balanced, and complete.

Attention to detail defines every environment we shape.
    `.trim(),
  },

  {
    slug: 'project-management',
    title: 'Project Management',
    shortDescription:
      'Structured execution ensuring timely and high-quality delivery.',
    description:
      'We manage projects with precision, transparency, and efficiency.',
    image: '/images/interior.png', // Custom image
    body: `
Our project management ensures that every stage of development is executed
with clarity, efficiency, and control. We coordinate all stakeholders,
monitor progress, and maintain strict quality standards throughout.

By combining technical expertise with structured workflows, we minimize
risk, optimize timelines, and ensure seamless delivery.

Transparency, accountability, and precision guide every decision we make.
    `.trim(),
  },
];