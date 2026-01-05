"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Mail, 
  Linkedin, 
  ArrowUpRight, 
  Download,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const replyRateData = [
  { name: 'VP Sales', rate: 12 },
  { name: 'Founder', rate: 18 },
  { name: 'Sales Mgr', rate: 15 },
  { name: 'Marketing', rate: 10 },
  { name: 'Operations', rate: 8 },
];

const channelData = [
  { name: 'Email', value: 65, color: '#A5C626' },
  { name: 'LinkedIn', value: 35, color: '#1FCC9A' },
];

const roiData = [
  { month: 'Jan', investment: 1000, revenue: 2500 },
  { month: 'Feb', investment: 1200, revenue: 4500 },
  { month: 'Mar', investment: 1500, revenue: 8000 },
  { month: 'Apr', investment: 1800, revenue: 12000 },
  { month: 'May', investment: 2200, revenue: 18500 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-1">Deep dive into your outreach performance and ROI.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button variant="glass" size="sm">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total ROI" value="840%" change="+42%" icon={TrendingUp} />
        <StatCard title="Avg. Reply Rate" value="14.2%" change="+2.1%" icon={Mail} />
        <StatCard title="Meeting Rate" value="3.8%" change="+0.5%" icon={Target} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reply Rate by Persona */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Reply Rate by Persona</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={replyRateData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9BA4B5', fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  />
                  <Bar dataKey="rate" fill="#1FCC9A" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Channel Comparison */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Channel Comparison</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="h-[300px] w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-4">
              {channelData.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ROI Over Time */}
        <Card className="lg:col-span-2 glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Revenue vs Investment (ROI)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9BA4B5', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9BA4B5', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  />
                  <Line type="monotone" dataKey="investment" stroke="#A5C626" strokeWidth={3} dot={{ fill: '#A5C626', strokeWidth: 2 }} />
                  <Line type="monotone" dataKey="revenue" stroke="#1FCC9A" strokeWidth={3} dot={{ fill: '#1FCC9A', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
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
          <div className="flex items-center text-xs font-medium text-[#1FCC9A] bg-[#1FCC9A]/10 px-2 py-1 rounded-full">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            {change}
          </div>
        </div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold mt-1 tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}
