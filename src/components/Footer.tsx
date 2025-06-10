
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const navigationLinks = [
    { label: 'Home', path: '/' },
    { label: 'Vendors', path: '/#vendors' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Budgeting', path: '/budget' }
  ];

  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const sectionId = path.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-8 w-8 text-wedding-pink" />
              <div>
                <h3 className="text-xl font-display font-bold wedding-text-gradient">
                  Wellington County
                </h3>
                <p className="text-sm text-gray-600 font-medium">Wedding Guide</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your trusted partner in creating the perfect wedding in Wellington County. 
              We connect couples with exceptional vendors and provide the tools to plan your dream celebration.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Wellington County, ON
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                hello@wellingtoncountyweddings.com
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-600 hover:text-wedding-pink transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Plan your perfect day</li>
              <li>Join our vendor network</li>
              <li>Submit your wedding</li>
              <li>Get planning tips</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Wellington County Wedding Guide. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button className="text-gray-500 hover:text-wedding-pink text-sm">Privacy Policy</button>
            <button className="text-gray-500 hover:text-wedding-pink text-sm">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
