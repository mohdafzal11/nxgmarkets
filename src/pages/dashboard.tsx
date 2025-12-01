import { Link } from "react-router-dom";
import {
  ArrowDownToLine,
  ArrowUpToLine,
  LayoutDashboard,
  RefreshCcw,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Layout from "../layouts/layout";
import Navbar from "../components/navbar";

const breadcrumb = [
  {
    title: "Dashboard",
    route: "/dashboard",
  },
];

const financialStats = [
  {
    label: "Balance",
    value: "$ 0",
    change: "+$0",
    changeColor: "text-emerald-500",
    icon: Wallet,
  },
  {
    label: "Trader Volume",
    value: "0",
    change: "0",
    changeColor: "text-rose-500",
    icon: TrendingUp,
  },
  {
    label: "Total Withdraw",
    value: "$ 0",
    change: "-$0",
    changeColor: "text-rose-500",
    icon: ArrowDownToLine,
  },
  {
    label: "Total Deposit",
    value: "$0",
    change: "$0",
    changeColor: "text-emerald-500",
    icon: ArrowUpToLine,
  },
];

const tradingAccounts = [
  {
    account: "21164",
    leverage: "1:500",
    type: "Beginner Boost",
    balance: "$ 0",
    equity: "$ 0",
  },
  {
    account: "22579",
    leverage: "1:500",
    type: "Beginner Boost",
    balance: "$ 0",
    equity: "$ 0",
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <Navbar breadcrumb={breadcrumb} balance={1000} />

      <main className="flex-1">
        <div className="py-10">
          <section className="grid gap-8 lg:grid-cols-[1fr,1fr]">
            <div className="space-y-8">
              {/* Title Section - Removed extra text */}
              <div className="space-y-4">
                <h1 className="px-5 text-4xl font-bold text-[#596da0]">
                  MUNSHI AYAZ AJIZ BASIR
                </h1>
              </div>

              {/* Financial Stats Cards - Updated styling */}
              <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2">
                {financialStats.map((card) => (
                  <div
                    key={card.label}
                    className="w-full rounded-md border border-[#e8eaf2] bg-white p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#6b7a9d]">
                          {card.label}
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <p className="text-lg font-semibold text-[#4a73d0]">
                            {card.value}
                          </p>
                          <p
                            className={`text-sm font-medium ${card.changeColor}`}
                          >
                            {card.change}
                          </p>
                        </div>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#b52c61] text-white">
                        <card.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trading Accounts Section - Updated layout */}
              <div className="rounded-[24px] border border-[#e8eaf2] bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-[#8b90ad]">
                      Trading Account
                    </p>
                  </div>
                  <button className="rounded-md border border-pink-500 bg-white px-6 py-2 text-sm font-semibold text-pink-500 transition hover:bg-pink-50">
                    OPEN ACCOUNT
                  </button>
                </div>

                <div className="space-y-4">
                  {tradingAccounts.map((account) => (
                    <div
                      key={account.account}
                      className="border border-[#e8eaf2] rounded-xl p-4"
                    >
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-400">
                            <ShieldCheck className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-[#8b90ad]">Account:</p>
                            <p className="text-sm font-semibold text-[#1d2341]">
                              {account.account}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-[#8b90ad]">Leverage:</p>
                          <p className="text-sm font-semibold text-[#1d2341]">
                            {account.leverage}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#8b90ad]">
                            Account Type:
                          </p>
                          <p className="text-sm font-semibold text-[#1d2341]">
                            {account.type}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#8b90ad]">Balance:</p>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-[#1d2341]">
                              {account.balance}
                            </p>
                            <button className="rounded-full border border-[#e4e6f2] p-1 text-[#8b90ad] hover:bg-gray-50">
                              <RefreshCcw className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-[#8b90ad]">Equity:</p>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-[#1d2341]">
                              {account.equity}
                            </p>
                            <button className="rounded-full border border-[#e4e6f2] p-1 text-[#8b90ad] hover:bg-gray-50">
                              <RefreshCcw className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
