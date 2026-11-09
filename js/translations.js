/**
 * VÉLOR — Luxury Watch E-Commerce
 * Bilingual Translation Engine (English & Arabic)
 * Handles RTL/LTR switching and text translation across all pages.
 */

const VELOR_TRANSLATIONS = {
  en: {
    // Brand & General
    brandName: "VÉLOR",
    brandSubtitle: "HAUTE HORLOGERIE • GENÈVE",
    announcementText: "Insured White-Glove Delivery Across Egypt & Worldwide • Demo Luxury Experience",
    conciergeWhatsApp: "Concierge: +20 100 684 5910",
    currency: "EGP",
    
    // Navigation
    navHome: "Home",
    navShop: "Shop",
    navCollections: "Collections",
    navBestSellers: "Best Sellers",
    navNewArrivals: "New Arrivals",
    navOffers: "Offers",
    navAbout: "About VÉLOR",
    navContact: "Contact",
    navWishlist: "Wishlist",
    navCart: "Cart",
    navSearch: "Search watches...",
    langSwitchText: "العربية",
    
    // Hero Section
    heroBadge: "THE 2026 MANUFACTURE CAMPAIGN",
    heroTitle: "SCULPTING TIME",
    heroSubtitle: "Where avant-garde artistic direction meets the eternal precision of haute horlogerie.",
    heroCtaShop: "Explore Collection",
    heroCtaBestSellers: "Discover Best Sellers",
    heroSkipIntro: "Skip Cinematic Intro",
    heroScrollDown: "Scroll to Explore",
    
    // Homepage Sections
    sectionNewArrivalsTitle: "New Arrivals",
    sectionNewArrivalsSub: "Contemporary masterworks recently unveiled at the Geneva Atelier.",
    sectionCollectionsTitle: "Curated Collections",
    sectionCollectionsSub: "Four distinct horological philosophies exploring unconventional luxury.",
    sectionBestSellersTitle: "Connoisseur's Choice",
    sectionBestSellersSub: "Our most revered timepieces celebrated by collectors worldwide.",
    sectionOffersTitle: "Exclusive Atelier Privileges",
    sectionOffersSub: "Limited demo seasonal privileges for our esteemed clientele.",
    sectionFeaturedTitle: "Masterpiece in Spotlight",
    sectionFeaturedSub: "An in-depth study of the VÉLOR Sovereign Tourbillon.",
    sectionCraftsmanshipTitle: "Art of Watchmaking",
    sectionCraftsmanshipSub: "Precision engineering, hand-chamfered bridges, and relentless perfection.",
    sectionTestimonialsTitle: "Collector Voices",
    sectionTestimonialsSub: "Authentic perspectives from our global watch collectors (Demo Testimonials).",
    sectionFaqTitle: "Frequently Asked Questions",
    sectionFaqSub: "Everything you need to know about our timepieces, shipping, and concierge services.",
    sectionNewsletterTitle: "Join the VÉLOR Circle",
    sectionNewsletterSub: "Receive private invitations to confidential timepiece unveils and salon exhibitions.",
    newsletterPlaceholder: "Enter your private email address...",
    newsletterBtn: "Request Access",
    newsletterSuccess: "Thank you for joining the VÉLOR Circle. A welcome invitation will follow.",
    
    // Collections
    colEmeraldTitle: "Emerald Nocturne",
    colEmeraldDesc: "Deep forest sunburst guilloché dials framed in brushed titanium and 904L steel.",
    colPlumTitle: "Aubergine Royale",
    colPlumDesc: "Imperial plum PVD openworked bridges with warm 18k rose gold cases.",
    colArgentTitle: "Argent Chrono",
    colArgentDesc: "High-beat column-wheel chronographs in aerospace-grade stainless steel.",
    colLavenirTitle: "L’Avenir Concept",
    colLavenirDesc: "Forged carbon architecture ignited with high-visibility electric lime accents.",
    
    // Product Card
    quickView: "Quick View",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    addedToCart: "Added to Cart",
    addedToWishlist: "Saved to Wishlist",
    removedFromWishlist: "Removed from Wishlist",
    outOfStock: "Sold Out",
    demoBadge: "Demo Product",
    viewDetails: "View Details",
    
    // Shop Page
    shopTitle: "The VÉLOR Collection",
    shopSubtitle: "Discover handcrafted luxury timepieces defined by distinctive color and mechanical mastery.",
    filterTitle: "Refine Selection",
    filterClear: "Clear All",
    filterSearch: "Search by keyword or model...",
    filterCategory: "Gender & Style",
    filterAll: "All Timepieces",
    filterMen: "Men's Watches",
    filterWomen: "Women's Watches",
    filterUnisex: "Unisex Timepieces",
    filterCollection: "Collection Suite",
    filterMovement: "Movement Type",
    filterPrice: "Price Range (EGP)",
    filterColor: "Dial Color",
    filterMaterial: "Case Material",
    sortBy: "Sort By:",
    sortFeatured: "Featured Masterpieces",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    sortNewest: "Newest Arrivals",
    sortRating: "Collector Rating",
    showingResults: "Showing {count} of {total} timepieces",
    noProductsFound: "No timepieces match your criteria.",
    resetFilters: "Reset All Filters",
    loadMore: "Load More Timepieces",
    
    // Product Details Page
    inStock: "In Stock & Insured",
    referenceLabel: "Reference",
    selectStrap: "Select Strap Configuration",
    quantity: "Quantity",
    specsTitle: "Technical Specifications",
    specCalibre: "Calibre & Movement",
    specPower: "Power Reserve",
    specFrequency: "Frequency",
    specJewels: "Jewels",
    specCase: "Case Dimensions",
    specWater: "Water Resistance",
    specGlass: "Crystal Glass",
    specStrap: "Strap & Clasp",
    specWarranty: "Warranty Coverage",
    shippingPolicyTitle: "White-Glove Shipping & Delivery",
    shippingPolicyDesc: "Every VÉLOR timepiece is transported via an armored, fully-insured luxury courier service. In Greater Cairo and Alexandria, delivery is completed within 24 to 48 hours with option to inspect prior to completing cash on delivery.",
    returnPolicyTitle: "14-Day Complimentary Inspection",
    returnPolicyDesc: "Clients may exchange or return unworn timepieces in their original sealed state within 14 days of receipt. Our concierge team handles collection directly at your residence.",
    reviewsSectionTitle: "Collector Impressions & Reviews (Demo)",
    writeReview: "Write a Review",
    relatedTitle: "Complementary Creations",
    recentlyViewedTitle: "Recently Contemplated",
    
    // Cart Page
    cartTitle: "Your Private Horological Selection",
    cartEmptyTitle: "Your Atelier Selection is Empty",
    cartEmptySub: "Explore our collection to add handcrafted timepieces to your order.",
    cartContinueShopping: "Return to Collection",
    cartTableItem: "Timepiece",
    cartTablePrice: "Unit Price",
    cartTableQty: "Quantity",
    cartTableTotal: "Subtotal",
    cartTableAction: "Action",
    cartSubtotal: "Atelier Subtotal",
    cartShipping: "Insured White-Glove Shipping",
    cartShippingFree: "Complimentary (Orders > 1,500 EGP)",
    cartDiscount: "Privilege Savings",
    cartTotal: "Grand Total",
    cartCouponPlaceholder: "Privilege Code (Try: VELOR10)",
    cartCouponApply: "Apply",
    cartCouponSuccess: "Privilege code applied: 10% demo discount!",
    cartCouponInvalid: "Invalid privilege code. Try VELOR10 or NOCTURNE.",
    cartCheckoutBtn: "Proceed to Secure Order",
    cartClear: "Empty Selection",
    
    // Checkout Page
    checkoutTitle: "Acquisition & Registration",
    checkoutSub: "Complete your private order registration. Your timepiece will be prepared by our master watchmakers.",
    customerDetails: "Client Information",
    fullName: "Full Name",
    fullNamePlaceholder: "e.g. Tarek Mansour",
    phone: "Egyptian Phone Number",
    phonePlaceholder: "e.g. 01006845910",
    email: "Email Address",
    emailPlaceholder: "e.g. tarek@example.com",
    governorate: "Governorate / City",
    selectGovernorate: "Select your destination...",
    address: "Detailed Street & Residence Address",
    addressPlaceholder: "Building, Street name, District, Apartment...",
    notes: "Special Instructions / Concierge Notes",
    notesPlaceholder: "Any special delivery instructions, time preferences, or strap sizing requests...",
    paymentMethod: "Payment Preference",
    payCod: "Cash on Delivery (Insured white-glove inspection on arrival)",
    payWhatsApp: "Direct WhatsApp Order (Personal confirmation with our Senior Concierge)",
    payPos: "POS Card on Delivery (Electronic terminal brought to your door)",
    orderSummary: "Order Summary",
    placeOrderBtn: "Confirm & Register Order",
    processingOrder: "Registering with Geneva Atelier...",
    demoNotice: "Demo Notice: All orders are stored in your browser's LocalStorage for demonstration purposes. No real payment is processed.",
    
    // Order Confirmation Page
    confirmTitle: "Acquisition Registered",
    confirmSub: "Thank you for selecting VÉLOR. Your private order has been cataloged under reference:",
    confirmDetailsTitle: "Registered Acquisition Details",
    confirmStatus: "Order Status: Pending White-Glove Dispatch",
    confirmDate: "Registration Date",
    confirmPaymentMethod: "Payment Method",
    confirmDeliveryTo: "Delivery Destination",
    confirmContact: "Client Contact",
    confirmItems: "Selected Timepieces",
    whatsappSectionTitle: "Expedite Order via WhatsApp Concierge",
    whatsappSectionDesc: "For instantaneous order confirmation, click below to open WhatsApp with your pre-compiled order dossier ready for review and transmission to our Egyptian concierge desk at 01006845910.",
    whatsappBtn: "Send Order via WhatsApp (+20 100 684 5910)",
    whatsappDisclaimer: "Note: Clicking this button prepares a pre-filled WhatsApp message. You can review and edit before sending.",
    orderHistoryBtn: "View Past Demo Acquisitions",
    returnHomeBtn: "Return to Atelier Homepage",
    
    // Wishlist Page
    wishlistTitle: "Your Curated Wishlist",
    wishlistSub: "Preserve the timepieces that speak to your aesthetic sensibilities.",
    wishlistEmptyTitle: "Your Wishlist is Untouched",
    wishlistEmptySub: "Browse our horological catalog and touch the heart icon to curate your personal vault.",
    moveToCart: "Move to Cart",
    removeWishlist: "Remove",
    
    // About Section
    aboutBrandTitle: "The VÉLOR Philosophy",
    aboutBrandSubtitle: "A Contemporary Luxury Watch Concept",
    aboutPara1: "VÉLOR was conceived as an antidote to the predictable tropes of traditional watchmaking. Rather than adhering solely to ubiquitous black and gold palettes, we explore the chromatic tension of deep forest emerald, imperial royal plum, brushed aerospace silver, and daring electric lime accents.",
    aboutPara2: "Every VÉLOR creation is an architectural dialogue between centuries-old high complications — tourbillons, perpetual calendars, flyback chronographs — and avant-garde ergonomics. While VÉLOR is an artistic demonstration brand, the uncompromising devotion to aesthetic harmony and functional clarity represents the highest ideals of luxury horology.",
    aboutPillar1Title: "Artistic Direction",
    aboutPillar1Desc: "Original chromatic balance and daring geometries that challenge conservative watch aesthetics.",
    aboutPillar2Title: "Horological Rigor",
    aboutPillar2Desc: "Flyback chronographs, dual-axis tourbillons, and hand-finished guilloché dial textures.",
    aboutPillar3Title: "Personal Concierge",
    aboutPillar3Desc: "Tailored private client service, white-glove insured delivery, and bespoke strap curation.",
    
    // Footer
    footerBrandDesc: "VÉLOR represents an avant-garde synthesis of haute horlogerie craftsmanship and contemporary artistic direction. Designed for connoisseurs of distinction.",
    footerNavTitle: "The Atelier",
    footerCollectionsTitle: "Collections",
    footerClientCareTitle: "Client Concierge",
    footerLegalTitle: "Legal & Demo Disclosures",
    footerDemoNotice: "VÉLOR is a luxury watch brand concept created for portfolio presentation. All products, prices in EGP, specifications, and collector reviews are demonstration data.",
    footerCopyright: "© 2026 VÉLOR Haute Horlogerie. All rights reserved.",
    footerWhatsAppDirect: "Direct Concierge WhatsApp",
    
    // Validation Errors
    errName: "Please enter your full name.",
    errPhone: "Please enter a valid Egyptian telephone number (e.g. 01006845910).",
    errEmail: "Please provide a valid email address.",
    errCity: "Please select your governorate / city.",
    errAddress: "Please provide your detailed delivery address.",
    errCartEmpty: "Your selection is empty. Please add a timepiece before checking out."
  },

  ar: {
    // Brand & General
    brandName: "ڤيلور",
    brandSubtitle: "صناعة الساعات الراقية • جنيف",
    announcementText: "شحن مؤمن وفاخر بالقفازات البيضاء في جميع أنحاء مصر والعالم • تجربة فاخرة تجريبية",
    conciergeWhatsApp: "الكونسيرج: 01006845910 20+",
    currency: "ج.م",
    
    // Navigation
    navHome: "الرئيسية",
    navShop: "المتجر",
    navCollections: "المجموعات",
    navBestSellers: "الأكثر مبيعاً",
    navNewArrivals: "وصل حديثاً",
    navOffers: "العروض الخاصة",
    navAbout: "عن ڤيلور",
    navContact: "اتصل بنا",
    navWishlist: "المفضلة",
    navCart: "حقيبة الشراء",
    navSearch: "ابحث عن الساعات...",
    langSwitchText: "English",
    
    // Hero Section
    heroBadge: "حملة إبداعات 2026 الحصرية",
    heroTitle: "نَحْتُ الزَّمَن",
    heroSubtitle: "حيث تلتقي الرؤية الفنية الطليعية بالدقة الأبدية لأرقى دور صناعة الساعات العالمية.",
    heroCtaShop: "استكشف المجموعة",
    heroCtaBestSellers: "الأكثر تميزاً ومبيعاً",
    heroSkipIntro: "تخطي المقدمة السينمائية",
    heroScrollDown: "مرر لاستكشاف الإبداع",
    
    // Homepage Sections
    sectionNewArrivalsTitle: "أحدث الإبداعات",
    sectionNewArrivalsSub: "تحف ميكانيكية عصرية كشفت عنها ورشتنا مؤخراً لعشاق التميز.",
    sectionCollectionsTitle: "المجموعات الاستثنائية",
    sectionCollectionsSub: "أربع فلسفات ساعية فريدة تعيد تعريف الفخامة المعاصرة.",
    sectionBestSellersTitle: "اختيار الصفوة",
    sectionBestSellersSub: "ساعاتنا الأكثر تقديراً واقتناءً من نخبة مقتني الساعات حول العالم.",
    sectionOffersTitle: "امتيازات الورشة الحصرية",
    sectionOffersSub: "عروض تجريبية حصرية لفترة محدودة لعملائنا المتميزين.",
    sectionFeaturedTitle: "تحفة تحت الأضواء",
    sectionFeaturedSub: "قراءة متأنية في تفاصيل ساعة ڤيلور سوفرين توربيون الاستثنائية.",
    sectionCraftsmanshipTitle: "فن صناعة الساعات",
    sectionCraftsmanshipSub: "هندسة فائقة الدقة، جسور مصقولة يدوياً، وشغف لا ينتهي بالكمال.",
    sectionTestimonialsTitle: "آراء مقتني الساعات",
    sectionTestimonialsSub: "انطباعات حقيقية من مقتني ساعاتنا الراقية حول العالم (محتوى تجريبي).",
    sectionFaqTitle: "الأسئلة الأكثر شيوعاً",
    sectionFaqSub: "كل ما تود معرفته عن ساعاتنا، الشحن الفاخر، وخدمات الكونسيرج الخاصة.",
    sectionNewsletterTitle: "انضم إلى دائرة ڤيلور الخاصة",
    sectionNewsletterSub: "احصل على دعوات حصرية لكشف الستار عن الساعات النادرة والمعارض الخاصة.",
    newsletterPlaceholder: "أدخل بريدك الإلكتروني الخاص...",
    newsletterBtn: "طلب الانضمام",
    newsletterSuccess: "شكراً لانضمامك إلى دائرة ڤيلور الخاصة. ستصلك دعوة الترحيب قريباً.",
    
    // Collections
    colEmeraldTitle: "إميرالد نوكتورن",
    colEmeraldDesc: "موانئ زمردية ساحرة بتشطيبات الغيوشيه وإطارات من التيتانيوم وفولاذ 904L.",
    colPlumTitle: "أوبيرجين رويال",
    colPlumDesc: "جسور مفرغة بتقنية PVD بلون البرقوق الملكي وهياكل من الذهب الوردي عيار 18.",
    colArgentTitle: "أرجنت كرونو",
    colArgentDesc: "ساعات كرونوغراف عالية التردد بعجلة عمودية مصنوعة من فولاذ الطيران الفاخر.",
    colLavenirTitle: "لافينير كونسبت",
    colLavenirDesc: "هندسة سابقة لعصرها من الكربون المطروق تشتعل بلمسات ليمونية كهربائية مضيئة.",
    
    // Product Card
    quickView: "نظرة سريعة",
    addToCart: "إضافة للحقيبة",
    buyNow: "اطلب الآن",
    addedToCart: "تمت الإضافة إلى حقيبة الشراء",
    addedToWishlist: "تم الحفظ في المفضلة",
    removedFromWishlist: "تمت الإزالة من المفضلة",
    outOfStock: "نفدت الكمية",
    demoBadge: "منتج تجريبي",
    viewDetails: "تفاصيل الساعة",
    
    // Shop Page
    shopTitle: "مجموعة ساعات ڤيلور",
    shopSubtitle: "اكتشف إبداعات حصرية مصاغة يدوياً تجمع بين التناغم اللوني والبراعة الميكانيكية.",
    filterTitle: "تصفية الاختيارات",
    filterClear: "إعادة ضبط",
    filterSearch: "ابحث بالاسم أو الطراز...",
    filterCategory: "الفئة والأسلوب",
    filterAll: "جميع الساعات",
    filterMen: "ساعات رجالية",
    filterWomen: "ساعات نسائية",
    filterUnisex: "ساعات للجنسين",
    filterCollection: "المجموعة",
    filterMovement: "نوع الحركة",
    filterPrice: "نطاق السعر (جنيه مصري)",
    filterColor: "لون المينا",
    filterMaterial: "مادة الهيكل",
    sortBy: "الترتيب حسب:",
    sortFeatured: "القطع المميزة",
    sortPriceAsc: "السعر: من الأقل للأعلى",
    sortPriceDesc: "السعر: من الأعلى للأقل",
    sortNewest: "أحدث الإبداعات",
    sortRating: "تقييم المقتنين",
    showingResults: "عرض {count} من أصل {total} تحفة ميكانيكية",
    noProductsFound: "لم يتم العثور على ساعات تطابق معايير البحث.",
    resetFilters: "إلغاء جميع الفلاتر",
    loadMore: "عرض المزيد من الساعات",
    
    // Product Details Page
    inStock: "متوفر ومؤمن بالكامل",
    referenceLabel: "الرقم المرجعي",
    selectStrap: "اختر نوع السوار المفضل",
    quantity: "الكمية",
    specsTitle: "المواصفات التقنية الدقيقة",
    specCalibre: "المعيار والحركة",
    specPower: "احتياطي الطاقة",
    specFrequency: "التردد",
    specJewels: "الأحجار الكريمة",
    specCase: "أبعاد الهيكل",
    specWater: "مقاومة الماء",
    specGlass: "الزجاج البلوري",
    specStrap: "السوار والإبزيم",
    specWarranty: "الضمان المعتمد",
    shippingPolicyTitle: "الشحن الفاخر والتسليم بالقفازات البيضاء",
    shippingPolicyDesc: "تُنقل كل ساعة من ساعات ڤيلور بواسطة سيارات مصفحة ومؤمنة بالكامل مع مندوب محترف بالقفازات البيضاء. في القاهرة الكبرى والإسكندرية يتم التسليم خلال 24 إلى 48 ساعة مع إمكانية الفحص الكامل قبل إتمام الدفع عند الاستلام.",
    returnPolicyTitle: "فترة فحص ومعاينة مجانية لمدة 14 يوماً",
    returnPolicyDesc: "يحق لعملائنا الكرام استبدال أو إرجاع الساعة غير المرتداة في غلافها الأصلي خلال 14 يوماً من الاستلام، حيث يتولى فريق الكونسيرج استلامها مباشرة من مقر إقامتكم.",
    reviewsSectionTitle: "انطباعات المقتنين والتقييمات (بيانات تجريبية)",
    writeReview: "أضف تقييمك الخاص",
    relatedTitle: "إبداعات متناغمة قد تنال إعجابكم",
    recentlyViewedTitle: "شاهدتها مؤخراً",
    
    // Cart Page
    cartTitle: "حقيبة اختياراتك الفاخرة",
    cartEmptyTitle: "حقيبة مشترياتك فارغة حالياً",
    cartEmptySub: "تفضل بتصفح مجموعاتنا لإضافة ساعاتنا اليدوية المصنوعة بعناية فائقة.",
    cartContinueShopping: "العودة للمتجر",
    cartTableItem: "الساعة",
    cartTablePrice: "السعر الفردي",
    cartTableQty: "الكمية",
    cartTableTotal: "الإجمالي الفرعي",
    cartTableAction: "إجراء",
    cartSubtotal: "المجموع الفرعي",
    cartShipping: "شحن مؤمن بالقفازات البيضاء",
    cartShippingFree: "مجاني (للطلبات التي تتجاوز 1,500 ج.م)",
    cartDiscount: "خصم الامتياز",
    cartTotal: "الإجمالي النهائي",
    cartCouponPlaceholder: "رمز الامتياز (جرب: VELOR10)",
    cartCouponApply: "تطبيق",
    cartCouponSuccess: "تم تطبيق رمز الامتياز بنجاح: خصم تجريبي 10%!",
    cartCouponInvalid: "رمز الامتياز غير صحيح. جرب VELOR10 أو NOCTURNE.",
    cartCheckoutBtn: "المتابعة لإتمام الطلب الفاخر",
    cartClear: "إفراغ الحقيبة",
    
    // Checkout Page
    checkoutTitle: "تسجيل وتأكيد الطلب الفاخر",
    checkoutSub: "أدخل بياناتك ليتم تجهيز ساعتك بدقة بواسطة كبار صانعي الساعات لدينا.",
    customerDetails: "بيانات العميل الكريم",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "مثال: طارق منصور",
    phone: "رقم الهاتف المصري",
    phonePlaceholder: "مثال: 01006845910",
    email: "البريد الإلكتروني",
    emailPlaceholder: "مثال: tarek@example.com",
    governorate: "المحافظة / المدينة",
    selectGovernorate: "اختر وجهة التوصيل...",
    address: "العنوان بالتفصيل ومحل الإقامة",
    addressPlaceholder: "رقم المبنى، اسم الشارع، الحي، رقم الشقة...",
    notes: "تعليمات خاصة / طلبات الكونسيرج",
    notesPlaceholder: "أي تعليمات خاصة بموعد التسليم، أو مقاس السوار المطلوب ضبطه مسبقاً...",
    paymentMethod: "طريقة الدفع المفضلة",
    payCod: "الدفع نقداً عند الاستلام (معاينة مؤمنة بالقفازات البيضاء قبل الدفع)",
    payWhatsApp: "طلب مباشر عبر واتساب (تأكيد فوري مخصص مع مدير الكونسيرج)",
    payPos: "الدفع ببطاقة بنكية عند الاستلام (جهاز دفع إلكتروني مع المندوب)",
    orderSummary: "ملخص الطلب",
    placeOrderBtn: "تأكيد وتسجيل الطلب",
    processingOrder: "جاري التسجيل لدى ورشة جنيف...",
    demoNotice: "تنويه تجريبي: يتم حفظ جميع الطلبات داخل متصفحكم (LocalStorage) لأغراض العرض التوضيحي. لا توجد عمليات دفع حقيقية.",
    
    // Order Confirmation Page
    confirmTitle: "تم تسجيل طلبكم بنجاح",
    confirmSub: "شكراً لاختياركم ڤيلور. تم قيد طلبكم الفاخر تحت الرقم المرجعي المعتمد:",
    confirmDetailsTitle: "تفاصيل الطلب المسجل",
    confirmStatus: "حالة الطلب: قيد التجهيز للشحن الفاخر",
    confirmDate: "تاريخ التسجيل",
    confirmPaymentMethod: "طريقة الدفع",
    confirmDeliveryTo: "عنوان التسليم",
    confirmContact: "بيانات التواصل",
    confirmItems: "الساعات المختارة",
    whatsappSectionTitle: "تأكيد الطلب فوراً عبر واتساب كونسيرج",
    whatsappSectionDesc: "لتسريع تأكيد الطلب، انقر على الزر أدناه لفتح تطبيق واتساب برسالة منسقة وجاهزة بالكامل للمراجعة والإرسال إلى رقم الكونسيرج في مصر: 01006845910.",
    whatsappBtn: "إرسال تفاصيل الطلب عبر واتساب (201006845910+)",
    whatsappDisclaimer: "ملاحظة: النقر على الزر يقوم بإعداد رسالة واتساب جاهزة يمكنك مراجعتها وتعديلها قبل الضغط على زر الإرسال بنفسك.",
    orderHistoryBtn: "عرض سجل الطلبات التجريبية السابقة",
    returnHomeBtn: "العودة للصفحة الرئيسية للورشة",
    
    // Wishlist Page
    wishlistTitle: "قائمتك المفضلة",
    wishlistSub: "احتفظ بالساعات التي تلامس ذوقك الرفيع في مكان واحد.",
    wishlistEmptyTitle: "قائمة المفضلة فارغة حالياً",
    wishlistEmptySub: "تصفح متجرنا وانقر على رمز القلب لحفظ تحفك المفضلة في خزينتك الشخصية.",
    moveToCart: "نقل إلى حقيبة الشراء",
    removeWishlist: "إزالة",
    
    // About Section
    aboutBrandTitle: "فلسفة ڤيلور المعاصرة",
    aboutBrandSubtitle: "مفهوم جديد لصناعة الساعات الفاخرة",
    aboutPara1: "وُلدت دار ڤيلور كصيحة تمرد أنيقة ضد الأنماط المكررة في صناعة الساعات التقليدية. بدلاً من الاقتصار على ثنائية الأسود والذهب المألوفة، نبحر في انسجام لوني مدهش يجمع بين أخضر الغابات الزمردي، ولون البرقوق الملكي العميق، وفولاذ الفضاء الفضي المطفي، مع لمسات ليمونية كهربائية جريئة ومحسوبة.",
    aboutPara2: "كل إبداع من إبداعات ڤيلور هو حوار معماري راقٍ بين تعقيدات صناعة الساعات الميكانيكية العريقة — كالتوربيون الطائر، والتقويم الدائم، وكرونوغراف فلايباك — وبين بيئة معاصرة توفر الراحة التامة على المعصم. وعلى الرغم من كون ڤيلور نموذجاً إبداعياً تجريبياً، إلا أن التفاني في الكمال يعكس أرقى معايير الساعات السويسرية الخالدة.",
    aboutPillar1Title: "الرؤية الفنية",
    aboutPillar1Desc: "توازن لوني استثنائي وهندسة جريئة تتحدى المألوف في عالم الساعات الكلاسيكي.",
    aboutPillar2Title: "الدقة الميكانيكية",
    aboutPillar2Desc: "كرونوغراف فلايباك وتوربيون مزدوج وموانئ بنقوش غيوشيه يدوية بالغة التعقيد.",
    aboutPillar3Title: "كونسيرج شخصي",
    aboutPillar3Desc: "خدمة عملاء فائقة الرقي، شحن فاخر مؤمن بالقفازات البيضاء، وتعديل مخصص للسوار.",
    
    // Footer
    footerBrandDesc: "تمثل دار ڤيلور مزيجاً طليعياً بين أرقى تقاليد صناعة الساعات الميكانيكية والرؤية الفنية المعاصرة. صُممت لنخبة أصحاب الذوق الرفيع.",
    footerNavTitle: "الورشة الفنية",
    footerCollectionsTitle: "المجموعات الحصرية",
    footerClientCareTitle: "عناية العملاء والكونسيرج",
    footerLegalTitle: "تنويهات قانونية وتجريبية",
    footerDemoNotice: "ڤيلور هو مفهوم تصميمي لموقع ساعات فاخرة لأغراض العرض التوضيحي. جميع الأسعار بالجنيه المصري والمواصفات والتقييمات هي محتوى تجريبي.",
    footerCopyright: "© 2026 دار ڤيلور للساعات الفاخرة. جميع الحقوق محفوظة.",
    footerWhatsAppDirect: "الكونسيرج المباشر عبر واتساب",
    
    // Validation Errors
    errName: "يرجى إدخال الاسم بالكامل.",
    errPhone: "يرجى إدخال رقم هاتف مصري صحيح (مثال: 01006845910).",
    errEmail: "يرجى إدخال بريد إلكتروني صحيح.",
    errCity: "يرجى اختيار المحافظة / المدينة.",
    errAddress: "يرجى كتابة العنوان التفصيلي للتوصيل.",
    errCartEmpty: "حقيبة الشراء فارغة. يرجى إضافة ساعة قبل المتابعة لإتمام الطلب."
  }
};

