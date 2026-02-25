import { Link } from "react-router-dom";
import voidbackLogo from "figma:asset/75bf8d240d9e87258fa09600a9795b5c6e2f6a6b.png";

export function LoginHeader() {
  return (
    <header className="text-center mb-12">
      <Link to="/" className="inline-flex items-center gap-3 mb-8" aria-label="Return to Voidback Home">
        <img src={voidbackLogo} alt="Voidback Logo - Enterprise AI Training Data Platform" className="w-10 h-10" />
        <span className="text-2xl font-semibold tracking-tight">VOIDBACK</span>
      </Link>
      <h1 className="text-3xl font-semibold mb-3">Welcome back</h1>
      <p className="text-muted-foreground font-medium">Sign in to access your datasets</p>
    </header>
  );
}