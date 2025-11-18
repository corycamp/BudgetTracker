"use client";

import { useState } from "react";
import googleIcon from "./assets/google-icon.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";

export default function AuthCard() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingDefault, setLoadingDefault] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const clearInput = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoadingDefault(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        setLoadingDefault(false);
        return;
      }

      await handleSignIn(e);
    } catch (err: any) {
      setError("Something went wrong" + err.message);
    } finally {
      setLoadingDefault(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoadingDefault(true);

    // Call NextAuth Credentials Provider
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // If NextAuth returns an error
    if (result?.status != 200 || !result) {
      setError("Invalid email or password");
      setLoadingDefault(false);
      return;
    } else {
      router.replace("/Dashboard");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    tab === "login" ? await handleSignIn(e) : await handleSignUp(e);
  };

  return (
    <div className="bg-[#1C1E24] p-8 rounded-xl w-full max-w-md shadow-xl border border-white/10">
      <form onSubmit={handleSubmit}>
        <div className="flex mb-6">
          <button
            type="button"
            onClick={() => {
              clearInput();
              setTab("login");
            }}
            className={`w-1/2 py-2 rounded-md ${
              tab === "login"
                ? "bg-gray-700 text-white"
                : "bg-transparent text-gray-400  hover:cursor-pointer"
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => {
              clearInput();
              setTab("signup");
            }}
            className={`w-1/2 py-2 rounded-md ${
              tab === "signup"
                ? "bg-gray-700 text-white"
                : "bg-transparent text-gray-400  hover:cursor-pointer"
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
              value={email}
              onChange={(e) => {
                setError("");
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 bg-white border border-gray-700 rounded-lg focus:border-green-400 outline-none text-black"
              value={password}
              onChange={(e) => {
                setError("");
                setPassword(e.target.value);
              }}
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            disabled={loadingDefault || loadingGoogle}
            className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-lg transition hover:cursor-pointer"
            type="submit"
          >
            {!loadingDefault ? (
              <div>
                {tab === "login" ? "Log In to Your Account" : "Create Account"}
              </div>
            ) : (
              <BeatLoader
                className="gap-2"
                color="white"
                loading={loadingDefault}
                size={15}
              />
            )}
          </button>

          <div className="text-center text-gray-400">or</div>

          <button
            disabled={loadingGoogle || loadingDefault}
            className="flex justify-center items-center gap-3 w-full bg-[#1e293b] hover:bg-[#273449] py-2 rounded-lg transition hover:cursor-pointer"
            onClick={() => {
              setLoadingGoogle(!loadingGoogle);
              signIn("google", { callbackUrl: "/Dashboard" });
            }}
          >
            {!loadingGoogle ? (
              <div className="flex flex-row justify-between w-1/2">
                <Image src={googleIcon} alt="Google" className="w-5" />
                Continue with Google
              </div>
            ) : (
              <BeatLoader
                className="gap-2"
                color="white"
                loading={loadingGoogle}
                size={15}
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
