"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation, settingsNavigation } from "./navigation";

export default function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return (
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
    );
  };

  return (
    <aside className="flex h-full w-64 flex-col bg-[#111C34] text-white">
      {/* Application Branding */}
      <div className="border-b border-white/10 px-6 py-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Nexa
          <span className="text-[#16B8A6]">Flow</span>
        </h1>

        <p className="mt-1 text-xs text-slate-400">
          Business Operations Platform
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
        {mainNavigation.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                active
                  ? "bg-[#4361EE] font-medium text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Settings Navigation */}
      <div className="border-t border-white/10 p-3">
        {settingsNavigation.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                active
                  ? "bg-[#4361EE] font-medium text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
