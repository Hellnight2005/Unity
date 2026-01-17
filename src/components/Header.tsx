"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, X, ArrowRight } from "lucide-react";
import gsap from "gsap";


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Electrical Solutions", href: "/electrical" },
    { name: "Digital & AI", href: "/digital" },
    { name: "Clients", href: "/#clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 bg-[var(--ue-nav-bg)] border-b border-gray-100 shadow-sm"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-white shadow-sm rounded-lg overflow-hidden flex items-center justify-center border border-gray-100 group-hover:border-[var(--ue-primary)] transition-colors">
            <Image
              src="/unity-logo.jpeg"
              alt="Unity Logo"
              width={40}
              height={40}
              className="object-contain p-0.5"
            />
          </div>
          <span className="font-heading font-medium text-2xl tracking-tight text-[var(--ue-secondary)]">
            UNITY<span className="text-[var(--ue-primary)]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-normal text-[var(--ue-secondary)] hover:text-[var(--ue-primary)] transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--ue-primary)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5">


          <Link
            href="/quote"
            className="hidden md:flex items-center gap-2 bg-[var(--ue-primary)] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[var(--ue-secondary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[var(--ue-bg)] transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: "73px" }}
      >
        <div className="flex flex-col p-8 gap-6 h-full border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium font-heading text-[var(--ue-secondary)] border-b border-gray-100 pb-4 hover:text-[var(--ue-primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-[var(--ue-primary)] text-white py-3 rounded-full font-medium text-center shadow-md"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}