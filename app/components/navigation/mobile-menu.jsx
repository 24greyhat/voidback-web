import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden pb-6 space-y-4">
      <Link
        to="/"
        className="block text-foreground/70 hover:text-foreground transition-colors py-2 font-medium"
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        to="/requests"
        className="block text-foreground/70 hover:text-foreground transition-colors py-2 font-medium"
        onClick={onClose}
      >
        Requests
      </Link>
      <Link
        to="/dashboard"
        className="block text-foreground/70 hover:text-foreground transition-colors py-2 font-medium"
        onClick={onClose}
      >
        Dashboard
      </Link>
      <div className="pt-4 space-y-3">
        <Link to="/login" onClick={onClose}>
          <Button variant="ghost" size="sm" className="w-full font-medium">
            Sign In
          </Button>
        </Link>
        <Link to="/login" onClick={onClose}>
          <Button size="sm" className="w-full bg-primary hover:bg-primary/90 font-medium">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}