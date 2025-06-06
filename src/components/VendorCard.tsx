
import { useState } from 'react';
import { Vendor } from '@/types/vendor';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, Globe, Heart, ExternalLink } from 'lucide-react';

interface VendorCardProps {
  vendor: Vendor;
  onClick: (vendor: Vendor) => void;
}

const VendorCard = ({ vendor, onClick }: VendorCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case '$': return 'bg-green-100 text-green-800';
      case '$$': return 'bg-blue-100 text-blue-800';
      case '$$$': return 'bg-purple-100 text-purple-800';
      case '$$$$': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="group overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-wedding-pink/20 animate-scale-in">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {vendor.featured && (
          <Badge className="absolute top-3 left-3 z-10 bg-wedding-pink hover:bg-wedding-rose">
            Featured
          </Badge>
        )}
        
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isLiked ? 'fill-wedding-pink text-wedding-pink' : 'text-gray-600'
            }`} 
          />
        </button>

        <img
          src={vendor.logoUrl}
          alt={vendor.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-wedding-blush to-gray-100 animate-pulse" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-display font-semibold text-gray-900 truncate group-hover:text-wedding-pink transition-colors">
              {vendor.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-gray-700 ml-1">
                  {vendor.rating}
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  ({vendor.reviewCount})
                </span>
              </div>
            </div>
          </div>
          <Badge className={getPriceRangeColor(vendor.priceRange)}>
            {vendor.priceRange}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {vendor.description}
        </p>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{vendor.serviceArea.join(', ')}</span>
        </div>

        {/* Services */}
        <div className="flex flex-wrap gap-1 mb-4">
          {vendor.services.slice(0, 3).map((service, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {service}
            </Badge>
          ))}
          {vendor.services.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{vendor.services.length - 3} more
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={() => onClick(vendor)}
            className="flex-1 bg-wedding-pink hover:bg-wedding-rose text-white"
            size="sm"
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(vendor.website, '_blank')}
            className="hover:border-wedding-pink hover:text-wedding-pink"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`tel:${vendor.phone}`, '_self')}
            className="hover:border-wedding-pink hover:text-wedding-pink"
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default VendorCard;
