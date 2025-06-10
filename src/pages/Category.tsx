
import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import VendorFilters from '@/components/VendorFilters';
import SEOVendorCard from '@/components/SEOVendorCard';
import VendorModal from '@/components/VendorModal';
import { vendors } from '@/data/vendors';
import { Vendor, VendorCategory } from '@/types/vendor';
import { VendorFilters as FilterType } from '@/types/vendor';
import { MapPin, Star, Users, Award, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categoryLabels: Record<VendorCategory, string> = {
  venues: 'Wedding Venues',
  photographers: 'Wedding Photographers',
  catering: 'Wedding Catering',
  entertainment: 'Wedding Entertainment',
  beauty: 'Beauty & Grooming',
  bakeries: 'Wedding Bakeries',
  bridal: 'Bridal Shops',
  flowers: 'Florists',
  transportation: 'Transportation',
  rentals: 'Equipment Rentals',
  planning: 'Wedding Planners'
};

const categoryDescriptions: Record<VendorCategory, string> = {
  venues: 'Find the perfect wedding venue in Wellington County for your special day.',
  photographers: 'Professional wedding photographers capturing your precious moments.',
  catering: 'Delicious wedding catering services for every taste and budget.',
  entertainment: 'Wedding DJs, musicians, and entertainment to keep your guests dancing.',
  beauty: 'Professional beauty services and grooming for your wedding day.',
  bakeries: 'Custom wedding cakes and desserts from local bakeries.',
  bridal: 'Beautiful wedding dresses and bridal accessories.',
  flowers: 'Stunning wedding flowers and floral arrangements.',
  transportation: 'Wedding transportation services for you and your guests.',
  rentals: 'Wedding equipment and furniture rentals.',
  planning: 'Professional wedding planners to make your day perfect.'
};

const Category = () => {
  const { category } = useParams<{ category: VendorCategory }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterType>({ category });
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const categoryVendors = useMemo(() => {
    return vendors.filter(vendor => {
      if (category && vendor.category !== category) return false;
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = vendor.name.toLowerCase().includes(query) || 
                            vendor.description.toLowerCase().includes(query) || 
                            vendor.services.some(service => service.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      if (filters.serviceArea && !vendor.serviceArea.includes(filters.serviceArea)) {
        return false;
      }

      if (filters.priceRange && filters.priceRange.length > 0) {
        if (!filters.priceRange.includes(vendor.priceRange)) {
          return false;
        }
      }
      
      return true;
    });
  }, [category, searchQuery, filters]);

  if (!category || !categoryLabels[category]) {
    return <div>Category not found</div>;
  }

  const categoryTitle = categoryLabels[category];
  const categoryDescription = categoryDescriptions[category];
  const topCities = ['Cambridge', 'Kitchener', 'Waterloo', 'Guelph'];

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryTitle} in Wellington County`,
    "description": categoryDescription,
    "url": `https://yoursite.com/category/${category}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": categoryVendors.length,
      "itemListElement": categoryVendors.map((vendor, index) => ({
        "@type": "LocalBusiness",
        "position": index + 1,
        "name": vendor.name,
        "description": vendor.description,
        "address": vendor.address,
        "telephone": vendor.phone,
        "url": vendor.website,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": vendor.rating,
          "reviewCount": vendor.reviewCount
        },
        "priceRange": vendor.priceRange
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>{categoryTitle} in Wellington County | Top Wedding Vendors</title>
        <meta name="description" content={`Find the best ${categoryTitle.toLowerCase()} in Cambridge, Kitchener, Waterloo & Guelph. Compare ${categoryVendors.length}+ verified wedding vendors with reviews and pricing.`} />
        <meta name="keywords" content={`${categoryTitle}, wedding ${category}, Wellington County, Cambridge, Kitchener, Waterloo, Guelph, wedding vendors`} />
        <link rel="canonical" href={`https://yoursite.com/category/${category}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
        
        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-wedding-pink">Home</Link>
            <span>/</span>
            <span className="text-wedding-deep-rose font-medium">{categoryTitle}</span>
          </nav>

          {/* Back Button */}
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-wedding-pink/30 text-wedding-deep-rose hover:bg-wedding-pink hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Vendors
            </Button>
          </div>

          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold wedding-text-gradient mb-4">
              {categoryTitle} in Wellington County
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              {categoryDescription} Browse our curated selection of {categoryVendors.length} verified vendors in Cambridge, Kitchener, Waterloo, and Guelph.
            </p>
            
            {/* Service Areas */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {topCities.map(city => (
                <span key={city} className="px-3 py-1 bg-wedding-blush/50 text-wedding-deep-rose rounded-full text-sm font-medium">
                  {city}
                </span>
              ))}
            </div>

            {/* Category Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="glass-card p-4 rounded-lg text-center">
                <Users className="h-6 w-6 text-wedding-pink mx-auto mb-1" />
                <p className="text-lg font-bold wedding-text-gradient">{categoryVendors.length}+</p>
                <p className="text-sm text-gray-600">Vendors</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <Star className="h-6 w-6 text-wedding-pink mx-auto mb-1" />
                <p className="text-lg font-bold wedding-text-gradient">4.8+</p>
                <p className="text-sm text-gray-600">Avg Rating</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <MapPin className="h-6 w-6 text-wedding-pink mx-auto mb-1" />
                <p className="text-lg font-bold wedding-text-gradient">4</p>
                <p className="text-sm text-gray-600">Cities</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <Award className="h-6 w-6 text-wedding-pink mx-auto mb-1" />
                <p className="text-lg font-bold wedding-text-gradient">Verified</p>
                <p className="text-sm text-gray-600">Reviews</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <VendorFilters filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                {categoryVendors.length} {categoryTitle} Found
              </h2>
              <p className="text-gray-600">
                {searchQuery && (
                  <span>Results for "<span className="font-semibold text-wedding-pink">{searchQuery}</span>" • </span>
                )}
                Showing verified vendors in Wellington County
              </p>
            </div>
          </div>

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categoryVendors.map((vendor, index) => (
              <SEOVendorCard 
                key={vendor.id}
                vendor={vendor} 
                onClick={() => setSelectedVendor(vendor)}
                position={index + 1}
              />
            ))}
          </div>

          {/* No Results */}
          {categoryVendors.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-display font-semibold text-gray-700 mb-2">
                  No {categoryTitle.toLowerCase()} found
                </h3>
                <p className="text-gray-500 text-lg mb-6">
                  Try adjusting your filters or search terms.
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({ category });
                  }}
                  className="wedding-button-primary"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}

          {/* SEO Content Section */}
          <section className="mt-16 prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold wedding-text-gradient mb-6">
              Why Choose {categoryTitle} in Wellington County?
            </h2>
            <div className="glass-card p-8 rounded-xl">
              <p className="text-gray-700 mb-4">
                Wellington County offers some of the finest {categoryTitle.toLowerCase()} in Ontario. 
                Our featured vendors serve Cambridge, Kitchener, Waterloo, and Guelph, providing 
                exceptional service for your special day.
              </p>
              <p className="text-gray-700">
                Each vendor is carefully vetted and comes with verified reviews from real couples. 
                Compare pricing, services, and availability to find the perfect match for your wedding.
              </p>
            </div>
          </section>
        </main>

        {/* Vendor Modal */}
        <VendorModal 
          vendor={selectedVendor} 
          isOpen={!!selectedVendor} 
          onClose={() => setSelectedVendor(null)} 
        />
      </div>
    </>
  );
};

export default Category;
