"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
        title: "ELECTRICAL",
        subtitle: "Advanced Panel Manufacturing",
        description: "State-of-the-art HT/LT Panels and Power Distribution solutions designed for reliability and safety.",
        ctaText: "Explore Electrical",
        ctaLink: "/electrical",
        points: [
            "Electrical panel manufacturing",
            "Automatic Power Factor Control panel",
            "Star-Delta starter for motor control panel",
            "Smart Industrial electrical control panel",
            "Maintenance of electrical panels"
        ]
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
        title: "Equipment & Vessel Mfg",
        subtitle: "Precision Engineering",
        description: "Custom fabrication of industrial vessels and heavy machinery components built to international standards.",
        ctaText: "See Capabilities",
        ctaLink: "/services",
        points: [
            "Equipment manufacturing services",
            "Industrial vessel fabrication",
            "Custom steel structures",
            "Heavy machinery components",
            "Maintenance of industrial equipment"
        ]
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070",
        title: "Digitalization & AI",
        subtitle: "Future-Ready Operations",
        description: "Transform your facility with cutting-edge IoT integration, AI analytics, and automated process monitoring.",
        ctaText: "Go Digital",
        ctaLink: "/digital",
        points: [
            "AI and Digital technologies",
            "IoT based dashboard & data logging",
            "Process parameter data logging",
            "Energy monitoring system",
            "Digital Process & Operations Automation"
        ]
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full bg-[var(--ue-secondary)]">
            {/* Slider Container - Responsive Height */}
            <div className="relative w-full min-h-[650px] md:h-[700px] overflow-hidden flex flex-col">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay: Darker on mobile for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/90 to-[#0f172a]/95 md:bg-gradient-to-r md:from-[#0B1128]/95 md:via-[#0B1128]/70 md:to-[#0B1128]/95"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center md:justify-between z-20 pointer-events-none">
                            <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row justify-center lg:justify-between h-full pt-32 pb-20 md:py-20 gap-8 lg:gap-12"> {/* Standardized max-w and padding */}

                                {/* Desktop Slogan (Left Side) - Tuned for LG (Laptop) vs XL (Desktop) */}
                                <div className="hidden lg:flex flex-col justify-center lg:max-w-[45%] xl:max-w-2xl text-left pointer-events-auto animate-fadeInLeft pl-0 lg:pl-0 xl:pl-8">
                                    <h1 className="text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl leading-none">
                                        UNITY <br />
                                        <span className="text-white">ENTERPRISES</span>
                                    </h1>
                                    <div className="w-20 h-1 bg-[var(--ue-primary)] mb-6 xl:mb-8"></div>
                                    <p className="text-lg lg:text-xl xl:text-3xl font-serif italic text-white/90 leading-tight drop-shadow-lg border-l-4 border-white/20 pl-6">
                                        “A BRIGHTER TOMORROW BEGIN WITH TODAY’S INNOVATION”
                                    </p>
                                </div>

                                {/* Mobile/Tablet Layout: Centered, Simplified - Visible up to LG */}
                                <div className="w-full lg:hidden flex flex-col items-center justify-center text-center space-y-6 pointer-events-auto">
                                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-wider text-[var(--ue-primary)] leading-tight drop-shadow-md">
                                        {slide.title}
                                    </h2>
                                    <p className="text-gray-100 text-lg md:text-2xl font-light leading-relaxed max-w-2xl drop-shadow-sm">
                                        {slide.subtitle}
                                    </p>
                                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-xl mx-auto hidden sm:block">
                                        {slide.description}
                                    </p>

                                    <a href={slide.ctaLink} className="mt-6 px-10 py-4 bg-[var(--ue-primary)] text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all uppercase tracking-wide text-sm md:text-base flex items-center gap-2">
                                        {slide.ctaText} <ArrowRight size={20} />
                                    </a>
                                </div>


                                {/* Desktop Layout: Right aligned, Detailed List - Flexible Width */}
                                <div className="hidden lg:flex w-full lg:max-w-[50%] xl:max-w-2xl text-white space-y-8 animate-fadeInRight pointer-events-auto flex-col justify-center items-start text-left">
                                    {/* Dynamic Points List */}
                                    <div className="relative pl-4 w-full"> {/* Reduced pl-6 to pl-4 */}
                                        {/* Vertical linking line */}
                                        <div className="absolute left-0 top-5 bottom-5 w-[2px] bg-sky-500/30 rounded-full"></div>

                                        <ul className="space-y-6 xl:space-y-8 relative">
                                            {slide.points.map((point, i) => (
                                                <li key={i} className="flex items-center gap-3 xl:gap-4 group">
                                                    {/* Connector Line - Shortened */}
                                                    <div className="absolute left-0 w-6 h-[2px] bg-sky-500/30 group-hover:bg-sky-400 transition-colors"></div>

                                                    <div className="relative flex-shrink-0 z-10 ml-6"> {/* Reduced ml-8 to ml-6 */}
                                                        {/* Dot Container - Sized Down */}
                                                        <div className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-[var(--ue-primary)] border-[2px] border-[#0B1128] shadow-[0_0_15px_rgba(0,104,255,0.4)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,104,255,0.6)] transition-all duration-300">
                                                            <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-white shadow-sm"></div>
                                                        </div>
                                                    </div>
                                                    <span className="text-lg lg:text-xl xl:text-2xl font-bold text-white tracking-wide shadow-black drop-shadow-md opacity-90 group-hover:opacity-100 transition-opacity leading-tight">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Highlight Boxes - Restored with Lists & CTA */}
            <div className="relative z-40 bg-[#151e32] pt-6 pb-12 px-4 -mt-20 md:-mt-24">

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            className={`cursor-pointer p-6 md:p-8 rounded-2xl transition-all duration-300 relative overflow-hidden group border-2 flex flex-col
                            ${currentSlide === index
                                    ? "bg-[#1e293b] border-[var(--ue-primary)] shadow-[0_0_30px_rgba(56,189,248,0.2)] -translate-y-0 md:-translate-y-4"
                                    : "bg-[#151e32] border-slate-700 hover:border-slate-500 hover:-translate-y-2 opacity-90"
                                }`}
                        >
                            {/* Card Background Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "group-hover:opacity-50"}`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 transition-colors text-center ${currentSlide === index ? "text-[var(--ue-primary)]" : "text-white"
                                    }`}>
                                    {slide.title}
                                </h3>
                                {/* Restored List */}
                                <ul className="space-y-2 text-sm font-medium leading-relaxed text-white mb-6 flex-grow">
                                    {slide.points.map((point, i) => (
                                        <li key={i} className="flex gap-2 text-left">
                                            <span className={`${currentSlide === index ? "text-yellow-400" : "text-white/50"}`}>•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA in Card */}
                                <div className={`mt-auto pt-4 border-t border-white/10 w-full text-center transition-opacity duration-300 ${currentSlide === index ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                                    <span className="text-sm font-bold text-[var(--ue-primary)] inline-flex items-center gap-1 uppercase tracking-wider">
                                        {slide.ctaText} <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
