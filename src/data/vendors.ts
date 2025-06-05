
import { Vendor } from '@/types/vendor';

export const sampleVendors: Vendor[] = [
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
  }
];

export const vendorCategories = [
  { id: 'venues', name: 'Venues', icon: '🏛️' },
  { id: 'photographers', name: 'Photography', icon: '📸' },
  { id: 'catering', name: 'Catering', icon: '🍽️' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎵' },
  { id: 'beauty', name: 'Beauty', icon: '💄' },
  { id: 'bakeries', name: 'Bakeries', icon: '🎂' },
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
