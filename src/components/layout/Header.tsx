import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bus, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Delays', href: '/delays' },
    { name: 'Parents', href: '/parents' },
    { name: 'Contact', href: '/contact' },
  ];
  const currentPath = location?.pathname || '/';
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Bus className="h-6 w-6 text-slate-900" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-secondary dark:text-white uppercase italic">
              TransitHub
            </span>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-wide transition-colors hover:text-primary",
                  currentPath === link.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-secondary text-white hover:bg-secondary/90 font-bold uppercase tracking-wider text-xs px-6">
              Portal Login
            </Button>
          </nav>
          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-4 px-4 space-y-2 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3 px-4 text-base font-bold uppercase rounded-lg transition-colors",
                currentPath === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-900"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 px-4">
            <Button className="w-full bg-secondary text-white hover:bg-secondary/90 font-bold uppercase py-6">
              Portal Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}