"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Globe, Target, CheckCircle2, ArrowRight, Loader2, Rocket, Briefcase, Mail, Linkedin, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: 1, title: "Welcome", description: "Let's set up your engine" },
  { id: 2, title: "Intelligence", description: "Analyze your company" },
  { id: 3, title: "Goals", description: "Define your outreach" },
  { id: 4, title: "Ready", description: "Start booking meetings" }
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [url, setUrl] = useState("");
  const [goal, setGoal] = useState<string | null>(null);
  const [channel, setChannel] = useState<string | null>(null);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
  
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      nextStep();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Progress Bar */}
      <div className="max-w-md w-full mb-8 relative z-10">
        <div className="flex justify-between mb-2">
          {STEPS.map((step) => (
            <div 
              key={step.id} 
              className={cn(
                "flex flex-col items-center",
                currentStep >= step.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                currentStep === step.id ? "bg-primary text-background ring-4 ring-primary/20" : 
                currentStep > step.id ? "bg-[#1FCC9A] text-background" : "bg-white/5 border border-white/10"
              )}>
                {currentStep > step.id ? <CheckCircle2 className="h-4 w-4" /> : step.id}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
          <motion.div 
            className="bg-primary h-full" 
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="w-full max-w-xl relative z-10">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="glass-card">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] flex items-center justify-center mb-4">
                    <Rocket className="h-8 w-8 text-background fill-current" />
                  </div>
                  <CardTitle className="text-3xl">Welcome to AI SDR</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    You're about to build an autonomous sales engine that works 24/7.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="font-bold flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-[#A5C626]" /> How it works:
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-[#1FCC9A] font-bold">1.</span>
                        We analyze your website to understand your value prop.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1FCC9A] font-bold">2.</span>
                        We find perfect leads that match your ICP.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1FCC9A] font-bold">3.</span>
                        AI writes personalized messages that get replies.
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={nextStep} className="w-full btn-primary py-6 text-lg">
                    Let's Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Globe className="h-6 w-6 text-[#A5C626]" /> Company Intelligence
                  </CardTitle>
                  <CardDescription>
                    Enter your company website. Our AI will scrape it to understand your product, market, and pain points.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Website</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="https://acme.com" 
                        className="pl-10 h-12"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                  </div>

                  {isAnalyzing && (
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-4">
                      <Loader2 className="h-10 w-10 text-[#1FCC9A] animate-spin" />
                      <div className="text-center">
                        <p className="font-bold">Analyzing your website...</p>
                        <p className="text-sm text-muted-foreground mt-1">Extracting value prop and ICP data</p>
                      </div>
                      <div className="w-full max-w-xs bg-white/10 h-1 rounded-full overflow-hidden">
                        <motion.div 
                          className="bg-[#1FCC9A] h-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3 }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleAnalyze} 
                    disabled={!url || isAnalyzing}
                    className="w-full btn-primary py-6"
                  >
                    {isAnalyzing ? "Processing..." : "Analyze My Company"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Outreach Goal</CardTitle>
                  <CardDescription>
                    What's your primary objective for this engine?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'meetings', label: 'Book Meetings', icon: Briefcase },
                      { id: 'replies', label: 'Generate Replies', icon: Mail },
                      { id: 'brand', label: 'Brand Awareness', icon: Megaphone },
                      { id: 'traffic', label: 'Website Traffic', icon: Globe }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setGoal(item.id)}
                        className={cn(
                          "p-4 rounded-xl border transition-all flex flex-col items-center gap-3",
                          goal === item.id 
                            ? "bg-primary/10 border-primary text-primary" 
                            : "bg-white/5 border-white/10 hover:border-white/20"
                        )}
                      >
                        <item.icon className="h-6 w-6" />
                        <span className="font-medium text-sm">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Choose primary channel:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'email', label: 'Email', icon: Mail },
                        { id: 'linkedin', label: 'LinkedIn', icon: Linkedin },
                        { id: 'both', label: 'Both', icon: Zap }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setChannel(item.id)}
                          className={cn(
                            "py-3 rounded-lg border transition-all flex flex-col items-center gap-2",
                            channel === item.id 
                              ? "bg-secondary/10 border-secondary text-secondary" 
                              : "bg-white/5 border-white/10 hover:border-white/20"
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="text-xs font-medium">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={nextStep} 
                    disabled={!goal || !channel}
                    className="w-full btn-primary py-6"
                  >
                    Continue
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <Card className="glass-card overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-[#A5C626] to-[#1FCC9A]" />
                <CardHeader className="text-center pt-10">
                  <div className="mx-auto w-20 h-20 rounded-full bg-[#1FCC9A]/10 flex items-center justify-center mb-6 relative">
                    <CheckCircle2 className="h-12 w-12 text-[#1FCC9A]" />
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-[#1FCC9A]" 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                  <CardTitle className="text-3xl font-bold">You're All Set!</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Your AI engine is ready to start hunting for leads and booking meetings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-xl bg-[#1FCC9A]/5 border border-[#1FCC9A]/20">
                    <p className="text-sm text-center">
                      We've pre-configured your dashboard based on <span className="text-[#1FCC9A] font-bold">{url}</span>. 
                      You can now create your first campaign.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="pb-10">
                  <Link href="/dashboard" className="w-full">
                    <Button className="w-full btn-primary py-8 text-xl">
                      Enter Dashboard <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
