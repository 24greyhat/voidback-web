import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";





export function HeroSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground border border-border px-3 py-1.5 rounded-sm">
              Mobile App Coming March 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 leading-[1.1]">
            Ethically sourced,<br />globally diverse<br />computer vision data
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            The first data annotation platform built on consensual sourcing. Anyone with an iPhone can download our mobile app, photograph objects, consent to labeling, and share their images—creating the most diverse, ethically sourced datasets available.
          </p>

          <div className="mb-12 border-l-2 border-primary pl-6">
            <p className="text-lg font-semibold mb-2">Our competitive advantage</p>
            <p className="text-muted-foreground leading-relaxed">
              Unlike traditional data annotation platforms that use scraped or ambiguously sourced images, every photo on Voidback is captured with explicit consent through our mobile app. This means truly representative, globally diverse datasets with full legal clarity and ethical compliance. Enterprises submit data requests, and we fulfill them by matching with existing datasets on our platform, sharing profits with annotators (20% platform commission).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link href="/login">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8 font-semibold">
                Get early access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link href="/requests">
              <Button size="lg" variant="outline" className="h-12 px-8 font-semibold">
                For enterprises
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
