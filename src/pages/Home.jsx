import React from "react";
import { Link } from "react-router-dom";
import { FaCapsules, FaFlask, FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <header className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Fast Medicine Delivery & Lab Tests at Home</h1>
          <p className="text-gray-700 mb-6">Order medicines, book diagnostic tests with home sample collection and track your orders — all in one place.</p>

          <div className="flex gap-3 flex-wrap">
            <Link to="/products" className="bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] px-5 py-3 rounded-full text-white font-medium shadow">Shop Medicines</Link>
            <Link to="/tests" className="bg-white border px-5 py-3 rounded-full text-gray-800 font-medium shadow-sm">Book Tests</Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-6 shadow-lg">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm"><FaCapsules className="text-2xl text-[#0ea5e9]" /></div>
              <div>
                <div className="font-semibold">Medicines</div>
                <div className="text-sm text-gray-500">Wide range, fast delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm"><FaFlask className="text-2xl text-[#10b981]" /></div>
              <div>
                <div className="font-semibold">Lab Tests</div>
                <div className="text-sm text-gray-500">Home sample collection available</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm"><FaShoppingCart className="text-2xl text-[#ef4444]" /></div>
              <div>
                <div className="font-semibold">Easy Checkout</div>
                <div className="text-sm text-gray-500">Multiple payment options</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Popular Medicines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* dummy highlights - link to /products */}
          <Link to="/products" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
            <div className="text-lg font-semibold">Paracetamol 650mg</div>
            <div className="text-sm text-gray-500">Pain & Fever</div>
          </Link>
          <Link to="/products" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
            <div className="text-lg font-semibold">Vitamin C</div>
            <div className="text-sm text-gray-500">Immunity booster</div>
          </Link>
          <Link to="/products" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
            <div className="text-lg font-semibold">Cough Syrup</div>
            <div className="text-sm text-gray-500">Cold & Cough</div>
          </Link>
          <Link to="/products" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
            <div className="text-lg font-semibold">Oral Rehydration Salts</div>
            <div className="text-sm text-gray-500">Dehydration care</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
