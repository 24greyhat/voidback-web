import Link from "next/link";


export function Footer() {
  const links = [
    { label: "Home", to: "/" },
    { label: "Custom Requests", to: "/requests" },
    { label: "Dashboard", to: "/dashboard" },
    { label: "Privacy", to: "#" },
    { label: "Terms", to: "#" }
  ];

  return (
    <footer className="border-t border-border py-12" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div>
            <span className="text-xl font-semibold tracking-tight">VOIDBACK</span>
          </div>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-sm" aria-label="Footer navigation">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 Voidback. All rights reserved. Enterprise AI training data platform for ethical, consensually sourced datasets.
          </p>
        </div>
      </div>
    </footer>
  );
}
