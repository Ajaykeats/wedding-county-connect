import { Vendor } from '@/types/vendor';

export const vendors: Vendor[] = [
  {
    id: '1',
    name: 'Elegant Manor Estates',
    category: 'venues',
    serviceArea: ['Guelph', 'Wellington County'],
    description: 'A stunning historic manor offering breathtaking wedding venues with manicured gardens and elegant ballrooms.',
    address: '123 Manor Drive, Guelph, ON',
    phone: '(519) 555-0123',
    website: 'https://elegantmanor.ca',
    email: 'info@elegantmanor.ca',
    services: ['Wedding Ceremonies', 'Receptions', 'Bridal Suites', 'Catering Services'],
    priceRange: '$$$$',
    logoUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=200&h=200&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/elegantmanor',
      facebook: 'https://facebook.com/elegantmanor'
    },
    rating: 4.9,
    reviewCount: 127,
    featured: true,
    tags: ['luxury', 'historic', 'gardens', 'elegant']
  },
  {
    id: '2',
    name: 'Luminous Photography',
    category: 'photographers',
    serviceArea: ['Guelph', 'Kitchener', 'Waterloo'],
    description: 'Award-winning wedding photographers specializing in romantic, timeless imagery that captures your special day.',
    address: '456 Studio Lane, Waterloo, ON',
    phone: '(519) 555-0456',
    website: 'https://luminousphoto.ca',
    email: 'hello@luminousphoto.ca',
    services: ['Wedding Photography', 'Engagement Sessions', 'Bridal Portraits', 'Photo Albums'],
    priceRange: '$$$',
    logoUrl: 'https://images.unsplash.com/photo-1554048612-b6a482b224ec?w=200&h=200&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/luminousphoto',
      facebook: 'https://facebook.com/luminousphoto'
    },
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    tags: ['romantic', 'candid', 'artistic', 'professional']
  },
  {
    id: '3',
    name: 'Harvest Table Catering',
    category: 'catering',
    serviceArea: ['Guelph', 'Cambridge', 'Wellington County'],
    description: 'Farm-to-table wedding catering featuring locally sourced ingredients and seasonal menus.',
    address: '789 Farm Road, Cambridge, ON',
    phone: '(519) 555-0789',
    website: 'https://harvesttable.ca',
    email: 'catering@harvesttable.ca',
    services: ['Wedding Catering', 'Cocktail Hours', 'Plated Dinners', 'Buffet Service'],
    priceRange: '$$',
    logoUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=200&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/harvesttable'
    },
    rating: 4.7,
    reviewCount: 156,
    featured: false,
    tags: ['farm-to-table', 'local', 'seasonal', 'organic']
  },
  {
    id: '4',
    name: 'Melody & Motion Entertainment',
    category: 'entertainment',
    serviceArea: ['Kitchener', 'Waterloo', 'Guelph'],
    description: 'Professional wedding DJs and live music ensembles creating unforgettable celebrations.',
    address: '321 Music Square, Kitchener, ON',
    phone: '(519) 555-0321',
    website: 'https://melodymotion.ca',
    email: 'bookings@melodymotion.ca',
    services: ['DJ Services', 'Live Bands', 'Ceremony Music', 'Lighting'],
    priceRange: '$$$',
    logoUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/melodymotion',
      facebook: 'https://facebook.com/melodymotion'
    },
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    tags: ['professional', 'experienced', 'versatile', 'entertainment']
  },
  {
    id: '5',
    name: 'Blush Beauty Studio',
    category: 'beauty',
    serviceArea: ['Guelph', 'Wellington County'],
    description: 'Bridal beauty specialists offering hair styling, makeup artistry, and spa services.',
    address: '654 Beauty Boulevard, Guelph, ON',
    phone: '(519) 555-0654',
    website: 'https://blushbeauty.ca',
    email: 'studio@blushbeauty.ca',
    services: ['Bridal Makeup', 'Hair Styling', 'Spa Services', 'Trial Sessions'],
    priceRange: '$$',
    logoUrl: 'https://images.unsplash.com/photo-1560869713-bf165a5e70ce?w=200&h=200&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1560869713-bf165a5e70ce?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/blushbeauty'
    },
    rating: 4.8,
    reviewCount: 94,
    featured: false,
    tags: ['bridal', 'makeup', 'hair', 'beauty']
  },
  {
    id: '6',
    name: 'Sweet Dreams Bakery',
    category: 'bakeries',
    serviceArea: ['Waterloo', 'Kitchener', 'Cambridge'],
    description: 'Custom wedding cakes and desserts crafted with passion and the finest ingredients.',
    address: '987 Sweet Street, Waterloo, ON',
    phone: '(519) 555-0987',
    website: 'https://sweetdreamsbakery.ca',
    email: 'orders@sweetdreamsbakery.ca',
    services: ['Wedding Cakes', 'Cupcakes', 'Dessert Tables', 'Custom Designs'],
    priceRange: '$$',
    logoUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop',
    galleryUrls: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/sweetdreamsbakery',
      facebook: 'https://facebook.com/sweetdreamsbakery'
    },
    rating: 4.9,
    reviewCount: 178,
    featured: true,
    tags: ['custom', 'delicious', 'artistic', 'wedding-cakes']
  },
  // NEW BAKERIES
  {
    id: 'bakery-1',
    name: 'The Bake Shop On Main',
    category: 'bakeries',
    serviceArea: ['Cambridge', 'Kitchener', 'Waterloo'],
    description: 'Scratch bakery with no preservatives, using local ingredients',
    address: '89 Main Street, Unit 107, Cambridge, ON N1R 1W1',
    phone: '(519) 620-8585',
    website: 'https://thebakeshoponmain.com',
    email: 'info@thebakeshoponmain.com',
    services: ['Wedding Cakes', 'Custom Cupcakes', 'Candy Buffets'],
    priceRange: '$$$',
    logoUrl: 'https://thebakeshoponmain.com/wp-content/uploads/2019/04/cropped-LOGO-BakeShop-No-back.jpg',
    galleryUrls: [
      'https://thebakeshoponmain.com/wp-content/uploads/2016/03/Orange-Roses-scaled.jpg',
      'https://thebakeshoponmain.com/wp-content/uploads/2016/03/IMG_1325-scaled.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/thebakeshoponmain'
    },
    rating: 4.8,
    reviewCount: 156,
    featured: false,
    tags: ['scratch-bakery', 'local-ingredients']
  },
  {
    id: 'bakery-2',
    name: 'Reids Chocolate',
    category: 'bakeries',
    serviceArea: ['Cambridge', 'Guelph', 'Kitchener'],
    description: 'Handmade chocolates since 1948',
    address: '42 Ainslie Street North, Cambridge, ON N1R 6J6',
    phone: '(519) 621-6988',
    website: 'https://reidchocolates.com',
    email: 'info@reidchocolates.com',
    services: ['Wedding Favors', 'Custom Chocolates', 'Candy Buffets'],
    priceRange: '$$',
    logoUrl: 'https://reidchocolates.com/assets/images/reids-logo.svg',
    galleryUrls: [
      'https://reidchocolates.com/assets/images/chocolate-selection.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/reidschocolate'
    },
    rating: 4.9,
    reviewCount: 203,
    featured: true,
    tags: ['family-owned', 'handmade-chocolates']
  },
  {
    id: 'bakery-3',
    name: "Nidha's Treat",
    category: 'bakeries',
    serviceArea: ['Cambridge', 'Kitchener', 'Guelph'],
    description: '2023 CommunityVotes winner for eggless/halal treats',
    address: '273 Mcmeeken Drive, Cambridge, ON N3C 4N7',
    phone: '(647) 548-8428',
    website: 'https://nidhastreat.ca',
    email: 'info@nidhastreat.ca',
    services: ['Vegan Cakes', 'Sugar-Free Cakes', 'Halal Desserts'],
    priceRange: '$$',
    logoUrl: 'https://nidhastreat.ca/wp-content/uploads/2020/12/nidha-real-logo.jpg',
    galleryUrls: [
      'https://nidhastreat.ca/wp-content/uploads/2023/03/custom-fondant-cake.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/nidhastreat'
    },
    rating: 4.7,
    reviewCount: 89,
    featured: false,
    tags: ['eggless-specialty', 'halal']
  },
  {
    id: 'bakery-4',
    name: 'LenJo Bakes',
    category: 'bakeries',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge'],
    description: 'Award-winning bakery featured on Food Network',
    address: '132 Ahrens St W, Kitchener, ON N2H 4C3',
    phone: '(519) 570-4653',
    website: 'https://lenjobakes.com',
    email: 'info@lenjobakes.com',
    services: ['Wedding Cakes', 'Dessert Tables', 'Custom Cakes'],
    priceRange: '$$$',
    logoUrl: 'https://lenjobakes.com/wp-content/uploads/2023/02/LenJo-Website-Logo.png',
    galleryUrls: [
      'https://lenjobakes.com/wp-content/uploads/2017/03/Slider-Template.png'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/lenjobakes'
    },
    rating: 4.9,
    reviewCount: 142,
    featured: true,
    tags: ['award-winning', 'food-network']
  },
  {
    id: 'bakery-5',
    name: 'Design Me A Cupcake',
    category: 'bakeries',
    serviceArea: ['Cambridge', 'Kitchener', 'Waterloo'],
    description: 'Municipal-licensed studio with 12+ years experience',
    address: '16 Bowie Dr., Cambridge, ON N3C 2A6',
    phone: '(519) 624-0880',
    website: 'https://designmeacupcake.com',
    email: 'info@designmeacupcake.com',
    services: ['Custom Wedding Cakes', 'Cupcakes', 'Cookies'],
    priceRange: '$$',
    logoUrl: 'https://designmeacupcake.com/logo.png',
    galleryUrls: [
      'https://designmeacupcake.com/gallery1.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/designmeacupcake'
    },
    rating: 4.6,
    reviewCount: 78,
    featured: false,
    tags: ['licensed-bakery', 'custom-designs']
  },
  {
    id: 'bakery-6',
    name: 'Dash of Delicious',
    category: 'bakeries',
    serviceArea: ['Waterloo', 'Kitchener', 'Cambridge'],
    description: 'Custom celebration and wedding cakes with conscious ingredients',
    address: 'Waterloo, ON',
    phone: '(519) 886-3287',
    website: 'https://www.dashhofdelicious.com',
    email: 'info@dashhofdelicious.com',
    services: ['Wedding Cakes', 'Custom Cupcakes', 'Pressed Flower Cakes'],
    priceRange: '$$$',
    logoUrl: 'https://static.wixstatic.com/media/ba9f04_f52d93a4897446ff9860f007bf33eb61~mv2.png',
    galleryUrls: [
      'https://static.wixstatic.com/media/ba9f04_e5ba1620507f4bb09807971c5455b4a1~mv2.png',
      'https://static.wixstatic.com/media/ba9f04_fa2b88108b1b48ad815f30a6f7019013~mv2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/dashhofdelicious'
    },
    rating: 4.8,
    reviewCount: 93,
    featured: false,
    tags: ['custom-cakes', 'conscious-ingredients', 'pressed-flowers']
  },
  {
    id: 'bakery-7',
    name: 'The Cakery Zone',
    category: 'bakeries',
    serviceArea: ['Waterloo', 'Kitchener', 'Cambridge'],
    description: 'Custom cake studio specializing in elegant celebration cakes',
    address: 'Waterloo, ON',
    phone: '(519) 886-2253',
    website: 'https://www.thecakeryzone.ca',
    email: 'info@thecakeryzone.ca',
    services: ['Wedding Cakes', 'Custom Cupcakes', 'Chocolate Treats'],
    priceRange: '$$$',
    logoUrl: 'https://www.thecakeryzone.ca/logo.png',
    galleryUrls: [
      'https://www.thecakeryzone.ca/gallery1.jpg',
      'https://www.thecakeryzone.ca/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/thecakeryzone'
    },
    rating: 4.7,
    reviewCount: 67,
    featured: false,
    tags: ['custom-studio', 'elegant-cakes', 'chocolate-treats']
  },
  {
    id: 'bakery-8',
    name: 'Guelph Cake Studio',
    category: 'bakeries',
    serviceArea: ['Guelph', 'Kitchener', 'Cambridge'],
    description: 'Artisan bakery specializing in custom occasion and wedding cakes',
    address: '111 MacDonnell Street, Guelph, ON N1H 2Z2',
    phone: '(519) 824-2253',
    website: 'https://guelphcakestudio.ca',
    email: 'info@guelphcakestudio.ca',
    services: ['Wedding Cakes', 'Special Occasion Cakes', 'Custom Designs'],
    priceRange: '$$$',
    logoUrl: 'https://guelphcakestudio.ca/logo.png',
    galleryUrls: [
      'https://guelphcakestudio.ca/gallery1.jpg',
      'https://guelphcakestudio.ca/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/guelphcakestudio'
    },
    rating: 4.8,
    reviewCount: 124,
    featured: false,
    tags: ['artisan-bakery', 'custom-designs', 'special-occasions']
  },
  {
    id: 'bakery-9',
    name: 'Waterloo Artisan Bakery',
    category: 'bakeries',
    serviceArea: ['Waterloo', 'Kitchener'],
    description: 'European-style bakery with handcrafted wedding cakes',
    address: '85 King St S, Waterloo, ON N2J 1P2',
    phone: '(519) 886-2873',
    website: 'https://waterlooartisanbakery.ca',
    email: 'info@waterlooartisanbakery.ca',
    services: ['Wedding Cakes', 'Artisan Pastries', 'Custom Desserts'],
    priceRange: '$$',
    logoUrl: 'https://waterlooartisanbakery.ca/logo.png',
    galleryUrls: [
      'https://waterlooartisanbakery.ca/gallery1.jpg',
      'https://waterlooartisanbakery.ca/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/waterlooartisanbakery'
    },
    rating: 4.6,
    reviewCount: 85,
    featured: false,
    tags: ['european-style', 'handcrafted', 'artisan-pastries']
  },
  {
    id: 'bakery-10',
    name: 'Cambridge Custom Cakes',
    category: 'bakeries',
    serviceArea: ['Cambridge', 'Kitchener', 'Guelph'],
    description: 'Boutique cake studio creating unique wedding and celebration cakes',
    address: '150 Main St, Cambridge, ON N1R 1W6',
    phone: '(519) 623-2253',
    website: 'https://cambridgecustomcakes.ca',
    email: 'info@cambridgecustomcakes.ca',
    services: ['Wedding Cakes', 'Tiered Cakes', 'Fondant Designs'],
    priceRange: '$$$',
    logoUrl: 'https://cambridgecustomcakes.ca/logo.png',
    galleryUrls: [
      'https://cambridgecustomcakes.ca/gallery1.jpg',
      'https://cambridgecustomcakes.ca/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/cambridgecustomcakes'
    },
    rating: 4.9,
    reviewCount: 112,
    featured: false,
    tags: ['boutique-studio', 'tiered-cakes', 'fondant-designs']
  },
  {
    id: 'bakery-11',
    name: 'Sweet Flour Bake Shop',
    category: 'bakeries',
    serviceArea: ['Waterloo', 'Kitchener', 'Guelph'],
    description: 'Gourmet bakery with same-day delivery to KW region',
    address: '350 Dutton Dr, Waterloo, ON N2L 6B2',
    phone: '(416) 824-0130',
    website: 'https://sweetflour.ca',
    email: 'info@sweetflour.ca',
    services: ['Wedding Cookies', 'Cupcakes', 'Dessert Bars'],
    priceRange: '$$$',
    logoUrl: 'https://sweetflour.ca/cdn/shop/files/Sweet_Flour_Logo_-_full.png',
    galleryUrls: [
      'https://sweetflour.ca/cdn/shop/files/Father_s_Day_Cookie_Cake.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/sweetflourbakeshop'
    },
    rating: 4.7,
    reviewCount: 134,
    featured: false,
    tags: ['gourmet-cookies', 'same-day-delivery']
  },
  // NEW BEAUTY SERVICES (including barber shops for groom services)
  {
    id: 'beauty-6',
    name: 'Fade Factori Barbershop',
    category: 'beauty',
    serviceArea: ['Cambridge', 'Kitchener', 'Waterloo'],
    description: 'Established 2014 with master barber Kevin Andrew (10+ years experience). Specializes in precision fades and traditional grooming.',
    address: '47 Water St N, Cambridge, ON N1R 1W1',
    phone: '(226) 240-5694',
    website: 'https://fadefactori.com',
    email: 'info@fadefactori.com',
    services: ["Men's Haircuts", 'Fades', 'Straight Razor Shaves', 'Hot Towel Services', 'Beard Trimming'],
    priceRange: '$$',
    logoUrl: 'https://fadefactori.com/wp-content/uploads/2019/02/cropped-Fade-Factori-Logo-Horizontal-1.png',
    galleryUrls: [
      'https://fadefactori.com/wp-content/uploads/2019/01/fade-factori-scissor-cut-01.jpg',
      'https://fadefactori.com/wp-content/uploads/2019/01/fade-factori-fade-01.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/fadefactori'
    },
    rating: 4.8,
    reviewCount: 187,
    featured: false,
    tags: ['master-barber', 'precision-fades', 'straight-razor']
  },
  {
    id: 'beauty-7',
    name: 'King Cuts Barber Studio',
    category: 'beauty',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge'],
    description: "Modern traditional barbershop with Fade Master Academy-certified barbers. Features the 'King's Package' with hot towel treatment.",
    address: '866 Frederick Street, Kitchener, ON N2B 2B8',
    phone: '(226) 501-9463',
    website: 'https://kingcuts.ca',
    email: 'info@kingcuts.ca',
    services: ['Haircuts', 'Lineups', 'Beard Styling', 'Youth Cuts', 'Hot Towel Services'],
    priceRange: '$$',
    logoUrl: 'https://kingcuts.ca/assets/logo.png',
    galleryUrls: [
      'https://kingcuts.ca/gallery/fade1.jpg',
      'https://kingcuts.ca/gallery/beard2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/tylerthe_barber'
    },
    rating: 4.9,
    reviewCount: 156,
    featured: false,
    tags: ['modern-traditional', 'groomsmen-grooming', 'hot-towel']
  },
  {
    id: 'beauty-8',
    name: "Bogart's Hair Salon | Modern Barbershop",
    category: 'beauty',
    serviceArea: ['Waterloo', 'Kitchener', 'Cambridge'],
    description: 'Family-owned since 2005 with 25+ years expertise. Offers scalp massages and precision cuts.',
    address: '370 Eastbridge Blvd, Waterloo, ON N2K 4P1',
    phone: '(519) 747-7799',
    website: 'https://bogartshair.com',
    email: 'info@bogartshair.com',
    services: ["Men's Haircuts", 'Beard Trims', 'Quick Cleanups', 'Hair Styling'],
    priceRange: '$$',
    logoUrl: 'https://bogartshair.com/logo.png',
    galleryUrls: [
      'https://bogartshair.com/gallery/precision-cut.jpg',
      'https://bogartshair.com/gallery/beard-trim.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/bogartshairwaterloo'
    },
    rating: 4.7,
    reviewCount: 203,
    featured: false,
    tags: ['family-owned', 'scalp-massage', 'precision-cuts']
  },
  {
    id: 'beauty-9',
    name: 'Golden Scissors',
    category: 'beauty',
    serviceArea: ['Cambridge', 'Kitchener'],
    description: 'European-style barbershop with hand-painted murals and royal treatment. Specializes in vintage cuts.',
    address: '115 Main St, Cambridge, ON N1R 1V6',
    phone: '(519) 623-7380',
    website: 'https://goldenscissors.com',
    email: 'info@goldenscissors.com',
    services: ['Straight Razor Shaves', 'Classic Fades', 'Hair Coloring', 'Kids Cuts'],
    priceRange: '$$',
    logoUrl: 'https://goldenscissors.com/wp-content/uploads/2020/06/Golden-Scissors-gold-NEW.png',
    galleryUrls: [
      'https://goldenscissors.com/gallery/men2.jpg',
      'https://goldenscissors.com/gallery/interior1.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/_goldenscissors'
    },
    rating: 4.6,
    reviewCount: 98,
    featured: false,
    tags: ['european-style', 'vintage-cuts', 'hand-painted-murals']
  },
  {
    id: 'beauty-10',
    name: 'Le Barbershop',
    category: 'beauty',
    serviceArea: ['Kitchener', 'Waterloo'],
    description: 'Belmont Village hotspot blending traditional techniques with modern styles. Features online booking.',
    address: '684 Belmont Ave W, Unit 201, Kitchener, ON N2M 1N6',
    phone: '(226) 978-6074',
    website: 'https://lebarbershop.ca',
    email: 'info@lebarbershop.ca',
    services: ['Beard Designs', 'Scalp Micro Pigmentation', 'Grooming Products', 'Fades'],
    priceRange: '$$',
    logoUrl: 'https://lebarbershop.ca/logo.jpg',
    galleryUrls: [
      'https://lebarbershop.ca/gallery/design1.jpg',
      'https://lebarbershop.ca/gallery/studio2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/lebarbershopkitchener'
    },
    rating: 4.8,
    reviewCount: 142,
    featured: false,
    tags: ['online-booking', 'modern-traditional', 'belmont-village']
  },
  // NEW CATERING SERVICES
  {
    id: 'catering-1',
    name: 'Little Mushroom Catering',
    category: 'catering',
    serviceArea: ['Cambridge', 'Kitchener', 'Guelph'],
    description: 'Award-winning sustainable caterer using locally sourced ingredients. Specializes in dietary accommodations and creative menus.',
    address: '131 Sheldon Dr Unit 16, Cambridge, ON N1R 6S2',
    phone: '(226) 791-4537',
    website: 'https://littlemushroomcatering.ca',
    email: 'info@littlemushroomcatering.ca',
    services: ['Plated Dinners', 'Buffets', 'Vegan Options'],
    priceRange: '$$$',
    logoUrl: 'https://littlemushroomcatering.ca/wp-content/uploads/2024/01/lmc_logo.png',
    galleryUrls: [
      'https://littlemushroomcatering.ca/wp-content/uploads/2023/05/wedding-plated-dinner.jpg',
      'https://littlemushroomcatering.ca/wp-content/uploads/2023/05/charcuterie-display.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/littlemushroomcatering'
    },
    rating: 4.9,
    reviewCount: 178,
    featured: true,
    tags: ['sustainable-catering', 'local-ingredients', 'dietary-accommodations']
  },
  {
    id: 'catering-2',
    name: 'The Culinary Studio',
    category: 'catering',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge'],
    description: 'Chef-owned full-service catering with customizable wedding menus. 2023 WeddingWire Couples Choice Award winner.',
    address: '283 Duke St W, Kitchener, ON N2H 3X7',
    phone: '(519) 954-1557',
    website: 'https://theculinarystudio.ca',
    email: 'info@theculinarystudio.ca',
    services: ['Station Catering', 'Family Style', 'Late Night Bites'],
    priceRange: '$$$',
    logoUrl: 'https://theculinarystudio.ca/wp-content/uploads/2022/01/tcs_logo.svg',
    galleryUrls: [
      'https://theculinarystudio.ca/wp-content/uploads/2023/06/wedding-food-station.jpg',
      'https://theculinarystudio.ca/wp-content/uploads/2023/06/plated-dinner.jpg'
    ],
    socialMedia: {
      facebook: 'https://facebook.com/theculinarystudiocatering'
    },
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    tags: ['chef-owned', 'custom-menus', 'award-winning']
  },
  {
    id: 'catering-3',
    name: "Vincenzo's Catering",
    category: 'catering',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph'],
    description: 'Italian-inspired wedding catering since 1985. Famous for wood-fired stations and handmade pasta bars.',
    address: '1500 Weber St E, Kitchener, ON N2A 3Z3',
    phone: '(519) 742-6300',
    website: 'https://vincenzos.com',
    email: 'info@vincenzos.com',
    services: ['Pasta Stations', 'Wood-Fired Pizza', 'Antipasto Displays'],
    priceRange: '$$$',
    logoUrl: 'https://vincenzos.com/wp-content/uploads/2020/12/vincenzos-logo.png',
    galleryUrls: [
      'https://vincenzos.com/wp-content/uploads/2022/04/wedding-pasta-bar.jpg',
      'https://vincenzos.com/wp-content/uploads/2022/04/wedding-pizza-station.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/vincenzoscatering'
    },
    rating: 4.7,
    reviewCount: 234,
    featured: false,
    tags: ['italian-cuisine', 'wood-fired', 'handmade-pasta']
  },
  {
    id: 'catering-4',
    name: 'Guelph Family Catering',
    category: 'catering',
    serviceArea: ['Guelph', 'Kitchener', 'Waterloo'],
    description: 'Farm-to-table catering featuring seasonal Ontario ingredients. Specializes in rustic-chic wedding presentations.',
    address: '50 Stone Rd W, Guelph, ON N1G 2W1',
    phone: '(519) 265-2222',
    website: 'https://guelphfamilycatering.com',
    email: 'info@guelphfamilycatering.com',
    services: ['Family Style Meals', 'Harvest Tables', 'Dessert Stations'],
    priceRange: '$$$',
    logoUrl: 'https://guelphfamilycatering.com/wp-content/uploads/2021/03/gfc_logo.png',
    galleryUrls: [
      'https://guelphfamilycatering.com/wp-content/uploads/2023/08/farm-table-display.jpg',
      'https://guelphfamilycatering.com/wp-content/uploads/2023/08/seasonal-salad.jpg'
    ],
    socialMedia: {
      facebook: 'https://facebook.com/guelphfamilycatering'
    },
    rating: 4.6,
    reviewCount: 167,
    featured: false,
    tags: ['farm-to-table', 'seasonal-menus', 'rustic-presentation']
  },
  {
    id: 'catering-5',
    name: "Cameron's Seafood & Catering",
    category: 'catering',
    serviceArea: ['Waterloo', 'Kitchener', 'Cambridge'],
    description: 'Premium seafood and steak wedding catering with oyster bars and chef-carved stations.',
    address: '515 King St N, Waterloo, ON N2L 5W5',
    phone: '(519) 725-2222',
    website: 'https://cameronscatering.ca',
    email: 'info@cameronscatering.ca',
    services: ['Raw Bars', 'Carving Stations', 'Plated Surf & Turf'],
    priceRange: '$$$$',
    logoUrl: 'https://cameronscatering.ca/wp-content/uploads/2020/08/camerons-logo.png',
    galleryUrls: [
      'https://cameronscatering.ca/wp-content/uploads/2023/07/seafood-tower.jpg',
      'https://cameronscatering.ca/wp-content/uploads/2023/07/steak-carving.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/cameronscatering'
    },
    rating: 4.9,
    reviewCount: 198,
    featured: true,
    tags: ['seafood-specialists', 'premium-cuts', 'luxury-catering']
  },
  {
    id: 'catering-6',
    name: 'The Hungry Gnome',
    category: 'catering',
    serviceArea: ['Guelph', 'Kitchener'],
    description: 'Creative global fusion catering with interactive food stations. 2024 Best of Guelph winner.',
    address: '210 Silvercreek Pkwy N, Guelph, ON N1H 7Y4',
    phone: '(519) 265-4663',
    website: 'https://thehungrygnome.ca',
    email: 'info@thehungrygnome.ca',
    services: ['Taco Bars', 'Sushi Stations', 'Customizable Bowls'],
    priceRange: '$$',
    logoUrl: 'https://thehungrygnome.ca/wp-content/uploads/2021/05/gnome-logo.png',
    galleryUrls: [
      'https://thehungrygnome.ca/wp-content/uploads/2023/09/sushi-station.jpg',
      'https://thehungrygnome.ca/wp-content/uploads/2023/09/taco-bar.jpg'
    ],
    socialMedia: {
      facebook: 'https://facebook.com/thehungrygnomecatering'
    },
    rating: 4.5,
    reviewCount: 89,
    featured: false,
    tags: ['fusion-cuisine', 'interactive-stations', 'budget-friendly']
  },
  {
    id: 'catering-7',
    name: 'Cafe 22 Catering',
    category: 'catering',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge'],
    description: 'Modern Canadian cuisine with artisanal presentation. Offers full bar service and mixology packages.',
    address: '22 Ottawa St S, Kitchener, ON N2G 3S4',
    phone: '(519) 208-2222',
    website: 'https://cafe22.ca',
    email: 'info@cafe22.ca',
    services: ['Canapé Receptions', 'Wine Pairings', 'Craft Cocktails'],
    priceRange: '$$$$',
    logoUrl: 'https://cafe22.ca/wp-content/uploads/2022/02/cafe22-logo.png',
    galleryUrls: [
      'https://cafe22.ca/wp-content/uploads/2023/10/canape-display.jpg',
      'https://cafe22.ca/wp-content/uploads/2023/10/cocktail-bar.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/cafe22catering'
    },
    rating: 4.8,
    reviewCount: 156,
    featured: false,
    tags: ['artisanal-presentation', 'mixology', 'full-bar-service']
  },
  // NEW BRIDAL SHOPS (moved to bridal category)
  {
    id: 'bridal-1',
    name: "David's Bridal",
    category: 'bridal',
    serviceArea: ['Cambridge', 'Kitchener', 'Waterloo'],
    description: "North America's largest bridal retailer with inclusive sizing (0-30W). Designer gowns by Galina Signature and Oleg Cassini.",
    address: '70 Pinebush Rd Unit 5, Cambridge, ON N1R 8K5',
    phone: '(519) 623-4766',
    website: 'https://www.davidsbridal.com',
    email: 'cambridge@davidsbridal.com',
    services: ['Bridal gowns', 'veils', 'alterations', 'bridesmaid dresses'],
    priceRange: '$$$',
    logoUrl: 'https://cdn.davidsbridal.com/static/img/logo-header.svg',
    galleryUrls: [
      'https://cdn.davidsbridal.com/is/image/DavidBridal/2024_spring_collection',
      'https://cdn.davidsbridal.com/is/image/DavidBridal/plus_size_gowns'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/davidsbridal'
    },
    rating: 4.2,
    reviewCount: 342,
    featured: false,
    tags: ['inclusive-sizing', 'designer-gowns', 'on-site-alterations']
  },
  {
    id: 'bridal-2',
    name: 'Vona Bridal Boutique',
    category: 'bridal',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge'],
    description: 'Luxury bridal experience featuring Pronovias and Martina Liana collections. Private appointments with champagne service.',
    address: '357 King St E, Kitchener, ON N2G 2L3',
    phone: '(519) 208-5772',
    website: 'https://vonaa.ca',
    email: 'info@vonaa.ca',
    services: ['Custom gowns', 'accessories', 'preservation', 'bridal party styling'],
    priceRange: '$$$$',
    logoUrl: 'https://vonaa.ca/wp-content/uploads/2021/09/vona-logo.png',
    galleryUrls: [
      'https://vonaa.ca/wp-content/uploads/2022/03/gallery1.jpg',
      'https://vonaa.ca/wp-content/uploads/2022/03/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/vonabride'
    },
    rating: 4.9,
    reviewCount: 87,
    featured: true,
    tags: ['luxury-bridal', 'private-appointments', 'designer-collections']
  },
  {
    id: 'bridal-3',
    name: 'Best for Bride',
    category: 'bridal',
    serviceArea: ['Kitchener', 'Waterloo', 'Guelph'],
    description: 'Designer sample sale boutique with discounts up to 80% off retail. Specializes in Mori Lee and Sophia Tolli gowns.',
    address: '500 Fairway Rd S Unit B15, Kitchener, ON N2C 1X3',
    phone: '(519) 748-9311',
    website: 'https://www.bestforbride.com',
    email: 'info@bestforbride.com',
    services: ['Sample sales', 'custom orders', 'alterations', 'bridesmaid coordination'],
    priceRange: '$$',
    logoUrl: 'https://www.bestforbride.com/images/logo.png',
    galleryUrls: [
      'https://www.bestforbride.com/images/gallery1.jpg',
      'https://www.bestforbride.com/images/gallery2.jpg'
    ],
    socialMedia: {
      facebook: 'https://facebook.com/bestforbride'
    },
    rating: 4.5,
    reviewCount: 167,
    featured: false,
    tags: ['sample-sales', 'designer-discounts', 'alterations']
  },
  {
    id: 'bridal-4',
    name: 'The White Dress',
    category: 'bridal',
    serviceArea: ['Guelph', 'Wellington County'],
    description: 'Boutique specializing in sustainable bridal fashion featuring Canadian designers. Eco-conscious fabrics and local craftsmanship.',
    address: '42 Quebec St, Guelph, ON N1H 2T1',
    phone: '(519) 265-3663',
    website: 'https://thewhitedress.ca',
    email: 'info@thewhitedress.ca',
    services: ['Ethical gowns', 'custom design', 'veil customization', 'preservation'],
    priceRange: '$$$',
    logoUrl: 'https://thewhitedress.ca/wp-content/uploads/2021/05/logo.png',
    galleryUrls: [
      'https://thewhitedress.ca/wp-content/uploads/2023/02/gallery1.jpg',
      'https://thewhitedress.ca/wp-content/uploads/2023/02/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/thewhitedressguelph'
    },
    rating: 4.7,
    reviewCount: 93,
    featured: false,
    tags: ['sustainable-fashion', 'canadian-designers', 'eco-conscious']
  },
  {
    id: 'bridal-5',
    name: "Sophia's Bridal",
    category: 'bridal',
    serviceArea: ['Waterloo', 'Kitchener'],
    description: 'Curated selection of international designers including Enzoani and Justin Alexander. Trunk shows monthly.',
    address: '55 King St W, Waterloo, ON N2L 1A2',
    phone: '(519) 886-7333',
    website: 'https://sophiasbridal.ca',
    email: 'info@sophiasbridal.ca',
    services: ['Bridal gowns', 'mother-of-the-bride', 'accessories'],
    priceRange: '$$$$',
    logoUrl: 'https://sophiasbridal.ca/wp-content/uploads/2020/01/logo.png',
    galleryUrls: [
      'https://sophiasbridal.ca/wp-content/uploads/2023/01/gallery1.jpg',
      'https://sophiasbridal.ca/wp-content/uploads/2023/01/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/sophiasbridal'
    },
    rating: 4.8,
    reviewCount: 124,
    featured: false,
    tags: ['international-designers', 'trunk-shows', 'luxury-gowns']
  },
  {
    id: 'bridal-6',
    name: 'Blush Bridal',
    category: 'bridal',
    serviceArea: ['Cambridge', 'Kitchener'],
    description: 'Romantic boutique with bohemian and modern gowns. Offers in-house alterations and styling consultations.',
    address: '200 Hespeler Rd, Cambridge, ON N1R 6V7',
    phone: '(519) 621-9222',
    website: 'https://blushbridalboutique.ca',
    email: 'info@blushbridalboutique.ca',
    services: ['Boho gowns', 'veils', 'jewelry', 'alterations'],
    priceRange: '$$$',
    logoUrl: 'https://blushbridalboutique.ca/wp-content/uploads/2022/02/logo.png',
    galleryUrls: [
      'https://blushbridalboutique.ca/wp-content/uploads/2023/03/gallery1.jpg',
      'https://blushbridalboutique.ca/wp-content/uploads/2023/03/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/blushbridalca'
    },
    rating: 4.6,
    reviewCount: 78,
    featured: false,
    tags: ['boho-chic', 'styling-consultations', 'in-house-alterations']
  },
  {
    id: 'bridal-7',
    name: 'Lace & Love Bridal',
    category: 'bridal',
    serviceArea: ['Guelph', 'Kitchener'],
    description: 'Intimate boutique specializing in petite and plus-size bridal (sizes 0-32).',
    address: '123 Woolwich St, Guelph, ON N1H 3V1',
    phone: '(519) 821-7444',
    website: 'https://laceandlovebridal.com',
    email: 'info@laceandlovebridal.com',
    services: ['Petite gowns', 'plus-size bridal', 'custom sizing'],
    priceRange: '$$$',
    logoUrl: 'https://laceandlovebridal.com/wp-content/uploads/2021/08/logo.png',
    galleryUrls: [
      'https://laceandlovebridal.com/wp-content/uploads/2022/04/gallery1.jpg',
      'https://laceandlovebridal.com/wp-content/uploads/2022/04/gallery2.jpg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/laceandlovebridal'
    },
    rating: 4.8,
    reviewCount: 95,
    featured: false,
    tags: ['petite-bridal', 'plus-size', 'inclusive-sizing']
  },
  // NEW ENTERTAINMENT SERVICES
  {
    id: 'entertainment-5',
    name: 'DJ Vibe',
    category: 'entertainment',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph'],
    description: 'Professional wedding DJ service with modern sound systems',
    address: 'Kitchener, ON N2G 1A7',
    phone: '(519) 570-7890',
    website: 'https://www.bookdjvibe.com',
    email: 'info@bookdjvibe.com',
    services: ['Wedding DJ', 'Sound Systems', 'Lighting', 'MC Services'],
    priceRange: '$$$',
    logoUrl: 'https://www.bookdjvibe.com/wp-content/uploads/2021/02/Top-Logo.png',
    galleryUrls: [
      'https://www.bookdjvibe.com/wp-content/uploads/2020/09/KDP_2278-2-1024x683.jpg',
      'https://www.bookdjvibe.com/wp-content/uploads/2022/06/Amber-1.jpeg'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/djvibe'
    },
    rating: 4.7,
    reviewCount: 134,
    featured: false,
    tags: ['professional', 'modern', 'lighting']
  },
  {
    id: 'entertainment-6',
    name: 'Just Grin Photo Booth',
    category: 'entertainment',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge', 'Chatham'],
    description: 'Photo booth rentals for weddings and events',
    address: 'Kitchener, ON N2H 2M8',
    phone: '(519) 570-8901',
    website: 'https://justgrin.ca',
    email: 'info@justgrin.ca',
    services: ['Photo Booth Rental', 'Props', 'Custom Backdrops', 'Digital Gallery'],
    priceRange: '$$',
    logoUrl: 'https://justgrin.ca/wp-content/uploads/2016/08/Just-Grin-logo-FINAL-COLOUR-WHITE.png',
    galleryUrls: [
      'https://justgrin.ca/wp-content/uploads/2019/01/Photo-Booth-Button-Kitchener-Waterloo-Cambridge-Chatham.png'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/justgrinphotobooth'
    },
    rating: 4.6,
    reviewCount: 98,
    featured: false,
    tags: ['photo-booth', 'props', 'digital']
  },
  {
    id: 'entertainment-7',
    name: 'Just Grin Productions',
    category: 'entertainment',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph'],
    description: 'Family-operated entertainment company with 5.0 stars and 40 reviews, managed by Waylan, Allan, and Danielle Grin',
    address: '124 Connelly Drive, Kitchener, ON N2N 2V2',
    phone: '(519) 570-0123',
    website: 'https://weddingwire.ca/wedding-dj/just-grin-productions--e4558',
    email: 'info@justgrinproductions.ca',
    services: ['Wedding DJ Services', 'MC Services', 'Uplighting', 'Custom Spotlight', 'Dancing-on-a-Cloud', 'Photo Booth'],
    priceRange: '$$$',
    logoUrl: 'https://cdn0.weddingwire.ca/vendor/4558/3_2/960/jpg/packed-dance-floor_50_4558.jpeg',
    galleryUrls: [
      'https://cdn0.weddingwire.ca/vendor/4558/3_2/960/jpg/packed-dance-floor_50_4558.jpeg',
      'https://cdn0.weddingwire.ca/vendor/4558/3_2/960/jpg/circle-dance-floor_50_4558.jpeg'
    ],
    socialMedia: {},
    rating: 5.0,
    reviewCount: 40,
    featured: true,
    tags: ['5-stars', '40-reviews', 'family-operated', 'cdja-member']
  },
  {
    id: 'entertainment-8',
    name: 'DJing.ca',
    category: 'entertainment',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph'],
    description: 'Premium DJ service with 5.0 stars and 1 review serving Kitchener and surrounding areas',
    address: 'Kitchener, ON',
    phone: '(519) 570-0124',
    website: 'https://weddingwire.ca/wedding-dj/djing-ca--e72409',
    email: 'info@djing.ca',
    services: ['Wedding DJ Services', 'Professional Sound Systems', 'Lighting', 'MC Services', 'Event Entertainment'],
    priceRange: '$$$',
    logoUrl: 'https://cdn0.weddingwire.ca/vendor/2409/3_2/640/jpg/ezgif-com-webp-to-jpg-12_50_72409-170137977021248.jpeg',
    galleryUrls: [
      'https://cdn0.weddingwire.ca/vendor/2409/3_2/640/jpg/ezgif-com-webp-to-jpg-12_50_72409-170137977021248.jpeg'
    ],
    socialMedia: {},
    rating: 5.0,
    reviewCount: 1,
    featured: false,
    tags: ['5-stars', '1-review', 'premium-dj', 'professional-sound']
  },
  {
    id: 'entertainment-9',
    name: 'Adagio Strings',
    category: 'entertainment',
    serviceArea: ['Waterloo', 'Kitchener', 'Cambridge', 'Guelph', 'Hamilton', 'Burlington'],
    description: 'Professional violin duo featuring Matt Piche (two-time Juno nominee) and Emily Piche with 25 reviews',
    address: 'Waterloo, ON N2J 3A6',
    phone: '(519) 570-0126',
    website: 'https://weddingwire.ca/wedding-music/adagio-strings--e9274',
    email: 'info@adagiostrings.ca',
    services: ['Wedding Ceremony Music', 'Cocktail Hour Music', 'Reception Music', 'Custom Song Arrangements', 'Violin & Guitar Duo'],
    priceRange: '$$$',
    logoUrl: 'https://cdn0.weddingwire.ca/vendor/9274/3_2/960/jpg/13987377-10150707346494955-2642357781631612589-o_50_9274.jpeg',
    galleryUrls: [
      'https://cdn0.weddingwire.ca/vendor/9274/3_2/960/jpeg/attachment-1_50_9274.jpeg',
      'https://cdn0.weddingwire.ca/vendor/9274/3_2/960/jpg/mcw-f-83_50_9274-160182382966854.jpeg'
    ],
    socialMedia: {},
    rating: 4.9,
    reviewCount: 25,
    featured: true,
    tags: ['juno-nominee', 'professional', '25-reviews', 'violin-guitar-duo']
  },
  {
    id: 'entertainment-10',
    name: 'Strings and Ivory',
    category: 'entertainment',
    serviceArea: ['Waterloo', 'Kitchener', 'Cambridge', 'Guelph', 'London'],
    description: 'Musical duo based in Waterloo serving London, Kitchener, Cambridge, Guelph, and surrounding areas',
    address: 'Waterloo, ON',
    phone: '(519) 570-0129',
    website: 'https://weddingwire.ca/wedding-music/strings-and-ivory--e60207',
    email: 'info@stringsandivory.ca',
    services: ['Wedding Ceremony Music', 'Reception Music', 'String Performances', 'Custom Arrangements', 'Professional Musicians'],
    priceRange: '$$',
    logoUrl: 'https://cdn0.weddingwire.ca/vendor/0207/3_2/960/jpg/strings-and-ivory_50_60207.jpeg',
    galleryUrls: [
      'https://cdn0.weddingwire.ca/vendor/0207/3_2/960/jpg/strings-and-ivory_50_60207.jpeg'
    ],
    socialMedia: {},
    rating: 4.5,
    reviewCount: 12,
    featured: false,
    tags: ['musical-duo', 'waterloo-based', 'string-performances', 'professional-musicians']
  },
  {
    id: 'entertainment-11',
    name: 'PartyBooth Co.',
    category: 'entertainment',
    serviceArea: ['Guelph', 'Toronto', 'GTA', 'Mississauga', 'Kitchener', 'Waterloo', 'Cambridge', 'Hamilton', 'Milton'],
    description: 'Photo booth company with 5.0 star rating offering professional studio lighting and high-end cameras',
    address: '17 Jeffrey Drive, Guelph, ON N1E 0L6',
    phone: '(519) 570-0131',
    website: 'https://weddingwire.ca/photobooth/partybooth-co--e20943',
    email: 'info@partyboothco.ca',
    services: ['Open Air Photo Booth', 'Professional Studio Lighting', 'Touch Screen Interface', 'Social Media Integration', 'Custom Templates', 'Props & Backdrops'],
    priceRange: '$$',
    logoUrl: 'https://cdn0.weddingwire.ca/vendor/0943/3_2/960/jpg/21752083-724122377779145-5254633639547367982-n_50_20943.jpeg',
    galleryUrls: [
      'https://cdn0.weddingwire.ca/vendor/0943/3_2/960/jpg/37694360-884162255108489-3184233086183276544-n_50_20943.jpeg',
      'https://cdn0.weddingwire.ca/vendor/0943/3_2/960/jpg/29570611-809259225932126-6400432014205315556-n_50_20943.jpeg'
    ],
    socialMedia: {},
    rating: 5.0,
    reviewCount: 18,
    featured: false,
    tags: ['5-star-rating', 'professional-lighting', 'social-media-integration', 'custom-templates']
  },
  {
    id: 'entertainment-12',
    name: 'Jokic Music',
    category: 'entertainment',
    serviceArea: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph', 'Woodstock', 'Stratford'],
    description: 'Professional pianist and composer with 19 years experience and 5-star rating specializing in piano wedding music',
    address: '145 Oneida Place, Kitchener, ON N2A 3G3',
    phone: '(519) 570-0132',
    website: 'https://weddingwire.ca/wedding-music/jokic-music--e51801',
    email: 'info@jokicmusic.ca',
    services: ['Piano Ceremony Music', 'Cocktail Hour Music', 'Classical', 'Jazz', 'Folk', 'Pop', 'Custom Compositions', 'Solo Piano Background Music'],
    priceRange: '$$',
    logoUrl: 'https://cdn0.weddingwire.ca/vendor/1801/3_2/960/png/31175594-10211063598260247-8989226242536374272-n-1_50_51801.jpeg',
    galleryUrls: [
      'https://cdn0.weddingwire.ca/vendor/1801/3_2/960/jpg/img-2592_50_51801.jpeg'
    ],
    socialMedia: {},
    rating: 5.0,
    reviewCount: 8,
    featured: false,
    tags: ['19-years-experience', '5-star-rating', 'pianist-composer', 'custom-compositions']
  }
];

export const vendorCategories = [
  { id: 'venues', name: 'Venues', icon: '🏛️' },
  { id: 'photographers', name: 'Photography', icon: '📸' },
  { id: 'catering', name: 'Catering', icon: '🍽️' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎵' },
  { id: 'beauty', name: 'Beauty', icon: '💄' },
  { id: 'bakeries', name: 'Bakeries', icon: '🎂' },
  { id: 'bridal', name: 'Bridal', icon: '👰' },
  { id: 'flowers', name: 'Flowers', icon: '💐' },
  { id: 'transportation', name: 'Transportation', icon: '🚗' },
  { id: 'rentals', name: 'Rentals', icon: '🎪' },
  { id: 'planning', name: 'Planning', icon: '📋' }
] as const;

export const serviceAreas = [
  'Guelph',
  'Kitchener',
  'Waterloo',
  'Cambridge',
  'Wellington County'
];
