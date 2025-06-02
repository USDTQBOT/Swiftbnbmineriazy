"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownRight, Plus, ArrowDown, CreditCard, DollarSign } from "lucide-react"

export default function WalletOverview() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Wallet</h1>

      {/* Balance Card */}
      <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <p className="text-gray-400 text-sm">Total Balance</p>
            <h3 className="text-3xl font-bold">$99,999,999,999.00</h3>
            <div className="flex items-center text-green-500 mt-1">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+2.5% from last month</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#40e0d0] text-[#0e0a2e] px-4 py-2 rounded-lg flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Deposit
            </button>
            <button className="bg-transparent border border-[#40e0d0] text-[#40e0d0] px-4 py-2 rounded-lg flex items-center">
              <ArrowDown className="h-5 w-5 mr-2" />
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800 mb-6">
        <div className="flex space-x-8">
          <button
            className={`pb-4 px-1 ${activeTab === "overview" ? "text-[#40e0d0] border-b-2 border-[#40e0d0] font-medium" : "text-gray-400"}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`pb-4 px-1 ${activeTab === "transactions" ? "text-[#40e0d0] border-b-2 border-[#40e0d0] font-medium" : "text-gray-400"}`}
            onClick={() => setActiveTab("transactions")}
          >
            Transactions
          </button>
          <button
            className={`pb-4 px-1 ${activeTab === "payment" ? "text-[#40e0d0] border-b-2 border-[#40e0d0] font-medium" : "text-gray-400"}`}
            onClick={() => setActiveTab("payment")}
          >
            Payment Methods
          </button>
        </div>
      </div>

      {/* Overview Tab Content */}
      {activeTab === "overview" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Balance History</h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-gray-400">[Balance chart visualization would appear here]</div>
              </div>
            </div>

            <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center">
                    <div className="bg-green-500/20 p-2 rounded-lg mr-3">
                      <ArrowUpRight className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Deposit</p>
                      <p className="text-sm text-gray-400">May 3, 2025</p>
                    </div>
                  </div>
                  <p className="font-medium text-green-500">+$1,200.00</p>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center">
                    <div className="bg-red-500/20 p-2 rounded-lg mr-3">
                      <ArrowDownRight className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Withdrawal</p>
                      <p className="text-sm text-gray-400">May 2, 2025</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-500">-$500.00</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-[#40e0d0]/20 p-2 rounded-lg mr-3">
                      <DollarSign className="h-5 w-5 text-[#40e0d0]" />
                    </div>
                    <div>
                      <p className="font-medium">Trade Profit</p>
                      <p className="text-sm text-gray-400">May 1, 2025</p>
                    </div>
                  </div>
                  <p className="font-medium text-green-500">+$350.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transactions Tab Content */}
      {activeTab === "transactions" && (
        <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">All Transactions</h3>
            <div className="flex items-center">
              <select className="bg-[#0e0a2e] text-white border border-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:border-[#40e0d0]">
                <option>All Types</option>
                <option>Deposits</option>
                <option>Withdrawals</option>
                <option>Trades</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-800">
                  <th className="pb-3 font-medium">Transaction ID</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4">#TX78623</td>
                  <td className="py-4">May 3, 2025</td>
                  <td className="py-4">Deposit</td>
                  <td className="py-4 text-green-500">+$1,200.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Completed</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4">#TX78622</td>
                  <td className="py-4">May 2, 2025</td>
                  <td className="py-4">Withdrawal</td>
                  <td className="py-4 text-red-500">-$500.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs">Pending</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4">#TX78621</td>
                  <td className="py-4">May 1, 2025</td>
                  <td className="py-4">Trade</td>
                  <td className="py-4 text-green-500">+$350.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Completed</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4">#TX78620</td>
                  <td className="py-4">Apr 30, 2025</td>
                  <td className="py-4">Deposit</td>
                  <td className="py-4 text-green-500">+$2,000.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">#TX78619</td>
                  <td className="py-4">Apr 29, 2025</td>
                  <td className="py-4">Withdrawal</td>
                  <td className="py-4 text-red-500">-$800.00</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-red-500/20 text-red-500 rounded-full text-xs">Failed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Payment Methods Tab Content */}
      {activeTab === "payment" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-semibold">Payment Methods</h3>
                <button className="text-[#40e0d0] hover:underline text-sm">+ Add New</button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-[#40e0d0]/20 p-2 rounded-lg mr-3">
                      <CreditCard className="h-5 w-5 text-[#40e0d0]" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-400">Expires 05/26</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Default</span>
                    <button className="text-gray-400 hover:text-white">•••</button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-[#40e0d0]/20 p-2 rounded-lg mr-3">
                      <CreditCard className="h-5 w-5 text-[#40e0d0]" />
                    </div>
                    <div>
                      <p className="font-medium">Mastercard ending in 8888</p>
                      <p className="text-sm text-gray-400">Expires 12/25</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white">•••</button>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-6">Billing Address</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">First Name</label>
                    <input
                      type="text"
                      value="John"
                      className="w-full bg-[#0e0a2e] border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#40e0d0]"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Last Name</label>
                    <input
                      type="text"
                      value="Doe"
                      className="w-full bg-[#0e0a2e] border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#40e0d0]"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Address</label>
                  <input
                    type="text"
                    value="123 Trading Street"
                    className="w-full bg-[#0e0a2e] border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#40e0d0]"
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">City</label>
                    <input
                      type="text"
                      value="New York"
                      className="w-full bg-[#0e0a2e] border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#40e0d0]"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Zip Code</label>
                    <input
                      type="text"
                      value="10001"
                      className="w-full bg-[#0e0a2e] border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#40e0d0]"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Country</label>
                  <input
                    type="text"
                    value="United States"
                    className="w-full bg-[#0e0a2e] border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#40e0d0]"
                    readOnly
                  />
                </div>

                <button className="bg-[#40e0d0] text-[#0e0a2e] px-4 py-2 rounded-lg mt-2">Edit Address</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
