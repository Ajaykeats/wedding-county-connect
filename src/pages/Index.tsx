
import { useState, useMemo } from 'react';
import { Vendor, VendorFilters as FilterType } from '@/types/vendor';
import { sampleVendors, vendorCategories } from '@/data/vendors';
import Header from '@/components/Header';
import VendorFilters from '@/components/VendorFilters';
import VendorCard from '@/components/VendorCard';
import VendorModal from '@/components/VendorModal';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Star } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterType>({});
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter vendors based on search and filters
  const filteredVendors = useMemo(() => {
    return sampleVendors.filter(vendor => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          vendor.name.toLowerCase().includes(query) ||
          vendor.description.toLowerCase().includes(query) ||
          vendor.services.some(service => service.toLowerCase().includes(query)) ||
          vendor.tags.some(tag => tag.toLowerCase().includes(query));
        
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && vendor.category !== filters.category) {
        return false;
      }

      // Service area filter
      if (filters.serviceArea && !vendor.serviceArea.includes(filters.serviceArea)) {
        return false;
      }

      // Price range filter
      if (filters.priceRange && filters.priceRange.length > 0) {
        if (!filters.priceRange.includes(vendor.priceRange)) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, filters]);

  const handleViewDetails = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVendor(null);
  };

  const featuredVendors = filteredVendors.filter(vendor => vendor.featured);
  const regularVendors = filteredVendors.filter(vendor => !vendor.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      {/* Hero Section */}
      <section className="wedding-gradient text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Find Your Perfect
            <br />
            Wedding Vendors
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Discover the best wedding professionals in Wellington County, Guelph, Kitchener, Waterloo, and Cambridge
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center text-white/90">
              <Star className="h-5 w-5 mr-2" />
              <span>Top-Rated Vendors</span>
            </div>
            <div className="flex items-center text-white/90">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Local Professionals</span>
            </div>
            <div className="flex items-center text-white/90">
              <Heart className="h-5 w-5 mr-2" />
              <span>Verified Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {vendorCategories.slice(0, 10).map((category) => (
              <button
                key={category.id}
                onClick={() => setFilters({ ...filters, category: category.id as any })}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-wedding-pink hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-gray-900 group-hover:text-wedding-pink transition-colors">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <VendorFilters filters={filters} onFiltersChange={setFilters} />

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900">
                Wedding Vendors
                {(searchQuery || Object.keys(filters).length > 0) && (
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    ({filteredVendors.length} found)
                  </span>
                )}
              </h2>
              {searchQuery && (
                <p className="text-gray-600 mt-1">
                  Results for "{searchQuery}"
                </p>
              )}
            </div>
          </div>

          {/* Featured Vendors */}
          {featuredVendors.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-display font-semibold text-gray-900">Featured Vendors</h3>
                <Badge className="ml-3 bg-wedding-pink hover:bg-wedding-rose">
                  Premium
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredVendors.map((vendor) => (
                  <VendorCard
                    key={vendor.id}
                    vendor={vendor}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Regular Vendors */}
          {regularVendors.length > 0 && (
            <div>
              {featuredVendors.length > 0 && (
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
                  All Vendors
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularVendors.map((vendor) => (
                  <VendorCard
                    key={vendor.id}
                    vendor={vendor}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredVendors.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💐</div>
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                No vendors found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all vendors
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilters({});
                }}
                className="text-wedding-pink hover:text-wedding-rose font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Vendor Details Modal */}
      <VendorModal
        vendor={selectedVendor}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
