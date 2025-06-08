
import { useState } from 'react';
import { Search, Menu, X, Heart, Calculator, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

const Header = ({
  onSearch,
  searchQuery = ''
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isVendorPage = location.pathname === '/';
  const isBudgetPage = location.pathname === '/budget';

  const navigationItems = [
    {
      label: 'Find Vendors',
      path: '/',
      icon: Users,
      active: isVendorPage
    },
    {
      label: 'Budget Planner',
      path: '/budget',
      icon: Calculator,
      active: isBudgetPage
    },
    {
      label: 'Venues',
      path: '/#venues',
      icon: MapPin,
      active: false
    },
    {
      label: 'Photography',
      path: '/#photographers',
      icon: Calendar,
      active: false
    }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <Heart className="h-10 w-10 text-wedding-pink group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 h-10 w-10 text-wedding-pink opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-display font-bold wedding-text-gradient">
                Wellington County
              </h1>
              <p className="text-sm text-gray-600 font-medium">Wedding Guide</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.path.startsWith('/#')) {
                      navigate('/');
                      // Handle anchor scrolling if needed
                    } else {
                      navigate(item.path);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    item.active 
                      ? 'bg-wedding-pink text-white shadow-md' 
                      : 'text-gray-700 hover:text-wedding-pink hover:bg-wedding-blush/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Search Bar - only show on vendor page */}
          {isVendorPage && onSearch && (
            <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md ml-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search vendors, services..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-wedding-pink focus:ring-wedding-pink bg-white/80 backdrop-blur-sm"
                />
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="wedding-button-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="lg:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Search - only show on vendor page */}
        {isVendorPage && onSearch && (
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search vendors, services..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-wedding-pink focus:ring-wedding-pink bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in border-t border-gray-100 pt-4 mt-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.path.startsWith('/#')) {
                        navigate('/');
                      } else {
                        navigate(item.path);
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      item.active 
                        ? 'bg-wedding-pink text-white' 
                        : 'text-gray-700 hover:text-wedding-pink hover:bg-wedding-blush/50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button className="w-full wedding-button-primary">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
