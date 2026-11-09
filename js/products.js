/**
 * VÉLOR & WATCHSHOP — Master Product Catalog
 * Strictly Watch-Only Products
 * Pricing in Egyptian Pounds (EGP / ج.م) strictly between 250 EGP and 5,000 EGP
 */

const VELOR_PRODUCTS = [
  // 1. HERO SPOTLIGHT: ROLEX DATEJUST 41
  {
    id: "ROLEX-DJ41-GRN",
    name: "Rolex Datejust 41 Green Dial",
    nameAr: "رولكس ديت جست 41 مينا أخضر",
    brand: "Rolex",
    collection: "Oyster Perpetual",
    collectionAr: "أويستر بربتشوال",
    category: "men",
    categoryAr: "ساعات رجالية فاخرة",
    movementType: "Automatic",
    movementTypeAr: "أوتوماتيك - رجالي",
    material: "Oystersteel & Fluted Bezel",
    materialAr: "فولاذ صلب وإطار مسنن",
    dialColor: "Mint Green",
    dialColorAr: "أخضر زيتوني زمردي",
    price: 4850,
    originalPrice: 5400,
    discountPercent: 10,
    rating: 5.0,
    reviewsCount: 184,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    isSpecialOffer: false,
    badge: "Premium Edition",
    badgeAr: "إصدار بريميوم",
    image: "assets/images/rolex-datejust-green.svg",
    imageFallback: "assets/images/rolex-datejust-green.svg",
    gallery: [
      "assets/images/rolex-datejust-green.svg"
    ],
    tagline: "Iconic fluted bezel and sunburst olive green dial with stainless steel Jubilee bracelet.",
    taglineAr: "إطار مسنن أيقوني ومينا أخضر زيتوني مشع مع سوار جوبيلي الفولاذي.",
    description: "The Datejust 41 features a mint green sunburst dial, signature fluted bezel, stainless steel bracelet, and date magnification Cyclops lens at 3 o'clock.",
    descriptionAr: "ساعة ديت جست 41 بتشطيبات ممتازة ومينا أخضر زيتوني وإطار مسنن، مع سوار فولاذي صلب وعدسة مكبرة للتاريخ.",
    specs: {
      calibre: "High-Beat Automatic Movement",
      calibreAr: "حركة أوتوماتيكية عالية الدقة",
      powerReserve: "48 Hours",
      powerReserveAr: "48 ساعة",
      frequency: "28,800 vph",
      frequencyAr: "28,800 ذبذبة",
      jewels: "25 Jewels",
      jewelsAr: "25 حجراً",
      caseDiameter: "41 mm",
      caseDiameterAr: "41 ملم",
      caseThickness: "11.7 mm",
      caseThicknessAr: "11.7 ملم",
      waterResistance: "50M / 5 ATM",
      waterResistanceAr: "50 متر",
      glass: "Sapphire Crystal with Cyclops Lens",
      glassAr: "كريستال ياقوتي مقاوم للخدش",
      strap: "Stainless Steel Jubilee 5-Link",
      strapAr: "سوار جوبيلي ستيل 5 حلقات",
      warranty: "2-Year Store Warranty",
      warrantyAr: "ضمان لمدة عامين"
    },
    strapOptions: [
      { id: "strap-jubilee", name: "Jubilee Steel Bracelet", nameAr: "سوار جوبيلي ستيل" },
      { id: "strap-oyster", name: "Oyster Steel Bracelet", nameAr: "سوار أويستر ستيل" }
    ]
  },

  // 2. SEIKO PROSPEX DIVER (2,850 EGP)
  {
    id: "SEIKO-PROSPEX-01",
    name: "Seiko Prospex Diver",
    nameAr: "سيكو بروسبكس دايفر",
    brand: "Seiko",
    collection: "Prospex Sea",
    collectionAr: "بروسبكس سي",
    category: "men",
    categoryAr: "ساعات غوص رجالية",
    movementType: "Automatic",
    movementTypeAr: "أوتوماتيك - رجالي",
    material: "Stainless Steel",
    materialAr: "فولاذ صلب مقاوم للصدأ",
    dialColor: "Matte Black",
    dialColorAr: "أسود مطفي",
    price: 2850,
    originalPrice: 3200,
    discountPercent: 11,
    rating: 4.8,
    reviewsCount: 120,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false,
    isSpecialOffer: false,
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    image: "assets/images/watch-diver-steel.svg",
    imageFallback: "assets/images/watch-diver-steel.svg",
    gallery: [
      "assets/images/watch-diver-steel.svg"
    ],
    tagline: "Professional diver watch with rotating bezel and Lumibrite indices.",
    taglineAr: "ساعة غوص احترافية بإطار سيراميك دوار ومؤشرات عالية التوهج.",
    description: "Built for sport and underwater reliability with high-torque automatic movement and solid stainless steel casing.",
    descriptionAr: "مصممة للرياضة والاستخدام الشاق بحركة أوتوماتيكية وهيكل فولاذي متين.",
    specs: {
      calibre: "Automatic Calibre 4R35",
      calibreAr: "معيار أوتوماتيكي دقيق",
      powerReserve: "41 Hours",
      powerReserveAr: "41 ساعة",
      frequency: "21,600 vph",
      frequencyAr: "21,600 ذبذبة",
      jewels: "23 Jewels",
      jewelsAr: "23 حجراً",
      caseDiameter: "42 mm",
      caseDiameterAr: "42 ملم",
      caseThickness: "13 mm",
      caseThicknessAr: "13 ملم",
      waterResistance: "200M / 20 ATM",
      waterResistanceAr: "200 متر",
      glass: "Hardlex Reinforced Crystal",
      glassAr: "كريستال هاردلكس مقوى",
      strap: "Solid Steel Bracelet",
      strapAr: "سوار فولاذي صلب",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "seiko-steel", name: "Steel Bracelet", nameAr: "سوار فولاذي" },
      { id: "seiko-rubber", name: "Black Rubber Diver", nameAr: "سوار مطاطي أسود" }
    ]
  },

  // 3. TISSOT PRX AUTOMATIC (3,400 EGP)
  {
    id: "TISSOT-PRX-01",
    name: "Tissot PRX Steel",
    nameAr: "تيسو بي آر إكس ستيل",
    brand: "Tissot",
    collection: "T-Classic",
    collectionAr: "تي كلاسيك",
    category: "men",
    categoryAr: "ساعات رجالية متكاملة",
    movementType: "Automatic",
    movementTypeAr: "أوتوماتيك - رجالي",
    material: "316L Stainless Steel",
    materialAr: "فولاذ صلب 316L",
    dialColor: "Waffle Silver",
    dialColorAr: "فضي بنقش المربعات",
    price: 3400,
    originalPrice: 3800,
    discountPercent: 11,
    rating: 4.7,
    reviewsCount: 95,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false,
    isSpecialOffer: false,
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    image: "assets/images/watch-diver-steel.svg",
    imageFallback: "assets/images/watch-diver-steel.svg",
    gallery: [
      "assets/images/watch-diver-steel.svg"
    ],
    tagline: "Integrated steel bracelet with slim retro tonneau case.",
    taglineAr: "سوار مدمج أنيق وهيكل كلاسيكي جذاب بإطلالة السبعينيات.",
    description: "The integrated sports watch with satin-brushed case, waffle pattern dial, and smooth sweeping seconds hand.",
    descriptionAr: "ساعة رياضية متكاملة بهيكل مصقول وسوار مدمج فائق الأناقة ومينا بنقش الوافل.",
    specs: {
      calibre: "Automatic 80-Hour Movement",
      calibreAr: "حركة أوتوماتيكية باحتياطي طاقة ممتد",
      powerReserve: "80 Hours",
      powerReserveAr: "80 ساعة",
      frequency: "21,600 vph",
      frequencyAr: "21,600 ذبذبة",
      jewels: "23 Jewels",
      jewelsAr: "23 حجراً",
      caseDiameter: "40 mm",
      caseDiameterAr: "40 ملم",
      caseThickness: "10.9 mm",
      caseThicknessAr: "10.9 ملم",
      waterResistance: "100M / 10 ATM",
      waterResistanceAr: "100 متر",
      glass: "Sapphire Crystal",
      glassAr: "ياقوت كريستالي ضد الخدش",
      strap: "Integrated Steel Bracelet",
      strapAr: "سوار ستيل مدمج",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "prx-steel", name: "Integrated Steel", nameAr: "سوار ستيل مدمج" }
    ]
  },

  // 4. CASIO G-SHOCK TACTICAL (650 EGP) - Explicit user requirement
  {
    id: "CASIO-GSHOCK-01",
    name: "Casio G-Shock Tactical",
    nameAr: "كاسيو جي شوك تكتيكية",
    brand: "Casio",
    collection: "G-Shock Original",
    collectionAr: "جي شوك أوريجينال",
    category: "unisex",
    categoryAr: "ساعات رياضية تكتيكية",
    movementType: "Digital",
    movementTypeAr: "ديجيتال - للجنسين",
    material: "Impact Resin & Carbon Core",
    materialAr: "راتنج مقوى ضد الصدمات",
    dialColor: "Stealth Black",
    dialColorAr: "أسود تكتيكي",
    price: 650,
    originalPrice: 750,
    discountPercent: 13,
    rating: 4.6,
    reviewsCount: 78,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false,
    isSpecialOffer: false,
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    image: "assets/images/watch-smartwatch.svg",
    imageFallback: "assets/images/watch-smartwatch.svg",
    gallery: [
      "assets/images/watch-smartwatch.svg"
    ],
    tagline: "Unbreakable shock-resistant construction with backlight and stopwatch.",
    taglineAr: "بنية فائقة القوة ومقاومة للصدمات مع إضاءة شاشة وساعة إيقاف.",
    description: "Shock-resistant digital wristwatch with 200m water resistance, world time, stopwatch, timer, and high-visibility LED illumination.",
    descriptionAr: "ساعة يد رقمية مقاومة للصدمات والماء حتى 200 متر مع منبه وساعة إيقاف وإضاءة ليلية ساطعة.",
    specs: {
      calibre: "Digital Quartz Module",
      calibreAr: "وحدة كوارتز رقمية",
      powerReserve: "2-Year Battery",
      powerReserveAr: "بطارية تدوم لسنتين",
      frequency: "Quartz Precision",
      frequencyAr: "دقة كوارتز",
      jewels: "Digital",
      jewelsAr: "إلكتروني",
      caseDiameter: "45 mm",
      caseDiameterAr: "45 ملم",
      caseThickness: "14 mm",
      caseThicknessAr: "14 ملم",
      waterResistance: "200M / 20 ATM",
      waterResistanceAr: "200 متر",
      glass: "Hardened Mineral Glass",
      glassAr: "زجاج معدني مقوى",
      strap: "Durable Black Resin",
      strapAr: "حزام راتنج أسود متين",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "gshock-black", name: "Matte Black Resin", nameAr: "راتنج أسود مطفي" }
    ]
  },

  // 5. MICHAEL KORS PARKER (1,750 EGP)
  {
    id: "MK-PARKER-01",
    name: "Michael Kors Parker",
    nameAr: "مايكل كورس باركر روز جولد",
    brand: "Michael Kors",
    collection: "Parker Collection",
    collectionAr: "مجموعة باركر",
    category: "women",
    categoryAr: "ساعات نسائية راقية",
    movementType: "Chronograph",
    movementTypeAr: "كرونوغراف - نسائي",
    material: "Rose Gold PVD & Crystals",
    materialAr: "ذهب وردي ومرصعة بالكريستال",
    dialColor: "Blush Sunray",
    dialColorAr: "وردي ناعم متألق",
    price: 1750,
    originalPrice: 1950,
    discountPercent: 10,
    rating: 4.5,
    reviewsCount: 62,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false,
    isSpecialOffer: false,
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    image: "assets/images/watch-women-diamond-rose.svg",
    imageFallback: "assets/images/watch-women-diamond-rose.svg",
    gallery: [
      "assets/images/watch-women-diamond-rose.svg"
    ],
    tagline: "Glittering crystal-encrusted bezel with elegant multi-function chronograph.",
    taglineAr: "إطار مرصع بالكريستال اللامع ومينا كرونوغراف وردي أنيق.",
    description: "Feminine elegance in warm rose gold tone with pavé crystal bezel and multi-function chronograph counters.",
    descriptionAr: "ساعة يد نسائية أنيقة بطلاء الذهب الوردي وإطار مرصع بفصوص الكريستال البراقة.",
    specs: {
      calibre: "Multi-Function Quartz Movement",
      calibreAr: "حركة كوارتز متعددة الوظائف",
      powerReserve: "2-Year Battery",
      powerReserveAr: "سنتين",
      frequency: "Quartz",
      frequencyAr: "كوارتز",
      jewels: "Jeweled Quartz",
      jewelsAr: "كوارتز",
      caseDiameter: "39 mm",
      caseDiameterAr: "39 ملم",
      caseThickness: "10.5 mm",
      caseThicknessAr: "10.5 ملم",
      waterResistance: "50M / 5 ATM",
      waterResistanceAr: "50 متر",
      glass: "Mineral Glass",
      glassAr: "زجاج معدني",
      strap: "Rose Gold-Tone Steel",
      strapAr: "سوار فولاذي مطلي روز جولد",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "mk-rosegold", name: "Rose Gold Steel", nameAr: "سوار ذهب وردي" }
    ]
  },

  // 6. OMEGA SEAMASTER DIVER (4,900 EGP) - Explicit upper ceiling
  {
    id: "OMEGA-SMP300-01",
    name: "Omega Seamaster Diver 300M",
    nameAr: "أوميغا سيماستر دايفر 300م",
    brand: "Omega",
    collection: "Seamaster",
    collectionAr: "سيماستر بروفيشنال",
    category: "men",
    categoryAr: "ساعات غوص فاخرة",
    movementType: "Automatic",
    movementTypeAr: "أوتوماتيك - رجالي",
    material: "Steel & Ceramic Bezel",
    materialAr: "فولاذ صلب وسيراميك أزرق",
    dialColor: "Laser Blue Wave",
    dialColorAr: "أزرق بنقش الأمواج",
    price: 4900,
    originalPrice: 5300,
    discountPercent: 8,
    rating: 4.9,
    reviewsCount: 210,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    isSpecialOffer: false,
    badge: "Master Diver",
    badgeAr: "دايفر احترافي",
    image: "assets/images/watch-diver-steel.svg",
    imageFallback: "assets/images/watch-diver-steel.svg",
    gallery: [
      "assets/images/watch-diver-steel.svg"
    ],
    tagline: "Iconic blue ceramic wave dial with skeleton hands and helium release valve.",
    taglineAr: "مينا أزرق مموج وعقارب مفرغة مع صمام تصريف الهيليوم.",
    description: "The legendary Seamaster Diver featuring wave-pattern ceramic dial, unidirectional ceramic bezel, and heavy-duty steel bracelet.",
    descriptionAr: "ساعة الغوص الشهيرة بمينا سيراميكي بنقش الأمواج، وإطار سيراميكي دوار، وسوار فولاذي صلب مريح.",
    specs: {
      calibre: "Precision Automatic Calibre",
      calibreAr: "حركة أوتوماتيكية عالية الدقة",
      powerReserve: "48 Hours",
      powerReserveAr: "48 ساعة",
      frequency: "28,800 vph",
      frequencyAr: "28,800 ذبذبة",
      jewels: "25 Jewels",
      jewelsAr: "25 حجراً",
      caseDiameter: "42 mm",
      caseDiameterAr: "42 ملم",
      caseThickness: "13.5 mm",
      caseThicknessAr: "13.5 ملم",
      waterResistance: "100M / 10 ATM",
      waterResistanceAr: "100 متر",
      glass: "Sapphire Crystal",
      glassAr: "ياقوت كريستالي مقاوم للخدش",
      strap: "Solid 5-Link Steel Bracelet",
      strapAr: "سوار فولاذي 5 حلقات",
      warranty: "2-Year Warranty",
      warrantyAr: "ضمان لمدة عامين"
    },
    strapOptions: [
      { id: "omega-steel", name: "Steel Bracelet", nameAr: "سوار ستيل فاخر" }
    ]
  },

  // 7. FOSSIL GRANT (1,250 EGP)
  {
    id: "FOSSIL-GRANT-01",
    name: "Fossil Grant Chronograph",
    nameAr: "فوسيل جرانت كرونوغراف",
    brand: "Fossil",
    collection: "Grant Chrono",
    collectionAr: "جرانت كولكشن",
    category: "men",
    categoryAr: "ساعات كلاسيكية رجالية",
    movementType: "Chronograph",
    movementTypeAr: "كرونوغراف - رجالي",
    material: "Stainless Steel & Leather",
    materialAr: "فولاذ وجلد طبيعي عتيق",
    dialColor: "Navy Blue & Cream",
    dialColorAr: "كحلي مع أرقام رومانية",
    price: 1250,
    originalPrice: 1450,
    discountPercent: 14,
    rating: 4.6,
    reviewsCount: 42,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    isSpecialOffer: false,
    badge: "New Arrival",
    badgeAr: "وصل حديثاً",
    image: "assets/images/watch-classic-leather.svg",
    imageFallback: "assets/images/watch-classic-leather.svg",
    gallery: [
      "assets/images/watch-classic-leather.svg"
    ],
    tagline: "Vintage appeal with Roman numerals and genuine brown leather strap.",
    taglineAr: "طابع كلاسيكي أنيق بأرقام رومانية وحزام جلد طبيعي بني.",
    description: "Classic chronograph with stopwatch sub-dials, rich blue dial face, and comfortable genuine calfskin leather strap.",
    descriptionAr: "ساعة يد كرونوغراف كلاسيكية بموانئ فرعية دقيقة وحزام جلد طبيعي مريح للمناسبات والعمل.",
    specs: {
      calibre: "Japanese Quartz Chronograph",
      calibreAr: "حركة كوارتز كرونوغراف يابانية",
      powerReserve: "2-Year Battery",
      powerReserveAr: "سنتين",
      frequency: "Quartz",
      frequencyAr: "كوارتز",
      jewels: "Quartz",
      jewelsAr: "كوارتز",
      caseDiameter: "44 mm",
      caseDiameterAr: "44 ملم",
      caseThickness: "12 mm",
      caseThicknessAr: "12 ملم",
      waterResistance: "50M / 5 ATM",
      waterResistanceAr: "50 متر",
      glass: "Mineral Crystal",
      glassAr: "زجاج معدني",
      strap: "Genuine Brown Leather",
      strapAr: "جلد طبيعي بني",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "fossil-brown", name: "Dark Brown Leather", nameAr: "جلد بني داكن" }
    ]
  },

  // 8. CITIZEN ECO-DRIVE (2,200 EGP)
  {
    id: "CITIZEN-ECO-01",
    name: "Citizen Eco-Drive Nighthawk",
    nameAr: "سيتيزن إيكو-درايف نايت هوك",
    brand: "Citizen",
    collection: "Promaster Air",
    collectionAr: "بروماستر إير",
    category: "men",
    categoryAr: "ساعات طيارين شمسية",
    movementType: "Solar",
    movementTypeAr: "طاقة شمسية - رجالي",
    material: "Ion-Plated Stainless Steel",
    materialAr: "فولاذ مطلي بالأيونات السوداء",
    dialColor: "Aviation Black",
    dialColorAr: "أسود طيران تكتيكي",
    price: 2200,
    originalPrice: 2500,
    discountPercent: 12,
    rating: 4.8,
    reviewsCount: 88,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    isSpecialOffer: false,
    badge: "New Arrival",
    badgeAr: "وصل حديثاً",
    image: "assets/images/watch-smartwatch.svg",
    imageFallback: "assets/images/watch-smartwatch.svg",
    gallery: [
      "assets/images/watch-smartwatch.svg"
    ],
    tagline: "Light-powered solar timepiece with dual-time display and black steel bracelet.",
    taglineAr: "تعمل بالضوء ولا تحتاج لتبديل بطارية مع توقيت مزدوج وسوار ستيل أسود.",
    description: "Eco-Drive light powered technology charges from sunlight or room lighting. Features aviation slide-rule dial.",
    descriptionAr: "تقنية إيكو درايف تشحن تلقائياً بالضوء الطبيعي أو الصناعي مع سوار فولاذي أسود أنيق.",
    specs: {
      calibre: "Solar Quartz Eco-Drive",
      calibreAr: "حركة كوارتز شمسية",
      powerReserve: "6 Months Dark Reserve",
      powerReserveAr: "6 أشهر بالظلام التام",
      frequency: "Quartz",
      frequencyAr: "كوارتز",
      jewels: "Solar Module",
      jewelsAr: "وحدة شمسية",
      caseDiameter: "42 mm",
      caseDiameterAr: "42 ملم",
      caseThickness: "12.5 mm",
      caseThicknessAr: "12.5 ملم",
      waterResistance: "100M / 10 ATM",
      waterResistanceAr: "100 متر",
      glass: "Mineral Glass",
      glassAr: "زجاج معدني",
      strap: "Black Plated Steel",
      strapAr: "ستيل أسود صلب",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "citizen-black-steel", name: "Black IP Steel", nameAr: "ستيل أسود مؤين" }
    ]
  },

  // 9. DANIEL WELLINGTON (850 EGP)
  {
    id: "DW-CLASSIC-01",
    name: "Daniel Wellington Classic",
    nameAr: "دانيال ويلينغتون كلاسيك",
    brand: "Daniel Wellington",
    collection: "Classic Petite",
    collectionAr: "كلاسيك بتيت",
    category: "women",
    categoryAr: "ساعات نسائية مينيمال",
    movementType: "Quartz",
    movementTypeAr: "كوارتز - نسائي",
    material: "Rose Gold PVD & White Dial",
    materialAr: "ذهب وردي ومينا أبيض ناصع",
    dialColor: "Eggshell White",
    dialColorAr: "أبيض ناصع رقيق",
    price: 850,
    originalPrice: 950,
    discountPercent: 11,
    rating: 4.7,
    reviewsCount: 72,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    isSpecialOffer: false,
    badge: "New Arrival",
    badgeAr: "وصل حديثاً",
    image: "assets/images/watch-classic-leather.svg",
    imageFallback: "assets/images/watch-classic-leather.svg",
    gallery: [
      "assets/images/watch-classic-leather.svg"
    ],
    tagline: "Ultra-slim 6mm minimalist watch with clean white dial and rose gold bezel.",
    taglineAr: "ساعة يد فائقة النحافة بسماكة 6 ملم ومينا أبيض مينيمال ناعم.",
    description: "Minimalist Scandinavian design with ultra-thin profile, clean baton indices, and supple leather strap.",
    descriptionAr: "تصميم مينيمال رشيق وخفيف على المعصم بإطار ذهب وردي وحزام جلد راقٍ.",
    specs: {
      calibre: "Slim Japanese Quartz",
      calibreAr: "حركة كوارتز نحيفة",
      powerReserve: "2-Year Battery",
      powerReserveAr: "سنتين",
      frequency: "Quartz",
      frequencyAr: "كوارتز",
      jewels: "Quartz",
      jewelsAr: "كوارتز",
      caseDiameter: "32 mm",
      caseDiameterAr: "32 ملم",
      caseThickness: "6 mm Ultra-Slim",
      caseThicknessAr: "6 ملم فائقة النحافة",
      waterResistance: "30M / 3 ATM",
      waterResistanceAr: "30 متر",
      glass: "Mineral Glass",
      glassAr: "زجاج معدني",
      strap: "Brown Leather Strap",
      strapAr: "حزام جلد بني",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "dw-leather", name: "Brown Leather", nameAr: "جلد بني" }
    ]
  },

  // 10. SAMSUNG GALAXY SMARTWATCH (3,950 EGP)
  {
    id: "SAMSUNG-GW6-01",
    name: "Samsung Galaxy Smart Watch",
    nameAr: "ساعة سامسونج جالاكسي الذكية",
    brand: "Samsung",
    collection: "Galaxy Wearables",
    collectionAr: "جالاكسي الذكية",
    category: "unisex",
    categoryAr: "ساعات ذكية متطورة",
    movementType: "Smart",
    movementTypeAr: "ذكية - للجنسين",
    material: "Stainless Steel Case",
    materialAr: "فولاذ مقاوم للصدأ وشاشة أموليد",
    dialColor: "AMOLED Digital Touchscreen",
    dialColorAr: "شاشة لمس أموليد فائقة الوضوح",
    price: 3950,
    originalPrice: 4400,
    discountPercent: 10,
    rating: 4.5,
    reviewsCount: 55,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    isSpecialOffer: false,
    badge: "Smart Watch",
    badgeAr: "ساعة ذكية",
    image: "assets/images/watch-smartwatch.svg",
    imageFallback: "assets/images/watch-smartwatch.svg",
    gallery: [
      "assets/images/watch-smartwatch.svg"
    ],
    tagline: "Rotating physical bezel with heart-rate tracking, sleep score, and notifications.",
    taglineAr: "إطار دوار كلاسيكي مع تتبع نبضات القلب والأنشطة الرياضية والإشعارات.",
    description: "Modern smartwatch combining traditional watch aesthetics with smartphone notifications, fitness tracking, and customizable watch faces.",
    descriptionAr: "ساعة ذكية تجمع بين التصميم الكلاسيكي الأنيق وتطبيقات اللياقة البدنية ومتابعة الصحة والإشعارات.",
    specs: {
      calibre: "Dual-Core Smart Processor",
      calibreAr: "معالج ذكي ثنائي النواة",
      powerReserve: "40 Hours Battery Life",
      powerReserveAr: "40 ساعة تشغيل",
      frequency: "Processor",
      frequencyAr: "معالج",
      jewels: "Microchip",
      jewelsAr: "إلكتروني",
      caseDiameter: "43 mm",
      caseDiameterAr: "43 ملم",
      caseThickness: "11 mm",
      caseThicknessAr: "11 ملم",
      waterResistance: "50M / 5 ATM",
      waterResistanceAr: "50 متر",
      glass: "Reinforced Touch Glass",
      glassAr: "زجاج لمس مقوى",
      strap: "Silicone & Hybrid Leather",
      strapAr: "حزام سيليكون مريح",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "samsung-black", name: "Black Silicone Strap", nameAr: "حزام سيليكون أسود" }
    ]
  },

  // 11. CASIO VINTAGE GOLD DIGITAL (290 EGP) - Affordable entry point > 250 EGP
  {
    id: "CASIO-VINTAGE-GOLD",
    name: "Casio Vintage Gold Watch",
    nameAr: "ساعة كاسيو فينتاج ديجيتال ذهبي",
    brand: "Casio",
    collection: "Vintage Retro",
    collectionAr: "فينتاج ريترو",
    category: "unisex",
    categoryAr: "ساعات كلاسيكية للجنسين",
    movementType: "Digital",
    movementTypeAr: "ديجيتال - للجنسين",
    material: "Gold-Tone Stainless Steel",
    materialAr: "فولاذ مطلي بلون الذهب",
    dialColor: "Retro LCD Digital",
    dialColorAr: "شاشة رقمية كلاسيكية",
    price: 290,
    originalPrice: 350,
    discountPercent: 17,
    rating: 4.6,
    reviewsCount: 140,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false,
    isSpecialOffer: true,
    badge: "Budget Best",
    badgeAr: "سعر اقتصادي",
    image: "assets/images/watch-diver-steel.svg",
    imageFallback: "assets/images/watch-diver-steel.svg",
    gallery: [
      "assets/images/watch-diver-steel.svg"
    ],
    tagline: "Timeless retro gold digital watch with daily alarm, stopwatch, and LED light.",
    taglineAr: "ساعة يد رقمية ذهبية ريترو مزودة بمنبه وساعة إيقاف وإضاءة شاشة.",
    description: "The universally loved retro gold digital watch. Lightweight, water-resistant, with self-adjustable sliding clasp.",
    descriptionAr: "ساعة يد رقمية بتصميم ريترو ذهبي أنيق ومشبك قابل للتعديل بسهولة.",
    specs: {
      calibre: "Casio Digital Quartz",
      calibreAr: "وحدة كوارتز رقمية",
      powerReserve: "3-Year Battery",
      powerReserveAr: "3 سنوات",
      frequency: "Quartz",
      frequencyAr: "كوارتز",
      jewels: "Digital",
      jewelsAr: "إلكتروني",
      caseDiameter: "36 mm",
      caseDiameterAr: "36 ملم",
      caseThickness: "8.5 mm",
      caseThicknessAr: "8.5 ملم",
      waterResistance: "Water Resistant Splashproof",
      waterResistanceAr: "مقاومة للرذاذ وغسيل اليدين",
      glass: "Resin Glass",
      glassAr: "زجاج راتنجي",
      strap: "Adjustable Gold Steel Band",
      strapAr: "سوار فولاذي ذهبي قابل للتعديل",
      warranty: "1-Year Warranty",
      warrantyAr: "ضمان لمدة عام"
    },
    strapOptions: [
      { id: "casio-gold-mesh", name: "Gold Steel Band", nameAr: "سوار فولاذي ذهبي" }
    ]
  },

  // 12. CURREN BUSINESS CLASSIC (450 EGP) - Affordable classic > 250 EGP
  {
    id: "CURREN-CHRONO-01",
    name: "Curren Business Leather Watch",
    nameAr: "ساعة كورين كلاسيك جلد",
    brand: "Curren",
    collection: "Executive Line",
    collectionAr: "مجموعة رجال الأعمال",
    category: "men",
    categoryAr: "ساعات يد رجالية",
    movementType: "Quartz",
    movementTypeAr: "كوارتز - رجالي",
    material: "Alloy Steel & Leather",
    materialAr: "سبيكة فولاذية وحزام جلد",
    dialColor: "Black & Rose Accents",
    dialColorAr: "أسود مع لمسات بروز جولد",
    price: 450,
    originalPrice: 550,
    discountPercent: 18,
    rating: 4.4,
    reviewsCount: 65,
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false,
    isSpecialOffer: true,
    badge: "Special Offer",
    badgeAr: "عرض خاص",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    imageFallback: "assets/images/rolex-datejust-green.svg",
    gallery: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80"
    ],
    tagline: "Sophisticated executive dress watch with sub-dial styling and soft stitched leather.",
    taglineAr: "ساعة يد أنيقة ومناسبة للعمل والارتداء اليومي بحزام جلد ناعم ومريح.",
    description: "An affordable everyday dress watch featuring clean hour markers, calendar date window, and durable brown leather strap.",
    descriptionAr: "ساعة يد اقتصادية أنيقة مناسبة للدوام والمناسبات مع نافذة للتاريخ وسوار جلد مريح.",
    specs: {
      calibre: "Precision Analog Quartz",
      calibreAr: "حركة كوارتز تناظرية",
      powerReserve: "2-Year Battery",
      powerReserveAr: "سنتين",
      frequency: "Quartz",
      frequencyAr: "كوارتز",
      jewels: "Quartz",
      jewelsAr: "كوارتز",
      caseDiameter: "43 mm",
      caseDiameterAr: "43 ملم",
      caseThickness: "11 mm",
      caseThicknessAr: "11 ملم",
      waterResistance: "30M / 3 ATM",
      waterResistanceAr: "30 متر",
      glass: "Mineral Crystal",
      glassAr: "زجاج معدني",
      strap: "Brown Stitched Leather",
      strapAr: "جلد بني بخياطة محكمة",
      warranty: "6-Month Warranty",
      warrantyAr: "ضمان 6 أشهر"
    },
    strapOptions: [
      { id: "curren-leather", name: "Brown Leather", nameAr: "جلد بني" }
    ]
  }
];

