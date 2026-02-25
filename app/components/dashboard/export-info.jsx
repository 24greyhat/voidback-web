import { Button } from "../ui/button";

export function ExportInfo() {
  return (
    <div className="mt-16 border border-border p-8">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-semibold mb-4">Export formats</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          All your datasets are stored in perfectly formatted YOLO SQL tables. 
          Export them instantly and start training your models with zero preprocessing required. 
          Compatible with all major computer vision frameworks.
        </p>
        <Button variant="outline" className="h-10 px-6 font-semibold">
          Learn more
        </Button>
      </div>
    </div>
  );
}
