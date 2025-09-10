"use client";

import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-foreground/70">
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link  href="/contact" className="hover:underline">Contact</Link>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4 text-[color:var(--ue-accent-green)]">
        <Linkedin className="spin-hover" />
        <Mail className="spin-hover" />
        <Phone className="spin-hover" />
        <MapPin className="spin-hover" />
      </div>
      <p className="mt-3">© Unity Enterprises 2025</p>
    </footer>
  );
}


