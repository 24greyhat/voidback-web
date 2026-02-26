"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Users, Building2, Database, DollarSign } from "lucide-react";


export function RequestFulfillmentViz() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            How request fulfillment works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A transparent, ethical data exchange powered by consensual sourcing
          </p>
        </div>

        {/* Visualization */}
        <div className="relative">
          {/* Enterprise Side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left: Enterprise */}
            <div className={`bg-background border border-border p-8 rounded-sm transition-all duration-500 ${activeStep === 0 ? 'ring-2 ring-primary shadow-lg' : ''}`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-muted rounded-sm flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise submits request</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Company specifies dataset requirements, budget, and deadline
                </p>
                <div className="bg-muted px-4 py-2 rounded-sm text-xs font-medium">
                  10,000 images • $25,000 budget
                </div>
              </div>
            </div>

            {/* Center: Voidback Platform */}
            <div className="flex flex-col items-center relative">
              {/* Arrow from Enterprise */}
              <div className={`hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity duration-500 ${activeStep >= 1 ? 'opacity-100' : 'opacity-20'}`}>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>

              <div className={`bg-background border-2 border-border p-12 rounded-sm transition-all duration-500 ${activeStep === 1 ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                <img src={"/logo.png"} alt="Voidback Platform Logo - AI Training Data Marketplace Matching System" className="w-24 h-24 mb-6" />
                <h3 className="text-xl font-semibold text-center mb-3">Voidback matches</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  Platform finds existing datasets that meet requirements
                </p>
                {activeStep >= 1 && (
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Matching datasets</span>
                      <span className="font-semibold">23 found</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full transition-all duration-1000"
                        style={{ width: activeStep >= 2 ? '100%' : '0%' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Arrow to Annotators */}
              <div className={`hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 ${activeStep >= 2 ? 'opacity-100' : 'opacity-20'}`}>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Right: Annotators */}
            <div className={`bg-background border border-border p-8 rounded-sm transition-all duration-500 ${activeStep === 2 ? 'ring-2 ring-primary shadow-lg' : ''}`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-muted rounded-sm flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Annotators fulfill</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Matched datasets from our diverse contributor network
                </p>
                <div className="grid grid-cols-2 gap-2 w-full text-xs">
                  <div className="bg-muted px-3 py-2 rounded-sm font-medium">156 countries</div>
                  <div className="bg-muted px-3 py-2 rounded-sm font-medium">23 matches</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom: Revenue Split */}
          <div className={`mt-12 bg-primary/5 border border-primary/20 p-8 rounded-sm transition-all duration-500 ${activeStep === 3 ? 'ring-2 ring-primary shadow-lg' : ''}`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-2xl font-semibold">80% to annotators</div>
                  <div className="text-sm text-muted-foreground">$20,000 distributed to contributors</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-border" />

              <div className="flex items-center gap-3">
                <Database className="w-8 h-8 text-muted-foreground" />
                <div>
                  <div className="text-2xl font-semibold">20% platform fee</div>
                  <div className="text-sm text-muted-foreground">$5,000 for infrastructure & matching</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1, 2, 3].map((step) => (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeStep === step ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground/30'
                }`}
              aria-label={`Go to step ${step + 1}`}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
