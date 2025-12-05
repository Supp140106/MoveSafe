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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${isScrolled ? "shadow-md py-2" : "py-4 border-b border-gray-800"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-white leading-none tracking-tight">
                MoveSafe<span className="text-primary-600">Packers</span>
              </h1>
              <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-0.5">
                Logistics
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary-600 font-bold text-sm uppercase tracking-wide transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Support</span>
              <a
                href="tel:+911244718888"
                className="text-sm font-bold text-white hover:text-primary-600 transition-colors"
              >
                +91 124 471 8888
              </a>
            </div>
            <Link href="#quote" className="btn-primary text-sm px-6 py-2.5">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-secondary-50 rounded-md transition-colors"
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
          <div className="lg:hidden bg-white border-t border-secondary-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-secondary-800 hover:bg-primary-50 hover:text-primary-700 font-medium px-4 py-3 rounded-md transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="text-secondary-300 group-hover:text-primary-400">→</span>
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-secondary-100 px-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
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
