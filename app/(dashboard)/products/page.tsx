"use client";

import { 
  Package, 
  Plus, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Target, 
  Edit3, 
  Trash2,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Enterprise DevOps Suite",
    valueProp: "Full-stack observability with AI-driven self-healing for K8s clusters.",
    differentiators: ["Zero-config setup", "Predictive incident alerts", "Cost optimization engine"],
    useCases: ["Microservices monitoring", "Cloud migrations", "Compliance auditing"],
    personas: ["Enterprise CTOs", "DevOps Managers"]
  },
  {
    id: 2,
    name: "Infrastructure Auto-Scaler",
    valueProp: "Dynamically scale cloud resources based on real-time traffic demand.",
    differentiators: ["99.99% uptime guarantee", "Save up to 60% on cloud bills", "Multi-cloud support"],
    useCases: ["Peak traffic management", "Batch processing", "Dev/Test environments"],
    personas: ["DevOps Managers", "E-commerce Tech Leads"]
  }
];

export default function ProductsPage() {
  return (
    <div className="space-y-8 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products & Offerings</h1>
          <p className="text-muted-foreground mt-1">Manage what you're selling and how AI should pitch it.</p>
        </div>
        <Button className="btn-primary">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="glass-card flex flex-col group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Package className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400/70 hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Value Proposition</h5>
                <p className="text-sm leading-relaxed">{product.valueProp}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Key Differentiators</h5>
                  <ul className="space-y-2">
                    {product.differentiators.map((diff, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="h-3 w-3 text-primary mt-0.5" />
                        <span>{diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Target Personas</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.personas.map((persona, i) => (
                      <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/5 border border-primary/20 text-[10px] font-medium text-primary">
                        <Target className="h-3 w-3" />
                        {persona}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Primary Use Cases</h5>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((useCase, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px]">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-white/[0.02] border-t border-white/5 p-4">
              <Button variant="ghost" className="w-full text-xs text-muted-foreground hover:text-primary gap-2">
                <Zap className="h-3 w-3" /> Generate messaging variants for this product
              </Button>
            </CardFooter>
          </Card>
        ))}

        <button className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all group min-h-[400px]">
          <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
            <Plus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg">Define New Offering</h4>
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
              Add a product or service to start generating targeted campaigns.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
