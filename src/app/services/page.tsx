"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Cpu, Database, Cloud, Zap, Settings, Plug, Camera, Wrench, Cog } from "lucide-react";

export default function ServicesPage() {
  useEffect(() => {
    gsap.from("[data-card]", { opacity: 0, y: 24, stagger: 0.08, duration: 0.5 });
  }, []);

  return (
    <main className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-10">
        <h1 className="text-4xl font-bold text-black">Services</h1>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="AI & Digital" icon={<Cpu />}> 
            <li className="flex items-center gap-2"><Database size={16}/> Data logging</li>
            <li className="flex items-center gap-2"><Cloud size={16}/> Energy monitoring</li>
            <li className="flex items-center gap-2"><Cpu size={16}/> IoT dashboards</li>
          </Card>
          <Card title="Electrical" icon={<Zap />}>
            <li className="flex items-center gap-2"><Settings size={16}/> Panel manufacturing</li>
            <li className="flex items-center gap-2"><Plug size={16}/> Power factor control</li>
            <li className="flex items-center gap-2"><Plug size={16}/> Motor starters</li>
            <li className="flex items-center gap-2"><Wrench size={16}/> Industrial wiring</li>
          </Card>
          <Card title="Surveillance & EPABX" icon={<Camera />}>
            <li className="flex items-center gap-2"><Camera size={16}/> CCTV & DVR/NVR</li>
            <li className="flex items-center gap-2"><Camera size={16}/> Biometric attendance</li>
            <li className="flex items-center gap-2"><Camera size={16}/> Video door phone</li>
          </Card>
          <Card title="Maintenance / AC / Washing Machine" icon={<Wrench />}>
            <li className="flex items-center gap-2"><Wrench size={16}/> Installation</li>
            <li className="flex items-center gap-2"><Cog size={16}/> Preventive maintenance</li>
            <li className="flex items-center gap-2"><Wrench size={16}/> Spare parts</li>
          </Card>
        </section>
      </div>
    </main>
  );
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div data-card className="p-6 rounded-lg border border-black/10 bg-white">
      <div className="flex items-center gap-2 text-black">
        <div className="text-[color:var(--ue-accent-green)]">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="mt-3 text-sm text-black/70 space-y-1">
        {children}
      </ul>
    </div>
  );
}


