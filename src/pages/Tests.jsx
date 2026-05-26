import React from "react";
import { Link } from "react-router-dom";

const TESTS = [
  { id: "t1", name: "Complete Blood Count (CBC)", price: 250, desc: "Basic blood profile" },
  { id: "t2", name: "Lipid Profile", price: 800, desc: "Cholesterol & fats" },
  { id: "t3", name: "Blood Sugar (Fasting)", price: 150, desc: "Fasting blood sugar" },
  { id: "t4", name: "COVID-19 RTPCR", price: 700, desc: "PCR Test" }
];

export default function Tests() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold mb-6">Lab Tests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTS.map(t => (
          <div key={t.id} className="bg-white p-5 rounded-lg shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.desc}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold mb-2">₹{t.price}</div>
              <Link to={`/book-test/${t.id}`} className="px-4 py-2 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white rounded-lg">Book</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
