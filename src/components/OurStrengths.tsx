"use client";

import { CheckCircle2, Factory, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function OurStrengths() {
    return (
        <section className="py-16 md:py-24 bg-[#0B1128] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Section Header - Standardized Style */}
                <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-6 md:mb-8 leading-tight">
                        OUR STRENGTHS
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Column 1: IoT - Wrapped in Card */}
                    <div className="p-6 md:p-10 bg-[#151e32] rounded-2xl border border-blue-900/20 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Factory className="text-teal-400 w-8 h-8" />
                            <h3 className="text-xl md:text-2xl font-bold text-teal-500 uppercase leading-snug">
                                IoT - Predictive Maintenance <br />
                                <span className="text-white/80 text-lg md:text-xl font-medium normal-case">& Smart Fault Detection</span>
                            </h3>
                        </div>

                        {/* Image Placeholder */}
                        <div className="relative w-full aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group-hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] transition-all duration-500">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                                {/* Placeholder for Dashboard Image */}
                                <div className="text-center p-6">
                                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                                            alt="IoT Dashboard"
                                            fill
                                            className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    IoT Dashboard Preview
                                </div>
                            </div>
                        </div>

                        {/* Bullet Points */}
                        <ul className="space-y-4 mt-2">
                            {[
                                "Real-Time Interactive dashboard",
                                "Digital wiring diagram & P&ID diagram - Fault Indication",
                                "Automated anomaly detection with alerts & Timely consumable reminders"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1.5 relative">
                                        <div className="w-3 h-3 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                                        <div className="absolute top-1.5 left-1.5 w-px h-full bg-teal-500/30 -z-10 last:hidden"></div>
                                    </div>
                                    <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: AI Safety - Wrapped in Card */}
                    <div className="p-6 md:p-10 bg-[#151e32] rounded-2xl border border-blue-900/20 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-green-500 w-8 h-8" />
                            <h3 className="text-xl md:text-2xl font-bold text-green-500 uppercase leading-snug">
                                AI Safety - PPE <br />
                                <span className="text-white/80 text-lg md:text-xl font-medium normal-case">Workplace Monitoring</span>
                            </h3>
                        </div>

                        {/* Image Placeholder */}
                        <div className="relative w-full aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-500">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                                {/* Placeholder for CCTV/PPE Image */}
                                <div className="text-center p-6">
                                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                                            alt="AI Safety PPE"
                                            fill
                                            className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    AI PPE Detection Preview
                                </div>
                            </div>
                        </div>

                        {/* Bullet Points */}
                        <ul className="space-y-4 mt-2">
                            {[
                                "AI-enabled PPE workplace safety monitoring",
                                "Real-time PPE non-compliance alerts",
                                "Automated notifications to Site Management and Safety Teams"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1.5 relative">
                                        <div className="w-0 h-0 border-l-[6px] border-l-green-500 border-y-[4px] border-y-transparent shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    </div>
                                    <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
