import React from 'react';
import { groceryPacks } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const GroceryPacks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Student Grocery Packs</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Choose the perfect pack for your needs and budget. We've carefully curated these to keep you fueled throughout the month.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groceryPacks.map((pack) => (
          <ProductCard key={pack.id} product={pack} />
        ))}
      </div>
    </div>
  );
};
