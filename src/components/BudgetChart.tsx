
import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { BudgetData } from '@/types/budget';

Chart.register(...registerables);

interface BudgetChartProps {
  budgetData: BudgetData;
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
  onBackToMain: () => void;
}

const BudgetChart = ({ budgetData, selectedCategory, onCategorySelect, onBackToMain }: BudgetChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    let labels: string[];
    let data: number[];

    if (selectedCategory === null) {
      // Show main categories
      labels = Object.keys(budgetData);
      data = labels.map(cat => 
        budgetData[cat].reduce((sum, item) => sum + item.cost, 0)
      );
    } else {
      // Show subcategories
      if (budgetData[selectedCategory]) {
        labels = budgetData[selectedCategory].map(item => item.name);
        data = budgetData[selectedCategory].map(item => item.cost);
      } else {
        labels = [];
        data = [];
      }
    }

    const config: ChartConfiguration<'pie', number[], string> = {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: generateColors(labels.length),
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { family: "'Inter', sans-serif", size: 14 },
              color: '#374151'
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw || 0;
                const total = context.dataset.data.reduce((a, b) => (a as number) + (b as number), 0) as number;
                const percentage = total ? ((value as number / total) * 100).toFixed(1) : 0;
                return `${label}: $${(value as number).toFixed(2)} (${percentage}%)`;
              }
            }
          }
        },
        onClick: (event, elements) => {
          if (elements.length > 0 && selectedCategory === null) {
            const index = elements[0].index;
            onCategorySelect(labels[index]);
          }
        }
      }
    };

    chartInstanceRef.current = new Chart(ctx, config);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [budgetData, selectedCategory, onCategorySelect]);

  const generateColors = (count: number) => {
    const colors = [];
    const baseHues = [330, 300, 270, 350, 320];
    for (let i = 0; i < count; i++) {
      const hue = baseHues[i % baseHues.length];
      colors.push(`hsl(${hue}, 80%, 80%)`);
    }
    return colors;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      {selectedCategory && (
        <button
          onClick={onBackToMain}
          className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to Main Categories
        </button>
      )}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BudgetChart;
