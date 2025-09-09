"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    gsap.from("[data-fade]", { opacity: 0, y: 20, stagger: 0.08, duration: 0.5 });
  }, []);

  return (
    <main className="min-h-screen">
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 space-y-6">
          <h1 className="text-4xl font-bold text-black" data-fade>About</h1>
          <p className="text-black/80" data-fade>
            Founded in 2021 and grown into <span className="text-[color:var(--ue-primary)]">UNITY ENTERPRISES</span>.
            We specialize in Electrical Engineering and Advanced Digital Automation with locations across
            Mumbai MMR and MIDC Lote Parshuram (Ratnagiri).
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-4">
          <h2 className="text-3xl font-bold text-black" data-fade>
            We strive to lead the future by helping industries grow rapidly through advanced
            digitalization and automation solutions.
          </h2>
          <div className="flex justify-center gap-6 opacity-70" data-fade>
            <Lightbulb />
            <Target />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="p-6 rounded-lg border border-black/10 bg-white" data-fade>
            <h3 className="text-xl font-semibold text-black">Our Aim</h3>
            <p className="mt-2 text-black/80">
              Fulfill client needs by delivering outstanding and reliable service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


