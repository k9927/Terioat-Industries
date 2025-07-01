import React from "react";
import { Award, Star, Truck, Users, Cog, Settings, Target, Shield } from 'lucide-react';

function About() {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Products Delivered" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Precision Engineering",
      description: "Every component is crafted with meticulous attention to detail and engineering excellence."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure our parts meet the highest industry standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted Partnerships",
      description: "Building long-lasting relationships with clients through reliability and consistent performance."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Continuously improving our processes and products to stay ahead of industry demands."
    }
  ];

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
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 relative overflow-hidden">
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
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 transform hover:scale-110 transition-transform duration-300">
            <span className="text-4xl text-white font-bold">T</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Terioat Industries
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Precision Engineering Excellence Since 1991
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Trusted Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with enhanced background */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-60"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section with enhanced background */}
      <section className="py-20 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Section background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-25 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded with a vision to revolutionize precision manufacturing, Terioat Industries has grown from a small workshop to a leading manufacturer of high-quality auto and agricultural parts. Our journey spans over <span className="font-semibold text-blue-600">three decades of innovation</span> and unwavering commitment to excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a simple goal to deliver <span className="font-semibold text-green-600">precision-engineered components</span> has evolved into a comprehensive approach to manufacturing that prioritizes durability, performance, and reliability. Today, we proudly serve clients across multiple industries, building lasting partnerships rooted in trust and exceptional quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-white/50 hover:border-white/80 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 relative bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="absolute inset-0">
          <div className="absolute bottom-32 right-1/3 w-56 h-56 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-20 blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-12 shadow-lg border border-white/50">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Automotive Industry</h3>
                  <p className="text-gray-600">High-performance auto parts designed for durability and optimal vehicle performance across various automotive applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🚜</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Agricultural Sector</h3>
                  <p className="text-gray-600">Robust agricultural components built to withstand demanding farming conditions and enhance equipment reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference that three decades of precision engineering can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919888291744?text=Hi%2C%20I%27m%20interested%20in%20your%20products.%20Can%20we%20discuss%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">📱</span>
              Contact Us on WhatsApp
            </a>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;