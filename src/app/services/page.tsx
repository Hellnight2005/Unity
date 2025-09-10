"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Cpu, Database, Cloud, Zap, Settings, Plug, Camera, Wrench, Cog, Lightbulb, Target } from "lucide-react";

export default function ServicesPage() {
  useEffect(() => {
    gsap.from("[data-card]", { opacity: 0, y: 24, stagger: 0.08, duration: 0.5 });
  }, []);

  return (
    <main className="min-h-screen py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground" data-card>
            Our Solutions for a Digital Future
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed" data-card>
            We offer a full spectrum of engineering and automation services tailored to
            help your business thrive in the modern industrial landscape.
          </p>
        </div>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card title="AI & Digital" icon={<Cpu />}>
            <li className="flex items-center gap-2"><Database size={16} /> Data Logging</li>
            <li className="flex items-center gap-2"><Cloud size={16} /> Energy Monitoring</li>
            <li className="flex items-center gap-2"><Lightbulb size={16} /> IoT Dashboards</li>
          </Card>
          <Card title="Electrical Engineering" icon={<Zap />}>
            <li className="flex items-center gap-2"><Settings size={16} /> Panel Manufacturing</li>
            <li className="flex items-center gap-2"><Plug size={16} /> Power Factor Control</li>
            <li className="flex items-center gap-2"><Target size={16} /> Motor Starters</li>
            <li className="flex items-center gap-2"><Wrench size={16} /> Industrial Wiring</li>
          </Card>
          <Card title="Surveillance & EPABX" icon={<Camera />}>
            <li className="flex items-center gap-2"><Camera size={16} /> CCTV & DVR/NVR Systems</li>
            <li className="flex items-center gap-2"><Camera size={16} /> Biometric Attendance</li>
            <li className="flex items-center gap-2"><Camera size={16} /> Video Door Phones</li>
          </Card>
          <Card title="Maintenance & Repair" icon={<Wrench />}>
            <li className="flex items-center gap-2"><Wrench size={16} /> Installation & Servicing</li>
            <li className="flex items-center gap-2"><Cog size={16} /> Preventive Maintenance</li>
            <li className="flex items-center gap-2"><Wrench size={16} /> Spare Parts Sourcing</li>
          </Card>
        </section>
      </div>
    </main>
  );
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div
      data-card
      className="p-6 rounded-xl border border-border bg-card dark:hover:border-[color:var(--ue-primary)] transition-colors duration-300"
    >
      <div className="flex items-center gap-4 text-foreground mb-4">
        <div className="p-3 rounded-full bg-accent text-[color:var(--ue-primary)] dark:bg-white/10 dark:text-[color:var(--ue-primary)]">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <ul className="text-sm text-foreground/80 space-y-2">
        {children}
      </ul>
    </div>
  );
}