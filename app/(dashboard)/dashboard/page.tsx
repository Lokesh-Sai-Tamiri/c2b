"use client";

import {
  Users,
  MessageSquare,
  Zap,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  TrendingUp,
  Clock,
  MoreVertical,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const data = [
  { name: "Mon", leads: 40, replies: 24, meetings: 4 },
  { name: "Tue", leads: 30, replies: 13, meetings: 2 },
  { name: "Wed", leads: 20, replies: 98, meetings: 12 },
  { name: "Thu", leads: 27, replies: 39, meetings: 6 },
  { name: "Fri", leads: 18, replies: 48, meetings: 8 },
  { name: "Sat", leads: 23, replies: 38, meetings: 3 },
  { name: "Sun", leads: 34, replies: 43, meetings: 5 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, Alex. Here's what's happening today.
          </p>
        </div>
        <Link href="/campaigns/new">
          <Button className="btn-primary">
            <Plus className="mr-2 h-4 w-4" /> Create Campaign
          </Button>
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Leads Contacted"
          value="1,284"
          change="+12.5%"
          isPositive={true}
          icon={Users}
          color="text-[#A5C626]"
        />
        <KPICard
          title="Replies"
          value="156"
          change="+8.2%"
          isPositive={true}
          icon={MessageSquare}
          color="text-[#1FCC9A]"
        />
        <KPICard
          title="Positive Intent"
          value="42"
          change="-2.4%"
          isPositive={false}
          icon={Zap}
          color="text-orange-400"
        />
        <KPICard
          title="Meetings Booked"
          value="18"
          change="+4.3%"
          isPositive={true}
          icon={Calendar}
          color="text-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card className="lg:col-span-2 glass-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Campaign Performance</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Daily engagement across all active campaigns
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-[#A5C626]" /> Leads
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1FCC9A]" />{" "}
                Replies
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A5C626" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#A5C626" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorReplies"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#1FCC9A" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1FCC9A" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="rgba(255,255,255,0.05)"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9BA4B5", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9BA4B5", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#E6F1FF" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="leads"
                    stroke="#A5C626"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorLeads)"
                  />
                  <Area
                    type="monotone"
                    dataKey="replies"
                    stroke="#1FCC9A"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorReplies)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Live updates from your engine
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <ActivityItem
                icon={MessageSquare}
                title="New Reply Received"
                description="Sarah Chen from Stripe replied to Q4 Growth Campaign"
                time="2m ago"
                type="positive"
              />
              <ActivityItem
                icon={Calendar}
                title="Meeting Booked"
                description="Demo scheduled with Mark Wilson (Vercel)"
                time="15m ago"
                type="success"
              />
              <ActivityItem
                icon={Users}
                title="Leads Imported"
                description="450 new leads added to SaaS Founders list"
                time="1h ago"
                type="neutral"
              />
              <ActivityItem
                icon={Zap}
                title="Campaign Launched"
                description="Outbound AI Tier 1 is now active"
                time="3h ago"
                type="neutral"
              />
              <ActivityItem
                icon={Clock}
                title="Follow-up Sent"
                description="Personalized follow-up sent to 42 prospects"
                time="5h ago"
                type="neutral"
              />
            </div>
            <Button
              variant="ghost"
              className="w-full mt-6 text-xs text-muted-foreground hover:text-foreground"
            >
              View all activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KPICard({ title, value, change, isPositive, icon: Icon, color }: any) {
  return (
    <Card className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-2 rounded-lg bg-white/5", color)}>
            <Icon className="h-5 w-5" />
          </div>
          <div
            className={cn(
              "flex items-center text-xs font-medium px-2 py-1 rounded-full",
              isPositive
                ? "bg-[#1FCC9A]/10 text-[#1FCC9A]"
                : "bg-red-400/10 text-red-400"
            )}
          >
            {isPositive ? (
              <ArrowUpRight className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDownRight className="h-3 w-3 mr-1" />
            )}
            {change}
          </div>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="text-3xl font-bold mt-1 tracking-tight">{value}</p>
      </CardContent>
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
}

function ActivityItem({ icon: Icon, title, description, time, type }: any) {
  return (
    <div className="flex gap-4 group cursor-pointer">
      <div
        className={cn(
          "h-9 w-9 rounded-full flex items-center justify-center shrink-0 border border-white/5",
          type === "positive"
            ? "bg-primary/10 text-primary"
            : type === "success"
            ? "bg-[#1FCC9A]/10 text-[#1FCC9A]"
            : "bg-white/5 text-muted-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-between mb-0.5">
          <h4 className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
            {title}
          </h4>
          <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">
            {time}
          </span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  );
}