// Demo Customer Reviews
const VELOR_DEMO_REVIEWS = [
  {
    id: "rev-1",
    author: "James Carter",
    authorAr: "جيمس كارتر",
    title: "Amazing quality and fast delivery!",
    titleAr: "جودة مذهلة وتوصيل سريع للغاية!",
    rating: 5,
    date: "2026-10-18",
    comment: "The Rolex Datejust 41 green dial is stunning on the wrist. Delivered with full white-glove inspection in Cairo. Highly recommended WatchShop service!",
    commentAr: "ساعة رولكس ديت جست 41 بالمينا الأخضر ممتازة وفخمة جداً على الطبيعة! تم التسليم مع معاينة كاملة ومندوب راقٍ.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Emily Roberts",
    authorAr: "إيميلي روبرتس",
    title: "Authentic watches and excellent customer service",
    titleAr: "ساعات أصلية موثقة وخدمة عملاء فائقة الرقي",
    rating: 5,
    date: "2026-09-24",
    comment: "I've bought 2 watches already and every time it's been perfect. The Michael Kors Parker arrived in pristine condition with warranty cards.",
    commentAr: "اشتريت ساعتين بالفعل وفي كل مرة كانت التجربة ممتازة. وصلت ساعة مايكل كورس في علبتها مع بطاقة الضمان.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Ahmed Khan",
    authorAr: "أحمد خان",
    title: "Great prices and a smooth shopping experience",
    titleAr: "أسعار ممتازة وتجربة شراء سلسة جداً",
    rating: 5,
    date: "2026-10-02",
    comment: "Ordered the G-Shock Tactical for 650 EGP. The WhatsApp order confirmation and tracking was fast and reassuring. Will definitely shop again!",
    commentAr: "طلبت ساعة جي شوك بسعر 650 ج.م وكانت تجربة رائعة وتأكيد الواتساب فوري وسريع. سأكرر الشراء بالتأكيد!",
    verified: true
  }
];

function getProductById(id) {
  return VELOR_PRODUCTS.find(p => p.id === id) || VELOR_PRODUCTS[0];
}

function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  return VELOR_PRODUCTS
    .filter(p => p.id !== currentId)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}

function formatEGP(amount) {
  return new Intl.NumberFormat('en-EG', {
    style: 'decimal',
    maximumFractionDigits: 0
  }).format(amount) + ' EGP';
}

function formatEGPAr(amount) {
  return new Intl.NumberFormat('ar-EG', {
    style: 'decimal',
    maximumFractionDigits: 0
  }).format(amount) + ' ج.م';
}

function formatPriceDisplay(product, isAr = false) {
  return isAr ? formatEGPAr(product.price) : formatEGP(product.price);
}
