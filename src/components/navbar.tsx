import { Link } from "react-router-dom";

import { HomeIcon, PhoneIcon } from "../icons/icons";
import { LogOut } from "lucide-react";

export default function Navbar({
  breadcrumb,
  balance,
}: {
  breadcrumb: { title: string; route: string }[];
  balance: number;
}) {
  return (
    <header className="p-2 border-b border-gray-200 bg-white shadow-sm rounded-md mt-2">
      <div className="flex items-center justify-between py-1 px-4">
        <div className="flex flex-col">
          <p className="text-xs text-gray-400 flex items-center gap-2">
            <HomeIcon className="w-3 h-3" fill="#9ca3af" />/
            {breadcrumb.map((item) => (
              <Link
                key={item.title}
                to={item.route}
                className="text-sm text-gray-500"
              >
                {item.title}
              </Link>
            ))}
          </p>
          <h1 className="text-base font-bold text-blue-800 opacity-75">
            Trader Area
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Balance */}
          <div className="px-4 py-1.5 bg-gray-200 text-blue-800 text-xs font-bold rounded-md opacity-75">
            BALANCE : ${balance}
          </div>

          {/* Phone Button */}
          <button className="px-4 py-1 border border-[#b52c61] rounded hover:bg-gray-50 transition-colors">
            <PhoneIcon fill="#b52c61" className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <select className="px-3 py-1.5 transition-colors cursor-pointer">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

          {/* Logout Button */}
          <button className="px-4 py-1 transition-colors">
            <LogOut className="w-4 h-4 text-[#b52c61]" />
          </button>
        </div>
      </div>
    </header>
  );
}