// Global Translation Utilities
let currentLanguage = localStorage.getItem('velor_lang') || 'en';

function getCurrentLang() {
  return currentLanguage;
}

function t(key, replacements = {}) {
  const dict = VELOR_TRANSLATIONS[currentLanguage] || VELOR_TRANSLATIONS.en;
  let text = dict[key] || VELOR_TRANSLATIONS.en[key] || key;
  
  for (const [placeholder, val] of Object.entries(replacements)) {
    text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), val);
  }
  return text;
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'ar') lang = 'en';
  currentLanguage = lang;
  localStorage.setItem('velor_lang', lang);
  
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  if (lang === 'ar') {
    document.body.classList.add('rtl-mode');
  } else {
    document.body.classList.remove('rtl-mode');
  }
  
  updateDOMTranslations();
  
  // Dispatch custom event for pages with custom renderers
  window.dispatchEvent(new CustomEvent('velor:langChange', { detail: { lang } }));
}

function toggleLanguage() {
  const newLang = currentLanguage === 'en' ? 'ar' : 'en';
  setLanguage(newLang);
}

function updateDOMTranslations() {
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });
  
  // Translate placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // Translate titles with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(key));
  });

  // Update language toggle button text if present
  const langToggleBtns = document.querySelectorAll('.velor-lang-toggle');
  langToggleBtns.forEach(btn => {
    btn.textContent = t('langSwitchText');
  });
}

// Initialise language on load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLanguage);
});

