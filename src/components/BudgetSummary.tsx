
import { BudgetData } from '@/types/budget';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, AlertTriangle, CheckCircle, Target } from 'lucide-react';

interface BudgetSummaryProps {
  budgetData: BudgetData;
  totalBudget: number;
  totalSpent: number;
}

const BudgetSummary = ({ budgetData, totalBudget, totalSpent }: BudgetSummaryProps) => {
  const remaining = totalBudget - totalSpent;
  const percentageSpent = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;
  
  const getStatusColor = () => {
    if (percentageSpent < 70) return 'text-success';
    if (percentageSpent < 90) return 'text-warning';
    return 'text-destructive';
  };

  const getStatusIcon = () => {
    if (percentageSpent < 70) return <CheckCircle className="h-5 w-5 text-success" />;
    if (percentageSpent < 90) return <AlertTriangle className="h-5 w-5 text-warning" />;
    return <AlertTriangle className="h-5 w-5 text-destructive" />;
  };

  const getStatusMessage = () => {
    if (percentageSpent < 70) return "You're on track with your budget!";
    if (percentageSpent < 90) return "Getting close to your budget limit";
    if (percentageSpent < 100) return "Approaching budget limit";
    return "Over budget - consider adjustments";
  };

  const categoryBreakdown = Object.keys(budgetData).map(category => {
    const categoryTotal = budgetData[category].reduce((sum, item) => sum + item.cost, 0);
    const categoryPercentage = totalSpent > 0 ? (categoryTotal / totalSpent) * 100 : 0;
    
    return {
      category,
      total: categoryTotal,
      percentage: categoryPercentage,
      items: budgetData[category].length
    };
  }).sort((a, b) => b.total - a.total);

  return (
    <Card className="wedding-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-wedding-pink">
          <TrendingUp className="h-6 w-6" />
          Budget Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getStatusIcon()}
              <span className={`font-medium ${getStatusColor()}`}>
                {getStatusMessage()}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {percentageSpent.toFixed(1)}% used
            </span>
          </div>
          
          <Progress 
            value={Math.min(percentageSpent, 100)} 
            className="h-3"
          />
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500">Total Budget</p>
              <p className="text-lg font-semibold wedding-text-gradient">
                ${totalBudget.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Spent</p>
              <p className="text-lg font-semibold text-wedding-rose">
                ${totalSpent.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Remaining</p>
              <p className={`text-lg font-semibold ${remaining >= 0 ? 'text-success' : 'text-destructive'}`}>
                ${remaining.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        {categoryBreakdown.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Category Breakdown
            </h4>
            <div className="space-y-3">
              {categoryBreakdown.slice(0, 5).map((cat) => (
                <div key={cat.category} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {cat.category}
                      </span>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-wedding-deep-rose">
                          ${cat.total.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          ({cat.percentage.toFixed(1)}%)
                        </span>
                      </div>
                    </div>
                    <Progress 
                      value={cat.percentage} 
                      className="h-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {cat.items} item{cat.items !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Budget Recommendations */}
        {totalBudget > 0 && (
          <div className="bg-wedding-blush/50 p-4 rounded-lg">
            <h5 className="font-medium text-wedding-deep-rose mb-2">💡 Budget Tips</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              {percentageSpent < 50 && (
                <li>• Great start! Consider allocating more to priority categories</li>
              )}
              {percentageSpent >= 70 && percentageSpent < 90 && (
                <li>• Monitor spending closely as you approach your limit</li>
              )}
              {percentageSpent >= 90 && (
                <li>• Consider finding cost savings or adjusting your budget</li>
              )}
              <li>• Keep 10-15% as a contingency for unexpected expenses</li>
              <li>• Review and update your budget regularly</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetSummary;
