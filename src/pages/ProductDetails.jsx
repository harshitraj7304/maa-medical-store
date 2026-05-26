import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const DUMMY = {
  p1: { id: "p1", name: "Paracetamol 650mg", price: 30, mrp: 50, image: "", desc: "Relief from fever and pain. Take as directed." },
  p2: { id: "p2", name: "Azithromycin 500mg", price: 90, mrp: 120, image: "", desc: "Antibiotic used as prescribed." }
};

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // replace with api.get(`/products/${id}`)
    setProduct(DUMMY[id] || { id, name: "Product", price: 0, desc: "Details coming soon" });
  }, [id]);

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 flex items-center justify-center">
          <img src={product.image || "https://via.placeholder.com/300"} alt={product.name} className="max-h-60 object-contain" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <div className="text-xl font-semibold mb-4">₹{product.price} <span className="line-through text-gray-400 text-sm ml-2">₹{product.mrp}</span></div>
          <p className="text-gray-700 mb-6">{product.desc}</p>

          <div className="flex gap-3">
            <button onClick={() => addToCart(product, 1)} className="bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white px-5 py-2 rounded-lg">Add to Cart</button>
            <Link to="/cart" className="px-5 py-2 bg-gray-100 rounded-lg">Go to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
