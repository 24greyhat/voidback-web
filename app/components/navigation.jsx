"use client";

import { useState } from "react";
import { Logo } from "./navigation/logo";
import { DesktopNav } from "./navigation/desktop-nav";
import { MobileMenuButton } from "./navigation/mobile-menu-button";
import { MobileMenu } from "./navigation/mobile-menu";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <DesktopNav />
          <MobileMenuButton 
            isOpen={mobileMenuOpen} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          />
        </div>
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
      </div>
    </nav>
  );
}