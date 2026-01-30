"use client";

import { CheckCircle2, Zap, Cpu, Factory } from "lucide-react";

export default function ServiceCards() {
    const electricalServices = [
        "Indian standards - BIS",
        "IoT based predictive maintenance",
        "Automatic fault detection system",
        "Advanced Fire Response and Safety System",
    ];

    const equipmentServices = [
        "Indian Standards - IS2825",
        "Design - Ergonomic & User-Friendly",
        "Quality Assured - 100% tested & verified",
        "Digital Ready - 3D design, PLC & IoT compatible",
    ];

    const digitalServices = [
        "Predictive analytics",
        "Seamless Integration - Works with PLC, SCADA & IoT platforms",
        "Intelligent Dashboards - Insights at a glance",
        "Machine learning",
    ];

    return (
        <section id="services" className="py-12 md:py-24 bg-[#0B1128] relative transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-heading font-light text-white">
                        CORE EXPERTISE
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column A: Smart Electrical Panel */}
                    <div className="group bg-[#151e32] rounded-3xl p-6 md:p-8 transition-all duration-300 border border-blue-900/20 hover:border-blue-400 hover:shadow-blue-900/20 flex flex-col">
                        <div className="flex flex-col items-center text-center gap-4 mb-8">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-heading font-medium text-white mb-2">Smart Electrical Panel</h3>
                            </div>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            {electricalServices.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 md:gap-4 p-3 rounded-xl bg-[#0B1128] border border-slate-800 group-hover:border-blue-400/30 transition-all">
                                    <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                    <span className="text-gray-300 font-medium text-sm md:text-base text-left">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column B: Equipment & Vessel Mfg */}
                    <div className="group bg-[#151e32] rounded-3xl p-6 md:p-8 transition-all duration-300 border border-blue-900/20 hover:border-blue-400 hover:shadow-blue-900/20 flex flex-col">
                        <div className="flex flex-col items-center text-center gap-4 mb-8">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-[#0B1128] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Factory className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-heading font-medium text-white mb-2">Equipment & Vessel Mfg.</h3>
                            </div>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            {equipmentServices.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 md:gap-4 p-3 rounded-xl bg-[#0B1128] border border-slate-800 group-hover:border-blue-400/30 transition-all">
                                    <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                    <span className="text-gray-300 font-medium text-sm md:text-base text-left">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column C: Digitalization & AI */}
                    <div className="group bg-[#151e32] rounded-3xl p-6 md:p-8 transition-all duration-300 border border-blue-900/20 hover:border-blue-400 hover:shadow-blue-900/20 flex flex-col">
                        <div className="flex flex-col items-center text-center gap-4 mb-8">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                <Cpu className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-heading font-medium text-white mb-2">Digitalization & AI</h3>
                            </div>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            {digitalServices.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 md:gap-4 p-3 rounded-xl bg-[#0B1128] border border-slate-800 group-hover:border-blue-400/30 transition-all">
                                    <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={18} />
                                    <span className="text-gray-300 font-medium text-sm md:text-base text-left">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
