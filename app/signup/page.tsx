"use client";

import Link from "next/link";
import { Zap, Mail, Lock, User, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-4 relative z-10"
      >
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A5C626] to-[#1FCC9A] flex items-center justify-center">
              <Zap className="h-6 w-6 text-background fill-current" />
            </div>
            <span className="font-bold text-2xl tracking-tighter">AI SDR</span>
          </Link>
        </div>

        <Card className="glass-card border-white/10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create account</CardTitle>
            <CardDescription className="text-center">
              Start your 14-day free trial today
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="Full Name"
                  type="text"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="company"
                  placeholder="Company Name"
                  type="text"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  placeholder="Work Email"
                  type="email"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  placeholder="Create Password"
                  type="password"
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Link href="/onboarding" className="w-full">
              <Button className="w-full btn-primary">
                Create Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-center text-xs text-muted-foreground">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-[#1FCC9A] hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
