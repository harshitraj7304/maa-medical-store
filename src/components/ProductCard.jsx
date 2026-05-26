import React from "react";
import { FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg border">
      <div className="h-40 flex items-center justify-center mb-4">
        <img src={product.image || "https://media.istockphoto.com/id/1022216070/photo/packet-of-generic-paracetamol-tablets.jpg?b=1&s=612x612&w=0&k=20&c=yfIbT9O1lQbsDzSGTI02KnqGPNfD_S-2ZkBqAy8-Czk="} alt={product.name} className="max-h-36 object-contain" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.desc || "Brief description available."}</p>
      <div className="flex items-center justify-between mt-4">
        <div>
          <div className="text-xl font-bold">₹{product.price}</div>
          {product.mrp && <div className="text-xs line-through text-gray-400">₹{product.mrp}</div>}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => addToCart(product, 1)}
            className="flex items-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] text-white px-3 py-2 rounded-lg hover:opacity-95"
          >
            <FaPlus /> Add
          </button>
          <Link to={`/products/${product.id}`} className="px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">View</Link>
        </div>
      </div>
    </div>
  );
}
