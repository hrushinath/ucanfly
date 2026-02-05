import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Study Abroad", path: "/programs" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 backdrop-blur-lg shadow-soft supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 shadow-colored-primary group-hover:shadow-glow transition-all duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">UCAN FLY</span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                Study Abroad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 relative overflow-hidden",
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 shadow-soft"
                    : "text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-soft"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:8341531524"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>834-153-1524</span>
            </a>
            <Link to="/contact">
              <Button className="shadow-colored-primary hover:shadow-glow">Free Consultation</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
                    location.pathname === link.path
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 px-4">
                <a
                  href="tel:8341531524"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600"
                >
                  <Phone className="h-4 w-4" />
                  <span>834-153-1524</span>
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Free Consultation</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
