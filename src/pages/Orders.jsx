import React from "react";
import { Link } from "react-router-dom";

/* Temporary: show mock orders. Replace with API when backend ready */
const MOCK = [
  { id: "ORD-1001", total: 350, status: "Delivered", date: "2024-12-01" },
  { id: "ORD-1002", total: 1200, status: "Out for delivery", date: "2025-02-20" }
];

export default function Orders() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>
      <div className="space-y-4">
        {MOCK.map(o => (
          <div key={o.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            <div>
              <div className="font-semibold">{o.id}</div>
              <div className="text-sm text-gray-500">{o.date} • ₹{o.total}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{o.status}</div>
              <Link to="/orders" className="text-blue-600 text-sm">View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
