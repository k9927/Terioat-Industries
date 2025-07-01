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
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 text-center bg-white border-b">
        <div className="max-w-4xl px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Welcome to Terioat Industries</h1>
          <p className="mb-6 text-lg text-gray-600">
            Leading manufacturer of mechanical parts including Cross Holders, Bushes, Shafts, and Yokes.
            Delivering quality components for over 30 years.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Explore Products
            </button>
            <button
              onClick={handleCall}
              className="px-6 py-3 font-medium text-gray-900 transition-all duration-200 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute w-32 h-32 bg-blue-100 rounded-full top-20 left-10 opacity-20 animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-purple-100 rounded-full top-40 right-20 opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute w-20 h-20 bg-green-100 rounded-full opacity-25 bottom-40 left-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-16 h-16 bg-yellow-100 rounded-full top-1/3 right-1/3 opacity-20 animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
        
        {/* Gear icons scattered in background */}
        <Cog className="absolute w-8 h-8 text-gray-200 top-32 right-10 opacity-30 animate-spin" style={{animationDuration: '10s'}} />
        <Settings className="absolute w-6 h-6 text-gray-200 opacity-25 bottom-32 left-16 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
        <Cog className="absolute w-10 h-10 text-gray-200 top-2/3 right-1/4 opacity-20 animate-spin" style={{animationDuration: '12s'}} />
        <Settings className="absolute text-gray-200 top-1/4 left-1/3 w-7 h-7 opacity-30 animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}} />
        
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

      {/* Products Header Section with enhanced background */}
      <section className="relative py-16 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        {/* Hero background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-40 h-40 bg-white rounded-full top-10 left-10 opacity-5"></div>
          <div className="absolute w-32 h-32 bg-white rounded-full bottom-10 right-10 opacity-10"></div>
          <div className="absolute w-24 h-24 bg-white rounded-full top-1/2 left-1/4 opacity-5"></div>
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
        
        <div className="relative z-10 px-4 mx-auto text-center max-w-7xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Products</h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
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
      <section id="products-section" className="relative bg-white border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30"></div>
        <div className="relative z-10 px-4 py-6 mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 space-x-2 transition-colors rounded-lg lg:hidden bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200"
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
                <div className="flex p-1 rounded-lg bg-gray-100/80 backdrop-blur-sm">
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
      <section className="relative py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Section background elements */}
        <div className="absolute inset-0">
          {/* Large gradient blobs */}
          <div className="absolute w-64 h-64 rounded-full top-20 right-20 bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute rounded-full opacity-25 bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-200 to-blue-200 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Additional scattered elements */}
          <div className="absolute w-48 h-48 rounded-full opacity-25 top-32 left-1/4 bg-gradient-to-br from-yellow-100 to-orange-100 blur-2xl"></div>
          <div className="absolute w-56 h-56 rounded-full bottom-32 right-1/3 bg-gradient-to-br from-indigo-100 to-blue-100 opacity-20 blur-2xl"></div>
          
          {/* Geometric shapes */}
          <div className="absolute w-32 h-32 rotate-45 bg-blue-200 rounded-lg top-40 right-1/4 opacity-10 blur-xl"></div>
          <div className="absolute w-40 h-40 bg-purple-200 rounded-lg bottom-40 left-1/3 opacity-15 rotate-12 blur-xl"></div>
          
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
        
        <div className="relative z-10 px-4 mx-auto max-w-7xl">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center">
              <div className="mb-4 text-gray-400">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-600">No products found</h3>
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
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />
                    
                    {/* Quick view button */}
                    <div className="absolute transition-all duration-300 transform translate-x-2 opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-x-0">
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="p-2 transition-colors duration-200 rounded-full shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white"
                      >
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>

                    {/* Quality badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 text-xs font-semibold text-green-800 rounded-full bg-green-100/90 backdrop-blur-sm">
                        Made in India
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className="mb-3">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
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
                        <div className="px-2 py-1 text-xs font-medium text-green-700 rounded bg-green-50/90 backdrop-blur-sm">
                          Available
                        </div>
                      </div>
                    </div>

                    {/* Key features */}
                    <div className="pb-4 mb-4 border-b border-gray-100">
                      <div className="flex justify-between mb-1 text-sm text-gray-600">
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
                        className="flex items-center justify-center w-full gap-2 px-4 py-2 font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b bg-white/95 backdrop-blur-md">
              <h2 className="text-xl font-bold text-gray-900">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 transition-colors rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="object-cover w-full h-64 mb-6 rounded-lg"
              />
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Description</h3>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Price</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedProduct.price}</p>
                </div>
                <div className="flex pt-4 space-x-4">
                  <button 
                    onClick={() => handleWhatsAppContact(selectedProduct.name)}
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-medium text-white transition-all duration-200 bg-green-600 rounded-lg hover:bg-green-700"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp for Quote
                  </button>
                  <button 
                    onClick={handleCall}
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
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
      <section className="relative py-16 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        {/* CTA background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-32 h-32 bg-white rounded-full top-10 left-10"></div>
            <div className="absolute w-40 h-40 bg-white rounded-full bottom-10 right-10"></div>
            <div className="absolute w-24 h-24 bg-white rounded-full top-1/2 right-1/4"></div>
          </div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Need Custom Parts?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100">
            We specialize in custom manufacturing with over 30 years of experience. 
            Contact us directly for bulk orders, custom specifications, or any special requirements.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button 
              onClick={() => handleWhatsAppContact("Custom Manufacturing")}
              className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-200 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
            <button 
              onClick={handleCall}
              className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-blue-600 transition-all duration-200 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
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