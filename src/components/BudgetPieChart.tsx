
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { BudgetData } from '@/types/budget';

interface BudgetPieChartProps {
  budgetData: BudgetData;
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

const BudgetPieChart = ({ budgetData, selectedCategory, onCategorySelect }: BudgetPieChartProps) => {
  const generateColors = (count: number) => {
    const colors = [];
    const baseHues = [330, 300, 270, 350, 320, 240, 210, 180, 150, 120];
    for (let i = 0; i < count; i++) {
      const hue = baseHues[i % baseHues.length];
      colors.push(`hsl(${hue}, 70%, 70%)`);
    }
    return colors;
  };

  let chartData: { name: string; value: number; color: string }[] = [];

  if (selectedCategory === null) {
    // Show main categories
    const categories = Object.keys(budgetData);
    const colors = generateColors(categories.length);
    chartData = categories.map((category, index) => ({
      name: category,
      value: budgetData[category].reduce((sum, item) => sum + item.cost, 0),
      color: colors[index]
    }));
  } else {
    // Show subcategories
    if (budgetData[selectedCategory]) {
      const colors = generateColors(budgetData[selectedCategory].length);
      chartData = budgetData[selectedCategory].map((item, index) => ({
        name: item.name,
        value: item.cost,
        color: colors[index]
      }));
    }
  }

  const handlePieClick = (data: any) => {
    if (selectedCategory === null) {
      onCategorySelect(data.name);
    }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const total = chartData.reduce((sum, item) => sum + item.value, 0);
      const percentage = total ? ((data.value / total) * 100).toFixed(1) : 0;
      
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium text-gray-800">{data.payload.name}</p>
          <p className="text-wedding-pink">
            ${data.value.toFixed(2)} ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  if (chartData.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <p className="text-center text-gray-500">No budget data to display</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-wedding-pink mb-4">
        {selectedCategory ? `${selectedCategory} Breakdown` : 'Budget Overview'}
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            onClick={handlePieClick}
            style={{ cursor: selectedCategory === null ? 'pointer' : 'default' }}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            formatter={(value) => <span className="text-gray-700">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetPieChart;
