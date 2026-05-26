import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookTest() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert("Please fill details");
      return;
    }
    // mock booking
    alert(`Test ${id} booked! We'll collect sample from ${address}`);
    navigate("/orders");
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-semibold mb-6">Book Test: {id}</h1>
      <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="w-full border px-3 py-2 rounded" />
        <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" className="w-full border px-3 py-2 rounded" />
        <textarea value={address} onChange={e=>setAddress(e.target.value)} placeholder="Pickup address" className="w-full border px-3 py-2 rounded" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Confirm Booking</button>
      </form>
    </div>
  );
}
