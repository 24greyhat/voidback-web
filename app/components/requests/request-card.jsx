import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Clock, Image } from "lucide-react";

export function RequestCard({ request }) {
  return (
    <Card className="p-8 border border-border hover:border-foreground/20 transition-colors">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Enterprise Request #{request.id}</h3>
          <p className="text-muted-foreground font-medium">Dataset request available</p>
        </div>
        <Badge 
          variant="outline"
          className="border-border text-xs font-medium"
        >
          {request.status === 'active' ? 'Active' : 'In progress'}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm text-muted-foreground mb-1 font-medium">Images needed</p>
          <p className="font-semibold flex items-center">
            <Image className="w-4 h-4 mr-1" />
            {request.images.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1 font-medium">Budget</p>
          <p className="font-semibold">{request.budget}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1 font-medium">Deadline</p>
          <p className="font-semibold flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {new Date(request.deadline).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric'
            })}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1 font-medium">Match potential</p>
          <p className="font-semibold">
            {request.matches > 20 ? 'High' : request.matches > 10 ? 'Medium' : 'Low'}
          </p>
        </div>
      </div>

      <Button variant="outline" className="w-full h-10 font-semibold">
        View details
      </Button>
    </Card>
  );
}