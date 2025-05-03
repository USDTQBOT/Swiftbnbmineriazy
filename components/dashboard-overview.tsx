import { ArrowUpRight, ArrowDownRight, DollarSign, BarChart2, Users, Activity } from "lucide-react"

export default function DashboardOverview() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Total Balance</p>
              <h3 className="text-2xl font-bold">$24,563.00</h3>
            </div>
            <div className="bg-green-500/20 p-2 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="flex items-center text-green-500">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+2.5%</span>
            <span className="text-xs text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Total Profit</p>
              <h3 className="text-2xl font-bold">$6,927.00</h3>
            </div>
            <div className="bg-[#40e0d0]/20 p-2 rounded-lg">
              <BarChart2 className="h-6 w-6 text-[#40e0d0]" />
            </div>
          </div>
          <div className="flex items-center text-green-500">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+1.8%</span>
            <span className="text-xs text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Total Customers</p>
              <h3 className="text-2xl font-bold">3,642</h3>
            </div>
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
          </div>
          <div className="flex items-center text-green-500">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+12.5%</span>
            <span className="text-xs text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Active Trades</p>
              <h3 className="text-2xl font-bold">42</h3>
            </div>
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-orange-500" />
            </div>
          </div>
          <div className="flex items-center text-red-500">
            <ArrowDownRight className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">-3.2%</span>
            <span className="text-xs text-gray-400 ml-2">from last month</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Trading Performance</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="text-gray-400">[Chart visualization would appear here]</div>
          </div>
        </div>

        <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Portfolio Distribution</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="text-gray-400">[Chart visualization would appear here]</div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-[#1a1642] rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
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
                <td className="py-4">$1,200.00</td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Completed</span>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4">#TX78622</td>
                <td className="py-4">May 2, 2025</td>
                <td className="py-4">Withdrawal</td>
                <td className="py-4">$500.00</td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs">Pending</span>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4">#TX78621</td>
                <td className="py-4">May 1, 2025</td>
                <td className="py-4">Trade</td>
                <td className="py-4">$350.00</td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Completed</span>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4">#TX78620</td>
                <td className="py-4">Apr 30, 2025</td>
                <td className="py-4">Deposit</td>
                <td className="py-4">$2,000.00</td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Completed</span>
                </td>
              </tr>
              <tr>
                <td className="py-4">#TX78619</td>
                <td className="py-4">Apr 29, 2025</td>
                <td className="py-4">Withdrawal</td>
                <td className="py-4">$800.00</td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-500 rounded-full text-xs">Failed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
