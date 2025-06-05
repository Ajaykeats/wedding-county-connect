
import { VendorFilters as FilterType, VendorCategory, PriceRange } from '@/types/vendor';
import { vendorCategories, serviceAreas } from '@/data/vendors';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface VendorFiltersProps {
  filters: FilterType;
  onFiltersChange: (filters: FilterType) => void;
}

const VendorFilters = ({ filters, onFiltersChange }: VendorFiltersProps) => {
  const priceRanges: PriceRange[] = ['$', '$$', '$$$', '$$$$'];

  const updateFilter = (key: keyof FilterType, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const togglePriceRange = (range: PriceRange) => {
    const currentRanges = filters.priceRange || [];
    const newRanges = currentRanges.includes(range)
      ? currentRanges.filter(r => r !== range)
      : [...currentRanges, range];
    
    updateFilter('priceRange', newRanges.length > 0 ? newRanges : undefined);
  };

  const clearAllFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = Object.keys(filters).some(key => filters[key as keyof FilterType]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Category Filter */}
          <div className="flex-1 min-w-[200px]">
            <Select
              value={filters.category || 'all'}
              onValueChange={(value) => updateFilter('category', value === 'all' ? undefined : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {vendorCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Service Area Filter */}
          <div className="flex-1 min-w-[200px]">
            <Select
              value={filters.serviceArea || 'all'}
              onValueChange={(value) => updateFilter('serviceArea', value === 'all' ? undefined : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Areas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Areas</SelectItem>
                {serviceAreas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Price Range:</span>
          <div className="flex gap-2">
            {priceRanges.map((range) => (
              <Button
                key={range}
                variant={filters.priceRange?.includes(range) ? "default" : "outline"}
                size="sm"
                onClick={() => togglePriceRange(range)}
                className={filters.priceRange?.includes(range) ? "bg-wedding-pink hover:bg-wedding-rose" : ""}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {filters.category && (
              <Badge variant="secondary" className="bg-wedding-blush text-wedding-pink">
                {vendorCategories.find(c => c.id === filters.category)?.name}
                <button
                  onClick={() => updateFilter('category', undefined)}
                  className="ml-2 hover:text-wedding-rose"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.serviceArea && (
              <Badge variant="secondary" className="bg-wedding-blush text-wedding-pink">
                {filters.serviceArea}
                <button
                  onClick={() => updateFilter('serviceArea', undefined)}
                  className="ml-2 hover:text-wedding-rose"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.priceRange?.map((range) => (
              <Badge key={range} variant="secondary" className="bg-wedding-blush text-wedding-pink">
                {range}
                <button
                  onClick={() => togglePriceRange(range)}
                  className="ml-2 hover:text-wedding-rose"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorFilters;
