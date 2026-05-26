import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const placeOrder = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert("Please fill details");
      return;
    }
    // Here integrate backend order API. For now mock:
    const order = {
      id: `ORD-${Date.now()}`,
      items: cart,
      total,
      name,
      phone,
      address,
      status: "placed",
      createdAt: new Date()
    };
    console.log("Order placed:", order);
    clearCart();
    alert("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={placeOrder} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Delivery Address</label>
          <textarea value={address} onChange={e => setAddress(e.target.value)} className="w-full border px-3 py-2 rounded" />
        </div>

        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Amount: ₹{total + 30}</div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Place Order</button>
        </div>
      </form>
    </div>
  );
}
