"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, Search } from "lucide-react";

export function DashboardActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search datasets"
          className="pl-10 bg-input h-11"
        />
      </div>
      <Button className="bg-primary hover:bg-primary/90 h-11 px-6 font-semibold">
        <Plus className="w-4 h-4 mr-2" />
        New dataset
      </Button>
    </div>
  );
}