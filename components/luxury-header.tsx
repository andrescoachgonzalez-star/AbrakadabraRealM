"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"


const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ART", href: "/art" },
  { name: "JEWELRY", href: "/jewelry" },
  { 
    name: "ARTISTS", 
    href: "/#team",
    submenu: [
      { name: "MODELS", href: "/artists/models" },
      { name: "DJs", href: "/artists/dj-producers" },
    ]
  },
  { name: "CLOTHING", href: "/clothing" },
  { name: "CAR RENTAL", href: "/car-rental" },
]

export function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const [logoPhase, setLogoPhase] = useState<"logo" | "spinning-out" | "text" | "highlight" | "spinning-in">("logo")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      setIsMinimized(scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Logo animation cycle
  useEffect(() => {
    const cycle = () => {
      // Phase 1: spin out the logo
      setLogoPhase("spinning-out")
      setTimeout(() => {
        // Phase 2: show text
        setLogoPhase("text")
        setTimeout(() => {
          // Phase 3: highlight sweep
          setLogoPhase("highlight")
          setTimeout(() => {
            // Phase 4: spin back in
            setLogoPhase("spinning-in")
            setTimeout(() => {
              // Back to logo
              setLogoPhase("logo")
            }, 600)
          }, 2400)
        }, 100)
      }, 600)
    }

    const initialDelay = setTimeout(cycle, 4000)
    const interval = setInterval(cycle, 10000)
    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      {/* Main Header - Hidden when minimized */}
      <header
        className={cn(
          "fixed top-0 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ease-out",
          isMinimized
            ? "opacity-0 -translate-y-full pointer-events-none"
            : isScrolled
              ? "top-4 w-[90%] max-w-4xl opacity-100"
              : "top-6 w-[95%] max-w-5xl opacity-100"
        )}
      >
        <nav
          className={cn(
            "relative flex items-center justify-center rounded-full transition-all duration-500",
            isScrolled
              ? "bg-foreground/90 px-6 py-3 backdrop-blur-md shadow-lg"
              : "bg-foreground/80 px-8 py-4 backdrop-blur-sm"
          )}
        >
          {/* Desktop Navigation Left */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-widest text-background/80 transition-all duration-300 hover:text-background"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo Center - Animated */}
          <a
            href="/philosophy"
            className="mx-8 flex items-center justify-center relative h-8 overflow-hidden"
            style={{ minWidth: logoPhase === "text" || logoPhase === "highlight" ? "160px" : "32px", transition: "min-width 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            {/* Logo Icon */}
            <div
              className={cn(
                "transition-all duration-500 ease-in-out absolute",
                logoPhase === "logo" ? "opacity-100 rotate-0 scale-100" :
                logoPhase === "spinning-out" ? "opacity-0 rotate-[360deg] scale-50" :
                logoPhase === "spinning-in" ? "opacity-100 rotate-[360deg] scale-100" :
                "opacity-0 rotate-[180deg] scale-50"
              )}
            >
              <Image
                src="/Logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>

            {/* ABRAKADABRA Text */}
            <div
              className={cn(
                "transition-all duration-500 ease-in-out absolute whitespace-nowrap",
                (logoPhase === "text" || logoPhase === "highlight") 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-75"
              )}
            >
              <span className="relative font-serif text-sm font-bold tracking-[0.2em] text-background">
                {"ABRAKADABRA".split("").map((letter, i) => (
                  <span
                    key={i}
                    className={cn(
                      "inline-block transition-colors duration-200",
                      logoPhase === "highlight" ? "text-primary" : "text-background"
                    )}
                    style={{
                      transitionDelay: logoPhase === "highlight" ? `${i * 80}ms` : "0ms",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Right */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(3).map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {link.submenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-xs font-medium tracking-widest text-background/80 transition-all duration-300 hover:text-background"
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "h-3 w-3 transition-transform duration-300",
                        openSubmenu === link.name && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300",
                        openSubmenu === link.name 
                          ? "opacity-100 translate-y-0 pointer-events-auto" 
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="bg-foreground/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden min-w-[160px]">
                        {link.submenu.map((sublink, idx) => (
                          <a
                            key={sublink.name}
                            href={sublink.href}
                            className={cn(
                              "block px-5 py-3 text-xs font-medium tracking-widest text-background/70 transition-all duration-300 hover:text-background hover:bg-background/10",
                              idx !== link.submenu.length - 1 && "border-b border-background/10"
                            )}
                          >
                            {sublink.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-xs font-medium tracking-widest text-background/80 transition-all duration-300 hover:text-background"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-background"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-2xl bg-foreground/95 backdrop-blur-md transition-all duration-300 lg:hidden",
            isMobileMenuOpen && !isMinimized
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name)}
                      className="w-full flex items-center justify-between py-3 text-sm font-medium tracking-widest text-background/80 transition-all duration-300 hover:text-background"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        mobileSubmenuOpen === link.name && "rotate-180"
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 pl-4",
                      mobileSubmenuOpen === link.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {link.submenu.map((sublink) => (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm font-medium tracking-widest text-background/60 transition-all duration-300 hover:text-background hover:pl-2"
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-sm font-medium tracking-widest text-background/80 transition-all duration-300 hover:text-background hover:pl-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Minimized Menu Pill */}
      <div
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full bg-foreground/95 backdrop-blur-md shadow-lg transition-all duration-500",
          isMinimized ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {/* Logo - Animated */}
        <a
          href={logoPhase === "text" || logoPhase === "highlight" ? "/philosophy" : "/"}
          className="flex items-center justify-center px-4 py-3 text-background transition-all duration-300 hover:opacity-80 relative overflow-hidden"
          style={{ minWidth: logoPhase === "text" || logoPhase === "highlight" ? "140px" : "48px", transition: "min-width 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
          <div className={cn(
            "transition-all duration-500 ease-in-out absolute",
            logoPhase === "logo" ? "opacity-100 rotate-0 scale-100" :
            logoPhase === "spinning-out" ? "opacity-0 rotate-[360deg] scale-50" :
            logoPhase === "spinning-in" ? "opacity-100 rotate-[360deg] scale-100" :
            "opacity-0 rotate-[180deg] scale-50"
          )}>
            <Image
              src="/Logo.png"
              alt="Logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          </div>
          <div className={cn(
            "transition-all duration-500 ease-in-out absolute whitespace-nowrap",
            (logoPhase === "text" || logoPhase === "highlight") ? "opacity-100 scale-100" : "opacity-0 scale-75"
          )}>
            <span className="relative font-serif text-[10px] font-bold tracking-[0.15em] text-background">
              {"ABRAKADABRA".split("").map((letter, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-block transition-colors duration-200",
                    logoPhase === "highlight" ? "text-primary" : "text-background"
                  )}
                  style={{ transitionDelay: logoPhase === "highlight" ? `${i * 80}ms` : "0ms" }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>
        </a>
        
        {/* Separator */}
        <div className="h-6 w-px bg-background/20" />
        
        {/* Quick Nav */}
        <div className="hidden md:flex items-center">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-3 text-[10px] font-medium tracking-widest text-background/70 transition-all duration-300 hover:text-background"
            >
              {link.name}
            </a>
          ))}
          
          {/* Artists with submenu in minimized */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenSubmenu("ARTISTS_MIN")}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            <button className="flex items-center gap-1 px-3 py-3 text-[10px] font-medium tracking-widest text-background/70 transition-all duration-300 hover:text-background">
              ARTISTS
              <ChevronDown className={cn(
                "h-2.5 w-2.5 transition-transform duration-300",
                openSubmenu === "ARTISTS_MIN" && "rotate-180"
              )} />
            </button>
            
            <div 
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300",
                openSubmenu === "ARTISTS_MIN" 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 -translate-y-2 pointer-events-none"
              )}
            >
              <div className="bg-foreground/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden min-w-[140px]">
                <a href="/#team" className="block px-4 py-2.5 text-[10px] font-medium tracking-widest text-background/70 transition-all duration-300 hover:text-background hover:bg-background/10 border-b border-background/10">
                  MODELS
                </a>
                <a href="/#team" className="block px-4 py-2.5 text-[10px] font-medium tracking-widest text-background/70 transition-all duration-300 hover:text-background hover:bg-background/10">
                  DJs
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden px-4 py-3 text-background"
          aria-label="Toggle Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        {/* More Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hidden md:flex items-center gap-1 px-4 py-3 text-[10px] font-medium tracking-widest text-background/70 transition-all duration-300 hover:text-background"
        >
          MORE
          <Menu className="h-3 w-3" />
        </button>
      </div>
      
      {/* Minimized Mobile Menu */}
      <div
        className={cn(
          "fixed top-16 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm overflow-hidden rounded-2xl bg-foreground/95 backdrop-blur-md shadow-xl transition-all duration-300",
          isMinimized && isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-4">
          {navLinks.map((link, index) => (
            <div key={link.name}>
              {link.submenu ? (
                <div className="border-b border-background/10 last:border-0">
                  <button
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium tracking-widest text-background/80 transition-all duration-300 hover:text-background"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      mobileSubmenuOpen === link.name && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 pl-4",
                    mobileSubmenuOpen === link.name ? "max-h-40 opacity-100 pb-2" : "max-h-0 opacity-0"
                  )}>
                    {link.submenu.map((sublink) => (
                      <a
                        key={sublink.name}
                        href={sublink.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-sm font-medium tracking-widest text-background/60 transition-all duration-300 hover:text-background hover:pl-2"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-sm font-medium tracking-widest text-background/80 transition-all duration-300 hover:text-background hover:pl-2 border-b border-background/10 last:border-0"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 5L30 15L25 20L30 25L20 35L10 25L15 20L10 15L20 5Z"
        fill="currentColor"
      />
      <circle cx="20" cy="20" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}
