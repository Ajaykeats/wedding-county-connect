
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BudgetItem, commonSubcategories } from '@/types/budget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit3, TrendingUp } from 'lucide-react';

interface BudgetCategoryProps {
  category: string;
  items: BudgetItem[];
  onAddSubcategory: (category: string, subcategory: string, cost: number) => void;
  onCategoryClick: (category: string) => void;
}

const BudgetCategory = ({ category, items, onAddSubcategory, onCategoryClick }: BudgetCategoryProps) => {
  const [subcategory, setSubcategory] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  const total = items.reduce((sum, item) => sum + item.cost, 0);

  const handleAddItem = () => {
    const subcategoryName = subcategory.trim();
    const costValue = parseFloat(cost);

    if (!subcategoryName || isNaN(costValue) || costValue <= 0) {
      alert('Please enter valid subcategory and cost!');
      return;
    }

    onAddSubcategory(category, subcategoryName, costValue);
    setSubcategory('');
    setCost('');
  };

  const currentSubcategories = commonSubcategories[category] || [];

  const getCategoryIcon = (categoryName: string) => {
    const icons: { [key: string]: string } = {
      'Venue': '🏰',
      'Catering': '🍽️',
      'Photography': '📸',
      'Attire': '👗',
      'Flowers': '💐',
      'Entertainment': '🎵',
      'Stationery': '📜',
      'Transportation': '🚗',
      'Gifts': '🎁',
      'Miscellaneous': '✨'
    };
    return icons[categoryName] || '💖';
  };

  return (
    <Card className="wedding-card hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="pb-4">
        <CardTitle 
          className="flex items-center justify-between cursor-pointer text-wedding-deep-rose hover:text-wedding-pink transition-colors"
          onClick={() => onCategoryClick(category)}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{getCategoryIcon(category)}</span>
            <div>
              <h3 className="text-lg font-semibold">{category}</h3>
              <p className="text-sm text-gray-500 font-normal">
                {items.length} item{items.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold wedding-text-gradient">
              ${total.toLocaleString()}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-xs text-gray-500 hover:text-wedding-pink"
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Items List */}
        {isExpanded && items.length > 0 && (
          <div className="space-y-2 animate-fade-in">
            <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Current Items
            </h4>
            <div className="bg-gray-50 rounded-lg p-3 space-y-2 max-h-40 overflow-y-auto">
              {items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">💖</span>
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-wedding-deep-rose">
                      ${item.cost.toLocaleString()}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 hover:bg-red-100 hover:text-red-600"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Collapsed View */}
        {!isExpanded && items.length > 0 && (
          <div className="bg-wedding-blush/30 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Recent: {items[items.length - 1]?.name}
              </span>
              <span className="text-sm font-medium text-wedding-deep-rose">
                ${items[items.length - 1]?.cost.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* Add New Item Form */}
        <div className="space-y-3 p-4 bg-gradient-to-r from-wedding-blush/20 to-wedding-lavender/20 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New Item
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Item name"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                list={`subcategory-suggestions-${category}`}
                className="bg-white/80 backdrop-blur-sm border-wedding-pink/20 focus:border-wedding-pink"
              />
              {currentSubcategories.length > 0 && (
                <datalist id={`subcategory-suggestions-${category}`}>
                  {currentSubcategories.map((sub) => (
                    <option key={sub} value={sub} />
                  ))}
                </datalist>
              )}
            </div>
            
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Cost ($)"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="bg-white/80 backdrop-blur-sm border-wedding-pink/20 focus:border-wedding-pink"
              />
              <Button 
                onClick={handleAddItem}
                size="sm"
                className="wedding-button-primary whitespace-nowrap"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCategoryClick(category)}
            className="flex-1 text-wedding-deep-rose border-wedding-pink/30 hover:bg-wedding-pink hover:text-white"
          >
            <Edit3 className="h-4 w-4 mr-1" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetCategory;
