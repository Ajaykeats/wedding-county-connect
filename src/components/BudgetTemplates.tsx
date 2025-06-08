
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Crown, Heart } from 'lucide-react';

interface BudgetTemplate {
  id: string;
  name: string;
  description: string;
  budget: number;
  guestCount: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

interface BudgetTemplatesProps {
  onSelectTemplate: (budget: number) => void;
}

const BudgetTemplates = ({ onSelectTemplate }: BudgetTemplatesProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const templates: BudgetTemplate[] = [
    {
      id: 'intimate',
      name: 'Intimate Gathering',
      description: 'Perfect for small, cozy celebrations',
      budget: 15000,
      guestCount: '30-50 guests',
      icon: <Heart className="h-6 w-6" />,
      features: ['Simple venue', 'Close family & friends', 'Elegant simplicity'],
      color: 'from-pink-400 to-rose-400'
    },
    {
      id: 'classic',
      name: 'Classic Wedding',
      description: 'Traditional celebration with all the essentials',
      budget: 35000,
      guestCount: '75-125 guests',
      icon: <Users className="h-6 w-6" />,
      features: ['Full reception', 'Professional photography', 'Live music'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 'luxury',
      name: 'Luxury Experience',
      description: 'Premium wedding with luxury touches',
      budget: 60000,
      guestCount: '100-150 guests',
      icon: <Crown className="h-6 w-6" />,
      features: ['Premium venue', 'Gourmet catering', 'Full planning service'],
      color: 'from-yellow-400 to-orange-400'
    },
    {
      id: 'dream',
      name: 'Dream Wedding',
      description: 'No expense spared for your perfect day',
      budget: 100000,
      guestCount: '150+ guests',
      icon: <Sparkles className="h-6 w-6" />,
      features: ['Destination venue', 'Celebrity vendors', 'Unlimited options'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const handleSelectTemplate = (template: BudgetTemplate) => {
    setSelectedTemplate(template.id);
    onSelectTemplate(template.budget);
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold wedding-text-gradient mb-4">
          Choose Your Budget Template
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start with a template that matches your vision and guest count. You can always customize it later.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <Card 
            key={template.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              selectedTemplate === template.id 
                ? 'ring-2 ring-wedding-pink shadow-lg' 
                : 'wedding-card'
            } animate-scale-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleSelectTemplate(template)}
          >
            <CardHeader className="text-center pb-4">
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${template.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                {template.icon}
              </div>
              <CardTitle className="text-xl font-display text-wedding-deep-rose">
                {template.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{template.description}</p>
            </CardHeader>
            
            <CardContent className="text-center space-y-4">
              <div>
                <p className="text-3xl font-bold wedding-text-gradient">
                  ${template.budget.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-1">{template.guestCount}</p>
              </div>
              
              <div className="space-y-2">
                {template.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-wedding-pink rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full ${
                  selectedTemplate === template.id 
                    ? 'wedding-button-primary' 
                    : 'wedding-button-secondary'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectTemplate(template);
                }}
              >
                {selectedTemplate === template.id ? 'Selected' : 'Choose Template'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedTemplate && (
        <div className="mt-8 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-wedding-blush/50 px-6 py-3 rounded-full">
            <Sparkles className="h-4 w-4 text-wedding-pink" />
            <span className="text-wedding-deep-rose font-medium">
              Template selected! Start adding your budget items below.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetTemplates;
