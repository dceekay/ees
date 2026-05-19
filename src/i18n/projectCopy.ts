import type { Lang } from './types';

export type ProjectCopy = {
  title: string;
  status: string;
  category: string;
  description: string;
  location: string;
  services: string[];
  brief: string;
  details: string[];
  placeholders: string[];
};

export type ProjectDetailLabels = {
  all: string;
  featuredWork: string;
  backToProjects: string;
  imageFolder: string;
  projectBrief: string;
  details: string;
  services: string;
  uploadMoreImagesTo: string;
  upcomingImages: string;
  photoPlaceholders: string;
  uploadImage: string;
  galleryLabel: string;
  viewProjectAria: string;
};

type ProjectCopyBundle = {
  labels: ProjectDetailLabels;
  items: Record<string, ProjectCopy>;
};

export const projectCopy: Record<Lang, ProjectCopyBundle> = {
  en: {
    labels: {
      all: 'All',
      featuredWork: 'Featured Work',
      backToProjects: 'Back to projects',
      imageFolder: 'Image folder',
      projectBrief: 'Project Brief',
      details: 'Details',
      services: 'Services',
      uploadMoreImagesTo: 'Upload more images to',
      upcomingImages: 'Upcoming Images',
      photoPlaceholders: 'Photo Placeholders',
      uploadImage: 'Upload image',
      galleryLabel: 'gallery',
      viewProjectAria: 'View project',
    },
    items: {
      'signature-residential-development': {
        title: 'Signature Residential Development',
        status: 'Completed 2025',
        category: 'Luxury Residential',
        description: 'A high-end residential development focused on architectural precision, natural light optimization, and premium material selection.',
        location: 'Private residential estate',
        services: ['Architecture', 'Construction', 'Interior coordination'],
        brief: 'The brief was to deliver a private home with a strong first impression, calm interior flow, and durable finishes that still feel refined. The design direction keeps the building elegant without overcomplicating the daily living experience.',
        details: [
          'Residential planning with a calm material palette and generous natural light.',
          'Coordinated exterior, interior, and finishing decisions for a cohesive family home.',
          'Built around long-term comfort, durability, and refined day-to-day living.',
        ],
        placeholders: ['Front elevation', 'Entrance detail', 'Living area', 'Kitchen view', 'Bedroom suite', 'Finishing close-up'],
      },
      'boutique-offices-retail-hub': {
        title: 'Boutique Offices & Retail Hub',
        status: 'Completed 2024',
        category: 'Commercial Development',
        description: 'A modern commercial hub combining retail efficiency with executive office environments designed for productivity and flow.',
        location: 'Urban commercial district',
        services: ['Commercial planning', 'Construction', 'Fit-out coordination'],
        brief: 'This project needed a clean commercial identity that could serve different tenants while keeping movement simple for visitors. The focus was on practical layouts, polished public zones, and spaces that can adapt as businesses grow.',
        details: [
          'A mixed commercial environment planned for visibility, circulation, and flexible tenancy.',
          'Durable finishes and clean detailing support a polished professional experience.',
          'The layout balances customer-facing retail zones with quieter office functions.',
        ],
        placeholders: ['Street frontage', 'Retail bay', 'Reception area', 'Office suite', 'Circulation space', 'Night view'],
      },
      'seafront-villas-collection': {
        title: 'Seafront Villas Collection',
        status: 'Completed 2026',
        category: 'Private Villas',
        description: 'Exclusive waterfront villas designed with seamless indoor-outdoor living and panoramic sea views.',
        location: 'Waterfront villa community',
        services: ['Villa design', 'Construction', 'Exterior works'],
        brief: 'The villas were planned around privacy, views, and relaxed entertaining. Every major space was considered as part of a larger indoor-outdoor experience, with simple forms and warm finishes keeping the architecture timeless.',
        details: [
          'Private villa planning shaped around views, privacy, and relaxed entertaining.',
          'Open living areas connect naturally to exterior terraces and landscape moments.',
          'Material choices emphasize clean lines, warm surfaces, and a lasting coastal feel.',
        ],
        placeholders: ['Villa exterior', 'Terrace view', 'Lounge area', 'Poolside angle', 'Primary bedroom', 'Landscape detail'],
      },
      'premium-interior-living-concept': {
        title: 'Premium Interior Living Concept',
        status: 'Interior Fit-Out',
        category: 'Interior Design',
        description: 'A refined interior transformation focused on comfort, minimalism, and luxury spatial flow.',
        location: 'Private interior residence',
        services: ['Interior design', 'Fit-out', 'Furniture selection'],
        brief: 'The client wanted a space that feels soft, premium, and easy to live in. The work centered on texture, lighting, furniture proportions, and a calm color direction that lets the room feel complete without feeling busy.',
        details: [
          'Interior fit-out centered on proportion, texture, and subtle luxury.',
          'Furniture, lighting, and finish selections were aligned to keep the room elegant and livable.',
          'The result is a simple, warm environment with strong visual continuity.',
        ],
        placeholders: ['Main lounge', 'Dining area', 'Lighting detail', 'Material palette', 'Feature wall', 'Furniture layout'],
      },
      'modern-living-room-makeover': {
        title: 'Modern Living Room Makeover',
        status: 'Completed 2025',
        category: 'Mixed-Use Development',
        description: 'A contemporary living space redesign blending warm tones, modern textures, and functional layout.',
        location: 'Residential living space',
        services: ['Space refresh', 'Interior styling', 'Finish upgrade'],
        brief: 'This makeover was designed to make the living room feel more intentional, comfortable, and visually balanced. The approach was simple: improve the layout, introduce richer textures, and keep the room flexible for everyday use.',
        details: [
          'A focused makeover for a more balanced, usable, and visually composed living room.',
          'Warm surfaces and modern accents create a comfortable residential atmosphere.',
          'The layout improves everyday flow while keeping the room refined and uncluttered.',
        ],
        placeholders: ['Before angle', 'After angle', 'Media wall', 'Seating area', 'Decor detail', 'Evening lighting'],
      },
      'executive-workspace-transformation': {
        title: 'Executive Workspace Transformation',
        status: 'Corporate Fit-Out',
        category: 'Office Interiors',
        description: 'A corporate workspace upgrade focusing on efficiency, branding identity, and modern professional aesthetics.',
        location: 'Corporate office suite',
        services: ['Office planning', 'Interior fit-out', 'Brand environment'],
        brief: 'The workspace needed to feel sharper, more organized, and more representative of the business. We focused on efficient work zones, a cleaner client experience, and finishes that create a confident professional atmosphere.',
        details: [
          'Workspace planning tuned for daily productivity and a more confident client-facing presence.',
          'Clean interior detailing supports focus while reinforcing the company identity.',
          'The fit-out brings together practical work zones, meeting areas, and executive polish.',
        ],
        placeholders: ['Reception desk', 'Meeting room', 'Executive office', 'Workstations', 'Brand wall', 'Detail shot'],
      },
    },
  },
  tr: {
    labels: {
      all: 'Tümü',
      featuredWork: 'Öne Çıkan Çalışma',
      backToProjects: 'Projelere dön',
      imageFolder: 'Görsel klasörü',
      projectBrief: 'Proje Özeti',
      details: 'Detaylar',
      services: 'Hizmetler',
      uploadMoreImagesTo: 'Daha fazla görseli buraya yükleyin',
      upcomingImages: 'Eklenecek Görseller',
      photoPlaceholders: 'Fotoğraf Alanları',
      uploadImage: 'Görsel yükle',
      galleryLabel: 'galeri',
      viewProjectAria: 'Projeyi görüntüle',
    },
    items: {
      'signature-residential-development': {
        title: 'İmza Konut Geliştirme Projesi',
        status: '2025 Tamamlandı',
        category: 'Lüks Konut',
        description: 'Mimari hassasiyet, doğal ışık optimizasyonu ve premium malzeme seçimine odaklanan üst segment bir konut projesi.',
        location: 'Özel konut yerleşimi',
        services: ['Mimari', 'İnşaat', 'İç mekan koordinasyonu'],
        brief: 'Amaç, güçlü bir ilk izlenim, sakin iç mekan akışı ve uzun süre rafine hissini koruyan dayanıklı bitişlerle özel bir ev teslim etmekti. Tasarım yönü, günlük yaşamı karmaşıklaştırmadan yapıyı zarif tutar.',
        details: [
          'Sakin malzeme paleti ve cömert doğal ışıkla konut planlaması.',
          'Bütünlüklü bir aile evi için dış cephe, iç mekan ve bitiş kararlarının koordinasyonu.',
          'Uzun vadeli konfor, dayanıklılık ve rafine günlük yaşam etrafında geliştirildi.',
        ],
        placeholders: ['Ön cephe', 'Giriş detayı', 'Yaşam alanı', 'Mutfak görünümü', 'Yatak odası süiti', 'Bitiş detayı'],
      },
      'boutique-offices-retail-hub': {
        title: 'Butik Ofisler ve Perakende Merkezi',
        status: '2024 Tamamlandı',
        category: 'Ticari Geliştirme',
        description: 'Perakende verimliliğini üretkenlik ve akış için tasarlanmış yönetici ofis ortamlarıyla birleştiren modern bir ticari merkez.',
        location: 'Kentsel ticari bölge',
        services: ['Ticari planlama', 'İnşaat', 'Fit-out koordinasyonu'],
        brief: 'Bu proje, farklı kiracılara hizmet edebilecek ve ziyaretçiler için hareketi sade tutacak temiz bir ticari kimlik gerektiriyordu. Odak, pratik planlar, rafine kamusal alanlar ve işletmeler büyüdükçe uyarlanabilen mekanlardı.',
        details: [
          'Görünürlük, dolaşım ve esnek kiralama için planlanmış karma ticari ortam.',
          'Dayanıklı bitişler ve temiz detaylar profesyonel bir deneyimi destekler.',
          'Plan, müşteri odaklı perakende alanlarını daha sakin ofis işlevleriyle dengeler.',
        ],
        placeholders: ['Cadde cephesi', 'Perakende bölümü', 'Resepsiyon alanı', 'Ofis süiti', 'Dolaşım alanı', 'Gece görünümü'],
      },
      'seafront-villas-collection': {
        title: 'Deniz Cepheli Villalar Koleksiyonu',
        status: '2026 Tamamlandı',
        category: 'Özel Villalar',
        description: 'Kesintisiz iç-dış yaşam ve panoramik deniz manzaraları için tasarlanmış özel sahil villaları.',
        location: 'Sahil villa topluluğu',
        services: ['Villa tasarımı', 'İnşaat', 'Dış alan işleri'],
        brief: 'Villalar mahremiyet, manzara ve rahat ağırlama etrafında planlandı. Her ana mekan daha geniş bir iç-dış deneyimin parçası olarak ele alındı; sade formlar ve sıcak bitişler mimariyi zamansız kıldı.',
        details: [
          'Manzara, mahremiyet ve rahat ağırlama için şekillenen özel villa planlaması.',
          'Açık yaşam alanları dış teraslara ve peyzaj anlarına doğal biçimde bağlanır.',
          'Malzeme tercihleri temiz çizgileri, sıcak yüzeyleri ve kalıcı sahil hissini vurgular.',
        ],
        placeholders: ['Villa dış cephesi', 'Teras görünümü', 'Salon alanı', 'Havuz kenarı açısı', 'Ana yatak odası', 'Peyzaj detayı'],
      },
      'premium-interior-living-concept': {
        title: 'Premium İç Mekan Yaşam Konsepti',
        status: 'İç Mekan Fit-Out',
        category: 'İç Mimari',
        description: 'Konfor, minimalizm ve lüks mekansal akışa odaklanan rafine bir iç mekan dönüşümü.',
        location: 'Özel konut iç mekanı',
        services: ['İç mimari', 'Fit-out', 'Mobilya seçimi'],
        brief: 'Müşteri, yumuşak, premium ve yaşaması kolay bir mekan istedi. Çalışma; doku, aydınlatma, mobilya oranları ve mekanı yoğun göstermeden tamamlanmış hissettiren sakin renk yönü etrafında şekillendi.',
        details: [
          'Oran, doku ve sade lüks merkezli iç mekan fit-out çalışması.',
          'Mobilya, aydınlatma ve bitiş seçimleri mekanı zarif ve yaşanabilir tutacak şekilde hizalandı.',
          'Sonuç, güçlü görsel devamlılığa sahip sade ve sıcak bir ortamdır.',
        ],
        placeholders: ['Ana salon', 'Yemek alanı', 'Aydınlatma detayı', 'Malzeme paleti', 'Öne çıkan duvar', 'Mobilya yerleşimi'],
      },
      'modern-living-room-makeover': {
        title: 'Modern Salon Yenilemesi',
        status: '2025 Tamamlandı',
        category: 'Karma Kullanım Geliştirme',
        description: 'Sıcak tonları, modern dokuları ve işlevsel yerleşimi birleştiren çağdaş bir yaşam alanı yeniden tasarımı.',
        location: 'Konut yaşam alanı',
        services: ['Mekan yenileme', 'İç mekan stilizasyonu', 'Bitiş yükseltmesi'],
        brief: 'Bu yenileme, salonu daha bilinçli, rahat ve görsel olarak dengeli hissettirmek için tasarlandı. Yaklaşım basitti: yerleşimi iyileştirmek, daha zengin dokular eklemek ve mekanı günlük kullanım için esnek tutmak.',
        details: [
          'Daha dengeli, kullanışlı ve görsel olarak düzenli bir salon için odaklı yenileme.',
          'Sıcak yüzeyler ve modern vurgular konforlu bir konut atmosferi oluşturur.',
          'Yerleşim, mekanı rafine ve sade tutarken günlük akışı iyileştirir.',
        ],
        placeholders: ['Önceki açı', 'Sonraki açı', 'TV duvarı', 'Oturma alanı', 'Dekor detayı', 'Akşam aydınlatması'],
      },
      'executive-workspace-transformation': {
        title: 'Yönetici Çalışma Alanı Dönüşümü',
        status: 'Kurumsal Fit-Out',
        category: 'Ofis İç Mekanları',
        description: 'Verimlilik, marka kimliği ve modern profesyonel estetiğe odaklanan kurumsal çalışma alanı yenilemesi.',
        location: 'Kurumsal ofis süiti',
        services: ['Ofis planlama', 'İç mekan fit-out', 'Marka ortamı'],
        brief: 'Çalışma alanının daha keskin, daha düzenli ve işletmeyi daha iyi temsil eden bir hale gelmesi gerekiyordu. Verimli çalışma bölgeleri, daha temiz müşteri deneyimi ve güven veren profesyonel bir atmosfer oluşturan bitişlere odaklandık.',
        details: [
          'Günlük üretkenlik ve daha güçlü müşteri karşılama etkisi için ayarlanmış çalışma alanı planlaması.',
          'Temiz iç mekan detayları odaklanmayı desteklerken şirket kimliğini güçlendirir.',
          'Fit-out, pratik çalışma alanlarını, toplantı bölgelerini ve yönetici zarafetini bir araya getirir.',
        ],
        placeholders: ['Resepsiyon masası', 'Toplantı odası', 'Yönetici ofisi', 'Çalışma masaları', 'Marka duvarı', 'Detay çekimi'],
      },
    },
  },
  ru: {
    labels: {
      all: 'Все',
      featuredWork: 'Избранные работы',
      backToProjects: 'Назад к проектам',
      imageFolder: 'Папка изображений',
      projectBrief: 'Краткое описание проекта',
      details: 'Детали',
      services: 'Услуги',
      uploadMoreImagesTo: 'Загрузите больше изображений сюда',
      upcomingImages: 'Будущие изображения',
      photoPlaceholders: 'Места для фото',
      uploadImage: 'Загрузить изображение',
      galleryLabel: 'галерея',
      viewProjectAria: 'Посмотреть проект',
    },
    items: {
      'signature-residential-development': {
        title: 'Фирменный жилой комплекс',
        status: 'Завершено в 2025',
        category: 'Премиальное жилье',
        description: 'Жилой проект высокого класса с акцентом на архитектурную точность, естественный свет и подбор премиальных материалов.',
        location: 'Частная жилая территория',
        services: ['Архитектура', 'Строительство', 'Координация интерьера'],
        brief: 'Задача заключалась в создании частного дома с сильным первым впечатлением, спокойной внутренней логикой и долговечными отделками, которые сохраняют ощущение премиальности. Дизайн удерживает здание элегантным, не усложняя повседневную жизнь.',
        details: [
          'Жилая планировка со спокойной палитрой материалов и обильным естественным светом.',
          'Согласование фасада, интерьера и отделки для цельного семейного дома.',
          'Проект создан вокруг долгосрочного комфорта, долговечности и продуманной повседневной жизни.',
        ],
        placeholders: ['Главный фасад', 'Деталь входа', 'Гостиная зона', 'Вид кухни', 'Спальня', 'Деталь отделки'],
      },
      'boutique-offices-retail-hub': {
        title: 'Бутик-офисы и торговый центр',
        status: 'Завершено в 2024',
        category: 'Коммерческая застройка',
        description: 'Современный коммерческий центр, объединяющий эффективность розницы и представительские офисные пространства.',
        location: 'Городской коммерческий район',
        services: ['Коммерческое планирование', 'Строительство', 'Координация fit-out'],
        brief: 'Проекту требовалась чистая коммерческая идентичность для разных арендаторов и понятная навигация для посетителей. В фокусе были практичные планировки, выразительные общественные зоны и гибкие пространства для роста бизнеса.',
        details: [
          'Смешанная коммерческая среда, спланированная для видимости, движения и гибкой аренды.',
          'Прочные отделки и чистые детали поддерживают профессиональное впечатление.',
          'Планировка балансирует клиентские торговые зоны и более спокойные офисные функции.',
        ],
        placeholders: ['Уличный фасад', 'Торговый блок', 'Зона ресепшн', 'Офисный блок', 'Зона движения', 'Ночной вид'],
      },
      'seafront-villas-collection': {
        title: 'Коллекция вилл у моря',
        status: 'Завершено в 2026',
        category: 'Частные виллы',
        description: 'Эксклюзивные виллы у воды, спроектированные для плавной связи интерьера и экстерьера с панорамными видами на море.',
        location: 'Прибрежное вилловое сообщество',
        services: ['Проектирование вилл', 'Строительство', 'Внешние работы'],
        brief: 'Виллы спланированы вокруг приватности, видов и расслабленного приема гостей. Каждое основное пространство рассматривалось как часть единого опыта внутри и снаружи, а простые формы и теплые отделки делают архитектуру вне времени.',
        details: [
          'Планирование частных вилл, сформированное видом, приватностью и отдыхом.',
          'Открытые жилые зоны естественно соединяются с террасами и ландшафтом.',
          'Материалы подчеркивают чистые линии, теплые поверхности и устойчивое прибрежное настроение.',
        ],
        placeholders: ['Экстерьер виллы', 'Вид террасы', 'Гостиная', 'Ракурс у бассейна', 'Главная спальня', 'Деталь ландшафта'],
      },
      'premium-interior-living-concept': {
        title: 'Премиальная интерьерная концепция',
        status: 'Интерьерный fit-out',
        category: 'Дизайн интерьера',
        description: 'Изысканное преобразование интерьера с акцентом на комфорт, минимализм и плавную пространственную логику.',
        location: 'Частный жилой интерьер',
        services: ['Дизайн интерьера', 'Fit-out', 'Подбор мебели'],
        brief: 'Клиент хотел пространство мягкое, премиальное и удобное для жизни. Работа строилась вокруг фактур, света, пропорций мебели и спокойной цветовой линии, которая делает комнату завершенной без перегруженности.',
        details: [
          'Интерьерный fit-out, основанный на пропорциях, фактуре и сдержанной роскоши.',
          'Мебель, освещение и отделки согласованы для элегантности и удобства.',
          'Результат - простая, теплая среда с сильной визуальной цельностью.',
        ],
        placeholders: ['Главная гостиная', 'Обеденная зона', 'Деталь освещения', 'Палитра материалов', 'Акцентная стена', 'План мебели'],
      },
      'modern-living-room-makeover': {
        title: 'Современное обновление гостиной',
        status: 'Завершено в 2025',
        category: 'Смешанная застройка',
        description: 'Современное переосмысление гостиной с теплыми тонами, актуальными фактурами и функциональной планировкой.',
        location: 'Жилая гостиная',
        services: ['Обновление пространства', 'Интерьерная стилизация', 'Улучшение отделки'],
        brief: 'Обновление должно было сделать гостиную более продуманной, комфортной и визуально сбалансированной. Подход был простым: улучшить планировку, добавить богатые фактуры и сохранить гибкость для ежедневного использования.',
        details: [
          'Точечное обновление для более сбалансированной и удобной гостиной.',
          'Теплые поверхности и современные акценты создают комфортную жилую атмосферу.',
          'Планировка улучшает ежедневный поток, сохраняя пространство спокойным и изысканным.',
        ],
        placeholders: ['До', 'После', 'ТВ-стена', 'Зона сидения', 'Деталь декора', 'Вечерний свет'],
      },
      'executive-workspace-transformation': {
        title: 'Преобразование представительского офиса',
        status: 'Корпоративный fit-out',
        category: 'Офисные интерьеры',
        description: 'Обновление корпоративного пространства с акцентом на эффективность, айдентику бренда и современную профессиональную эстетику.',
        location: 'Корпоративный офисный блок',
        services: ['Планирование офиса', 'Интерьерный fit-out', 'Брендовая среда'],
        brief: 'Рабочее пространство должно было стать более четким, организованным и представительным. Мы сосредоточились на эффективных рабочих зонах, более чистом клиентском опыте и отделках, создающих уверенную профессиональную атмосферу.',
        details: [
          'Планировка рабочего пространства для ежедневной продуктивности и уверенного клиентского впечатления.',
          'Чистые интерьерные детали поддерживают концентрацию и усиливают идентичность компании.',
          'Fit-out объединяет практичные рабочие зоны, переговорные и представительскую выразительность.',
        ],
        placeholders: ['Стойка ресепшн', 'Переговорная', 'Кабинет руководителя', 'Рабочие места', 'Брендовая стена', 'Детальный кадр'],
      },
    },
  },
  ar: {
    labels: {
      all: 'الكل',
      featuredWork: 'أعمال مميزة',
      backToProjects: 'العودة إلى المشاريع',
      imageFolder: 'مجلد الصور',
      projectBrief: 'ملخص المشروع',
      details: 'التفاصيل',
      services: 'الخدمات',
      uploadMoreImagesTo: 'حمّل المزيد من الصور إلى',
      upcomingImages: 'صور قادمة',
      photoPlaceholders: 'أماكن الصور',
      uploadImage: 'تحميل صورة',
      galleryLabel: 'معرض',
      viewProjectAria: 'عرض المشروع',
    },
    items: {
      'signature-residential-development': {
        title: 'تطوير سكني مميز',
        status: 'اكتمل 2025',
        category: 'سكن فاخر',
        description: 'مشروع سكني راق يركز على الدقة المعمارية وتحسين الإضاءة الطبيعية واختيار المواد الفاخرة.',
        location: 'مجمع سكني خاص',
        services: ['العمارة', 'البناء', 'تنسيق التصميم الداخلي'],
        brief: 'كان المطلوب تسليم منزل خاص يترك انطباعاً قوياً، مع تدفق داخلي هادئ وتشطيبات متينة لا تفقد إحساسها الراقي. يحافظ اتجاه التصميم على أناقة المبنى دون تعقيد تجربة المعيشة اليومية.',
        details: [
          'تخطيط سكني بلوحة مواد هادئة وضوء طبيعي وفير.',
          'تنسيق قرارات الواجهة والداخل والتشطيبات لمنزل عائلي متماسك.',
          'صُمم حول الراحة طويلة الأمد والمتانة والمعيشة اليومية الراقية.',
        ],
        placeholders: ['الواجهة الأمامية', 'تفصيل المدخل', 'منطقة المعيشة', 'منظر المطبخ', 'جناح النوم', 'تفصيل التشطيب'],
      },
      'boutique-offices-retail-hub': {
        title: 'مكاتب بوتيك ومركز تجاري',
        status: 'اكتمل 2024',
        category: 'تطوير تجاري',
        description: 'مركز تجاري حديث يجمع بين كفاءة التجزئة وبيئات المكاتب التنفيذية المصممة للإنتاجية وسهولة الحركة.',
        location: 'منطقة تجارية حضرية',
        services: ['تخطيط تجاري', 'بناء', 'تنسيق التشطيبات'],
        brief: 'احتاج المشروع إلى هوية تجارية نظيفة تخدم مستأجرين مختلفين وتحافظ على حركة بسيطة للزوار. كان التركيز على مخططات عملية ومناطق عامة مصقولة ومساحات قابلة للتكيّف مع نمو الأعمال.',
        details: [
          'بيئة تجارية متعددة الاستخدام مخططة للوضوح والحركة ومرونة التأجير.',
          'تشطيبات متينة وتفاصيل نظيفة تدعم تجربة مهنية راقية.',
          'يوازن المخطط بين مناطق التجزئة المواجهة للعملاء ووظائف المكاتب الهادئة.',
        ],
        placeholders: ['واجهة الشارع', 'منطقة التجزئة', 'منطقة الاستقبال', 'جناح مكتبي', 'مسار الحركة', 'منظر ليلي'],
      },
      'seafront-villas-collection': {
        title: 'مجموعة فلل على الواجهة البحرية',
        status: 'اكتمل 2026',
        category: 'فلل خاصة',
        description: 'فلل حصرية على الواجهة البحرية مصممة لربط سلس بين الداخل والخارج وإطلالات بانورامية على البحر.',
        location: 'مجتمع فلل على الساحل',
        services: ['تصميم الفلل', 'البناء', 'أعمال خارجية'],
        brief: 'تم تخطيط الفلل حول الخصوصية والإطلالات والاستضافة الهادئة. عولجت كل مساحة رئيسية كجزء من تجربة داخلية وخارجية أكبر، مع أشكال بسيطة وتشطيبات دافئة تحفظ الطابع الزمني للعمارة.',
        details: [
          'تخطيط فلل خاصة يتشكل حول الإطلالة والخصوصية والاستضافة المريحة.',
          'ترتبط مناطق المعيشة المفتوحة بشكل طبيعي بالتراسات والمناظر الخارجية.',
          'تؤكد اختيارات المواد على الخطوط النظيفة والأسطح الدافئة والإحساس الساحلي الدائم.',
        ],
        placeholders: ['خارج الفيلا', 'إطلالة التراس', 'منطقة الصالة', 'زاوية المسبح', 'غرفة النوم الرئيسية', 'تفصيل المناظر'],
      },
      'premium-interior-living-concept': {
        title: 'مفهوم معيشة داخلي فاخر',
        status: 'تشطيبات داخلية',
        category: 'تصميم داخلي',
        description: 'تحول داخلي راق يركز على الراحة والبساطة وتدفق المساحات الفاخر.',
        location: 'مسكن داخلي خاص',
        services: ['تصميم داخلي', 'تشطيبات', 'اختيار الأثاث'],
        brief: 'أراد العميل مساحة ناعمة وفاخرة وسهلة العيش. تمحور العمل حول الخامة والإضاءة ونسب الأثاث واتجاه لوني هادئ يجعل الغرفة مكتملة دون ازدحام.',
        details: [
          'تشطيبات داخلية تركز على النسب والملمس والفخامة الهادئة.',
          'تم تنسيق الأثاث والإضاءة والتشطيبات للحفاظ على أناقة المكان وقابليته للعيش.',
          'النتيجة بيئة بسيطة ودافئة ذات استمرارية بصرية قوية.',
        ],
        placeholders: ['الصالة الرئيسية', 'منطقة الطعام', 'تفصيل الإضاءة', 'لوحة المواد', 'جدار مميز', 'توزيع الأثاث'],
      },
      'modern-living-room-makeover': {
        title: 'تجديد غرفة معيشة عصرية',
        status: 'اكتمل 2025',
        category: 'تطوير متعدد الاستخدام',
        description: 'إعادة تصميم مساحة معيشة معاصرة تمزج الألوان الدافئة والخامات الحديثة والتخطيط العملي.',
        location: 'مساحة معيشة سكنية',
        services: ['تحديث المساحة', 'تنسيق داخلي', 'ترقية التشطيبات'],
        brief: 'صُمم هذا التجديد ليجعل غرفة المعيشة أكثر وضوحاً وراحة وتوازناً بصرياً. كان النهج بسيطاً: تحسين التخطيط، إدخال خامات أغنى، والحفاظ على مرونة الغرفة للاستخدام اليومي.',
        details: [
          'تجديد مركز لغرفة معيشة أكثر توازناً واستخداماً وتنظيماً بصرياً.',
          'الأسطح الدافئة واللمسات الحديثة تخلق أجواء سكنية مريحة.',
          'يحسن التخطيط الحركة اليومية مع إبقاء الغرفة راقية وغير مزدحمة.',
        ],
        placeholders: ['زاوية قبل', 'زاوية بعد', 'جدار التلفاز', 'منطقة الجلوس', 'تفصيل الديكور', 'إضاءة مسائية'],
      },
      'executive-workspace-transformation': {
        title: 'تحول مساحة عمل تنفيذية',
        status: 'تشطيبات مؤسسية',
        category: 'تصميم مكاتب',
        description: 'ترقية مساحة عمل مؤسسية تركز على الكفاءة وهوية العلامة والجماليات المهنية الحديثة.',
        location: 'جناح مكتبي مؤسسي',
        services: ['تخطيط المكاتب', 'تشطيبات داخلية', 'بيئة العلامة'],
        brief: 'احتاجت مساحة العمل إلى أن تبدو أكثر حدة وتنظيماً وتمثيلاً للأعمال. ركزنا على مناطق عمل فعالة وتجربة أنظف للعملاء وتشطيبات تخلق أجواء مهنية واثقة.',
        details: [
          'تخطيط مساحة العمل للإنتاجية اليومية وحضور أقوى أمام العملاء.',
          'تفاصيل داخلية نظيفة تدعم التركيز وتعزز هوية الشركة.',
          'يجمع التنفيذ بين مناطق عمل عملية وغرف اجتماعات ولمسة تنفيذية راقية.',
        ],
        placeholders: ['مكتب الاستقبال', 'غرفة الاجتماعات', 'مكتب تنفيذي', 'محطات العمل', 'جدار العلامة', 'لقطة تفصيلية'],
      },
    },
  },
  fa: {
    labels: {
      all: 'همه',
      featuredWork: 'کارهای برجسته',
      backToProjects: 'بازگشت به پروژه ها',
      imageFolder: 'پوشه تصاویر',
      projectBrief: 'خلاصه پروژه',
      details: 'جزئیات',
      services: 'خدمات',
      uploadMoreImagesTo: 'تصاویر بیشتر را اینجا بارگذاری کنید',
      upcomingImages: 'تصاویر آینده',
      photoPlaceholders: 'جایگاه های عکس',
      uploadImage: 'بارگذاری تصویر',
      galleryLabel: 'گالری',
      viewProjectAria: 'مشاهده پروژه',
    },
    items: {
      'signature-residential-development': {
        title: 'توسعه مسکونی شاخص',
        status: 'تکمیل شده 2025',
        category: 'مسکونی لوکس',
        description: 'یک پروژه مسکونی سطح بالا با تمرکز بر دقت معماری، بهینه سازی نور طبیعی و انتخاب مصالح ممتاز.',
        location: 'محوطه مسکونی خصوصی',
        services: ['معماری', 'ساخت', 'هماهنگی داخلی'],
        brief: 'هدف، تحویل خانه ای خصوصی با تاثیر اولیه قوی، جریان داخلی آرام و پرداخت های بادوام بود که همچنان حس ظرافت داشته باشند. مسیر طراحی، ساختمان را بدون پیچیده کردن زندگی روزمره زیبا نگه می دارد.',
        details: [
          'برنامه ریزی مسکونی با پالت مصالح آرام و نور طبیعی فراوان.',
          'هماهنگی نما، داخل و پرداخت ها برای یک خانه خانوادگی یکپارچه.',
          'بر پایه آسایش بلندمدت، دوام و زندگی روزمره پالوده ساخته شد.',
        ],
        placeholders: ['نمای جلو', 'جزئیات ورودی', 'فضای نشیمن', 'نمای آشپزخانه', 'سوئیت خواب', 'جزئیات پرداخت'],
      },
      'boutique-offices-retail-hub': {
        title: 'دفاتر بوتیک و مرکز خرده فروشی',
        status: 'تکمیل شده 2024',
        category: 'توسعه تجاری',
        description: 'یک مرکز تجاری مدرن که کارایی خرده فروشی را با محیط های اداری اجرایی طراحی شده برای بهره وری و جریان ترکیب می کند.',
        location: 'منطقه تجاری شهری',
        services: ['برنامه ریزی تجاری', 'ساخت', 'هماهنگی فیت اوت'],
        brief: 'این پروژه به هویت تجاری پاکی نیاز داشت که بتواند به مستاجران مختلف خدمت کند و حرکت بازدیدکنندگان را ساده نگه دارد. تمرکز روی چیدمان های کاربردی، فضاهای عمومی صیقلی و فضاهای قابل انطباق با رشد کسب وکار بود.',
        details: [
          'محیط تجاری ترکیبی برنامه ریزی شده برای دیده شدن، گردش و انعطاف اجاره.',
          'پرداخت های بادوام و جزئیات تمیز تجربه ای حرفه ای ایجاد می کنند.',
          'چیدمان، مناطق خرده فروشی رو به مشتری را با عملکردهای آرام تر اداری متعادل می کند.',
        ],
        placeholders: ['نمای خیابان', 'بخش فروشگاهی', 'فضای پذیرش', 'سوئیت اداری', 'فضای گردش', 'نمای شب'],
      },
      'seafront-villas-collection': {
        title: 'مجموعه ویلاهای ساحلی',
        status: 'تکمیل شده 2026',
        category: 'ویلاهای خصوصی',
        description: 'ویلاهای اختصاصی کنار آب با زندگی پیوسته داخل و خارج و چشم اندازهای پانورامای دریا.',
        location: 'جامعه ویلایی کنار آب',
        services: ['طراحی ویلا', 'ساخت', 'کارهای بیرونی'],
        brief: 'ویلاها بر پایه حریم خصوصی، چشم انداز و پذیرایی آرام برنامه ریزی شدند. هر فضای اصلی بخشی از تجربه بزرگ تر داخل و خارج دیده شد، با فرم های ساده و پرداخت های گرم که معماری را ماندگار می کنند.',
        details: [
          'برنامه ریزی ویلای خصوصی بر اساس چشم انداز، حریم خصوصی و پذیرایی آرام.',
          'فضاهای نشیمن باز به تراس ها و لحظه های منظر به شکل طبیعی متصل می شوند.',
          'انتخاب مصالح بر خطوط تمیز، سطوح گرم و حس ماندگار ساحلی تاکید دارد.',
        ],
        placeholders: ['نمای بیرونی ویلا', 'نمای تراس', 'فضای نشیمن', 'زاویه استخر', 'اتاق خواب اصلی', 'جزئیات منظر'],
      },
      'premium-interior-living-concept': {
        title: 'مفهوم زندگی داخلی ممتاز',
        status: 'فیت اوت داخلی',
        category: 'طراحی داخلی',
        description: 'یک تحول داخلی پالوده با تمرکز بر آسایش، مینیمالیسم و جریان فضایی لوکس.',
        location: 'فضای داخلی مسکونی خصوصی',
        services: ['طراحی داخلی', 'فیت اوت', 'انتخاب مبلمان'],
        brief: 'کارفرما فضایی نرم، ممتاز و آسان برای زندگی می خواست. کار بر محور بافت، نورپردازی، تناسب مبلمان و رنگی آرام شکل گرفت که اتاق را کامل نشان دهد بدون آنکه شلوغ شود.',
        details: [
          'فیت اوت داخلی بر پایه تناسب، بافت و لوکس بودن ظریف.',
          'مبلمان، نور و پرداخت ها برای حفظ ظرافت و قابلیت زندگی هماهنگ شدند.',
          'نتیجه محیطی ساده و گرم با پیوستگی بصری قوی است.',
        ],
        placeholders: ['نشیمن اصلی', 'فضای غذاخوری', 'جزئیات نورپردازی', 'پالت مصالح', 'دیوار شاخص', 'چیدمان مبلمان'],
      },
      'modern-living-room-makeover': {
        title: 'بازسازی نشیمن مدرن',
        status: 'تکمیل شده 2025',
        category: 'توسعه چندمنظوره',
        description: 'بازطراحی یک فضای نشیمن معاصر با ترکیب رنگ های گرم، بافت های مدرن و چیدمان کاربردی.',
        location: 'فضای نشیمن مسکونی',
        services: ['نوسازی فضا', 'استایلینگ داخلی', 'ارتقای پرداخت'],
        brief: 'این بازسازی برای آن طراحی شد که نشیمن هدفمندتر، راحت تر و از نظر بصری متعادل تر احساس شود. رویکرد ساده بود: بهبود چیدمان، افزودن بافت های غنی تر و حفظ انعطاف اتاق برای استفاده روزمره.',
        details: [
          'نوسازی متمرکز برای نشیمنی متعادل تر، کاربردی تر و منظم تر.',
          'سطوح گرم و تاکیدهای مدرن فضای مسکونی راحتی ایجاد می کنند.',
          'چیدمان جریان روزانه را بهتر می کند و فضا را پالوده و خلوت نگه می دارد.',
        ],
        placeholders: ['زاویه قبل', 'زاویه بعد', 'دیوار رسانه', 'فضای نشستن', 'جزئیات دکور', 'نورپردازی عصر'],
      },
      'executive-workspace-transformation': {
        title: 'تحول فضای کار اجرایی',
        status: 'فیت اوت شرکتی',
        category: 'داخلی اداری',
        description: 'ارتقای فضای کار شرکتی با تمرکز بر کارایی، هویت برند و زیبایی شناسی حرفه ای مدرن.',
        location: 'سوئیت اداری شرکتی',
        services: ['برنامه ریزی دفتر', 'فیت اوت داخلی', 'محیط برند'],
        brief: 'فضای کار باید دقیق تر، منظم تر و نماینده تر برای کسب وکار می شد. ما روی مناطق کاری کارآمد، تجربه تمیزتر برای مشتری و پرداخت هایی که فضای حرفه ای مطمئن می سازند تمرکز کردیم.',
        details: [
          'برنامه ریزی فضای کار برای بهره وری روزانه و حضور مطمئن تر در برابر مشتری.',
          'جزئیات داخلی تمیز تمرکز را پشتیبانی و هویت شرکت را تقویت می کند.',
          'فیت اوت، مناطق کاری عملی، فضاهای جلسه و ظرافت اجرایی را کنار هم می آورد.',
        ],
        placeholders: ['میز پذیرش', 'اتاق جلسه', 'دفتر اجرایی', 'ایستگاه های کار', 'دیوار برند', 'نمای جزئیات'],
      },
    },
  },
};

export function getProjectCopy(lang: Lang, slug: string | undefined) {
  if (!slug) return undefined;
  return projectCopy[lang].items[slug] ?? projectCopy.en.items[slug];
}
