import type { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({
  children,
}: Readonly<LayoutProps>) {
  return <div className="min-h-screen bg-gray-100 flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">{children}</div>
  </div>;
}
