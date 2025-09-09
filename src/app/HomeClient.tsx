"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Zap,
  Cpu,
  Camera,
  Building,
  Target,
  Lightbulb,
  UserCheck,
  PackageCheck,
  FileCheck,
  Network,
  Headset,
  Wrench,
  Cog,
  Plug,
  Settings,
  Database,
  Cloud,
} from "lucide-react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeClient() {
  const [submitting, setSubmitting] = useState(false);
  const [submitOk, setSubmitOk] = useState(false);

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
      gsap.from(el.children, {
        opacity: 0,
        y: 16,
        stagger: 0.08,
        duration: 0.5,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    });
  }, []);

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    setSubmitOk(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (res.ok) setSubmitOk(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section id="home" className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-black leading-tight" data-stagger>
            <span>A Better Tomorrow</span>
            <br />
            <span>
              Begins with Today’s <span className="text-[color:var(--ue-primary)]">Innovation</span>
            </span>
          </h1>
          <p className="mt-5 text-black/70 text-lg">
            Electrical Engineering & Advanced Digital Automation Solutions
          </p>
          <div className="mt-8 flex gap-4" data-stagger>
            <a href="/services" className="px-5 py-3 rounded-md bg-[color:var(--ue-primary)] text-white text-sm">
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-md border border-black/10 text-sm">
              Contact Us
            </a>
          </div>
        </div>
        {/* Floating icons (simple) */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
          <div className="absolute left-10 top-10 animate-pulse-slow text-[color:var(--ue-accent-green)]"><Zap /></div>
          <div className="absolute right-16 top-20 animate-pulse-slow text-[color:var(--ue-accent-orange)]"><Cpu /></div>
          <div className="absolute left-1/2 bottom-10 animate-pulse-slow text-[color:var(--ue-accent-green)]"><Camera /></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="h-64 bg-[color:var(--ue-accent-green)]/10 rounded-lg flex items-center justify-center">
            <Building className="text-[color:var(--ue-accent-green)]" size={64} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">About Us</h2>
            <p className="mt-4 text-black/70">
              With a footprint in Mumbai and Ratnagiri, we deliver <span className="text-[color:var(--ue-primary)]">innovation</span>,
              <span className="text-[color:var(--ue-primary)]"> automation</span>, and
              <span className="text-[color:var(--ue-primary)]"> digitalization</span> across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services - simplified horizontal panels */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-black mb-8">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
            <div className="p-6 rounded-lg bg-[color:var(--ue-accent-orange)]/10">
              <h3 className="font-semibold text-black flex items-center gap-2"><Cpu size={18}/> AI & Digital</h3>
              <ul className="mt-3 text-sm text-black/70 space-y-1">
                <li className="flex items-center gap-2"><Database size={16}/> Data logging</li>
                <li className="flex items-center gap-2"><Cloud size={16}/> Energy monitoring</li>
                <li className="flex items-center gap-2"><Cpu size={16}/> IoT dashboards</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-[color:var(--ue-accent-orange)]/10">
              <h3 className="font-semibold text-black flex items-center gap-2"><Zap size={18}/> Electrical</h3>
              <ul className="mt-3 text-sm text-black/70 space-y-1">
                <li className="flex items-center gap-2"><Settings size={16}/> Panel manufacturing</li>
                <li className="flex items-center gap-2"><Plug size={16}/> Motor starters</li>
                <li className="flex items-center gap-2"><Wrench size={16}/> Wiring</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-[color:var(--ue-accent-orange)]/10">
              <h3 className="font-semibold text-black flex items-center gap-2"><Camera size={18}/> Surveillance & EPABX</h3>
              <ul className="mt-3 text-sm text-black/70 space-y-1">
                <li className="flex items-center gap-2"><Camera size={16}/> CCTV</li>
                <li className="flex items-center gap-2"><LockIcon/> Biometrics</li>
                <li className="flex items-center gap-2"><Camera size={16}/> Video door phones</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-[color:var(--ue-accent-orange)]/10">
              <h3 className="font-semibold text-black flex items-center gap-2"><Wrench size={18}/> Maintenance</h3>
              <ul className="mt-3 text-sm text-black/70 space-y-1">
                <li className="flex items-center gap-2"><Wrench size={16}/> Installation</li>
                <li className="flex items-center gap-2"><Cog size={16}/> Preventive maintenance</li>
                <li className="flex items-center gap-2"><Wrench size={16}/> Spare parts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Aim */}
      <section id="vision" className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Empowering industries through <span className="text-[color:var(--ue-primary)]">innovation</span> and reliability
          </h2>
          <p className="mt-4 text-black/70">Fulfill client needs by delivering outstanding & reliable service.</p>
          <div className="mt-8 flex justify-center gap-6 opacity-60">
            <Target />
            <Lightbulb />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-black mb-8">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            <Feature icon={<UserCheck />} title="Expertise" />
            <Feature icon={<PackageCheck />} title="Reliable Parts" />
            <Feature icon={<FileCheck />} title="Quality Reports" />
            <Feature icon={<Network />} title="Supplier Network" />
            <Feature icon={<Lightbulb />} title="Innovative Solutions" />
            <Feature icon={<Headset />} title="Dedicated Support" />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16">
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-black/70">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="mx-8 inline-block">Client {i + 1}</span>
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={`dup-${i}`} className="mx-8 inline-block">Client {i + 1}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">Contact</h2>
            <div className="text-black/80 space-y-2">
              <p><strong className="text-[color:var(--ue-primary)]">Phone:</strong> +91-XXXXXXXXXX</p>
              <p><strong className="text-[color:var(--ue-primary)]">Email:</strong> info@unity.com</p>
              <p><strong className="text-[color:var(--ue-primary)]">Offices:</strong> Mumbai, Ratnagiri</p>
            </div>
          </div>
          <form
            action={async (formData) => handleSubmit(formData)}
            className="p-6 rounded-lg border border-black/10 space-y-4"
          >
            <input name="name" placeholder="Name" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-accent-orange)]" />
            <input name="email" placeholder="Email" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-accent-orange)]" />
            <textarea name="message" placeholder="Message" rows={4} className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[color:var(--ue-accent-orange)]" />
            <button type="submit" disabled={submitting} className="px-5 py-3 rounded-md bg-[color:var(--ue-primary)] text-white">
              {submitting ? "Sending..." : submitOk ? "Sent ✓" : "Submit"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-black/70">
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#clients" className="hover:underline">Clients</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <p className="mt-3">© Unity Enterprises 2025</p>
      </footer>
    </main>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-6 rounded-lg border border-black/10 bg-white hover:shadow-md transition-transform will-change-transform tilt-card">
      <div className="h-8 w-8 text-[color:var(--ue-accent-green)]">{icon}</div>
      <div className="mt-2 font-semibold text-black">{title}</div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17 8V7a5 5 0 10-10 0v1H5v14h14V8h-2zm-8-1a3 3 0 116 0v1H9V7z" />
    </svg>
  );
}


