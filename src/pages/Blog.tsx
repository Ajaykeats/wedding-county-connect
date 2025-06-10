
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Heart, Star } from 'lucide-react';
import Header from '@/components/Header';

const Blog = () => {
  const navigate = useNavigate();

  const featuredPost = {
    title: "2024 Wedding Trends: What's Hot in Wellington County",
    excerpt: "Discover the latest wedding trends taking Wellington County by storm this year, from sustainable celebrations to intimate micro-weddings.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Trends",
    image: "/placeholder.svg"
  };

  const blogPosts = [
    {
      title: "Planning Your Wedding Budget: A Complete Guide",
      excerpt: "Learn how to create and stick to a wedding budget that works for your dream celebration.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Budget",
      featured: false
    },
    {
      title: "Top 10 Wedding Venues in Wellington County",
      excerpt: "Explore the most stunning wedding venues our region has to offer, from rustic barns to elegant estates.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Venues",
      featured: false
    },
    {
      title: "Seasonal Wedding Planning: Spring Celebrations",
      excerpt: "Make the most of spring weddings with tips for flowers, weather preparation, and seasonal decor.",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Seasonal",
      featured: false
    },
    {
      title: "Choosing the Perfect Wedding Photographer",
      excerpt: "A comprehensive guide to finding and selecting the ideal photographer to capture your special day.",
      author: "Michael Chen",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Photography",
      featured: false
    },
    {
      title: "DIY Wedding Decorations on a Budget",
      excerpt: "Creative and affordable DIY decoration ideas that will make your wedding beautiful without breaking the bank.",
      author: "Emily Rodriguez",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "DIY",
      featured: false
    },
    {
      title: "Wedding Day Timeline: A Complete Schedule",
      excerpt: "Create the perfect wedding day timeline to ensure everything runs smoothly from morning to night.",
      author: "Sarah Johnson",
      date: "February 10, 2024",
      readTime: "8 min read",
      category: "Planning",
      featured: false
    }
  ];

  const categories = ["All", "Trends", "Budget", "Venues", "Photography", "Planning", "DIY", "Seasonal"];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold wedding-text-gradient mb-6">
              Wedding Planning Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert advice, inspiration, and insider tips to help you plan the perfect wedding in Wellington County.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
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
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
                    {featuredPost.title}
                  </h2>
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

          {/* Categories Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "wedding-button-primary" : "border-wedding-pink/30 text-wedding-deep-rose hover:bg-wedding-pink hover:text-white"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-wedding-blush to-wedding-pink flex items-center justify-center">
                  <Heart className="h-16 w-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-wedding-pink font-medium text-sm">{post.category}</span>
                    <Star className="h-4 w-4 text-wedding-pink" />
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

          {/* Newsletter Signup */}
          <div className="text-center p-8 glass-card rounded-xl">
            <Heart className="h-12 w-12 text-wedding-pink mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold wedding-text-gradient mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest wedding planning tips, vendor spotlights, and exclusive offers delivered to your inbox.
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
    </>
  );
};

export default Blog;
