"use client";

import { CheckCircle2, Zap, Cpu } from "lucide-react";

export default function ServiceCards() {
    const electricalServices = [
        "Electrical Panel Manufacturing (IS2825)",
        "Automatic Power Factor Control (APFC) Panels",
        "Star-Delta Starters & Motor Control Panels",
        "Industrial Electrical Control Panels",
        "Equipment & Vessel Manufacturing",
        "Electrical Maintenance Services",
    ];

    const digitalServices = [
        "IoT-based Dashboards & Data Logging",
        "Predictive Maintenance & Analytics (IoT)",
        "Energy Monitoring Systems",
        "Process & Operations Automation",
        "Advanced Fire Response & Safety Systems",
        "High-Reliability DC Power Tools for PLCs & HMIs",
    ];

    return (
        <section id="services" className="py-12 md:py-24 bg-[#0B1128] relative transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
                    <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
                    <h2 className="text-3xl md:text-5xl font-heading font-light text-white">
                        Core Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    {/* Column A: Electrical */}
                    <div className="group bg-[#151e32] rounded-3xl p-6 md:p-10 transition-all duration-300 border border-blue-900/20 hover:border-blue-400 hover:shadow-blue-900/20">
                        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-8 md:mb-10">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-heading font-medium text-white mb-2">Electrical Engineering</h3>
                                <p className="text-gray-400 text-sm md:text-base">Comprehensive manufacturing and maintenance solutions.</p>
                            </div>
                        </div>
                        <ul className="space-y-3 md:space-y-4">
                            {electricalServices.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-[#0B1128] border border-slate-800 group-hover:border-blue-400/30 transition-all">
                                    <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                    <span className="text-gray-300 font-medium text-base md:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column B: Digital */}
                    <div className="group bg-[#151e32] rounded-3xl p-6 md:p-10 transition-all duration-300 border border-blue-900/20 hover:border-blue-400 hover:shadow-blue-900/20">
                        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-8 md:mb-10">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-[#0B1128] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Cpu className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-heading font-medium text-white mb-2">Digitalization & AI</h3>
                                <p className="text-gray-400 text-sm md:text-base">Smart automation and data-driven insights.</p>
                            </div>
                        </div>
                        <ul className="space-y-3 md:space-y-4">
                            {digitalServices.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-[#0B1128] border border-slate-800 group-hover:border-blue-400/30 transition-all">
                                    <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                    <span className="text-gray-300 font-medium text-base md:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
