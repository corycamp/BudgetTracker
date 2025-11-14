"use client";

import { useState } from "react";
import googleIcon from "./assets/google-icon.svg";
import { signIn } from "next-auth/react";

export default function AuthCard() {
  const [tab, setTab] = useState<"login" | "signup">("login");

  return (
    <div className="bg-[#1C1E24] p-8 rounded-xl w-full max-w-md shadow-xl border border-white/10">
      <div className="flex mb-6">
        <button
          onClick={() => setTab("login")}
          className={`w-1/2 py-2 rounded-md ${
            tab === "login"
              ? "bg-gray-700 text-white"
              : "bg-transparent text-gray-400"
          }`}
        >
          Log In
        </button>
        <button
          onClick={() => setTab("signup")}
          className={`w-1/2 py-2 rounded-md ${
            tab === "signup"
              ? "bg-gray-700 text-white"
              : "bg-transparent text-gray-400"
          }`}
        >
          Sign Up
        </button>
      </div>

      <div className="flex flex-col gap-4 text-white">
        <div>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 px-3 py-2 text-black bg-white border border-gray-700 rounded-lg focus:border-green-400 outline-none"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 px-3 py-2 bg-white border border-gray-700 rounded-lg focus:border-green-400 outline-none text-black"
          />
          <p className="text-right text-sm text-blue-400 mt-1 cursor-pointer">
            Forgot Password?
          </p>
        </div>

        <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-lg transition">
          {tab === "login" ? "Log In to Your Account" : "Create Account"}
        </button>

        <div className="text-center text-gray-400">or</div>

        <button
          className="flex justify-center items-center gap-3 w-full bg-[#1e293b] hover:bg-[#273449] py-2 rounded-lg transition"
          onClick={() => signIn("google", { callbackUrl: "/Dashboard" })}
        >
          <img src={googleIcon} alt="Google" className="w-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
