import { useState, type ReactNode } from "react";
import { Paperclip, SendHorizontal, Smile, X } from "lucide-react";
import Sidebar from "../components/sidebar";
import { MessageIcon } from "../icons/icons";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex p-4 gap-5">
        <Sidebar />
        <div className="flex-1 flex flex-col">{children}</div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
        {isChatOpen && (
          <div className="w-80  rounded-2xl shadow-2xl bg-white overflow-hidden border border-gray-200">
            <div className="bg-orange-500 text-white px-4 py-3 flex items-center justify-between">
              <span className="font-semibold text-sm">
                Welcome to live chat
              </span>
              <button
                type="button"
                aria-label="Close chat"
                className="text-white/80 hover:text-white transition"
                onClick={() => setIsChatOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 bg-gray-50 text-xs text-gray-500 leading-relaxed min-h-[160px]">
              Hi! How can we help you today? Our team typically replies within a
              few minutes.
            </div>
            <div className="border-t border-gray-200 px-3 py-2 flex items-center gap-2">
              <button
                type="button"
                aria-label="Attach file"
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Insert emoji"
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <Smile className="w-4 h-4" />
              </button>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                />
              </div>
              <button
                type="button"
                aria-label="Send message"
                className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-full w-9 h-9 flex items-center justify-center"
              >
                <SendHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          aria-label="Open live chat"
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <MessageIcon className="w-8 h-8" />
        </button>
      </div>
    </>
  );
}
