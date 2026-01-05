"use client";

import Link from "next/link";
import { Zap, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-white/10 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="/">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] flex items-center justify-center mr-2">
            <Zap className="h-5 w-5 text-background fill-current" />
          </div>
          <span className="font-bold text-xl tracking-tight">AI SDR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#1FCC9A] transition-colors" href="/#features">
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

      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Choose the plan that fits your growth stage. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              name="Starter"
              price="49"
              description="Perfect for solo founders and small teams."
              features={[
                "500 Credits / mo",
                "1 Sending Email",
                "LinkedIn Automation",
                "Basic Personalization",
                "Email Support"
              ]}
            />
            <PricingCard 
              name="Growth"
              price="149"
              description="Ideal for growing sales teams."
              features={[
                "2,500 Credits / mo",
                "5 Sending Emails",
                "Advanced Personalization",
                "Persona Builder",
                "Priority Support",
                "Team Collaboration"
              ]}
              isPopular
            />
            <PricingCard 
              name="Scale"
              price="499"
              description="For enterprise-grade outreach."
              features={[
                "10,000 Credits / mo",
                "Unlimited Sending Emails",
                "Custom AI Models",
                "Dedicated Account Manager",
                "API Access",
                "SSO & Custom Security"
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function PricingCard({ name, price, description, features, isPopular }: { 
  name: string, 
  price: string, 
  description: string, 
  features: string[],
  isPopular?: boolean
}) {
  return (
    <Card className={cn(
      "glass-card flex flex-col relative",
      isPopular && "border-[#1FCC9A] border-2 shadow-[#1FCC9A]/10 shadow-2xl scale-105"
    )}>
      {isPopular && (
        <div className="absolute top-0 right-0 left-0 -translate-y-1/2 flex justify-center">
          <span className="bg-[#1FCC9A] text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight">${price}</span>
          <span className="ml-1 text-muted-foreground">/mo</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-center text-sm">
              <Check className="mr-2 h-4 w-4 text-[#1FCC9A]" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/signup" className="w-full">
          <Button variant={isPopular ? "primary" : "glass"} className="w-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
