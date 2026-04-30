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

export type ValueItem = {
  title: string;
  text: string;
};

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export type ContactMethodLabel = {
  email: string;
  phone: string;
  location: string;
};

export type FormLabels = {
  name: string;
  email: string;
  phone: string;
  message: string;
  send: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  body: string;
  image: string;
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
  aboutValuesPrecision: ValueItem;
  aboutValuesTrust: ValueItem;
  aboutValuesQuality: ValueItem;
  aboutValuesInnovation: ValueItem;
  aboutStatProjectsDelivered: string;
  aboutStatYearsExperience: string;
  aboutStatClients: string;
  aboutStatQualityFocus: string;
  aboutCtaTitle: string;
  aboutCtaText: string;

  // SERVICES
  // SERVICES LIST (NEW)
servicesList: ServiceItem[];
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
  projectsHeroSubtitle: string;
  projectsFeaturedLabel: string;
  projectsViewCaseStudy: string;
  projectsOpenProject: string;
  projectsModalDescription: string;

  // CONTACT
  contactTitle: string;
  contactBody: string;
  contactPageTitle: string;
  contactPageIntro: string;
  contactHeroTitle: string;
  contactGetInTouch: string;
  contactFollowUs: string;
  contactSendMessage: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormPhone: string;
  contactFormMessage: string;
  contactFormSubmit: string;
  contactMethodEmail: string;
  contactMethodPhone: string;
  contactMethodLocation: string;
  contactEmailAddress: string;
  contactPhoneNumber: string;
  contactLocationAddress: string;
  contactSocialLinkedin: string;
  contactSocialInstagram: string;
  contactSocialTwitter: string;

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
  ctaSectionKicker: string;

  // FOOTER
  footer: string;
};