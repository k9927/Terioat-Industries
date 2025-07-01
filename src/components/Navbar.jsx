import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg">
      <div className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 shadow-md bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl">
            <img
              src="images/logo.png"
              alt="Logo"
              className="object-contain w-8 h-8"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              Terioat Industries
            </span>
            <span className="-mt-1 text-xs text-gray-500">
              Precision Engineering
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="items-center hidden space-x-1 md:flex">
          <Link
            to="/"
            className="relative px-4 py-2 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 group"
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </Link>
          <Link
            to="/about"
            className="relative px-4 py-2 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 group"
          >
            About
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </Link>
          <Link
            to="/products"
            className="relative px-4 py-2 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 group"
          >
            Products
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </Link>
          <Link
            to="/contact"
            className="relative px-4 py-2 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 group"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </Link>

          {/* CTA Button */}
          <div className="pl-4 ml-4 border-l border-gray-200">
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
            className="p-2 text-gray-700 transition-colors duration-200 rounded-lg hover:bg-gray-100"
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
        <div className="bg-white border-t border-gray-200 shadow-lg md:hidden">
          <div className="px-6 py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-3 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/products"
              className="block px-4 py-3 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:bg-blue-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="https://wa.me/919888291744"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 font-medium text-center text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
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
