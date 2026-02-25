"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Download } from "lucide-react";

export function DatasetCard({ dataset }) {
  return (
    <Card className="p-8 border border-border hover:border-foreground/20 transition-colors">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <h3 className="text-2xl font-semibold">{dataset.name}</h3>
            <Badge variant="outline" className="border-border text-xs font-medium">
              {dataset.privacy}
            </Badge>
            <Badge variant="outline" className="border-border text-xs font-medium">
              YOLO
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1 font-medium">Images</p>
              <p className="text-xl font-semibold">{dataset.images.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 font-medium">Annotations</p>
              <p className="text-xl font-semibold">{dataset.annotations.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 font-medium">Created</p>
              <p className="text-xl font-semibold">
                {new Date(dataset.created).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-col gap-3 lg:w-40">
          <Button className="bg-primary hover:bg-primary/90 h-10 flex-1 lg:flex-none lg:w-full font-semibold">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" className="h-10 flex-1 lg:flex-none lg:w-full font-semibold">
            View
          </Button>
        </div>
      </div>
    </Card>
  );
}