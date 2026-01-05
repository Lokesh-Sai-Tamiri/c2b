"use client";

import { 
  Building2, 
  Globe, 
  RefreshCcw, 
  ExternalLink, 
  Target, 
  AlertCircle,
  CheckCircle2,
  Tag,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CompanyPage() {
  return (
    <div className="space-y-8 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] p-[2px]">
            <div className="h-full w-full rounded-2xl bg-background flex items-center justify-center">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Acme Intelligence</h1>
            <div className="flex items-center gap-2 mt-1 text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span className="text-sm">https://acme.com</span>
              <ExternalLink className="h-3 w-3" />
            </div>
          </div>
        </div>
        <Button variant="glass" size="sm">
          <RefreshCcw className="mr-2 h-4 w-4" /> Refresh Analysis
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Overview & ICP */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" /> Company Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Value Proposition</h4>
                <p className="text-lg leading-relaxed">
                  Acme helps enterprise teams automate their DevOps workflows with AI-driven observability and self-healing infrastructure. We reduce downtime by 40% and developer toil by 65%.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Industry Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">Enterprise SaaS</div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">DevOps</div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">AI/ML</div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium">Cloud Infrastructure</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Primary ICPs</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">CTOs</div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">VP Engineering</div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">SRE Managers</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-400" /> Pain Points Detected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PainPointCard 
                  title="Infrastructure Complexity" 
                  description="High overhead in managing microservices and Kubernetes clusters."
                />
                <PainPointCard 
                  title="Developer Burnout" 
                  description="Engineers spending >30% of their time on manual troubleshooting."
                />
                <PainPointCard 
                  title="Operational Silos" 
                  description="Lack of visibility between development and operations teams."
                />
                <PainPointCard 
                  title="Slow Incident Response" 
                  description="MTTR is too high due to fragmented logging and monitoring."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Signals & Stats */}
        <div className="space-y-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" /> Buying Signals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SignalItem 
                title="Recent Funding" 
                description="Series B closed 2 months ago ($45M)"
                date="Oct 2025"
              />
              <SignalItem 
                title="Hypergrowth Hiring" 
                description="Hiring 12+ SRE and DevOps roles in US/EU"
                date="Current"
              />
              <SignalItem 
                title="New CTO Appointed" 
                description="Ex-Google VP Engineering joined as CTO"
                date="1 month ago"
              />
            </CardContent>
          </Card>

          <Card className="glass-card bg-gradient-to-br from-[#A5C626]/5 to-[#1FCC9A]/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Intelligence Health</h4>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-white/5 stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent" />
                  <circle 
                    className="text-primary stroke-current" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="transparent" 
                    strokeDasharray="251.2" 
                    strokeDashoffset="25.12" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">90%</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Your company profile is highly detailed. This improves AI personalization by 3.5x.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function PainPointCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
      <h5 className="font-bold text-sm mb-1">{title}</h5>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

function SignalItem({ title, description, date }: { title: string, description: string, date: string }) {
  return (
    <div className="flex gap-3">
      <div className="h-2 w-2 rounded-full bg-secondary mt-1.5 shrink-0" />
      <div>
        <div className="flex items-center justify-between gap-4">
          <h5 className="text-sm font-bold">{title}</h5>
          <span className="text-[10px] text-muted-foreground uppercase">{date}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
}
