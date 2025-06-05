
export interface Vendor {
  id: string;
  name: string;
  category: VendorCategory;
  serviceArea: string[];
  description: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  services: string[];
  priceRange: PriceRange;
  logoUrl: string;
  galleryUrls: string[];
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  rating: number;
  reviewCount: number;
  featured: boolean;
  tags: string[];
}

export type VendorCategory = 
  | 'venues'
  | 'photographers'
  | 'catering'
  | 'entertainment'
  | 'beauty'
  | 'bakeries'
  | 'flowers'
  | 'transportation'
  | 'rentals'
  | 'planning';

export type PriceRange = '$' | '$$' | '$$$' | '$$$$';

export interface VendorFilters {
  category?: VendorCategory;
  serviceArea?: string;
  priceRange?: PriceRange[];
  search?: string;
}
