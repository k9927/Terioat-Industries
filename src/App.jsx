import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ContactPages from './pages/Contact';
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<ContactPages/>} />
          <Route path="/products" element={<ProductsPage/>} />

      </Routes>
    </div>
  );
}

export default App;
