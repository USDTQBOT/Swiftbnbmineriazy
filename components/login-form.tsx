"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(true)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-8">LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm uppercase mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username or Email"
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 text-white placeholder-gray-500 focus:outline-none focus:border-[#40e0d0]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm uppercase mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter a password."
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 text-white placeholder-gray-500 focus:outline-none focus:border-[#40e0d0]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-right mb-6">
          <Link href="/forgot-password" className="text-sm text-white hover:text-[#40e0d0]">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#40e0d0] text-center py-3 rounded-full text-[#0e0a2e] font-medium hover:bg-[#3acdc0] transition-colors"
        >
          {isLoading ? "LOGGING IN..." : "LOGIN"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#40e0d0] uppercase font-bold">
            Signup now!
          </Link>
        </p>
      </div>
    </div>
  )
}
