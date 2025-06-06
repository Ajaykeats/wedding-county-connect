
import { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js';
import { BudgetData } from '@/types/budget';

Chart.register(ArcElement, Tooltip, Legend, PieController);

interface BudgetChartProps {
  budgetData: BudgetData;
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const BudgetChart = ({ budgetData, selectedCategory, onCategorySelect }: BudgetChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const generateColors = (count: number) => {
    const colors = [];
    const baseHues = [330, 300, 270, 350, 320];
    for (let i = 0; i < count; i++) {
      const hue = baseHues[i % baseHues.length];
      colors.push(`hsl(${hue}, 80%, 80%)`);
    }
    return colors;
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    let labels: string[] = [];
    let data: number[] = [];

    if (selectedCategory === null) {
      labels = Object.keys(budgetData);
      data = labels.map(cat => 
        budgetData[cat].reduce((sum, item) => sum + item.cost, 0)
      );
    } else if (budgetData[selectedCategory]) {
      labels = budgetData[selectedCategory].map(item => item.name);
      data = budgetData[selectedCategory].map(item => item.cost);
    }

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
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
              color: '#3a1e2a'
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw as number || 0;
                const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
                const percentage = total ? ((value / total) * 100).toFixed(1) : '0';
                return `${label}: $${value.toFixed(2)} (${percentage}%)`;
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
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [budgetData, selectedCategory, onCategorySelect]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      {selectedCategory && (
        <button
          onClick={() => onCategorySelect(null)}
          className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to Main Categories
        </button>
      )}
      <canvas ref={chartRef} />
    </div>
  );
};

export default BudgetChart;
