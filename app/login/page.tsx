"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/marketplace");
    } else {
      alert("Login failed! Check your email/password.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-center">Login to KERRO</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-primary/20"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90">
          Sign In
        </button>
      </form>
      <p className="mt-6 text-center text-gray-500 text-sm">
        Don't have an account? <Link href="/register" className="text-primary font-bold">Register here</Link>
      </p>
    </div>
  );
}
