"use client";

import { Bell, Menu, Search } from "lucide-react";

type AppHeaderProps = {
  onMenuClick: () => void;
};

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 lg:px-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={onMenuClick}
          className="text-slate-700 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div className="hidden items-center gap-2 text-slate-400 sm:flex">
          <Search size={18} />
          <span className="text-sm">Workspace</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Bell size={19} className="text-slate-500" />

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4361EE] text-sm font-semibold text-white">
          NF
        </div>
      </div>
    </header>
  );
}
