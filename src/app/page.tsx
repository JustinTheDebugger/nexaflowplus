import {
  Package,
  Network,
  Files,
  Boxes,
  ArrowUpRight,
  Activity,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    title: "Product Management",
    description: "Manage product records and information.",
    href: "/products",
    icon: Package,
  },
  {
    title: "Product Connections",
    description: "Map compatible products and accessories.",
    href: "/connections",
    icon: Network,
  },
  {
    title: "Artwork & Packaging",
    description: "Track artwork requirements and revisions.",
    href: "/artwork",
    icon: Files,
  },
  {
    title: "Sample Management",
    description: "Manage samples, bookings and movements.",
    href: "/samples",
    icon: Boxes,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-[#4361EE]">WORKSPACE OVERVIEW</p>
        <h1 className="mt-2 text-3xl font-bold text-[#111C34]">Dashboard</h1>
        <p className="mt-2 text-slate-500">
          Manage your business operations from one workspace.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Products", icon: Package },
          { label: "Connections", icon: Network },
          { label: "Artwork Records", icon: Files },
          { label: "Samples", icon: Boxes },
        ].map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <Icon size={20} className="text-[#4361EE]" />
            </div>
            <p className="mt-5 text-2xl font-bold text-[#111C34]">—</p>
            <p className="mt-1 text-xs text-slate-400">
              Awaiting data connection
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-4 flex items-center gap-2">
          <Activity size={20} className="text-[#4361EE]" />
          <h2 className="text-lg font-semibold text-[#111C34]">Applications</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#4361EE] hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Icon size={24} className="text-[#4361EE]" />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#111C34]">{title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-slate-400 group-hover:text-[#4361EE]"
                />
              </div>

              <p className="mt-2 text-sm text-slate-500">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
