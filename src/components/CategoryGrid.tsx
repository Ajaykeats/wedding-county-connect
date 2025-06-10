
import { Link } from 'react-router-dom';
import { VendorCategory } from '@/types/vendor';
import { vendors } from '@/data/vendors';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Camera, MapPin, Utensils, Music, Scissors, Cake, Heart, Flower, Car, Package, Calendar } from 'lucide-react';

const categoryIcons: Record<VendorCategory, any> = {
  venues: MapPin,
  photographers: Camera,
  catering: Utensils,
  entertainment: Music,
  beauty: Scissors,
  bakeries: Cake,
  bridal: Heart,
  flowers: Flower,
  transportation: Car,
  rentals: Package,
  planning: Calendar
};

const categoryLabels: Record<VendorCategory, string> = {
  venues: 'Wedding Venues',
  photographers: 'Photographers',
  catering: 'Catering',
  entertainment: 'Entertainment',
  beauty: 'Beauty & Grooming',
  bakeries: 'Bakeries',
  bridal: 'Bridal Shops',
  flowers: 'Florists',
  transportation: 'Transportation',
  rentals: 'Rentals',
  planning: 'Wedding Planners'
};

const CategoryGrid = () => {
  const categories = Object.keys(categoryLabels) as VendorCategory[];

  const getCategoryCount = (category: VendorCategory) => {
    return vendors.filter(vendor => vendor.category === category).length;
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold wedding-text-gradient mb-4">
          Browse by Category
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find the perfect vendors for every aspect of your wedding day
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = categoryIcons[category];
          const count = getCategoryCount(category);
          
          if (count === 0) return null;

          return (
            <Link 
              key={category}
              to={`/category/${category}`}
              className="group"
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-wedding-pink/20 glass-card">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-wedding-blush/50 rounded-full flex items-center justify-center group-hover:bg-wedding-pink/20 transition-colors">
                    <Icon className="h-8 w-8 text-wedding-pink" />
                  </div>
                  
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-wedding-pink transition-colors">
                    {categoryLabels[category]}
                  </h3>
                  
                  <Badge variant="outline" className="mb-4">
                    {count} vendor{count !== 1 ? 's' : ''}
                  </Badge>
                  
                  <div className="flex items-center justify-center text-sm text-wedding-deep-rose group-hover:text-wedding-pink transition-colors">
                    Explore
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;
