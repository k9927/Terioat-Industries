import React, { useState, useMemo } from 'react';
import { MessageCircle, Phone, Eye, Filter, Search, Grid, List, ChevronDown, Star, Award, Truck, X, Cog, Settings } from 'lucide-react';
import products from "./products";
// Mock products data - you'll replace this with your actual products import


export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Extract categories from products
  const categories = useMemo(() => {
    const cats = new Set();
    products.forEach(product => {
      if (product.name.includes('Crossholder')) cats.add('Crossholders');
      else if (product.name.includes('Bush')) cats.add('Bushes');
      else if (product.name.includes('Shaft')) cats.add('Shafts');
      else if (product.name.includes('Yoke')) cats.add('Yokes');
    });
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || 
                             (selectedCategory === 'Crossholders' && product.name.includes('Crossholder')) ||
                             (selectedCategory === 'Bushes' && product.name.includes('Bush')) ||
                             (selectedCategory === 'Shafts' && product.name.includes('Shaft')) ||
                             (selectedCategory === 'Yokes' && product.name.includes('Yoke'));

      const price = parseInt(product.price.replace(/[^0-9]/g, ''));
      const matchesPrice = priceRange === 'All' ||
                          (priceRange === 'Under 250' && price < 250) ||
                          (priceRange === '250-350' && price >= 250 && price <= 350) ||
                          (priceRange === 'Above 350' && price > 350);

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  // WhatsApp contact function
  const handleWhatsAppContact = (productName) => {
    const phoneNumber = "9888291744";
    const message = `Hi! I'm interested in ${productName}. Could you please provide more details about pricing and availability?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    const phoneNumber = "+919888291744";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-green-100 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-100 rounded-full opacity-20 animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
        
        {/* Gear icons scattered in background */}
        <Cog className="absolute top-32 right-10 w-8 h-8 text-gray-200 opacity-30 animate-spin" style={{animationDuration: '10s'}} />
        <Settings className="absolute bottom-32 left-16 w-6 h-6 text-gray-200 opacity-25 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
        <Cog className="absolute top-2/3 right-1/4 w-10 h-10 text-gray-200 opacity-20 animate-spin" style={{animationDuration: '12s'}} />
        <Settings className="absolute top-1/4 left-1/3 w-7 h-7 text-gray-200 opacity-30 animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Diagonal lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(0, 0, 0, 0.01) 100px,
              rgba(0, 0, 0, 0.01) 101px
            )
          `
        }}></div>
      </div>

      {/* Hero Section with enhanced background */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-16 relative overflow-hidden">
        {/* Hero background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white opacity-5 rounded-full"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.05) 75%)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of precision-engineered mechanical components, 
            crafted with over 30 years of manufacturing excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search with enhanced background */}
      <section className="bg-white border-b relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 py-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100/80 backdrop-blur-sm rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>

              <div className={`flex flex-wrap items-center gap-4 ${showFilters ? 'block' : 'hidden lg:flex'}`}>
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Price Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                >
                  <option value="All">All Prices</option>
                  <option value="Under 250">Under ₹250</option>
                  <option value="250-350">₹250 - ₹350</option>
                  <option value="Above 350">Above ₹350</option>
                </select>

                {/* View Mode */}
                <div className="flex bg-gray-100/80 backdrop-blur-sm rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </section>

      {/* Products Grid/List with enhanced background */}
      <section className="py-12 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Section background elements */}
        <div className="absolute inset-0">
          {/* Large gradient blobs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-25 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Additional scattered elements */}
          <div className="absolute top-32 left-1/4 w-48 h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-25 blur-2xl"></div>
          <div className="absolute bottom-32 right-1/3 w-56 h-56 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-20 blur-2xl"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-40 right-1/4 w-32 h-32 bg-blue-200 opacity-10 rotate-45 rounded-lg blur-xl"></div>
          <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-purple-200 opacity-15 rotate-12 rounded-lg blur-xl"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 25%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 25%),
              radial-gradient(circle at 75% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 25%),
              radial-gradient(circle at 25% 75%, rgba(251, 191, 36, 0.08) 0%, transparent 25%)
            `,
            backgroundSize: '400px 400px'
          }}></div>
          
          {/* Tech-inspired hexagon pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 
              "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" : 
              "space-y-6"
            }>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group relative bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50 hover:border-white/80 hover:bg-white/95 transform hover:-translate-y-1 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 aspect-square ${
                        viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                      }`}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick view button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                      >
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>

                    {/* Quality badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-100/90 backdrop-blur-sm text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Made in India
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Price and availability */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                        <span className="text-sm text-gray-500">Starting price</span>
                      </div>
                      
                      <div className="text-right">
                        <div className="bg-green-50/90 backdrop-blur-sm text-green-700 text-xs font-medium px-2 py-1 rounded">
                          Available
                        </div>
                      </div>
                    </div>

                    {/* Key features */}
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Material:</span>
                        <span className="font-medium">EN-8 Steel</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Precision:</span>
                        <span className="font-medium">Industrial Grade</span>
                      </div>
                    </div>

                    {/* Contact buttons */}
                    <div className={`space-y-2 ${viewMode === 'list' ? 'flex space-y-0 space-x-2' : ''}`}>
                      <button 
                        onClick={() => handleWhatsAppContact(product.name)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp for Quote
                      </button>
                      
                      <button 
                        onClick={handleCall}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Price</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedProduct.price}</p>
                </div>
                <div className="flex space-x-4 pt-4">
                  <button 
                    onClick={() => handleWhatsAppContact(selectedProduct.name)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp for Quote
                  </button>
                  <button 
                    onClick={handleCall}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Manufacturing CTA with enhanced background */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-16 text-white relative overflow-hidden">
        {/* CTA background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white rounded-full"></div>
          </div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Need Custom Parts?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We specialize in custom manufacturing with over 30 years of experience. 
            Contact us directly for bulk orders, custom specifications, or any special requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppContact("Custom Manufacturing")}
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
            <button 
              onClick={handleCall}
              className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call for Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}