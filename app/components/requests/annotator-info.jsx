import { Button } from "../ui/button";

export function AnnotatorInfo() {
  return (
    <div className="mt-8 border border-border p-6">
      <h4 className="font-semibold mb-3">For annotators</h4>
      <p className="text-sm text-muted-foreground mb-4 font-medium">
        If your existing datasets match any requests, we'll notify you automatically. 
        You receive 80% of the sale price (20% platform commission).
      </p>
      <Button variant="outline" className="h-10 px-6 font-semibold">
        View your datasets
      </Button>
    </div>
  );
}
