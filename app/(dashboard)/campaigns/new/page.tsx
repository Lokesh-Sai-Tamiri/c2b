"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  ArrowRight, 
  ArrowLeft, 
  Target, 
  Users, 
  MessageSquare, 
  Calendar, 
  Rocket,
  CheckCircle2,
  Zap,
  Mail,
  Linkedin,
  Clock,
  Briefcase,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const STEPS = [
  { id: 1, title: "Basics", icon: Zap },
  { id: 2, title: "Leads", icon: Users },
  { id: 3, title: "Messaging", icon: MessageSquare },
  { id: 4, title: "Schedule", icon: Calendar },
  { id: 5, title: "Review", icon: CheckCircle2 }
];

export default function NewCampaignPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    persona: "",
    product: "",
    segments: [],
    channels: ['email', 'linkedin'],
    dailyLimit: 50
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <Link href="/campaigns" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Campaigns
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Create New Campaign</h1>
      </div>

      {/* Stepper */}
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
        {STEPS.map((s) => (
          <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
            <div className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
              step === s.id ? "bg-primary border-primary text-background ring-4 ring-primary/20 scale-110" : 
              step > s.id ? "bg-[#1FCC9A] border-[#1FCC9A] text-background" : "bg-background border-white/10 text-muted-foreground"
            )}>
              <s.icon className="h-5 w-5" />
            </div>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-widest",
              step >= s.id ? "text-foreground" : "text-muted-foreground"
            )}>{s.title}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Campaign Basics</CardTitle>
                    <CardDescription>Start by naming your campaign and selecting your target.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Campaign Name</label>
                      <Input placeholder="e.g., Q4 Enterprise Outreach" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Target Persona</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-sm">
                          <option>Select Persona</option>
                          <option>Enterprise CTOs</option>
                          <option>DevOps Managers</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Product / Offering</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-sm">
                          <option>Select Product</option>
                          <option>Enterprise DevOps Suite</option>
                          <option>Infrastructure Auto-Scaler</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button onClick={nextStep} className="btn-primary" disabled={!formData.name}>
                      Next: Leads <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Select Leads</CardTitle>
                    <CardDescription>Choose who should receive this campaign.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-bold">Suggested: High Intent CTOs</p>
                          <p className="text-[10px] text-muted-foreground">850 matches based on your persona selection</p>
                        </div>
                      </div>
                      <input type="checkbox" checked className="rounded border-primary" readOnly />
                    </div>
                    <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between opacity-60">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-bold">Cold Founders List</p>
                          <p className="text-[10px] text-muted-foreground">450 leads from recent CSV upload</p>
                        </div>
                      </div>
                      <input type="checkbox" className="rounded border-white/10" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep} className="btn-primary">
                      Next: Messaging <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>AI Messaging</CardTitle>
                    <CardDescription>Review and edit the AI-generated variants.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-2 p-1 bg-white/5 rounded-lg w-fit">
                      <Button size="sm" variant="glass" className="text-[10px] h-7 bg-white/10">Email Variant A</Button>
                      <Button size="sm" variant="ghost" className="text-[10px] h-7">LinkedIn InMail</Button>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-4 font-mono text-sm leading-relaxed">
                      <p className="text-muted-foreground">Subject: Solving <span className="text-primary">{"{pain_point_1}"}</span> at <span className="text-primary">{"{company_name}"}</span></p>
                      <div className="h-[1px] bg-white/5 w-full" />
                      <p>Hi <span className="text-primary">{"{first_name}"}</span>,</p>
                      <p>I saw that <span className="text-primary">{"{company_name}"}</span> recently <span className="text-primary">{"{buying_signal}"}</span>. Most <span className="text-primary">{"{target_role}"}</span>s I talk to are struggling with <span className="text-primary">{"{pain_point_1}"}</span>.</p>
                      <p>Our <span className="text-secondary">{"{product_name}"}</span> was built specifically to solve this. Would you be open to a 10-minute chat next Tuesday?</p>
                      <p>Best,<br />Alex</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm" className="text-[#1FCC9A] gap-2">
                        <Sparkles className="h-3 w-3" /> Regenerate with AI
                      </Button>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">12 Personalization Tokens</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep} className="btn-primary">
                      Next: Schedule <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Delivery Schedule</CardTitle>
                    <CardDescription>Configure when and how fast to send.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium">Daily Limits</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Emails</span>
                            <span className="text-sm font-bold">50 / day</span>
                          </div>
                          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                            <div className="bg-[#1FCC9A] h-full w-1/2" />
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">LinkedIn</span>
                            <span className="text-sm font-bold">25 / day</span>
                          </div>
                          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                            <div className="bg-[#A5C626] h-full w-1/4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium">Sending Window</h4>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-bold">Mon - Fri, 9:00 AM - 5:00 PM</p>
                            <p className="text-[10px] text-muted-foreground">Prospect's Local Timezone</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs text-[#1FCC9A]">Change</Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep} className="btn-primary">
                      Next: Review <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="s5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Card className="glass-card overflow-hidden">
                  <div className="h-2 w-full bg-gradient-to-r from-[#A5C626] to-[#1FCC9A]" />
                  <CardHeader>
                    <CardTitle className="text-2xl">Final Review</CardTitle>
                    <CardDescription>Everything looks ready to go.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Targeting</p>
                        <p className="text-sm font-bold">850 Enterprise CTOs</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Estimated Reach</p>
                        <p className="text-sm font-bold">4 weeks to complete</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                      <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Summary</h5>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> Email Channel</span>
                        <CheckCircle2 className="h-4 w-4 text-[#1FCC9A]" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn Channel</span>
                        <CheckCircle2 className="h-4 w-4 text-[#1FCC9A]" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> AI Personalization</span>
                        <CheckCircle2 className="h-4 w-4 text-[#1FCC9A]" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={prevStep}>Back</Button>
                    <Link href="/campaigns" className="w-1/2">
                      <Button className="w-full btn-primary py-6 text-lg">
                        Launch Campaign <Rocket className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Summary */}
        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-medium truncate ml-2">{formData.name || "-"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Persona:</span>
                <span className="font-medium">Enterprise CTOs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Product:</span>
                <span className="font-medium truncate ml-2">DevOps Suite</span>
              </div>
              <div className="h-[1px] bg-white/5 w-full my-2" />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Reach:</span>
                <span className="font-bold text-[#1FCC9A]">850 Leads</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card bg-[#A5C626]/5 border-[#A5C626]/20">
            <CardContent className="p-4 flex items-start gap-3">
              <Zap className="h-5 w-5 text-[#A5C626] shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                AI optimization is <span className="text-foreground font-bold uppercase">Enabled</span>. Your messages will be dynamically tuned for each lead based on website analysis.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
