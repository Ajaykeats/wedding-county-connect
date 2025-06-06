
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { commonCategories, commonSubcategories, BudgetItem } from '@/types/budget';

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
    <div className="bg-white p-6 rounded-lg shadow-sm border border-wedding-blush mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Select Category" />
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

        {selectedCategory === 'other' && (
          <Input
            type="text"
            placeholder="Custom Category Name"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            className="flex-1"
          />
        )}

        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder="Subcategory (e.g., Deposit)"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            list="subcategory-suggestions"
          />
          {currentSubcategories.length > 0 && (
            <datalist id="subcategory-suggestions">
              {currentSubcategories.map((sub) => (
                <option key={sub} value={sub} />
              ))}
            </datalist>
          )}
        </div>

        <Input
          type="number"
          placeholder="Cost ($)"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="flex-1"
        />

        <Button 
          onClick={handleSubmit}
          className="bg-wedding-pink hover:bg-wedding-rose text-white"
        >
          Add to Budget
        </Button>
      </div>
    </div>
  );
};

export default BudgetInput;
