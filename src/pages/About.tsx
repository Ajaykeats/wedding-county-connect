
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Users, Award, MapPin, Calendar, Star } from 'lucide-react';
import Header from '@/components/Header';

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '500+', label: 'Trusted Vendors', icon: Users },
    { number: '1000+', label: 'Happy Couples', icon: Heart },
    { number: '5 Years', label: 'Experience', icon: Award },
    { number: '4.9/5', label: 'Average Rating', icon: Star }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Wedding Coordinator',
      description: 'With over 10 years in the wedding industry, Sarah brings expertise and passion to every celebration.'
    },
    {
      name: 'Michael Chen',
      role: 'Vendor Relations Manager',
      description: 'Michael ensures our vendor network maintains the highest standards of quality and service.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Specialist',
      description: 'Emily guides couples through their planning journey, ensuring every detail is perfect.'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold wedding-text-gradient mb-6">
              About Wellington County Wedding Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about helping couples create their perfect wedding day. Since 2019, we've been connecting 
              couples with the finest wedding professionals in Wellington County and surrounding areas.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 glass-card rounded-xl">
                  <Icon className="h-8 w-8 text-wedding-pink mx-auto mb-4" />
                  <div className="text-3xl font-bold wedding-text-gradient mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Mission Section */}
          <div className="mb-16 p-8 glass-card rounded-xl">
            <h2 className="text-3xl font-display font-bold wedding-text-gradient text-center mb-8">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Wellington County Wedding Guide, we believe every love story deserves a perfect celebration. 
                  Our mission is to simplify wedding planning by connecting couples with exceptional vendors who 
                  share our commitment to excellence.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We carefully curate our vendor network, ensuring each professional meets our high standards 
                  for quality, reliability, and customer service. From intimate gatherings to grand celebrations, 
                  we're here to make your wedding dreams come true.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Heart className="h-32 w-32 text-wedding-pink opacity-20" />
                  <Heart className="absolute inset-0 h-32 w-32 text-wedding-pink animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold wedding-text-gradient text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center p-6 glass-card rounded-xl">
                  <div className="w-24 h-24 bg-gradient-to-br from-wedding-pink to-wedding-rose rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-wedding-pink font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-16 p-8 glass-card rounded-xl text-center">
            <MapPin className="h-12 w-12 text-wedding-pink mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold wedding-text-gradient mb-6">
              Serving Wellington County & Beyond
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Based in the heart of Wellington County, we proudly serve couples throughout the region. 
              Our extensive network includes vendors from Guelph, Fergus, Elora, Mount Forest, and surrounding communities.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 glass-card rounded-xl">
            <h2 className="text-3xl font-display font-bold wedding-text-gradient mb-6">
              Ready to Start Planning?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you create the wedding of your dreams. Browse our carefully selected vendors 
              or start planning your budget today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="wedding-button-primary text-lg px-8 py-4"
                onClick={() => navigate('/')}
              >
                Browse Vendors
              </Button>
              <Button 
                className="wedding-button-secondary text-lg px-8 py-4"
                onClick={() => navigate('/budget')}
              >
                Start Budget Planning
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
