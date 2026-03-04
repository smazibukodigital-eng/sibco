/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { CartToast } from './components/CartToast';
import { Home } from './pages/Home';
import { GroceryPacks } from './pages/GroceryPacks';
import { Stationery } from './pages/Stationery';
import { Tutoring } from './pages/Tutoring';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/grocery" element={<GroceryPacks />} />
              <Route path="/stationery" element={<Stationery />} />
              <Route path="/tutoring" element={<Tutoring />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <CartToast />
          
          <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SIBCOMART. All rights reserved.
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}
