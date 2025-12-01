import { Copy } from "lucide-react";
import toast from "react-hot-toast";

export default function InvoicePage() {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    return (
        <div className="w-full min-h-screen bg-[#F4F4F7] relative">

            <div className="w-full h-[240px] bg-[#272B4D]"></div>

            <div className="max-w-4xl mx-auto -mt-28 bg-white rounded-xl shadow-2xl p-10">

                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold mb-6">Invoice</h1>

                    <img
                        src={"/src/assets/logo.png"}
                        alt="logo"
                        className="h-8"
                    />
                </div>

                <div className="space-y-5 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Invoice ID</span>
                        <span className="font-medium">112C20E3D16046BF937D316AC36577DD</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Invoice Date</span>
                        <span className="font-medium">November 26, 2025</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Payment requested</span>
                        <span className="font-medium">
                            0.00170739 BTC <span className="text-gray-500">($150.00)</span>
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Amount paid</span>
                        <span className="font-medium">0 BTC</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Status</span>
                        <span className="bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                            Awaiting
                        </span>
                    </div>
                </div>

                <div className="border-b my-8"></div>

                <p className="text-gray-700 mb-6">
                    To complete the payment, please open your crypto wallet and transfer the specified amount to the
                    address listed here.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="space-y-5">

                        {/* Address */}
                        <div>
                            <label className="text-sm text-gray-600">Address</label>
                            <div className="flex relative mt-1 rounded-md border border-gray-200">
                                <input
                                    value="bc1qreqyean8fd09yfxlzmppamn8vf9ayih65p700kv"
                                    readOnly
                                    className="w-full px-4 py-2 pr-10 bg-gray-50"
                                />
                                <button
                                    onClick={() => copyToClipboard("bc1qreqyean8fd09yfxlzmppamn8vf9ayih65p700kv")}
                                    className="bg-blue-600 px-3 py-2 rounded-r-md"
                                >
                                    <Copy className="text-white h-5 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* BTC Amount */}
                        <div>
                            <label className="text-sm text-gray-600">Amount to send in BTC</label>
                            <div className="flex relative mt-1 rounded-md border border-gray-200">
                                <input
                                    value="0.00170739"
                                    readOnly
                                    className="w-full px-4 py-2 pr-10 bg-gray-50"
                                />
                                <button
                                    onClick={() => copyToClipboard("0.00170739")}
                                    className="bg-blue-600 px-3 py-2 rounded-r-md"
                                >
                                    <Copy className="text-white h-5 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="text-sm text-gray-700 flex justify-between">
                            <span>Expires in 14 min 46 sec</span>
                            <button className="text-blue-600 hover:underline">
                                Renew price
                            </button>
                        </div>

                        <div className="w-full h-1 bg-gray-300 rounded-full">
                            <div className="h-1 bg-blue-600 rounded-full" style={{ width: "40%" }} />
                        </div>

                    </div>

                    <div className="flex items-center justify-center">
                        <div className="border rounded-xl p-4 shadow-sm">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=btc"
                                alt="QR"
                                className="w-40 h-40"
                            />
                        </div>
                    </div>

                </div>

                <div className="flex justify-end mt-10">
                    <div className="text-gray-400 text-sm">
                        Powered by <span className="text-blue-600 font-semibold">uniwire</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
