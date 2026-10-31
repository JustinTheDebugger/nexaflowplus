"use client";

import { useState } from "react";
import { X } from "lucide-react";

import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      {/* Desktop Sidebar */}
      <div className="fixed inset-y-0 left-0 z-30 hidden w-64 lg:block">
        <AppSidebar />
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sidebar Panel */}
          <div className="relative h-full w-64">
            <AppSidebar />

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-4 rounded-lg p-2 text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Main Application Area */}
      <div className="lg:pl-64">
        {/* Application Header */}
        <AppHeader onMenuClick={() => setMobileOpen(true)} />

        {/* Dynamic Page Content */}
        <AppContent>{children}</AppContent>
      </div>
    </div>
  );
}
