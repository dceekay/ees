export type Lang = 'en' | 'tr' | 'ru' | 'ar' | 'fa';

type Copy = {
  navAbout: string;
  navProjects: string;
  navCraft: string;
  navContact: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  aboutTitle: string;
  aboutBody: string;
  projectsTitle: string;
  projectsIntro: string;
  craftTitle: string;
  craftItems: string[];
  contactTitle: string;
  contactBody: string;
  footer: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    navCraft: 'Workmanship',
    navContact: 'Contact',
    heroKicker: 'EES Construction · Cyprus',
    heroTitle: 'Designing The Best Future, Layer by Layer.',
    heroSubtitle:
      'A modern construction and real-estate brand experience with architectural precision, premium delivery, and timeless quality.',
    ctaPrimary: 'Explore Projects',
    ctaSecondary: 'Book a Meeting',
    aboutTitle: 'Built for trust, crafted for generations.',
    aboutBody:
      'From shell-and-core to luxury finishes, EES Construction transforms ideas into resilient spaces. We blend local insight, global standards, and rigorous project management.',
    projectsTitle: 'Finished Products & Signature Works',
    projectsIntro:
      'Add your best residential, commercial, and mixed-use photos here. Each card is ready for final project imagery and metrics.',
    craftTitle: 'Workmanship Standards',
    craftItems: ['Structural excellence', 'Material integrity', 'Smart execution', 'On-time delivery'],
    contactTitle: 'Start your next landmark with EES',
    contactBody: 'Nicosia, Cyprus · +90 xxx xxx xx xx · info@eesconstruction.com',
    footer: 'EES Construction — The Best Future',
  },
  tr: {
    navAbout: 'Hakkımızda',
    navProjects: 'Projeler',
    navCraft: 'İşçilik',
    navContact: 'İletişim',
    heroKicker: 'EES Construction · Kıbrıs',
    heroTitle: 'En İyi Geleceği Katman Katman İnşa Ediyoruz.',
    heroSubtitle:
      'Mimari hassasiyet, premium teslimat ve kalıcı kaliteyle modern bir inşaat ve gayrimenkul deneyimi.',
    ctaPrimary: 'Projeleri İncele',
    ctaSecondary: 'Toplantı Planla',
    aboutTitle: 'Güven için inşa, nesiller için tasarım.',
    aboutBody:
      'Kaba inşaattan lüks ince işçiliğe kadar EES Construction fikirleri dayanıklı yaşam alanlarına dönüştürür.',
    projectsTitle: 'Tamamlanan İşler & Özel Projeler',
    projectsIntro:
      'En iyi konut, ticari ve karma kullanım proje fotoğraflarınızı buraya ekleyin.',
    craftTitle: 'İşçilik Standartları',
    craftItems: ['Taşıyıcı mükemmellik', 'Malzeme kalitesi', 'Akıllı uygulama', 'Zamanında teslim'],
    contactTitle: 'EES ile yeni bir simge yapı başlatın',
    contactBody: 'Lefkoşa, Kıbrıs · +90 xxx xxx xx xx · info@eesconstruction.com',
    footer: 'EES Construction — The Best Future',
  },
  ru: {
    navAbout: 'О нас',
    navProjects: 'Проекты',
    navCraft: 'Качество',
    navContact: 'Контакты',
    heroKicker: 'EES Construction · Кипр',
    heroTitle: 'Создаём лучшее будущее, уровень за уровнем.',
    heroSubtitle:
      'Современный опыт в строительстве и недвижимости: точность, премиальное исполнение и долговечность.',
    ctaPrimary: 'Смотреть проекты',
    ctaSecondary: 'Назначить встречу',
    aboutTitle: 'Построено на доверии, рассчитано на поколения.',
    aboutBody:
      'От каркаса до премиальной отделки EES Construction превращает идеи в надёжные пространства.',
    projectsTitle: 'Готовые объекты и знаковые проекты',
    projectsIntro: 'Добавьте лучшие фотографии жилых и коммерческих объектов.',
    craftTitle: 'Стандарты мастерства',
    craftItems: ['Конструктивная точность', 'Качество материалов', 'Умная реализация', 'Сдача в срок'],
    contactTitle: 'Начните следующий знаковый проект с EES',
    contactBody: 'Никосия, Кипр · +90 xxx xxx xx xx · info@eesconstruction.com',
    footer: 'EES Construction — The Best Future',
  },
  ar: {
    navAbout: 'من نحن',
    navProjects: 'المشاريع',
    navCraft: 'جودة التنفيذ',
    navContact: 'اتصل بنا',
    heroKicker: 'EES Construction · قبرص',
    heroTitle: 'نبني أفضل مستقبل، طبقة بعد طبقة.',
    heroSubtitle: 'تجربة بناء وعقارات عصرية بدقة معمارية وجودة دائمة.',
    ctaPrimary: 'استكشف المشاريع',
    ctaSecondary: 'احجز اجتماعاً',
    aboutTitle: 'بناء للثقة، وتصميم للأجيال.',
    aboutBody: 'من الهيكل إلى التشطيبات الفاخرة، نحول الأفكار إلى مساحات متينة.',
    projectsTitle: 'مشاريع منجزة وأعمال مميزة',
    projectsIntro: 'أضف أفضل صور المشاريع السكنية والتجارية هنا.',
    craftTitle: 'معايير الحرفية',
    craftItems: ['تميز إنشائي', 'جودة المواد', 'تنفيذ ذكي', 'تسليم في الوقت'],
    contactTitle: 'ابدأ مشروعك القادم مع EES',
    contactBody: 'نيقوسيا، قبرص · +90 xxx xxx xx xx · info@eesconstruction.com',
    footer: 'EES Construction — The Best Future',
  },
  fa: {
    navAbout: 'درباره ما',
    navProjects: 'پروژه‌ها',
    navCraft: 'کیفیت اجرا',
    navContact: 'تماس',
    heroKicker: 'EES Construction · قبرس',
    heroTitle: 'آینده‌ای بهتر را لایه‌به‌لایه می‌سازیم.',
    heroSubtitle: 'تجربه‌ای مدرن در ساخت‌وساز و املاک با کیفیتی ماندگار.',
    ctaPrimary: 'مشاهده پروژه‌ها',
    ctaSecondary: 'رزرو جلسه',
    aboutTitle: 'ساخته‌شده برای اعتماد، طراحی‌شده برای نسل‌ها.',
    aboutBody: 'از اسکلت تا نازک‌کاری لوکس، ایده‌ها را به فضاهای مقاوم تبدیل می‌کنیم.',
    projectsTitle: 'نمونه‌های تکمیل‌شده و پروژه‌های شاخص',
    projectsIntro: 'بهترین عکس‌های پروژه‌های مسکونی و تجاری را اینجا قرار دهید.',
    craftTitle: 'استانداردهای اجرا',
    craftItems: ['دقت سازه‌ای', 'کیفیت مصالح', 'اجرای هوشمند', 'تحویل به‌موقع'],
    contactTitle: 'پروژه شاخص بعدی خود را با EES شروع کنید',
    contactBody: 'نیکوزیا، قبرس · +90 xxx xxx xx xx · info@eesconstruction.com',
    footer: 'EES Construction — The Best Future',
  },
};

export const languageMeta: Record<Lang, { label: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'EN', dir: 'ltr' },
  tr: { label: 'TR', dir: 'ltr' },
  ru: { label: 'RU', dir: 'ltr' },
  ar: { label: 'AR', dir: 'rtl' },
  fa: { label: 'FA', dir: 'rtl' },
};
