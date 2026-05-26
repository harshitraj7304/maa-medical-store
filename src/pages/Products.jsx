import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

/* Dummy products list - later replace with api.get('/products') */
const DUMMY = [
  { id: "p1", name: "Paracetamol 650mg", price: 30, mrp: 50, image: "", desc: "For fever and pain." },
  { id: "p2", name: "Azithromycin 500mg", price: 90, mrp: 120, image: "", desc: "Antibiotic." },
  { id: "p3", name: "Cough Syrup 100ml", price: 120, mrp: 150, image: "", desc: "Relief for cough." },
  { id: "p4", name: "Vitamin C 500mg", price: 180, mrp: 220, image: "", desc: "Boost immunity." },
  { id: "p5", name: "Multivitamin", price: 250, mrp: 300, image: "", desc: "Daily health." },
  { id: "p6", name: "OR Salts", price: 25, mrp: 40, image: "", desc: "Rehydration" },
];

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // replace with API when backend ready:
    setProducts(DUMMY);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold mb-6">Medicines</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
