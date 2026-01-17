import Image from "next/image";
import { Target, Lightbulb } from "lucide-react";

export default function WhoWeAre() {
    return (
        <section className="relative py-12 pt-24 md:py-24 md:pt-44 bg-[#0B1128] overflow-hidden transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="order-2 lg:order-1 animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 border border-blue-900/30 rounded-full bg-blue-900/10 mb-6">
                        <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                            About Company
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-6 md:mb-8 leading-tight">
                        Engineering Excellence <br />
                        <span className="font-bold">Since 2021</span>
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6 md:mb-8 font-light">
                        Founded in 2021 under the leadership of <strong className="text-white">Siddhesh Maruti Salunke</strong>,
                        the company has evolved into <strong className="text-blue-400">Unity Enterprises</strong>.
                        We are a distinguished entity specializing in electrical engineering and advanced digital automation solutions.
                    </p>

                    <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8 md:mb-12 font-light">
                        With an operational footprint across <span className="font-medium text-white">Mumbai Suburban MMR</span> and <span className="font-medium text-white">MIDC Lote Parshuram</span>, we deliver world-class solutions that drive industrial growth.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Vision Card */}
                        <div className="p-6 md:p-8 bg-[#151e32] rounded-2xl border border-blue-900/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-900/30 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                To lead the future by helping industries grow rapidly through advanced digitalization.
                            </p>
                        </div>

                        {/* Aim Card */}
                        <div className="p-6 md:p-8 bg-[#151e32] rounded-2xl border border-blue-900/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-indigo-900/30 text-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Lightbulb size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Our Aim</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Empower businesses through intelligent, technology-driven services.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative order-1 lg:order-2 h-full min-h-[300px] md:min-h-[500px]">
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl h-full border border-gray-800">
                        <Image
                            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070"
                            alt="Industrial Engineering"
                            fill
                            className="object-cover transform hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-[#0B1128]/10 mix-blend-multiply dark:bg-[#0B1128]/50"></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-100 dark:bg-slate-800/20 rounded-full -z-10 blur-3xl opacity-50"></div>
                    <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full -z-10 blur-3xl opacity-50"></div>
                </div>
            </div>
        </section>
    );
}