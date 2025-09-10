"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    gsap.from("[data-fade]", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.2,
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground" data-fade>
            About UNITY ENTERPRISES
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed" data-fade>
            Founded in 2021, we are now a leader in{" "}
            <span className="text-[color:var(--ue-primary)] font-bold">Electrical Engineering</span> and{" "}
            <span className="text-[color:var(--ue-primary)] font-bold">Advanced Digital Automation</span>, with locations
            across Mumbai MMR and MIDC Lote Parshuram.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6" data-fade>
            <h2 className="text-4xl font-bold text-foreground">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
              We strive to lead the future by helping industries grow rapidly through advanced
              digitalization and automation solutions. Our goal is to be at the forefront of
              technological change, driving efficiency and innovation for all our clients.
            </p>
          </div>
          <div className="flex justify-center gap-10" data-fade>
            <div className="text-center p-6 rounded-lg bg-card border border-border shadow-md transform hover:scale-105 transition-transform duration-300">
              <Lightbulb size={48} className="text-[color:var(--ue-primary)] mx-auto mb-3" />
              <p className="font-semibold text-foreground/80">Innovation</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border shadow-md transform hover:scale-105 transition-transform duration-300">
              <Target size={48} className="text-[color:var(--ue-primary)] mx-auto mb-3" />
              <p className="font-semibold text-foreground/80">Precision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aim Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div
            className="p-10 rounded-xl shadow-xl bg-[color:var(--ue-accent-green)] text-white dark:bg-[color:var(--ue-bg)] dark:text-[color:var(--ue-primary)]"
            data-fade
          >
            <h3 className="text-3xl font-bold">Our Aim</h3>
            <p className="mt-4 leading-relaxed">
              Fulfill client needs by delivering outstanding and reliable service that exceeds
              expectations. We are committed to building long-term partnerships based on trust and
              excellence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}