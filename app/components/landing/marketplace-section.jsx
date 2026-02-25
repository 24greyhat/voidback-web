import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";




export function CustomRequestsSection() {
  const benefits = [
    "Access to consensually sourced data from 2,847+ global annotators",
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
              with existing datasets on our platform, created by our global network of annotators
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
          <div className="bg-secondary/50 border border-border h-96 flex items-center justify-center">
            <p className="text-muted-foreground font-medium">Request fulfillment visualization</p>
          </div>
        </div>
      </div>
    </section>
  );
}
