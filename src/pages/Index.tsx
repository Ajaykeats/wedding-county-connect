
import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import VendorFilters from '@/components/VendorFilters';
import VendorCard from '@/components/VendorCard';
import VendorModal from '@/components/VendorModal';
import CategoryGrid from '@/components/CategoryGrid';
import { vendors } from '@/data/vendors';
import { Vendor } from '@/types/vendor';
import { VendorFilters as FilterType } from '@/types/vendor';
import { Search, Star, MapPin, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterType>({});
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const navigate = useNavigate();

  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = vendor.name.toLowerCase().includes(query) || 
                            vendor.description.toLowerCase().includes(query) || 
                            vendor.services.some(service => service.toLowerCase().includes(query));
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

  const stats = [
    { icon: Users, label: 'Trusted Vendors', value: '150+' },
    { icon: Star, label: 'Happy Couples', value: '500+' },
    { icon: MapPin, label: 'Service Areas', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '10+' }
  ];

  const showFiltersAndResults = searchQuery || Object.keys(filters).length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold wedding-text-gradient mb-6 text-shadow">
            Find Your Perfect Wedding Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover amazing wedding professionals in Wellington County. From photographers to venues, 
            we'll help you create your dream wedding with confidence and style.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="wedding-button-primary text-lg px-8 py-4">
              <Search className="h-5 w-5 mr-2" />
              Browse Vendors
            </Button>
            <Button 
              className="wedding-button-secondary text-lg px-8 py-4"
              onClick={() => navigate('/budget')}
            >
              Plan Your Budget
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="glass-card p-6 rounded-xl text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-8 w-8 text-wedding-pink mx-auto mb-2" />
                  <p className="text-2xl font-bold wedding-text-gradient">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Grid - Show when no search/filters */}
        {!showFiltersAndResults && (
          <CategoryGrid />
        )}

        {/* Filters - Show when searching/filtering */}
        {showFiltersAndResults && (
          <div className="animate-slide-up mb-8">
            <VendorFilters filters={filters} onFiltersChange={setFilters} />
          </div>
        )}

        {/* Results Header - Show when searching/filtering */}
        {showFiltersAndResults && (
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <div>
              <p className="text-gray-600 text-lg">
                Showing <span className="font-semibold text-wedding-deep-rose">{filteredVendors.length}</span> vendor{filteredVendors.length !== 1 ? 's' : ''}
                {searchQuery && (
                  <span> for "<span className="font-semibold text-wedding-pink">{searchQuery}</span>"</span>
                )}
              </p>
            </div>
            
            {filteredVendors.length > 0 && (
              <Button 
                variant="outline"
                className="border-wedding-pink/30 text-wedding-deep-rose hover:bg-wedding-pink hover:text-white"
              >
                Sort by Rating
              </Button>
            )}
          </div>
        )}

        {/* Vendor Grid - Show when searching/filtering */}
        {showFiltersAndResults && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredVendors.map((vendor, index) => (
              <div 
                key={vendor.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <VendorCard 
                  vendor={vendor} 
                  onClick={() => setSelectedVendor(vendor)} 
                />
              </div>
            ))}
          </div>
        )}

        {/* No Results - Show when searching/filtering with no results */}
        {showFiltersAndResults && filteredVendors.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="max-w-md mx-auto">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-display font-semibold text-gray-700 mb-2">
                No vendors found
              </h3>
              <p className="text-gray-500 text-lg mb-6">
                Try adjusting your filters or search terms to find the perfect vendors for your special day.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setFilters({});
                }}
                className="wedding-button-primary"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center py-12 glass-card rounded-xl animate-fade-in">
          <h2 className="text-3xl font-display font-bold wedding-text-gradient mb-4">
            Ready to Plan Your Budget?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Now that you've found some amazing vendors, let's help you plan and manage your wedding budget.
          </p>
          <Button 
            className="wedding-button-primary text-lg px-8 py-4"
            onClick={() => navigate('/budget')}
          >
            Start Budget Planning
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
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
