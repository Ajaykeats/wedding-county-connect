
import { useState } from 'react';
import { BudgetData } from '@/types/budget';
import BudgetChart from '@/components/BudgetChart';
import BudgetInput from '@/components/BudgetInput';
import BudgetCategory from '@/components/BudgetCategory';

const Budget = () => {
  const [budgetData, setBudgetData] = useState<BudgetData>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const addBudgetItem = (category: string, subcategory: string, cost: number) => {
    setBudgetData(prev => ({
      ...prev,
      [category]: [
        ...(prev[category] || []),
        { name: subcategory, cost }
      ]
    }));
  };

  // Wrapper function that matches BudgetInput's expected signature
  const handleAddItem = (category: string, item: { name: string; cost: number }) => {
    addBudgetItem(category, item.name, item.cost);
  };

  const addSubcategory = (category: string, subcategory: string, cost: number) => {
    addBudgetItem(category, subcategory, cost);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToMain = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <style>{`
        body {
          background: linear-gradient(to bottom, #fef7f8, #ffdce5);
          min-height: 100vh;
        }
        
        .heart-animation {
          position: fixed;
          pointer-events: none;
          font-size: 20px;
          color: #f06292;
          animation: float 2s ease-out forwards;
          z-index: 1000;
        }
        
        @keyframes float {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-100">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-wedding-pink mb-4">
              Your Dream Wedding Budget
            </h1>
            <p className="text-lg text-gray-600">
              Plan your perfect day with love and style!
            </p>
          </div>

          <BudgetInput onAddItem={handleAddItem} />

          <div className="mb-8 p-4 bg-pink-100 rounded-lg text-center">
            <p className="text-wedding-pink">
              💖 Discover perfect venues and vendors to make your dream wedding come true! 💖
            </p>
          </div>

          <BudgetChart
            budgetData={budgetData}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            onBackToMain={handleBackToMain}
          />

          <div className="space-y-4">
            {Object.keys(budgetData).map((category) => (
              <BudgetCategory
                key={category}
                category={category}
                items={budgetData[category]}
                onAddSubcategory={addSubcategory}
                onCategoryClick={handleCategorySelect}
              />
            ))}
          </div>

          <div className="mt-8 p-4 bg-pink-100 rounded-lg text-center">
            <p className="text-wedding-pink">
              💖 Capture your special day with the best photographers and vendors! 💖
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
