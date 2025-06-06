
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BudgetItem, commonSubcategories } from '@/types/budget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BudgetCategoryProps {
  category: string;
  items: BudgetItem[];
  onAddSubcategory: (category: string, subcategory: string, cost: number) => void;
  onCategoryClick: (category: string) => void;
}

const BudgetCategory = ({ category, items, onAddSubcategory, onCategoryClick }: BudgetCategoryProps) => {
  const [subcategory, setSubcategory] = useState<string>('');
  const [cost, setCost] = useState<string>('');

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

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle 
          className="text-wedding-pink cursor-pointer hover:text-wedding-rose transition-colors"
          onClick={() => onCategoryClick(category)}
        >
          {category} - Total: ${total.toFixed(2)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="mb-4 space-y-1">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="flex items-center">
                <span className="mr-2">💖</span>
                {item.name}
              </span>
              <span className="font-medium">${item.cost.toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Add Subcategory"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              list={`subcategory-suggestions-${category}`}
            />
            {currentSubcategories.length > 0 && (
              <datalist id={`subcategory-suggestions-${category}`}>
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
            onClick={handleAddItem}
            size="sm"
            className="bg-wedding-pink hover:bg-wedding-rose text-white"
          >
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetCategory;
