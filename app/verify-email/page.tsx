"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-4 relative z-10"
      >
        <Card className="glass-card text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Check your email</CardTitle>
            <CardDescription>
              We've sent a verification link to <span className="text-foreground font-bold">alex@acme.com</span>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Please click the link in the email to verify your account. If you don't see it, check your spam folder.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Link href="/login" className="w-full">
              <Button className="w-full btn-primary">
                Back to Login <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
              <RefreshCcw className="mr-2 h-3 w-3" /> Resend verification email
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
