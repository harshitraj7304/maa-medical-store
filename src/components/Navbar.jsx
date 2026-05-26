import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaCapsules, FaFlask, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#0366d6] to-[#7c3aed] text-white px-5 md:px-10 py-3 sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <span className="font-bold">MA</span>
          </div>
          <span className="text-lg md:text-2xl font-semibold">MA-Medical-Store</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="flex items-center gap-2 hover:underline">
            <FaCapsules /> Medicines
          </Link>
          <Link to="/tests" className="flex items-center gap-2 hover:underline">
            <FaFlask /> Lab Tests
          </Link>
          <Link to="/orders" className="hover:underline">Orders</Link>
          <Link to="/cart" className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg">
            <FaShoppingCart /> <span>Cart ({cart.length})</span>
          </Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(v => !v)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden mt-3 px-5 pb-4 space-y-3 bg-gradient-to-b from-[#0366d6]/5 to-transparent">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/products">Medicines</Link>
          <Link onClick={() => setOpen(false)} to="/tests">Lab Tests</Link>
          <Link onClick={() => setOpen(false)} to="/orders">Orders</Link>
          <Link onClick={() => setOpen(false)} to="/cart">Cart ({cart.length})</Link>
        </div>
      )}
    </nav>
  );
}
