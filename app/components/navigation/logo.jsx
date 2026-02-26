import Link from "next/link";


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Voidback Home">
      <img src={"/logo.png"} alt="Voidback Logo - Enterprise AI Training Data Platform" className="w-8 h-8" />
      <span className="text-2xl font-semibold tracking-tight">VOIDBACK</span>
    </Link>
  );
}
