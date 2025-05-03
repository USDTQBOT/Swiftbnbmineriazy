"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-8">CREATE ACCOUNT</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm uppercase mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 text-white placeholder-gray-500 focus:outline-none focus:border-[#40e0d0]"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm uppercase mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 text-white placeholder-gray-500 focus:outline-none focus:border-[#40e0d0]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm uppercase mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 text-white placeholder-gray-500 focus:outline-none focus:border-[#40e0d0]"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-8">
          <label htmlFor="confirmPassword" className="block text-sm uppercase mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="w-full bg-transparent border-b border-gray-600 py-2 px-1 text-white placeholder-gray-500 focus:outline-none focus:border-[#40e0d0]"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#40e0d0] text-center py-3 rounded-full text-[#0e0a2e] font-medium hover:bg-[#3acdc0] transition-colors"
        >
          {isLoading ? "CREATING ACCOUNT..." : "SIGN UP"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm">
          Already have an account?{" "}
          <Link href="/" className="text-[#40e0d0] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
