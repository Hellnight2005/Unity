"use client";

import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-black/70">
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="/contact" className="hover:underline">Contact</a>
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


