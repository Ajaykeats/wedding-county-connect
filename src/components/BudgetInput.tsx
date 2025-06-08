
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { commonCategories, commonSubcategories, BudgetItem } from '@/types/budget';
import { Plus, DollarSign } from 'lucide-react';

interface BudgetInputProps {
  onAddItem: (category: string, item: BudgetItem) => void;
}

const BudgetInput = ({ onAddItem }: BudgetInputProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [customCategory, setCustomCategory] = useState<string>('');
  const [subcategory, setSubcategory] = useState<string>('');
  const [cost, setCost] = useState<string>('');

  const handleSubmit = () => {
    const category = selectedCategory === 'other' ? customCategory.trim() : selectedCategory;
    const subcategoryName = subcategory.trim();
    const costValue = parseFloat(cost);

    if (!category || !subcategoryName || isNaN(costValue) || costValue <= 0) {
      alert('Please fill in all fields with valid values!');
      return;
    }

    onAddItem(category, { name: subcategoryName, cost: costValue });

    // Reset form
    setSelectedCategory('');
    setCustomCategory('');
    setSubcategory('');
    setCost('');
  };

  const currentSubcategories = selectedCategory && commonSubcategories[selectedCategory] 
    ? commonSubcategories[selectedCategory] 
    : [];

  return (
    <div className="relative mb-12">
      {/* Attention-grabbing header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3 mb-4 p-4 bg-gradient-to-r from-wedding-pink to-wedding-rose rounded-full">
          <DollarSign className="h-8 w-8 text-white animate-pulse" />
          <h2 className="text-2xl font-display font-bold text-white">Add Your Wedding Expenses</h2>
          <Plus className="h-8 w-8 text-white animate-bounce" />
        </div>
        <p className="text-lg text-gray-700 font-medium">
          Start tracking your wedding budget by adding each expense below
        </p>
      </div>

      {/* Prominent input form */}
      <div className="bg-gradient-to-br from-white via-wedding-blush/30 to-white p-8 rounded-2xl shadow-2xl border-2 border-wedding-pink/20 backdrop-blur-sm relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-4 left-4 w-12 h-12 bg-wedding-pink rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-wedding-rose rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-6 h-6 bg-wedding-lavender rounded-full"></div>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">
            <div className="xl:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="h-12 border-2 border-wedding-pink/30 focus:border-wedding-pink bg-white/80 backdrop-blur-sm">
                  <SelectValue placeholder="Choose Category" />
                </SelectTrigger>
                <SelectContent>
                  {commonCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedCategory === 'other' && (
              <div className="xl:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Category *</label>
                <Input
                  type="text"
                  placeholder="Enter category name"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  className="h-12 border-2 border-wedding-pink/30 focus:border-wedding-pink bg-white/80 backdrop-blur-sm"
                />
              </div>
            )}

            <div className="xl:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Item/Service *</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="e.g., Venue Deposit"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  list="subcategory-suggestions"
                  className="h-12 border-2 border-wedding-pink/30 focus:border-wedding-pink bg-white/80 backdrop-blur-sm"
                />
                {currentSubcategories.length > 0 && (
                  <datalist id="subcategory-suggestions">
                    {currentSubcategories.map((sub) => (
                      <option key={sub} value={sub} />
                    ))}
                  </datalist>
                )}
              </div>
            </div>

            <div className="xl:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount *</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-wedding-pink" />
                <Input
                  type="number"
                  placeholder="0.00"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="h-12 pl-10 border-2 border-wedding-pink/30 focus:border-wedding-pink bg-white/80 backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="xl:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">&nbsp;</label>
              <Button 
                onClick={handleSubmit}
                className="w-full h-12 bg-gradient-to-r from-wedding-pink to-wedding-rose hover:from-wedding-rose hover:to-wedding-deep-rose text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Expense
              </Button>
            </div>
          </div>

          {/* Helper text */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              💡 <strong>Tip:</strong> Add all your wedding expenses to get a complete budget overview
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-action arrow pointing down */}
      <div className="text-center mt-4">
        <div className="inline-flex items-center gap-2 text-wedding-pink font-medium animate-bounce">
          <span>See your budget breakdown below</span>
          <div className="w-6 h-6 border-l-2 border-b-2 border-wedding-pink transform rotate-[-45deg]"></div>
        </div>
      </div>
    </div>
  );
};

export default BudgetInput;
