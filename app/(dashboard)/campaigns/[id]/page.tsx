"use client";

import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  MoreVertical, 
  Play, 
  Pause, 
  Plus, 
  Target, 
  Users, 
  MessageSquare, 
  Calendar,
  Zap,
  CheckCircle2,
  Mail,
  Linkedin,
  TrendingUp,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const performanceData = [
  { day: 'Day 1', sent: 50, opened: 30, replied: 2 },
  { day: 'Day 2', sent: 100, opened: 65, replied: 5 },
  { day: 'Day 3', sent: 150, opened: 90, replied: 12 },
  { day: 'Day 4', sent: 200, opened: 120, replied: 18 },
  { day: 'Day 5', sent: 250, opened: 160, replied: 25 },
];

export default function CampaignDetailPage() {
  const params = useParams();

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Link href="/campaigns" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 mb-2">
            <ArrowLeft className="h-4 w-4" /> Back to Campaigns
          </Link>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Enterprise CTO Outbound Q4</h1>
            <span className="px-2 py-0.5 rounded-full bg-[#1FCC9A]/10 border border-[#1FCC9A]/20 text-[10px] font-bold text-[#1FCC9A] uppercase tracking-widest">
              Active
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" size="sm">
            <Pause className="mr-2 h-4 w-4" /> Pause
          </Button>
          <Button variant="glass" size="sm">
            <Plus className="mr-2 h-4 w-4" /> Add Leads
          </Button>
          <Button className="btn-primary" size="sm">
            <Zap className="mr-2 h-4 w-4" /> Edit Flow
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Leads" value="1,250" change="850 contacted" icon={Users} />
        <StatCard title="Open Rate" value="68.4%" change="+4.2% vs avg" icon={Mail} />
        <StatCard title="Reply Rate" value="12.5%" change="+2.1% vs avg" icon={MessageSquare} />
        <StatCard title="Meetings" value="12" change="1 booked today" icon={Calendar} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Stats Chart */}
        <Card className="lg:col-span-2 glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Engagement Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9BA4B5" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#9BA4B5" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorReplied" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1FCC9A" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#1FCC9A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9BA4B5', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9BA4B5', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  />
                  <Area type="monotone" dataKey="sent" stroke="#9BA4B5" strokeWidth={2} fillOpacity={1} fill="url(#colorSent)" />
                  <Area type="monotone" dataKey="replied" stroke="#1FCC9A" strokeWidth={3} fillOpacity={1} fill="url(#colorReplied)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Campaign Steps */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Campaign Flow</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative pl-8 pr-6 space-y-8 py-4">
              <div className="absolute left-[2.45rem] top-0 bottom-0 w-0.5 bg-white/5" />
              
              <StepItem 
                index={1}
                icon={Mail}
                title="Email: Day 1"
                description="Intro: Solving {pain_point} at {company}"
                stats="850 sent · 68% open"
                status="completed"
              />
              <StepItem 
                index={2}
                icon={Linkedin}
                title="LinkedIn: Day 2"
                description="Connection Request + Note"
                stats="620 sent · 35% accepted"
                status="completed"
              />
              <StepItem 
                index={3}
                icon={Mail}
                title="Email: Day 5"
                description="Follow-up: Case Study: Scale"
                stats="450 sent · 42% open"
                status="in_progress"
              />
              <StepItem 
                index={4}
                icon={Linkedin}
                title="LinkedIn: Day 8"
                description="InMail: Re-engaging {first_name}"
                stats="Pending"
                status="pending"
              />
            </div>
          </CardContent>
          <CardFooter className="bg-white/[0.02] border-t border-white/5 flex items-center justify-center p-4">
            <Button variant="ghost" size="sm" className="text-xs text-[#1FCC9A]">
              <Plus className="h-3 w-3 mr-1" /> Add follow-up step
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Message Variants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" /> Active Email Variant
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-xs">Edit Template</Button>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
              <p className="text-sm font-bold border-b border-white/5 pb-2">Subject: Quick question about {`{company_name}`}'s {`{pain_point_1}`}</p>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                <p>Hi {`{first_name}`},</p>
                <p>I noticed you're hiring for SRE roles. Usually, that means you're scaling fast and hitting {`{pain_point_1}`} issues.</p>
                <p>We recently helped {`{competitor}`} reduce their MTTR by 40% with our AI suite. Think it might be worth a quick look?</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#1FCC9A]" /> Top Performing Message
            </CardTitle>
            <span className="text-[10px] font-bold text-[#1FCC9A] uppercase bg-[#1FCC9A]/10 px-2 py-1 rounded">24% Reply Rate</span>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-xl border border-[#1FCC9A]/20 bg-[#1FCC9A]/5 space-y-3">
              <p className="text-sm font-bold border-b border-white/5 pb-2">Subject: Congratulations on your Series B!</p>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                <p>Hi {`{first_name}`},</p>
                <p>Great news on the funding! As you scale the team at {`{company_name}`}, you'll likely face {`{pain_point_2}`}.</p>
                <p>I'd love to show you how our automation can keep your infrastructure stable while you grow.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon: Icon }: any) {
  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-white/5 text-primary">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold mt-1 tracking-tight">{value}</p>
        <p className="text-[10px] text-muted-foreground mt-2 font-medium">{change}</p>
      </CardContent>
    </Card>
  );
}

function StepItem({ index, icon: Icon, title, description, stats, status }: any) {
  return (
    <div className="flex gap-4 relative">
      <div className={cn(
        "h-8 w-8 rounded-full flex items-center justify-center shrink-0 border-2 z-10 transition-colors",
        status === 'completed' ? "bg-[#1FCC9A] border-[#1FCC9A] text-background" : 
        status === 'in_progress' ? "bg-primary border-primary text-background ring-4 ring-primary/10" :
        "bg-background border-white/10 text-muted-foreground"
      )}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 overflow-hidden">
        <h4 className="text-sm font-bold flex items-center gap-2">
          {title}
          {status === 'completed' && <CheckCircle2 className="h-3 w-3 text-[#1FCC9A]" />}
        </h4>
        <p className="text-xs text-muted-foreground truncate mt-1">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-muted-foreground uppercase tracking-wider">
            {stats}
          </span>
        </div>
      </div>
    </div>
  );
}
