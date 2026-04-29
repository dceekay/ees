export type Lang = 'en' | 'tr' | 'ru' | 'ar' | 'fa';

export type Slide = {
  eyebrow: string;
  title: string;
  tag: string;
};

export type Narrative = {
  label: string;
  value: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type WhyChooseItem = {
  title: string;
  body: string;
};

export type Messages = {
  // NAV
  navHome: string;
  navAbout: string;
  navServices: string;
  navProjects: string;
  navContact: string;
  navCraft: string;

  // GLOBAL
  readMore: string;
  viewAllProjects: string;
  viewAllServices: string;

  // HERO
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;

  heroSlideOne: Slide;
  heroSlideTwo: Slide;
  heroSlideThree: Slide;
  heroSlideFour: Slide;
  heroSlideFive: Slide;
  heroSlideSix: Slide;

  heroNarrativeOne: Narrative;
  heroNarrativeTwo: Narrative;
  heroNarrativeThree: Narrative;

  // CTA
  ctaPrimary: string;
  ctaSecondary: string;

  // STATS
  statsProjects: string;
  statsExperience: string;
  statsClients: string;
  statsQuality: string;
  statsDescription: string;

  // ABOUT
  aboutTitle: string;
  aboutBody: string;

  aboutPageTitle: string;
  aboutPageIntro: string;
  aboutPageStoryTitle: string;
  aboutPageBodyOne: string;
  aboutPageBodyTwo: string;
  aboutPageBodyThree: string;
  aboutValuesTitle: string;
  aboutCtaTitle: string;
  aboutCtaText: string;

  // SERVICES
  servicesTitle: string;
  servicesIntro: string;
  servicesWhat: string;
  servicesExploreAll: string;
  servicesStatsEyebrow: string;
  servicesStatsTitle: string;
  servicesStatsText: string;
  servicesLearnMore: string;

  servicesPageTitle: string;
  servicesPageIntro: string;

  // PROJECTS
  projectsTitle: string;
  projectsIntro: string;
  projectsPageTitle: string;
  projectsPageIntro: string;

  // CONTACT
  contactTitle: string;
  contactBody: string;
  contactPageTitle: string;
  contactPageIntro: string;

  // WHY CHOOSE
  whyChooseTitle: string;
  whyChooseLabel: string;
  whyChooseIntro: string;

  whyChooseOne: WhyChooseItem;
  whyChooseTwo: WhyChooseItem;
  whyChooseThree: WhyChooseItem;
  whyChooseFour: WhyChooseItem;

  // PROCESS
  processLabel: string;
  processTitle: string;
  processIntro: string;

  processOne: ProcessStep;
  processTwo: ProcessStep;
  processThree: ProcessStep;
  processFour: ProcessStep;

  // TESTIMONIALS
  testimonialsTitle: string;
  testimonialsIntro: string;

  // FAQ
  faqTitle: string;
  faqIntro: string;

  // CRAFT
  craftTitle: string;
  craftIntro: string;
  craftItems: string[];

  // CTA SECTION
  ctaTitle: string;
  ctaText: string;

  // FOOTER
  footer: string;
};