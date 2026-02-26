'use client'
import Link from "next/link";



export function LoginHeader() {


  return (
    <header className="text-center mb-12">
      <Link href="/" className="inline-flex items-center gap-3 mb-8" aria-label="Return to Voidback Home">
        <img src={"logo.png"} alt="Voidback Logo - Enterprise AI Training Data Platform" className="w-10 h-10" />
        <span className="text-2xl font-semibold tracking-tight">VOIDBACK</span>
      </Link>
      <h1 className="text-3xl font-semibold mb-3">Welcome back</h1>
      <p className="text-muted-foreground font-medium">Sign in to access your datasets</p>
    </header>
  );
}
