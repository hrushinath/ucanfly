import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui";

interface LinkItem {
  name: string;
  path: string;
}

interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
}

const destinations: LinkItem[] = [
  { name: "Study in UK", path: "/programs#uk" },
  { name: "Study in USA", path: "/programs#usa" },
  { name: "Study in Canada", path: "/programs#canada" },
  { name: "Study in Australia", path: "/programs#australia" },
  { name: "Study in New Zealand", path: "/programs#new-zealand" },
  { name: "Study in Europe", path: "/programs#europe" },
];

const quickLinks: LinkItem[] = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Study Abroad", path: "/programs" },
  { name: "Contact Us", path: "/contact" },
];

const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/UCANFly.StudyAbroad" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ucanfly.studyabroad/" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/Intl_Studies" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 shadow-colored-primary group-hover:shadow-glow transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">UCAN FLY</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  Study Abroad
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your trusted partner for international education. We help students achieve their dreams of studying abroad with comprehensive guidance and support.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-gradient-to-br hover:from-primary-600 hover:to-primary-700 hover:text-white hover:shadow-colored-primary hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Top Destinations
            </h3>
            <ul className="mt-4 space-y-3">
              {destinations.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Office
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-sm text-gray-400">
                  No: 539, 5th Floor<br />
                  PVT Market Building<br />
                  Kothapet, Hyderabad - 500035
                </span>
              </li>
              <li>
                <a
                  href="tel:8341531524"
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-white group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary-400 group-hover:text-primary-300" />
                  <span>834-153-1524</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+914035684809"
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-white group"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary-400 group-hover:text-primary-300" />
                  <span>040-3568-4809</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ucanfly.in"
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-300 hover:text-white group"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary-400 group-hover:text-primary-300" />
                  <span>info@ucanfly.in</span>
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.link/yo5ix5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block"
            >
              <Button variant="secondary" className="gap-2 shadow-colored-secondary hover:shadow-glow-secondary">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} UCAN FLY Study Abroad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
