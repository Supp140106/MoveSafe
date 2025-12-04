"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-2" : "py-4 border-b border-secondary-100"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-700 rounded flex items-center justify-center">
              <img
                src="/favicon.ico"
                alt="Logo"
                className="w-6 h-6 object-contain"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-primary-900 leading-tight">
                MoveSafe<span className="text-accent-orange">Packers</span>
              </h1>
              <p className="text-xs text-secondary-500 font-medium tracking-wide">
                MODERN RELOCATION
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary-700 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex flex-col items-end">
              <a
                href="tel:+919876543210"
                className="flex items-center text-primary-900 font-semibold hover:text-primary-700 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" /> +91 98765 43210
              </a>
              <a
                href="mailto:info@movesafepackers.com"
                className="flex items-center text-sm text-secondary-500 hover:text-primary-700 transition-colors"
              >
                <Mail className="w-3 h-3 mr-2" /> info@movesafepackers.com
              </a>
            </div>
            <Link href="/contact" className="btn-secondary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-secondary-900 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border-t border-secondary-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 font-medium px-4 py-3 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-secondary-100 px-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center text-primary-900 font-semibold py-2"
                >
                  <Phone className="w-4 h-4 mr-3" /> +91 98765 43210
                </a>
                <a
                  href="mailto:info@movesafepackers.com"
                  className="flex items-center text-secondary-600 py-2"
                >
                  <Mail className="w-4 h-4 mr-3" /> info@movesafepackers.com
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-center mt-4"
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
