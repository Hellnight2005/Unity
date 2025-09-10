"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { signIn, signOut, useSession } from "next-auth/react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power2",
      });
      gsap.from(".nav-item", {
        opacity: 0,
        y: -12,
        duration: 0.4,
        stagger: 0.06,
        delay: 0.2,
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/5 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-wide text-[color:var(--ue-accent-green)]"
        >
          UE ⚡
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item relative text-sm ${
                pathname === item.href
                  ? "text-[color:var(--ue-primary)] font-semibold"
                  : "text-black dark:text-white hover:opacity-80"
              }`}
            >
              <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[color:var(--ue-primary)] hover:after:w-full after:transition-[width] after:duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="hidden md:block">
            {session ? (
              <div className="flex items-center gap-2">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user?.name ?? "User"}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover border border-black/10 dark:border-white/10"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-black/10 dark:bg-white/20" />
                )}
                <button
                  aria-label="Logout"
                  onClick={() => signOut()}
                  className="px-3 py-1.5 rounded-md bg-[color:var(--ue-primary)] text-white text-sm hover:opacity-90"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                aria-label="Login with Google"
                onClick={() => signIn("google", { prompt: "select_account" })}
                className="px-3 py-1.5 rounded-md bg-[color:var(--ue-primary)] text-white text-sm hover:opacity-90"
              >
                Login
              </button>
            )}
          </div>
          <button
            aria-label="Open menu"
            className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-background">
          <nav className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-black dark:text-white"
              >
                {item.label}
              </Link>
            ))}
            {session ? (
              <div className="flex items-center gap-3 mt-1">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user?.name ?? "User"}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover border border-black/10 dark:border-white/10"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-black/10 dark:bg-white/20" />
                )}
                <button
                  onClick={() => { setMobileOpen(false); signOut(); }}
                  className="px-3 py-2 rounded-md bg-[color:var(--ue-primary)] text-white text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setMobileOpen(false); signIn("google", { prompt: "select_account" }); }}
                className="mt-1 px-3 py-2 rounded-md bg-[color:var(--ue-primary)] text-white text-sm"
              >
                Login
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
