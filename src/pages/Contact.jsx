import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Cog, Settings, Award, Star, Truck, Shield } from 'lucide-react';

export default function ContactPages() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a formatted message from form data
    const formattedMessage = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}

---
Sent via Terioat Industries website contact form
    `.trim();

    // Send via WhatsApp
    handleWhatsAppContact(formattedMessage);
    
    // Optional: Also log or save the data
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const handleWhatsAppContact = (message = "Hi! I'm interested in your precision engineering services. Could you please provide more details?") => {
    const phoneNumber = "9888291744";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Get In Touch</h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
            Ready to discuss your precision engineering needs? We're here to help bring your projects to life with over 30 years of manufacturing excellence.
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
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>30+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section with enhanced background */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
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
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Contact Form */}
            <div className="p-8 transition-all duration-300 transform border shadow-lg bg-white/90 backdrop-blur-md rounded-2xl border-white/50 hover:bg-white/95 hover:-translate-y-1">
              <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
            

                <Send className="w-6 h-6 mr-2 text-blue-600" />
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="automotive">Automotive Parts</option>
                    <option value="agricultural">Agricultural Components</option>
                    <option value="custom">Custom Manufacturing</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-semibold text-white transition-all duration-200 transform rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="p-8 transition-all duration-300 transform border shadow-lg bg-white/90 backdrop-blur-md rounded-2xl border-white/50 hover:bg-white/95 hover:-translate-y-1">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
                  <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-transform duration-200 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600 transition-colors cursor-pointer hover:text-blue-600">+91 9888291744</p>
                      <p className="text-gray-600 transition-colors cursor-pointer hover:text-blue-600">+91 7986418001</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-transform duration-200 rounded-lg bg-gradient-to-br from-green-500 to-green-600 group-hover:scale-110">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600 transition-colors cursor-pointer hover:text-blue-600">terioatindustries@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-transform duration-200 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">1717/1,Street No-5,Chimney Road,New Shimlapuri<br />Ludhiana, Punjab 141003<br />India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-transform duration-200 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 group-hover:scale-110">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="relative p-8 overflow-hidden text-white transition-all duration-300 transform shadow-lg bg-gradient-to-br from-green-500 to-green-600 rounded-2xl hover:shadow-xl hover:-translate-y-1">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 translate-x-8 -translate-y-8 bg-white rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 -translate-x-4 translate-y-4 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm">
                      <MessageCircle size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Quick Response</h3>
                  </div>
                  <p className="mb-6 text-green-100">Need immediate assistance? Connect with us on WhatsApp for instant support and quick quotes.</p>
                  <button 
                    onClick={() => handleWhatsAppContact()}
                    className="flex items-center px-6 py-3 space-x-2 font-semibold text-green-600 transition-all duration-200 transform bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with enhanced background */}
      <section className="relative py-16 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        {/* Stats background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute w-32 h-32 bg-white rounded-full top-10 left-10 animate-pulse"></div>
            <div className="absolute w-40 h-40 bg-white rounded-full bottom-10 right-10 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute w-24 h-24 bg-white rounded-full top-1/2 right-1/4 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bg-white rounded-full bottom-1/3 left-1/3 w-36 h-36 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
            `
          }}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.03) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.03) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose Terioat Industries?</h2>
            <p className="text-lg text-blue-100">Three decades of precision engineering excellence</p>
          </div>
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="group">
              <div className="mb-2 text-4xl font-bold transition-transform duration-200 group-hover:scale-110">30+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold transition-transform duration-200 group-hover:scale-110">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold transition-transform duration-200 group-hover:scale-110">1000+</div>
              <div className="text-blue-100">Products Delivered</div>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl font-bold transition-transform duration-200 group-hover:scale-110">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Support Section */}
      <section className="relative py-16 bg-white">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-blue-50 to-purple-50"></div>
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">We're Here to Help</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Located in the heart of Punjab's industrial region, we serve clients across India and internationally with our precision engineering solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-200 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Prime Location</h3>
              <p className="text-gray-600">Strategically located in Ludhiana's Industrial Area for easy access and logistics.</p>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-200 rounded-full bg-gradient-to-br from-green-500 to-green-600 group-hover:scale-110">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Instant Communication</h3>
              <p className="text-gray-600">WhatsApp support for immediate queries and quick response to your requirements.</p>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-200 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Trusted Partner</h3>
              <p className="text-gray-600">Three decades of reliability and quality in precision mechanical components.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}