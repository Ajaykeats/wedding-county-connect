
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { BudgetData, BudgetItem } from '@/types/budget';
import BudgetInput from '@/components/BudgetInput';
import BudgetChart from '@/components/BudgetChart';
import BudgetCategory from '@/components/BudgetCategory';

const Budget = () => {
  const [budgetData, setBudgetData] = useState<BudgetData>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const addBudgetItem = (category: string, item: BudgetItem) => {
    setBudgetData(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), item]
    }));
    
    // Add heart animation effect
    createHeartAnimation();
  };

  const addItemToCategory = (category: string, item: BudgetItem) => {
    addBudgetItem(category, item);
  };

  const createHeartAnimation = () => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.className = 'fixed pointer-events-none text-2xl text-wedding-pink z-50 animate-pulse';
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${window.innerHeight - 100}px`;
    heart.style.animation = 'float 2s ease-out forwards';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  };

  const totalBudget = Object.values(budgetData).flat().reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-wedding-blush to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-10 w-10 text-wedding-pink" />
            <h1 className="text-4xl font-display font-bold wedding-text-gradient">
              Your Dream Wedding Budget
            </h1>
            <Heart className="h-10 w-10 text-wedding-pink" />
          </div>
          <p className="text-lg text-gray-600 mb-2">
            Plan your perfect day with love and style!
          </p>
          {totalBudget > 0 && (
            <p className="text-2xl font-semibold text-wedding-pink">
              Total Budget: ${totalBudget.toFixed(2)}
            </p>
          )}
        </div>

        {/* Budget Input */}
        <BudgetInput onAddItem={addBudgetItem} />

        {/* Sponsored Ad */}
        <div className="bg-wedding-blush p-4 rounded-lg text-center mb-6">
          <p className="text-gray-700">
            Sponsored: Discover perfect venues at{' '}
            <a 
              href="https://www.weddingwire.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wedding-pink hover:underline"
            >
              WeddingWire
            </a>!
          </p>
        </div>

        {/* Chart */}
        {Object.keys(budgetData).length > 0 && (
          <BudgetChart
            budgetData={budgetData}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        )}

        {/* Category Sections */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {Object.entries(budgetData).map(([category, items]) => (
            <BudgetCategory
              key={category}
              category={category}
              items={items}
              onAddItem={(item) => addItemToCategory(category, item)}
              onCategoryClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        {/* Another Sponsored Ad */}
        <div className="bg-wedding-blush p-4 rounded-lg text-center mt-8">
          <p className="text-gray-700">
            Sponsored: Capture your day with{' '}
            <a 
              href="https://www.theknot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wedding-pink hover:underline"
            >
              The Knot
            </a>!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Budget;
