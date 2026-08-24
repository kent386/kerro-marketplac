"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("Account created! Now login.");
      router.push("/login");
    } else {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-center">Join KERRO</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90">
          Create Account
        </button>
      </form>
      <p className="mt-6 text-center text-gray-500 text-sm">
        Already have an account? <Link href="/login" className="text-primary font-bold">Login</Link>
      </p>
    </div>
  );
        }
