"use client";

import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Download, 
  MoreHorizontal, 
  Mail, 
  Linkedin, 
  ChevronDown,
  Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const leads = [
  { 
    name: "Sarah Chen", 
    title: "VP Engineering", 
    company: "Stripe", 
    email: "sarah@stripe.com", 
    linkedin: "in/sarahchen", 
    score: 98,
    industry: "Fintech",
    status: "Active"
  },
  { 
    name: "Mark Wilson", 
    title: "CTO", 
    company: "Vercel", 
    email: "mark@vercel.com", 
    linkedin: "in/markwilson", 
    score: 95,
    industry: "DevTools",
    status: "Contacted"
  },
  { 
    name: "Elena Rodriguez", 
    title: "Director of Ops", 
    company: "Airbnb", 
    email: "elena@airbnb.com", 
    linkedin: "in/elenarod", 
    score: 89,
    industry: "Travel",
    status: "New"
  },
  { 
    name: "David Kim", 
    title: "Head of Infrastructure", 
    company: "Datadog", 
    email: "david.k@datadog.com", 
    linkedin: "in/davidkim", 
    score: 92,
    industry: "SaaS",
    status: "Paused"
  },
  { 
    name: "Jessica Taylor", 
    title: "Engineering Manager", 
    company: "Snowflake", 
    email: "j.taylor@snowflake.com", 
    linkedin: "in/jtaylor", 
    score: 85,
    industry: "Data",
    status: "Replied"
  },
];

export default function LeadsPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leads Management</h1>
          <p className="text-muted-foreground mt-1">Manage, filter, and segment your high-intent prospects.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" size="sm">
            <Upload className="mr-2 h-4 w-4" /> Upload CSV
          </Button>
          <Button className="btn-primary">
            <Plus className="mr-2 h-4 w-4" /> Add Lead
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium">Industry</label>
                <div className="flex flex-wrap gap-2">
                  <FilterBadge label="SaaS" active />
                  <FilterBadge label="Fintech" />
                  <FilterBadge label="Health" />
                  <FilterBadge label="E-commerce" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium">Seniority</label>
                <div className="flex flex-wrap gap-2">
                  <FilterBadge label="C-Level" active />
                  <FilterBadge label="VP" active />
                  <FilterBadge label="Director" />
                  <FilterBadge label="Manager" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium">Location</label>
                <div className="flex flex-wrap gap-2">
                  <FilterBadge label="North America" />
                  <FilterBadge label="Europe" />
                  <FilterBadge label="Remote" active />
                </div>
              </div>
              <Button variant="ghost" className="w-full text-xs text-[#1FCC9A] mt-4">
                Clear all filters
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card bg-[#1FCC9A]/5 border-[#1FCC9A]/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#1FCC9A]/20 flex items-center justify-center text-[#1FCC9A]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Smart Segment</h4>
                  <p className="text-[10px] text-muted-foreground">AI suggested 12 new high-match leads</p>
                </div>
              </div>
              <Button size="sm" className="w-full mt-4 bg-[#1FCC9A] text-background hover:bg-[#1FCC9A]/90 text-xs font-bold">
                Review Matches
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-6">
          <Card className="glass-card overflow-hidden">
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="relative max-w-sm w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search name, company, or email..." className="pl-10 h-9 bg-background/50" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-xs">
                  Bulk Actions <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="glass" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-[10px] uppercase tracking-widest text-muted-foreground border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4 font-semibold"><input type="checkbox" className="rounded bg-white/5 border-white/10" /></th>
                    <th className="px-6 py-4 font-semibold">Lead Info</th>
                    <th className="px-6 py-4 font-semibold">Match Score</th>
                    <th className="px-6 py-4 font-semibold">Industry</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leads.map((lead, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4"><input type="checkbox" className="rounded bg-white/5 border-white/10" /></td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] p-[1px]">
                            <div className="h-full w-full rounded-full bg-background flex items-center justify-center text-[10px] font-bold">
                              {lead.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold group-hover:text-primary transition-colors">{lead.name}</p>
                            <p className="text-[10px] text-muted-foreground">{lead.title} @ {lead.company}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "h-full rounded-full",
                                lead.score > 90 ? "bg-[#1FCC9A]" : lead.score > 80 ? "bg-[#A5C626]" : "bg-orange-400"
                              )}
                              style={{ width: `${lead.score}%` }} 
                            />
                          </div>
                          <span className="text-xs font-bold">{lead.score}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs">{lead.industry}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                          lead.status === 'Replied' ? "bg-primary/10 text-primary" : 
                          lead.status === 'Contacted' ? "bg-blue-400/10 text-blue-400" :
                          lead.status === 'Active' ? "bg-[#1FCC9A]/10 text-[#1FCC9A]" : "bg-white/10 text-muted-foreground"
                        )}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-[#1FCC9A]">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-[#0077B5]">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-white/10 bg-white/5 flex items-center justify-between text-xs text-muted-foreground">
              <span>Showing 1-5 of 1,284 leads</span>
              <div className="flex gap-2">
                <Button variant="glass" size="sm" className="h-7 px-2" disabled>Previous</Button>
                <Button variant="glass" size="sm" className="h-7 px-2">Next</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function FilterBadge({ label, active }: { label: string, active?: boolean }) {
  return (
    <button className={cn(
      "px-3 py-1 rounded-full text-[10px] font-bold border transition-all",
      active 
        ? "bg-primary/10 border-primary text-primary" 
        : "bg-white/5 border-white/10 text-muted-foreground hover:border-white/20"
    )}>
      {label}
    </button>
  );
}
