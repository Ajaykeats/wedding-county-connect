
import { Vendor } from '@/types/vendor';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, Globe, Instagram, Facebook, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface VendorModalProps {
  vendor: Vendor | null;
  isOpen: boolean;
  onClose: () => void;
}

const VendorModal = ({ vendor, isOpen, onClose }: VendorModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!vendor) return null;

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case '$': return 'bg-green-100 text-green-800';
      case '$$': return 'bg-blue-100 text-blue-800';
      case '$$$': return 'bg-purple-100 text-purple-800';
      case '$$$$': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const allImages = [vendor.logoUrl, ...vendor.galleryUrls];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-gray-900">
            {vendor.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={allImages[selectedImage]}
                alt={vendor.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {allImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-wedding-pink' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${vendor.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vendor Information */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold text-gray-700 ml-1">
                      {vendor.rating}
                    </span>
                    <span className="text-gray-500 ml-1">
                      ({vendor.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                <Badge className={getPriceRangeColor(vendor.priceRange)}>
                  {vendor.priceRange}
                </Badge>
              </div>
              
              {vendor.featured && (
                <Badge className="bg-wedding-pink hover:bg-wedding-rose mb-2">
                  Featured Vendor
                </Badge>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-2">About</h3>
              <p className="text-gray-600 leading-relaxed">{vendor.description}</p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-3">Services</h3>
              <div className="flex flex-wrap gap-2">
                {vendor.services.map((service, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Location & Contact */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-3">Contact & Location</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-wedding-pink" />
                  <div>
                    <p className="font-medium">{vendor.address}</p>
                    <p className="text-sm">Serving: {vendor.serviceArea.join(', ')}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-wedding-pink" />
                  <a href={`tel:${vendor.phone}`} className="hover:text-wedding-pink transition-colors">
                    {vendor.phone}
                  </a>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Globe className="h-5 w-5 mr-3 text-wedding-pink" />
                  <a 
                    href={vendor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-wedding-pink transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-wedding-pink" />
                  <a href={`mailto:${vendor.email}`} className="hover:text-wedding-pink transition-colors">
                    {vendor.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            {(vendor.socialMedia.instagram || vendor.socialMedia.facebook) && (
              <div>
                <h3 className="text-lg font-display font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {vendor.socialMedia.instagram && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(vendor.socialMedia.instagram, '_blank')}
                      className="hover:border-wedding-pink hover:text-wedding-pink"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                  )}
                  {vendor.socialMedia.facebook && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(vendor.socialMedia.facebook, '_blank')}
                      className="hover:border-wedding-pink hover:text-wedding-pink"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <Button 
                className="flex-1 bg-wedding-pink hover:bg-wedding-rose"
                onClick={() => window.open(`mailto:${vendor.email}?subject=Wedding Inquiry`, '_self')}
              >
                Send Message
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(`tel:${vendor.phone}`, '_self')}
                className="hover:border-wedding-pink hover:text-wedding-pink"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(vendor.website, '_blank')}
                className="hover:border-wedding-pink hover:text-wedding-pink"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VendorModal;
