import React, { useState } from 'react';
import cart from '../images/cart.svg';

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Certified Cultural Heritage Guide",
      category: "Tribal Heritage Tours",
      price: 800,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Traditional Tribal Food Platter",
      category: "Tribal Kitchen",
      price: 350,
      quantity: 2,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Traditional Handia Rice Beer",
      category: "Local Brewers Association",
      price: 300,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Handwoven Sohrai Art Wall Hanging",
      category: "Santhal Artisans Co-op",
      price: 1200,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Wildlife Safari Guide Package",
      category: "Wildlife Conservation Team",
      price: 1200,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    }
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    }));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = 10;

  return (
    <>
      {/* Cart Button - Fixed Position */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-red-600 px-6 py-4 text-white shadow-lg hover:bg-red-500 transition-all"
      >
        <img src={cart} alt="Cart" className="w-6 h-6 filter invert" />
        <span className="font-semibold">Cart ({cartItems.length})</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 bg-slate-950 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-yellow-800">
            <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-yellow-400 hover:text-white text-3xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Cart Items - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-yellow-900 rounded-xl p-4 border border-yellow-800"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-yellow-400 mb-2">{item.category}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="w-7 h-7 rounded-lg bg-yellow-800 text-white hover:bg-yellow-700 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-white font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="w-7 h-7 rounded-lg bg-yellow-800 text-white hover:bg-yellow-700 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-white font-bold">
                            ₹{item.price * item.quantity}
                          </span>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-yellow-400 text-lg">Your cart is empty!</p>
              </div>
            )}
          </div>

          {/* Footer - Total & Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-yellow-800 p-6 space-y-4 bg-yellow-900">
              <div className="space-y-2">
                <div className="flex justify-between text-yellow-300">
                  <span>Subtotal:</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-yellow-300">
                  <span>Shipping:</span>
                  <span>₹{shippingCost}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-yellow-800">
                  <span>Total:</span>
                  <span className="text-green-400">₹{totalPrice + shippingCost}</span>
                </div>
              </div>
              
              <button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-4 rounded-xl transition-colors">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
