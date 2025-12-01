import { Link } from "react-router-dom";
import {
  Bell,
  ShieldCheck,
  Mail,
  Users,
  ArrowRight,
  LayoutDashboard,
  FileText,
} from "lucide-react";
import Layout from "../layouts/layout";

const statCards = [
  { label: "Active Traders", value: "2,814", change: "+12% vs last week" },
  { label: "Pending Verifications", value: "36", change: "5 new today" },
  { label: "Support Tickets", value: "18", change: "4 awaiting replies" },
  { label: "New Signups", value: "142", change: "Last 24 hours" },
];

const quickLinks = [
  {
    title: "Home",
    description: "Public landing overview",
    route: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Login",
    description: "Existing clients portal",
    route: "/login",
    icon: Users,
  },
  {
    title: "Signup",
    description: "Create a live account",
    route: "/signup",
    icon: Users,
  },
  {
    title: "Contact Us",
    description: "Reach the NXG support desk",
    route: "/contact-us",
    icon: Mail,
  },
];

const policyLinks = [
  { title: "AML Policy", route: "/aml-policy" },
  { title: "Privacy Policy", route: "/privacy-policy" },
  { title: "Refund Policy", route: "/refund-policy" },
  { title: "Terms & Conditions", route: "/terms-conditions" },
];

const notifications = [
  {
    title: "System Maintenance",
    detail: "Dashboard widgets will refresh nightly at 02:00 UTC.",
    icon: Bell,
  },
  {
    title: "Compliance Review",
    detail: "3 AML cases require attention before Friday.",
    icon: ShieldCheck,
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <header className="p-6 border-b border-gray-200 bg-white flex flex-col gap-2">
        <p className="text-sm text-gray-500">NXG Markets / Dashboard</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Unified Operations Dashboard
            </h1>
            <p className="text-gray-500">
              Central access to every public-facing page and internal widget.
            </p>
          </div>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-500 transition-colors"
          >
            Create New Account
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-8">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <article
              key={card.label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-gray-500">{card.label}</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {card.value}
              </p>
              <p className="text-sm text-pink-600 mt-1">{card.change}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Quick navigation
              </h2>
              <p className="text-sm text-gray-500">
                Jump directly into public pages
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.route}
                  className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition hover:border-pink-200 hover:bg-white"
                >
                  <div className="rounded-xl bg-white p-3 shadow-sm text-pink-600">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-pink-600">
                      {link.title}
                    </p>
                    <p className="text-sm text-gray-500">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="text-lg font-semibold text-gray-900">Alerts</h2>
            {notifications.map((note) => (
              <article
                key={note.title}
                className="flex items-start gap-4 rounded-xl border border-gray-100 p-4"
              >
                <note.icon className="h-5 w-5 text-pink-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">{note.title}</p>
                  <p className="text-sm text-gray-500">{note.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Compliance pages
              </h2>
              <FileText className="h-5 w-5 text-pink-600" />
            </div>
            <ul className="mt-4 space-y-3">
              {policyLinks.map((item) => (
                <li
                  key={item.route}
                  className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      Public information & disclosures
                    </p>
                  </div>
                  <Link
                    to={item.route}
                    className="text-sm font-medium text-pink-600 hover:text-pink-500"
                  >
                    View
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Support overview
            </h2>
            <p className="text-sm text-gray-500">
              Monitor inbound messages and team responses.
            </p>
            <div className="mt-6 space-y-4">
              <article className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3">
                <div>
                  <p className="font-medium text-gray-900">
                    Messages waiting reply
                  </p>
                  <p className="text-sm text-gray-500">Contact page leads</p>
                </div>
                <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-600">
                  7
                </span>
              </article>
              <article className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3">
                <div>
                  <p className="font-medium text-gray-900">Avg. first reply</p>
                  <p className="text-sm text-gray-500">Within last 7 days</p>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  1h 24m
                </span>
              </article>
              <article className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3">
                <div>
                  <p className="font-medium text-gray-900">Escalated cases</p>
                  <p className="text-sm text-gray-500">Awaiting specialist</p>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                  2
                </span>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
