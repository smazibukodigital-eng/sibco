import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            {product.popular && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-2">
                <Star className="w-3 h-3 mr-1 fill-current" /> Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          </div>
          <span className="text-lg font-bold text-blue-600">R{product.price.toFixed(2)}</span>
        </div>
        
        {product.description && (
          <p className="text-gray-500 text-sm mb-4">{product.description}</p>
        )}

        {product.items && product.items.length > 0 && (
          <div className="mt-4 flex-grow">
            <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Includes:</h4>
            <ul className="space-y-2 text-sm text-gray-600 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {product.items.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-gray-50 pb-1 last:border-0">
                  <span>{item.item}</span>
                  <span className="font-medium text-gray-900">x{item.qty}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="p-6 pt-0 mt-auto">
        <button
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
