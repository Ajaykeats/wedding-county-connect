
import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import VendorFilters from '@/components/VendorFilters';
import VendorCard from '@/components/VendorCard';
import VendorModal from '@/components/VendorModal';
import { vendors } from '@/data/vendors';
import { Vendor } from '@/types/vendor';
import { VendorFilters as FilterType } from '@/types/vendor';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterType>({});
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          vendor.name.toLowerCase().includes(query) ||
          vendor.description.toLowerCase().includes(query) ||
          vendor.services.some(service => service.toLowerCase().includes(query));
        
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && vendor.category !== filters.category) {
        return false;
      }

      // Service area filter
      if (filters.serviceArea && !vendor.serviceAreas.includes(filters.serviceArea)) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold wedding-text-gradient mb-4">
            Find Your Perfect Wedding Vendors
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing wedding professionals in Wellington County. From photographers to venues, 
            we'll help you create your dream wedding.
          </p>
        </div>

        {/* Filters */}
        <VendorFilters 
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              onClick={() => setSelectedVendor(vendor)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No vendors found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </main>

      {/* Vendor Modal */}
      <VendorModal
        vendor={selectedVendor}
        isOpen={!!selectedVendor}
        onClose={() => setSelectedVendor(null)}
      />
    </div>
  );
};

export default Index;
