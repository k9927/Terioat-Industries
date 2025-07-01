import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-md">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              Terioat Industries
            </span>
            <span className="text-xs text-gray-500 -mt-1">
              Precision Engineering
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          <a
            href="/"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 relative group"
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
          <a
            href="/about"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 relative group"
          >
            About
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
          <a
            href="/products"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 relative group"
          >
            Products
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
          <a
            href="/contact"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
          
          {/* CTA Button */}
          <div className="ml-4 pl-4 border-l border-gray-200">
            <a
              href="https://wa.me/919888291744"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>💬</span>
              Get Quote
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-2">
            <a
              href="/"
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/products"
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="/contact"
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-600 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                💬 Get Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;