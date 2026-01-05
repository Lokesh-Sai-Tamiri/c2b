import Link from "next/link";
import { ArrowRight, BarChart3, Users, Zap, Target, Mail, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-white/10 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="#">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] flex items-center justify-center mr-2">
            <Zap className="h-5 w-5 text-background fill-current" />
          </div>
          <span className="font-bold text-xl tracking-tight">AI SDR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#1FCC9A] transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-[#1FCC9A] transition-colors" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-[#1FCC9A] transition-colors" href="/login">
            Login
          </Link>
          <Link className="btn-primary text-xs h-8 flex items-center" href="/signup">
            Get Started
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-30" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-sm border border-white/10 text-[#1FCC9A]">
                The Future of Sales is Here
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none max-w-3xl">
                Scale Your Outreach with <span className="gradient-text">Human-Grade AI</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The all-in-one AI SDR platform that researches, personalizes, and automates your LinkedIn and Email outreach.
              </p>
              <div className="space-x-4">
                <Link href="/signup" className="btn-primary inline-flex items-center">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/pricing" className="btn-secondary inline-flex items-center">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Engineered for Performance</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform combines deep intelligence with seamless automation to help you book more meetings.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Target className="h-6 w-6 text-[#A5C626]" />}
                title="Company Intelligence"
                description="Auto-scrape and analyze prospect websites to understand their value prop and pain points."
              />
              <FeatureCard 
                icon={<Users className="h-6 w-6 text-[#1FCC9A]" />}
                title="Persona Management"
                description="Define multiple ICPs and let AI tailor messaging specifically for each stakeholder role."
              />
              <FeatureCard 
                icon={<Mail className="h-6 w-6 text-[#A5C626]" />}
                title="Multi-Channel Outreach"
                description="Coordinate Email and LinkedIn touchpoints in a single, unified campaign flow."
              />
              <FeatureCard 
                icon={<BarChart3 className="h-6 w-6 text-[#1FCC9A]" />}
                title="Advanced Analytics"
                description="Track reply rates, positive intent, and ROI across all your campaigns in real-time."
              />
              <FeatureCard 
                icon={<Zap className="h-6 w-6 text-[#A5C626]" />}
                title="AI Copywriting"
                description="Generate hyper-personalized messages that sound human and drive action."
              />
              <FeatureCard 
                icon={<Linkedin className="h-6 w-6 text-[#1FCC9A]" />}
                title="LinkedIn Integration"
                description="Safe, compliant LinkedIn automation to expand your reach where prospects are active."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10">
        <p className="text-xs text-muted-foreground">© 2025 AI SDR Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-card p-6 rounded-xl flex flex-col space-y-4 hover:border-[#1FCC9A]/30 transition-all group">
      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
