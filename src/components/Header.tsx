"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { signIn, signOut, useSession } from "next-auth/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("header", { y: -40, opacity: 0, duration: 0.6, ease: "power2" });
      gsap.from(".nav-item", { opacity: 0, y: -12, duration: 0.4, stagger: 0.06, delay: 0.2 });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="#home" className="font-bold text-lg tracking-wide text-[color:var(--ue-accent-green)]">
          UE ⚡
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-item relative text-sm text-black hover:text-black/80">
              <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[color:var(--ue-primary)] hover:after:w-full after:transition-[width] after:duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-black/5"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-3 py-1.5 rounded-md bg-[color:var(--ue-primary)] text-white text-sm hover:opacity-90"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-3 py-1.5 rounded-md bg-[color:var(--ue-primary)] text-white text-sm hover:opacity-90"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}


