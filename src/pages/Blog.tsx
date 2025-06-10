
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Heart, Star, MapPin, Camera, Sparkles, PenTool } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const navigate = useNavigate();

  const featuredPost = {
    title: "Top 10 Wedding Venues in Guelph You'll Fall in Love With",
    excerpt: "Discover the most stunning wedding venues in Guelph, from historic estates to modern galleries. Each location offers unique charm for your perfect day.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Local Spotlights",
    location: "Guelph",
    image: "/placeholder.svg"
  };

  const blogCategories = [
    { 
      name: "Real Weddings", 
      icon: Heart, 
      description: "Beautiful local wedding stories",
      count: 24
    },
    { 
      name: "Inspiration & Trends", 
      icon: Sparkles, 
      description: "Latest styles and decor ideas",
      count: 18
    },
    { 
      name: "Local Spotlights", 
      icon: MapPin, 
      description: "Venues and vendors in your area",
      count: 32
    },
    { 
      name: "Planning Tips", 
      icon: Calendar, 
      description: "Expert advice and timelines",
      count: 28
    },
    { 
      name: "DIY & Guides", 
      icon: PenTool, 
      description: "Tutorials and printable resources",
      count: 15
    }
  ];

  const blogPosts = [
    {
      title: "Cambridge vs. Waterloo: Which City Matches Your Wedding Vibe?",
      excerpt: "Compare the unique wedding atmospheres of these two beautiful cities and find your perfect match.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Local Spotlights",
      location: "Cambridge, Waterloo",
      featured: false
    },
    {
      title: "The Ultimate Guelph Bridal Flower Guide",
      excerpt: "Seasonal blooms, local florists, and expert tips for creating stunning bridal bouquets in Guelph.",
      author: "Michael Chen",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Inspiration & Trends",
      location: "Guelph",
      featured: false
    },
    {
      title: "Local Wedding Trends to Watch in 2025",
      excerpt: "From sustainable celebrations to micro-weddings, discover what's trending in Wellington County.",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Inspiration & Trends",
      location: "Wellington County",
      featured: false
    },
    {
      title: "Meet the Maker: Kitchener's Top Cake Designer",
      excerpt: "An exclusive interview with award-winning cake artist revealing secrets behind stunning wedding cakes.",
      author: "Emily Rodriguez",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Local Spotlights",
      location: "Kitchener",
      featured: false
    },
    {
      title: "Behind the Lens: Photographers in Waterloo Share What Matters Most",
      excerpt: "Local photographers reveal their tips for capturing authentic, emotional wedding moments.",
      author: "Michael Chen",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Real Weddings",
      location: "Waterloo",
      featured: false
    },
    {
      title: "How to Plan a Wedding in Kitchener: Your Complete Timeline",
      excerpt: "A comprehensive 12-month planning guide specifically designed for Kitchener couples.",
      author: "Sarah Johnson",
      date: "February 10, 2024",
      readTime: "12 min read",
      category: "Planning Tips",
      location: "Kitchener",
      featured: false
    }
  ];

  const locationTags = ["Guelph", "Kitchener", "Waterloo", "Cambridge", "Wellington County"];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold wedding-text-gradient mb-4">
              The Vow Vault
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Your Guide to Planning a Stunning Wedding in Guelph, Kitchener, Waterloo, Cambridge & Beyond
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="wedding-button-primary text-lg px-8 py-4">
                <Camera className="h-5 w-5 mr-2" />
                Submit Your Wedding
              </Button>
              <Button className="wedding-button-secondary text-lg px-8 py-4">
                <Star className="h-5 w-5 mr-2" />
                Get Featured
              </Button>
            </div>

            {/* Location Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {locationTags.map((location) => (
                <span
                  key={location}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-wedding-pink/30 rounded-full text-sm font-medium text-wedding-deep-rose hover:bg-wedding-pink hover:text-white transition-all cursor-pointer"
                >
                  #{location}
                </span>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold wedding-text-gradient text-center mb-12">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {blogCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.name}
                    className="glass-card p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="h-8 w-8 text-wedding-pink mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <span className="text-xs text-wedding-pink font-medium">{category.count} posts</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold wedding-text-gradient text-center mb-8">
              Featured Story
            </h2>
            <div className="glass-card rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-wedding-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-wedding-pink font-medium">{featuredPost.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">#{featuredPost.location}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="wedding-button-primary">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold wedding-text-gradient text-center mb-12">
              Latest Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-wedding-blush to-wedding-pink flex items-center justify-center">
                    <Heart className="h-16 w-16 text-white opacity-50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-wedding-pink font-medium text-sm">{post.category}</span>
                      <span className="text-xs text-gray-500">#{post.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Button variant="ghost" className="text-wedding-pink hover:bg-wedding-blush">
                        Read More <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vendor CTA */}
            <div className="text-center p-8 glass-card rounded-xl">
              <Star className="h-12 w-12 text-wedding-pink mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold wedding-text-gradient mb-4">
                For Wedding Vendors
              </h3>
              <p className="text-gray-600 mb-6">
                Showcase your work and connect with couples planning their dream weddings in Wellington County.
              </p>
              <div className="space-y-3">
                <Button 
                  className="wedding-button-primary w-full"
                  onClick={() => navigate('/')}
                >
                  Get Listed
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-wedding-pink/30 text-wedding-deep-rose hover:bg-wedding-pink hover:text-white"
                >
                  Submit Featured Work
                </Button>
              </div>
            </div>

            {/* Couples CTA */}
            <div className="text-center p-8 glass-card rounded-xl">
              <Heart className="h-12 w-12 text-wedding-pink mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold wedding-text-gradient mb-4">
                For Couples
              </h3>
              <p className="text-gray-600 mb-6">
                Share your beautiful wedding story and inspire other couples in your community.
              </p>
              <div className="space-y-3">
                <Button 
                  className="wedding-button-primary w-full"
                  onClick={() => navigate('/')}
                >
                  Find a Vendor
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-wedding-pink/30 text-wedding-deep-rose hover:bg-wedding-pink hover:text-white"
                >
                  Submit Your Wedding
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center p-8 glass-card rounded-xl">
            <Heart className="h-12 w-12 text-wedding-pink mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold wedding-text-gradient mb-6">
              Stay Inspired
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest wedding inspiration, vendor spotlights, and planning tips delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-wedding-pink focus:outline-none"
              />
              <Button className="wedding-button-primary px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
