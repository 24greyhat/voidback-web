import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-10">
      <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
        Home
      </Link>
      <Link to="/requests" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
        Requests
      </Link>
      <Link to="/dashboard" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
        Dashboard
      </Link>
      <Link to="/login">
        <Button variant="ghost" size="sm" className="text-sm font-medium">
          Sign In
        </Button>
      </Link>
      <Link to="/login">
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-sm font-medium px-6">
          Get Started
        </Button>
      </Link>
    </div>
  );
}