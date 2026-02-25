import { Link } from "react-router-dom";
import voidbackLogo from "figma:asset/75bf8d240d9e87258fa09600a9795b5c6e2f6a6b.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Voidback Home">
      <img src={voidbackLogo} alt="Voidback Logo - Enterprise AI Training Data Platform" className="w-8 h-8" />
      <span className="text-2xl font-semibold tracking-tight">VOIDBACK</span>
    </Link>
  );
}