
import { useState } from 'react';
import { Search, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header = ({ onSearch, searchQuery }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-wedding-pink" />
            <h1 className="text-2xl font-display font-bold wedding-text-gradient">
              WeddingVendors
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#venues" className="text-gray-700 hover:text-wedding-pink transition-colors">
              Venues
            </a>
            <a href="#photographers" className="text-gray-700 hover:text-wedding-pink transition-colors">
              Photography
            </a>
            <a href="#catering" className="text-gray-700 hover:text-wedding-pink transition-colors">
              Catering
            </a>
            <a href="#all" className="text-gray-700 hover:text-wedding-pink transition-colors">
              All Vendors
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md ml-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search vendors..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-wedding-pink focus:ring-wedding-pink"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search vendors..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-wedding-pink focus:ring-wedding-pink"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <a href="#venues" className="text-gray-700 hover:text-wedding-pink transition-colors py-2">
                Venues
              </a>
              <a href="#photographers" className="text-gray-700 hover:text-wedding-pink transition-colors py-2">
                Photography
              </a>
              <a href="#catering" className="text-gray-700 hover:text-wedding-pink transition-colors py-2">
                Catering
              </a>
              <a href="#all" className="text-gray-700 hover:text-wedding-pink transition-colors py-2">
                All Vendors
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
