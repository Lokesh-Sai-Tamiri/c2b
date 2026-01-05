"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Target, 
  Package, 
  Send, 
  BarChart3, 
  Settings,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Building2, label: "Company", href: "/company" },
  { icon: Target, label: "Personas", href: "/personas" },
  { icon: Package, label: "Products", href: "/products" },
  { icon: Send, label: "Campaigns", href: "/campaigns" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r border-white/10 bg-background flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] flex items-center justify-center">
            <Zap className="h-5 w-5 text-background fill-current" />
          </div>
          <span className="font-bold text-xl">AI SDR</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium group",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(165,198,38,0.1)]" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <item.icon className={cn(
                "h-4 w-4 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium group",
            pathname.startsWith("/settings")
              ? "bg-primary/10 text-primary border border-primary/20"
              : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
          )}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-br from-[#A5C626]/10 to-[#1FCC9A]/10 border border-white/5">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">Current Plan</p>
          <p className="text-xs font-bold text-foreground">Pro / Enterprise</p>
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-[#1FCC9A] h-full w-3/4 rounded-full" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">750 / 1000 credits</p>
        </div>
      </div>
    </div>
  );
}
