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
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
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

      {/* Hero Section with enhanced background */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
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
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 transition-transform duration-300 transform rounded-full bg-white/20 backdrop-blur-sm hover:scale-110">
            <span className="text-4xl font-bold text-white">T</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            About Terioat Industries
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
            Precision Engineering Excellence Since 1991
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            
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
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-60"></div>
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 text-center transition-all duration-300 transform border shadow-lg group bg-white/90 backdrop-blur-md rounded-xl hover:shadow-xl hover:-translate-y-2 border-white/50"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="mb-2 text-4xl font-bold text-transparent transition-transform duration-300 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text md:text-5xl group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section with enhanced background */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Section background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 rounded-full top-20 right-20 bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute rounded-full opacity-25 bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-200 to-blue-200 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-800">Our Story</h2>
            <div className="max-w-4xl p-8 mx-auto border shadow-lg bg-white/90 backdrop-blur-md rounded-2xl border-white/50">
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Founded with a vision to revolutionize precision manufacturing, Terioat Industries has grown from a small workshop to a leading manufacturer of high-quality auto and agricultural parts. Our journey spans over <span className="font-semibold text-blue-600">three decades of innovation</span> and unwavering commitment to excellence.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                What started as a simple goal to deliver <span className="font-semibold text-green-600">precision-engineered components</span> has evolved into a comprehensive approach to manufacturing that prioritizes durability, performance, and reliability. Today, we proudly serve clients across multiple industries, building lasting partnerships rooted in trust and exceptional quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-8 text-center transition-all duration-300 transform border shadow-lg group bg-white/90 backdrop-blur-md rounded-xl hover:shadow-2xl border-white/50 hover:border-white/80 hover:-translate-y-2"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white transition-transform duration-300 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800 transition-colors duration-200 group-hover:text-blue-600">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="absolute inset-0">
          <div className="absolute w-56 h-56 rounded-full bottom-32 right-1/3 bg-gradient-to-br from-indigo-100 to-blue-100 opacity-20 blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <div className="p-12 border shadow-lg bg-white/90 backdrop-blur-md rounded-2xl border-white/50">
            <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">Industries We Serve</h2>
            <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
              <div className="flex items-start p-6 space-x-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                  <span className="text-2xl text-white">🚗</span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">Automotive Industry</h3>
                  <p className="text-gray-600">High-performance auto parts designed for durability and optimal vehicle performance across various automotive applications.</p>
                </div>
              </div>
              <div className="flex items-start p-6 space-x-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 shadow-lg bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                  <span className="text-2xl text-white">🚜</span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">Agricultural Sector</h3>
                  <p className="text-gray-600">Robust agricultural components built to withstand demanding farming conditions and enhance equipment reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
          <h2 className="mb-4 text-3xl font-bold">Ready to Partner With Us?</h2>
          <p className="mb-8 text-xl opacity-90">
            Experience the difference that three decades of precision engineering can make for your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/919888291744?text=Hi%2C%20I%27m%20interested%20in%20your%20products.%20Can%20we%20discuss%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 hover:shadow-xl"
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