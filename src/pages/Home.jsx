import React from "react";
import { MessageCircle, Phone, Eye } from 'lucide-react';
import products from "./products";

function Home() {
  // WhatsApp contact function
  const handleWhatsAppContact = (productName) => {
    const phoneNumber = "9888291744"; // Replace with your father's WhatsApp number
    const message = `Hi! I'm interested in ${productName}. Could you please provide more details about pricing and availability?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    const phoneNumber = "+919888291744"; // Replace with actual number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl px-4 pt-10 pb-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Section Heading */}
        <h2 className="mb-2 text-3xl font-bold text-center text-gray-900">
          Our Products
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-center text-gray-500">
          High-quality mechanical parts crafted with precision and care.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product, index) => (
            <div key={index} className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick view button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
                    <Eye className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                {/* Quality badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Made in India
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                </div>

                {/* Price and availability */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500">Starting price</span>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded">
                      Available
                    </div>
                  </div>
                </div>

                {/* Key features */}
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Material:</span>
                    <span className="font-medium">EN-8</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Precision:</span>
                    <span className="font-medium">Industrial Grade</span>
                  </div>
                </div>

                {/* Contact buttons */}
                <div className="space-y-2">
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

        {/* Contact section */}
        <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Parts?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We specialize in custom manufacturing. Contact us directly for bulk orders, 
            custom specifications, or any special requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppContact("Custom Manufacturing")}
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
            <button 
              onClick={handleCall}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call for Discussion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;