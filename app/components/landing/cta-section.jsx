import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

import Link from "next/link";


export function CTASection() {
  return (
    <section className="py-24 md:py-32 border-t border-border" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight">
          Transform your<br />workflow today
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Get early access to Voidback and join the future of dataset creation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login">

            <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8 font-semibold">
              Get started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

          <Link href="/requests">
            <Button size="lg" variant="outline" className="h-12 px-8 font-semibold">
              Submit a request
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
