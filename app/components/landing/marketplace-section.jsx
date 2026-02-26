'use client'
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";




export function CustomRequestsSection() {
  const benefits = [
    "Access to consensually sourced data from our network of global annotators",
    "True diversity: 156 countries represented through our mobile app",
    "YOLO-ready formatted datasets with ethical compliance",
    "Full data provenance and consent tracking"
  ];



  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Request-based fulfillment
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enterprises submit dataset requests. We fulfill them by matching your requirements
              with existing private datasets on our platform, created by our global network of annotators
              through our mobile app. Profits are shared with annotators (20% platform commission).
              Datasets are private by default, but annotators can make them public for anyone to download.
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5"></div>
                  <p className="text-muted-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            <Link href="/requests">
              <Button variant="outline" className="h-12 px-8 font-semibold">
                Submit a request
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <RequestVisualization />

        </div>
      </div>
    </section>
  );
}













function RequestVisualization() {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary/50 border border-border h-96 flex items-center justify-center relative overflow-hidden">
      {/* Enterprise */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 bg-background border-2 border-foreground rounded-lg flex items-center justify-center mb-2">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <p className="text-xs font-semibold">Enterprise</p>
      </motion.div>

      {/* Platform */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-20 h-20 bg-foreground rounded-lg flex items-center justify-center mb-2 relative">
          <svg className="w-10 h-10 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
          {animationStep >= 2 && (
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border border-border px-3 py-1 rounded text-xs font-semibold whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              20% Fee
            </motion.div>
          )}
        </div>
        <p className="text-xs font-semibold">Voidback</p>
      </motion.div>

      {/* Annotators */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-16 h-16 bg-background border-2 border-foreground rounded-lg flex items-center justify-center mb-2 relative">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {animationStep >= 2 && (
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background border border-foreground px-3 py-1 rounded text-xs font-semibold whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              80% Share
            </motion.div>
          )}
        </div>
        <p className="text-xs font-semibold">Annotators</p>
      </motion.div>

      {/* Request Arrow */}
      <motion.div
        className="absolute left-28 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: animationStep >= 0 ? 1 : 0,
          x: animationStep >= 1 ? 0 : -20
        }}
        transition={{ duration: 0.8 }}
      >
        <svg className="w-24 h-6" viewBox="0 0 96 24" fill="none">
          <motion.path
            d="M0 12 L86 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: animationStep >= 0 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d="M82 8 L90 12 L82 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationStep >= 0 ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
        </svg>
        <p className="text-xs text-muted-foreground mt-1 text-center">Request</p>
      </motion.div>

      {/* Match Arrow */}
      <motion.div
        className="absolute right-28 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: animationStep >= 1 ? 1 : 0,
          x: animationStep >= 2 ? 0 : 20
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <svg className="w-24 h-6" viewBox="0 0 96 24" fill="none">
          <motion.path
            d="M10 12 L96 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: animationStep >= 1 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d="M14 8 L6 12 L14 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationStep >= 1 ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          />
        </svg>
        <p className="text-xs text-muted-foreground mt-1 text-center">Match</p>
      </motion.div>

      {/* Payment Arrow (curved from left to right) */}
      <motion.div
        className="absolute left-28 bottom-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: animationStep >= 3 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <svg className="w-72 h-16" viewBox="0 0 288 64" fill="none">
          <motion.path
            d="M0 32 Q144 0, 278 32"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: animationStep >= 3 ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M274 28 L282 32 L274 36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationStep >= 3 ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </svg>
        <p className="text-xs text-muted-foreground absolute bottom-0 left-1/2 -translate-x-1/2">Payment</p>
      </motion.div>
    </div>
  );
}
