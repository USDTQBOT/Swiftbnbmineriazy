"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Home, BarChart2, Wallet, Settings, Bell, Menu, X, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // Simulate logout
    router.push("/")
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-[#0e0a2e] text-white flex">
      {/* Sidebar - Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#0c0825] transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <Link href="/dashboard" className="text-xl font-bold text-[#40e0d0]">
            7gRapidz
          </Link>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6">
          <ul>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-3 text-white hover:bg-[#1a1642] border-l-4 border-[#40e0d0]"
              >
                <Home className="h-5 w-5 mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/analytics"
                className="flex items-center px-4 py-3 text-gray-400 hover:bg-[#1a1642] hover:text-white border-l-4 border-transparent"
              >
                <BarChart2 className="h-5 w-5 mr-3" />
                Analytics
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/wallet"
                className="flex items-center px-4 py-3 text-gray-400 hover:bg-[#1a1642] hover:text-white border-l-4 border-transparent"
              >
                <Wallet className="h-5 w-5 mr-3" />
                Wallet
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="flex items-center px-4 py-3 text-gray-400 hover:bg-[#1a1642] hover:text-white border-l-4 border-transparent"
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full border-t border-gray-800 p-4">
          <button onClick={handleLogout} className="flex items-center text-gray-400 hover:text-white w-full">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#0c0825] shadow-md py-4 px-6 flex justify-between items-center">
          <button className="lg:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-400 hover:text-white" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-[#40e0d0] flex items-center justify-center text-[#0e0a2e] font-bold mr-2">
                A
              </div>
              <span className="hidden md:inline">Admin1</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
