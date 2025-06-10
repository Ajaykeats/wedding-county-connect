import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BudgetData } from '@/types/budget';
import BudgetChart from '@/components/BudgetChart';
import BudgetPieChart from '@/components/BudgetPieChart';
import BudgetInput from '@/components/BudgetInput';
import BudgetCategory from '@/components/BudgetCategory';
import BudgetSummary from '@/components/BudgetSummary';
import BudgetTemplates from '@/components/BudgetTemplates';
import { Calculator, Download, Share2, Save, TrendingUp, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Budget = () => {
  const [budgetData, setBudgetData] = useState<BudgetData>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const navigate = useNavigate();

  const addBudgetItem = (category: string, subcategory: string, cost: number) => {
    setBudgetData(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), {
        name: subcategory,
        cost
      }]
    }));
  };

  const handleAddItem = (category: string, item: {
    name: string;
    cost: number;
  }) => {
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

  const totalSpent = Object.values(budgetData).flat().reduce((sum, item) => sum + item.cost, 0);

  return (
    <>
      <style>{`
        body {
          background: linear-gradient(135deg, #fef7f8 0%, #ffdce5 50%, #f3e8ff 100%);
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
        
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header with Home Button */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold wedding-text-gradient">
              Wedding Budget Planner
            </h1>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center gap-2 border-wedding-pink/30 text-wedding-deep-rose hover:bg-wedding-pink hover:text-white"
            >
              <Home className="h-4 w-4" />
              Home
            </Button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="h-12 w-12 text-wedding-pink animate-float" />
              <h2 className="text-3xl md:text-5xl font-display font-bold wedding-text-gradient">
                Your Dream Wedding Budget
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Plan your perfect day with confidence. Create, track, and manage your wedding budget with our intelligent planning tools.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="glass-card p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="h-6 w-6 text-wedding-pink" />
                  <h3 className="text-lg font-semibold text-gray-800">Total Budget</h3>
                </div>
                <p className="text-3xl font-bold wedding-text-gradient">${totalBudget.toLocaleString()}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Save className="h-6 w-6 text-wedding-rose" />
                  <h3 className="text-lg font-semibold text-gray-800">Total Spent</h3>
                </div>
                <p className="text-3xl font-bold text-wedding-rose">${totalSpent.toLocaleString()}</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calculator className="h-6 w-6 text-wedding-sage" />
                  <h3 className="text-lg font-semibold text-gray-800">Remaining</h3>
                </div>
                <p className="text-3xl font-bold text-wedding-sage">${(totalBudget - totalSpent).toLocaleString()}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="wedding-button-primary">
                <Download className="h-4 w-4 mr-2" />
                Export Budget
              </Button>
              <Button className="wedding-button-secondary">
                <Share2 className="h-4 w-4 mr-2" />
                Share with Partner
              </Button>
            </div>
          </div>

          {/* Budget Templates */}
          <BudgetTemplates onSelectTemplate={setTotalBudget} />

          {/* Budget Input */}
          <div className="animate-slide-up">
            <BudgetInput onAddItem={handleAddItem} />
          </div>

          {/* Inspirational Message */}
          <div className="mb-8 p-6 glass-card rounded-xl text-center animate-scale-in">
            <p className="text-wedding-pink text-lg font-medium">
              💖 Every detail matters in creating your perfect day. Let us help you budget wisely! 💖
            </p>
          </div>

          {/* Navigation */}
          {selectedCategory && (
            <div className="mb-6 animate-fade-in">
              <Button 
                onClick={handleBackToMain} 
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-wedding-pink/30 text-wedding-deep-rose hover:bg-wedding-pink hover:text-white"
              >
                ← Back to Main Categories
              </Button>
            </div>
          )}

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <BudgetChart 
                budgetData={budgetData} 
                selectedCategory={selectedCategory} 
                onCategorySelect={handleCategorySelect} 
                onBackToMain={handleBackToMain} 
              />
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <BudgetPieChart 
                budgetData={budgetData} 
                selectedCategory={selectedCategory} 
                onCategorySelect={handleCategorySelect} 
              />
            </div>
          </div>

          {/* Budget Summary */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <BudgetSummary 
              budgetData={budgetData} 
              totalBudget={totalBudget}
              totalSpent={totalSpent}
            />
          </div>

          {/* Budget Categories */}
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold wedding-text-gradient text-center mb-8">
              Budget Categories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.keys(budgetData).map((category, index) => (
                <div 
                  key={category} 
                  className="animate-slide-up" 
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <BudgetCategory 
                    category={category} 
                    items={budgetData[category]} 
                    onAddSubcategory={addSubcategory} 
                    onCategoryClick={handleCategorySelect} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 p-8 glass-card rounded-xl text-center animate-fade-in">
            <h3 className="text-2xl font-display font-bold wedding-text-gradient mb-4">
              Ready to Find Your Perfect Vendors?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Discover amazing wedding professionals in Wellington County to bring your vision to life.
            </p>
            <Button 
              className="wedding-button-primary text-lg px-8 py-4"
              onClick={() => navigate('/')}
            >
              Browse Vendors Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
