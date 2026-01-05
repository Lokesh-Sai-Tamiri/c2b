"use client";

import { 
  Target, 
  Plus, 
  Sparkles, 
  Trash2, 
  Edit3, 
  AlertTriangle, 
  Zap, 
  Briefcase, 
  Users,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

const personas = [
  {
    id: 1,
    name: "Enterprise CTOs",
    roles: ["CTO", "CIO", "VP Engineering"],
    industries: ["SaaS", "Fintech", "HealthTech"],
    size: "500-5000 employees",
    painPoints: ["Infrastructure cost", "Security compliance", "Talent retention"],
    triggers: ["Series B/C funding", "New CTO appointment", "Hiring cloud architects"],
    score: 95
  },
  {
    id: 2,
    name: "DevOps Managers",
    roles: ["Director of DevOps", "SRE Manager", "Infrastructure Lead"],
    industries: ["All Tech"],
    size: "100-1000 employees",
    painPoints: ["Manual deployments", "Slow MTTR", "Developer toil"],
    triggers: ["Incidents reported", "Expanding to multiple regions", "Cloud migration"],
    score: 88
  },
  {
    id: 3,
    name: "E-commerce Tech Leads",
    roles: ["Head of Tech", "Platform Architect"],
    industries: ["Retail", "D2C"],
    size: "50-500 employees",
    painPoints: ["Scale during peak season", "Legacy system integration"],
    triggers: ["Holiday season prep", "New store launch"],
    score: 82
  }
];

export default function PersonasPage() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Persona Builder</h1>
          <p className="text-muted-foreground mt-1">Define your Ideal Customer Profiles for hyper-personalized outreach.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" size="sm">
            <Sparkles className="mr-2 h-4 w-4 text-[#A5C626]" /> AI Suggest Persona
          </Button>
          <Button className="btn-primary">
            <Plus className="mr-2 h-4 w-4" /> New Persona
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map((persona) => (
          <Card key={persona.id} className="glass-card flex flex-col group hover:border-primary/30 transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-lg">{persona.name}</CardTitle>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[#1FCC9A]">
                  {persona.score}% Match
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {persona.roles.map((role, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-muted-foreground">
                    {role}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="space-y-2">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Key Pain Points</h5>
                <div className="space-y-1.5">
                  {persona.painPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <AlertTriangle className="h-3 w-3 text-orange-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Buying Triggers</h5>
                <div className="space-y-1.5">
                  {persona.triggers.map((trigger, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <Zap className="h-3 w-3 text-[#A5C626]" />
                      <span>{trigger}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-white/5 bg-white/[0.02] flex justify-between">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400/70 hover:text-red-400">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <Link href="/leads">
                <Button variant="ghost" className="text-xs text-[#1FCC9A]">
                  View Matches
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
        
        <button className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:border-[#1FCC9A]/50 hover:bg-[#1FCC9A]/5 transition-all group">
          <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1FCC9A]/20 transition-all">
            <Plus className="h-6 w-6 text-muted-foreground group-hover:text-[#1FCC9A]" />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-sm">Add New Persona</h4>
            <p className="text-xs text-muted-foreground mt-1">Manual or AI-assisted setup</p>
          </div>
        </button>
      </div>
    </div>
  );
}
