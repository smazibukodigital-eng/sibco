import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process payment here via Payfast/Yoco API
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Order Confirmed!</h2>
        <p className="text-lg text-gray-500 mb-8">
          Thank you for shopping with SIBCOMART. Your order has been successfully placed.
          We will contact you shortly with delivery details.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <Link to="/grocery" className="text-blue-600 hover:text-blue-500 font-medium">
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <Link to="/cart" className="text-gray-500 hover:text-gray-700 flex items-center">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Cart
        </Link>
      </div>
      
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Delivery Details</h2>
            
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                  <input type="text" id="name" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border p-2.5" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="mt-1">
                  <input type="email" id="email" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border p-2.5" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">Student ID (Optional)</label>
                <div className="mt-1">
                  <input type="text" id="studentId" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border p-2.5" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address / Res Name</label>
                <div className="mt-1">
                  <textarea id="address" rows={3} required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border p-2.5"></textarea>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-6">Payment Method</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input id="payment-online" name="payment_method" type="radio" defaultChecked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="payment-online" className="ml-3 block text-sm font-medium text-gray-700">
                  Online Payment (Credit/Debit Card, Instant EFT)
                </label>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500"
              >
                Place Order (R{totalPrice.toFixed(2)})
              </button>
            </div>
          </form>
        </div>

        {/* Order summary */}
        <div className="mt-10 lg:mt-0 lg:col-span-5">
          <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 px-4 py-6 sm:p-6 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
            
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} className="py-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">R{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-6 border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">R{totalPrice.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Delivery</dt>
                <dd className="text-sm font-medium text-gray-900">Calculated at next step</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-bold text-gray-900">Total</dt>
                <dd className="text-base font-bold text-gray-900">R{totalPrice.toFixed(2)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
