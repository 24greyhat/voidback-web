import { Menu, X } from "lucide-react";

export function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      className="md:hidden text-foreground"
      onClick={onClick}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}
