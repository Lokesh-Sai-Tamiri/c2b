"use client";

import { 
  Send, 
  Plus, 
  MoreVertical, 
  Pause, 
  Play, 
  Clock, 
  Target, 
  Users, 
  MessageSquare, 
  Calendar,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const campaigns = [
  {
    id: 1,
    name: "Enterprise CTO Outbound Q4",
    status: "Active",
    persona: "Enterprise CTOs",
    leads: 1250,
    replies: 42,
    meetings: 12,
    lastActivity: "2 hours ago",
    progress: 65
  },
  {
    id: 2,
    name: "Fintech DevOps Managers",
    status: "Paused",
    persona: "DevOps Managers",
    leads: 850,
    replies: 15,
    meetings: 3,
    lastActivity: "1 day ago",
    progress: 40
  },
  {
    id: 3,
    name: "Series B Founders Outreach",
    status: "Completed",
    persona: "Founders",
    leads: 450,
    replies: 88,
    meetings: 24,
    lastActivity: "3 days ago",
    progress: 100
  }
];

export default function CampaignsPage() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
          <p className="text-muted-foreground mt-1">Orchestrate your automated outreach flows.</p>
        </div>
        <Link href="/campaigns/new">
          <Button className="btn-primary">
            <Plus className="mr-2 h-4 w-4" /> Create Campaign
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {campaigns.map((campaign) => (
          <Link key={campaign.id} href={`/campaigns/${campaign.id}`}>
            <Card className="glass-card hover:border-primary/30 transition-all group cursor-pointer overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={cn(
                      "w-2 h-2 rounded-full animate-pulse",
                      campaign.status === 'Active' ? "bg-[#1FCC9A]" : 
                      campaign.status === 'Paused' ? "bg-orange-400" : "bg-muted-foreground"
                    )} />
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{campaign.name}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground">
                      {campaign.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Target className="h-3.5 w-3.5" />
                      {campaign.persona}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      {campaign.leads} Leads
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      Updated {campaign.lastActivity}
                    </div>
                  </div>
                </div>

                <div className="flex border-t md:border-t-0 md:border-l border-white/5 bg-white/[0.01]">
                  <StatBox label="Replies" value={campaign.replies} color="text-[#1FCC9A]" />
                  <StatBox label="Meetings" value={campaign.meetings} color="text-primary" />
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-12 h-12">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path className="text-white/5 stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path className="text-primary stroke-current" strokeWidth="3" strokeDasharray={`${campaign.progress}, 100`} strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <text x="18" y="20.5" className="text-[10px] font-bold fill-foreground" textAnchor="middle">{campaign.progress}%</text>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 border-l border-white/5 flex items-center">
                    <Button variant="ghost" size="icon" className="hover:bg-white/5">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="p-6 border-r border-white/5 flex flex-col items-center justify-center min-w-[100px]">
      <span className={cn("text-xl font-bold", color)}>{value}</span>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</span>
    </div>
  );
}
