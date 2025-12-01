import Layout from "../layouts/layout";
import Navbar from "../components/navbar";
import DashboardFooter from "../components/dashboard-footer";
import Select from "react-select";
import useUser from "../hooks/useUser";
import type { StylesConfig } from 'react-select';


const breadcrumb = [
  { title: "Dashboard", route: "/dashboard" },
  { title: "Crypto Chill Deposit", route: "/user/deposit/crypto-chill" },
];

const cryptoOptions = [
  { value: "BTC", label: "BTC" },
  { value: "LTC", label: "LTC" },
  { value: "ETH", label: "ETH" },
  { value: "ERC20", label: "ERC20" },
  { value: "TRC20", label: "TRC20" },
  { value: "BEP20", label: "BEP20" },
];


const customStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "8px",
    borderColor: state.isFocused ? "#b01a51" : "#d1d5db",
    boxShadow: state.isFocused ? "0 0 0 1px #b21f54" : "none",
    padding: "2px",
    "&:hover": {
      borderColor: "#b21f54",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#b21f54"
      : state.isFocused
        ? "#fce4ec"
        : "white",
    color: state.isSelected ? "white" : "#374151",
    padding: "10px",
    cursor: "pointer",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    marginTop: "4px",
  }),
};

export default function CryptoChill() {

  const { user } = useUser()

  return (
    <Layout>
      <Navbar breadcrumb={breadcrumb} balance={0} />

      <main className="flex-1 flex justify-center py-10 px-4">
        <div className="flex justify-center items-center w-full max-w-4xl bg-white shadow-lg rounded-xl p-10">
          <div className="max-w-2xl">
            <h1 className="text-gray-500 text-xl font-semibold text-center mb-2">
              Crypto Chill Deposit
            </h1>
            <p className="text-center text-gray-500 mb-8">
              Make a request for online deposit. It’s very simple and fast.
            </p>

            {/* FORM */}
            <form className="space-y-6">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
                  disabled
                />
              </div>

              {/* Crypto Symbol */}
              <div>
                <label
                  htmlFor="select"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Crypot Symbol
                </label>

                <Select
                  options={cryptoOptions}
                  styles={customStyles}
                  placeholder="Select value"
                  isSearchable={true}
                />
              </div>

              {/* Crypto Currency */}

              <div>
                <label
                  htmlFor="select"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Crypot Curreny
                </label>

                <Select
                  options={cryptoOptions}
                  styles={customStyles}
                  placeholder="Select value"
                  isSearchable={true}
                />
              </div>

              {/* Amount USD */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Amount (USD)
                </label>              <input
                  type="number"
                  defaultValue={0}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
                />
              </div>

              {/* Amount */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-left text-sm font-semibold text-gray-700 mb-2"
                >
                  Amount (ETH)
                </label>              <input
                  type="number"
                  defaultValue={0}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C41E5B] focus:border-transparent text-gray-700"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full  bg-[#b52c61] text-white py-3 rounded-md hover:bg-[#b01a51] transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </main>

      <DashboardFooter />
    </Layout>
  );
}
