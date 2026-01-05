"use client";

import { useState } from "react";
import { 
  User, 
  Building2, 
  Mail, 
  Linkedin, 
  ShieldCheck, 
  Bell, 
  CreditCard,
  Plus,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Zap,
  Globe,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TABS = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'org', label: 'Organization', icon: Building2 },
  { id: 'channels', label: 'Outreach Channels', icon: SendIcon },
  { id: 'billing', label: 'Subscription', icon: CreditCard },
  { id: 'compliance', label: 'Compliance', icon: ShieldCheck }
];

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="space-y-8 max-w-[1200px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account, organization, and outreach connections.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:w-64 shrink-0 space-y-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeTab === tab.id 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-8">
          {activeTab === 'profile' && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details and how others see you.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] p-[2px]">
                    <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                      <User className="h-10 w-10 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="glass" size="sm">Change Avatar</Button>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Min 400x400px, JPG or PNG</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input defaultValue="Alex Rivera" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input defaultValue="alex@acme.com" disabled />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title</label>
                    <Input defaultValue="Founder & CEO" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Timezone</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-sm">
                      <option>Pacific Time (PT)</option>
                      <option>Eastern Time (ET)</option>
                      <option>GMT</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/5 bg-white/[0.01]">
                <Button className="btn-primary ml-auto">Save Changes</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === 'channels' && (
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" /> Email Sending
                  </CardTitle>
                  <CardDescription>Connect your email accounts to start sending campaigns.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-xl border border-[#1FCC9A]/20 bg-[#1FCC9A]/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">alex@acme.com</p>
                        <p className="text-xs text-muted-foreground">Google Workspace Account · Verified</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-0.5 rounded-full bg-[#1FCC9A]/10 text-[#1FCC9A] text-[10px] font-bold uppercase">Healthy</div>
                      <Button variant="ghost" size="sm" className="h-8">Disconnect</Button>
                    </div>
                  </div>
                  <Button variant="glass" className="w-full border-dashed py-6 gap-2">
                    <Plus className="h-4 w-4" /> Connect New Sending Account
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-[#1FCC9A]" /> LinkedIn Connection
                  </CardTitle>
                  <CardDescription>Automate LinkedIn outreach safely and compliantly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="h-16 w-16 rounded-2xl bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5]">
                      <Linkedin className="h-10 w-10" />
                    </div>
                    <div>
                      <h4 className="font-bold">LinkedIn not connected</h4>
                      <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
                        Connect your LinkedIn profile to enable InMails, connection requests, and automated follow-ups.
                      </p>
                    </div>
                    <Button className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white font-bold px-8">
                      Connect LinkedIn Profile
                    </Button>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" /> 100% compliant and cloud-based automation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'org' && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Organization Settings</CardTitle>
                <CardDescription>Manage your team and company-wide preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organization Name</label>
                    <Input defaultValue="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Website URL</label>
                    <div className="flex gap-2">
                      <Input defaultValue="https://acme.com" />
                      <Button variant="glass" size="sm">Update Analysis</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Team Members</h4>
                  <div className="space-y-3">
                    <TeamMember name="Alex Rivera" role="Owner" email="alex@acme.com" />
                    <TeamMember name="Sarah Chen" role="Admin" email="sarah@acme.com" />
                    <TeamMember name="Michael Scott" role="Member" email="michael@acme.com" />
                  </div>
                  <Button variant="glass" size="sm" className="w-full mt-2">
                    <Plus className="h-4 w-4 mr-2" /> Invite Member
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <Card className="glass-card bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Growth Plan</CardTitle>
                      <CardDescription className="text-foreground/70">Your subscription is active and renews on Jan 15, 2026.</CardDescription>
                    </div>
                    <span className="bg-primary text-background text-[10px] font-bold uppercase px-2 py-1 rounded">Active</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground uppercase font-bold tracking-widest">Monthly Credits</span>
                        <span className="font-bold">2,500 / 2,500</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground uppercase font-bold tracking-widest">Team Seats</span>
                        <span className="font-bold">3 / 5</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full w-[60%]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="glass" size="sm">Manage Billing</Button>
                  <Button variant="glass" size="sm" className="border-primary/50 text-primary">Upgrade Plan</Button>
                </CardFooter>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-12 bg-white/5 border border-white/10 rounded-md flex items-center justify-center font-bold text-xs italic">
                        VISA
                      </div>
                      <div>
                        <p className="text-sm font-bold">Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/28</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TeamMember({ name, role, email }: { name: string, role: string, email: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02]">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-[10px] text-muted-foreground">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[10px] uppercase font-bold text-muted-foreground">{role}</span>
        <Button variant="ghost" size="icon" className="h-7 w-7"><MoreVertical className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}
