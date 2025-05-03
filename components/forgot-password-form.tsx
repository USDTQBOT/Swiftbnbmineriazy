"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset request
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">FORGOT PASSWORD</h1>
      <p className="text-gray-400 mb-8">
        Enter your email address below and we'll send you instructions to reset your password.
      </p>

      {isSubmitted ? (
        <div className="text-center">
          <div className="bg-green-500/20 text-green-500 p-4 rounded-lg mb-6">
            Password reset instructions have been sent to your email address.
          </div>
          <Link href="/" className="text-[#40e0d0] hover:underline">
            Return to login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm uppercase mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent border-b border-gray-600 py-2 px-1 text-white placeholder-gray-500 focus:outline-none focus:border-[#40e0d0]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#40e0d0] text-center py-3 rounded-full text-[#0e0a2e] font-medium hover:bg-[#3acdc0] transition-colors"
          >
            {isLoading ? "SENDING..." : "RESET PASSWORD"}
          </button>
        </form>
      )}

      <div className="mt-6 text-center">
        <p className="text-sm">
          Remember your password?{" "}
          <Link href="/" className="text-[#40e0d0] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
