"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function RequestForm() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Submit request</h2>
      <Card className="p-8 border border-border">
        <form className="space-y-6" role="form" aria-label="Dataset request form">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium">Company name</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your company"
              className="bg-input h-11"
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Contact email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="contact@company.com"
              className="bg-input h-11"
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dataset-type" className="text-sm font-medium">Dataset type</Label>
            <Input
              id="dataset-type"
              name="dataset-type"
              placeholder="e.g., Retail products, Traffic signs"
              className="bg-input h-11"
              required
              aria-required="true"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="images" className="text-sm font-medium">Number of images</Label>
              <Input
                id="images"
                name="images"
                type="number"
                placeholder="5000"
                className="bg-input h-11"
                required
                aria-required="true"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium">Budget (USD)</Label>
              <Input
                id="budget"
                name="budget"
                placeholder="$10,000"
                className="bg-input h-11"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline" className="text-sm font-medium">Deadline</Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              className="bg-input h-11"
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">Requirements</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your dataset requirements..."
              className="bg-input min-h-[120px]"
              required
              aria-required="true"
            />
          </div>

          <div className="pt-4">
            <Button className="w-full bg-primary hover:bg-primary/90 h-11 font-semibold" type="submit">
              Submit request
            </Button>
          </div>
        </form>
      </Card>

      <div className="mt-8 border border-border p-6">
        <h4 className="font-semibold mb-3">How it works</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="font-medium">• Submit your dataset requirements</li>
          <li className="font-medium">• We match your request with existing datasets on our platform</li>
          <li className="font-medium">• Receive YOLO-ready, ethically sourced datasets</li>
          <li className="font-medium">• Annotators receive 80% of sale price (20% platform commission)</li>
        </ul>
      </div>
    </div>
  );
}