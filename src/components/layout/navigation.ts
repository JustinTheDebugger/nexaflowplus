import {
  LayoutDashboard,
  Package,
  Network,
  Files,
  Boxes,
  ClipboardList,
  Monitor,
  Settings,
} from "lucide-react";

export const mainNavigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Products",
    href: "/products",
    icon: Package,
  },
  {
    label: "Product Connections",
    href: "/connections",
    icon: Network,
  },
  {
    label: "Artwork & Packaging",
    href: "/artwork",
    icon: Files,
  },
  {
    label: "Sample Management",
    href: "/samples",
    icon: Boxes,
  },
  {
    label: "Product Issues",
    href: "/issues",
    icon: ClipboardList,
  },
  {
    label: "Device Health",
    href: "/device-health",
    icon: Monitor,
  },
];

export const settingsNavigation = [
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
