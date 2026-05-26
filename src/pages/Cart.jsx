import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function Cart() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty, total } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link to="/products" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Shop Medicines</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <img src={item.image || "https://via.placeholder.com/80"} alt={item.name} className="w-20 h-20 object-contain" />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">₹{item.price} x {item.qty} = ₹{item.price * item.qty}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => decreaseQty(item.id)} className="p-2 bg-gray-100 rounded"><FaMinus /></button>
                  <div className="px-3">{item.qty}</div>
                  <button onClick={() => increaseQty(item.id)} className="p-2 bg-gray-100 rounded"><FaPlus /></button>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500"><FaTrash /></button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
              <button onClick={clearCart} className="text-red-500">Clear Cart</button>
              <Link to="/products" className="text-blue-600">Continue Shopping</Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-lg font-semibold mb-4">Order Summary</div>
            <div className="flex justify-between mb-3">
              <div>Subtotal</div>
              <div>₹{total}</div>
            </div>
            <div className="flex justify-between mb-3">
              <div>Delivery</div>
              <div>₹30</div>
            </div>
            <div className="flex justify-between font-bold text-xl mb-4">
              <div>Total</div>
              <div>₹{total + 30}</div>
            </div>

            <button onClick={() => navigate("/checkout")} className="w-full bg-green-600 text-white py-3 rounded-lg">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
