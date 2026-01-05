"use client";

import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="h-16 border-b border-white/10 flex items-center justify-between px-8 bg-background/50 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4 w-1/3">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search leads, campaigns..." 
            className="pl-10 bg-white/5 border-white/10 h-9"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#1FCC9A] rounded-full border-2 border-background" />
        </Button>
        
        <div className="h-8 w-[1px] bg-white/10" />
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">Alex Rivera</p>
            <p className="text-[10px] text-muted-foreground">Founder & CEO</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] p-[2px]">
            <div className="h-full w-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <User className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
