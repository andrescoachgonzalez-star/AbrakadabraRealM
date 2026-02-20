"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

const roles = [
  {
    id: "courses",
    title: "FREE COURSES",
    description: "ALL OUR COURSES AT $0 USD FOREVER",
    longDescription: "Access our entire library of professional courses in music production, design, photography, and more. Learn at your own pace with industry-leading content.",
    cta: "START NOW",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    accent: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    id: "audiovisuals",
    title: "AUDIOVISUALS",
    description: "DESIGNERS, PHOTOGRAPHERS, VIDEO EDITORS JOIN US AND CREATE THE UNEXPECTED!",
    longDescription: "Bring your creative vision to life. Work with cutting-edge tools and collaborate with a global network of visual storytellers.",
    cta: "APPLY",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    accent: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500",
  },
  {
    id: "sellers",
    title: "OFFICIAL SELLERS",
    description: "BE PART OF OUR GROUP AND RECEIVE EXCLUSIVE DISCOUNTS",
    longDescription: "Join our worldwide seller network. Get priority access to new collections, exclusive pricing, and dedicated support to grow your business.",
    cta: "APPLY",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    accent: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-500",
  },
  {
    id: "promotors",
    title: "EVENT PROMOTORS",
    description: "TAKING THE MESSAGE OF ABRACADABRA TO EVERY CORNER.",
    longDescription: "Become the face of Abrakadabra in your city. Organize events, build communities, and spread the culture of music and art worldwide.",
    cta: "APPLY",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    accent: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-500",
  },
  {
    id: "creativity",
    title: "UNLEASH CREATIVITY",
    description: "GOT VISION AND TALENT? JOIN ABRAKADABRA AND ELEVATE YOUR ART TO NEW HEIGHTS.",
    longDescription: "Whether you paint, sculpt, compose, or create digital art, we provide the platform and audience to showcase your talent to the world.",
    cta: "JOIN",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    accent: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
]

const benefits = [
  {
    title: "WORK FROM HOME",
    description: "Complete freedom to design your life and work from anywhere in the world.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "MANAGE YOUR SCHEDULE",
    description: "You control your own time. Adapt work to your personal needs and rhythm.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "WITHOUT PRIOR EDUCATION",
    description: "No degrees required. We value passion, creativity, and the willingness to learn.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "SOCIAL & CULTURAL IMPACT",
    description: "Be part of a movement that transforms the art and music industry for good.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
  },
]

export default function JoinUsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeRole, setActiveRole] = useState<string | null>(null)
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const [countersVisible, setCountersVisible] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersVisible(true)
      },
      { threshold: 0.3 }
    )
    if (counterRef.current) observer.observe(counterRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-background overflow-x-hidden">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80"
            alt="Join Abrakadabra"
            className={cn(
              "w-full h-full object-cover transition-transform duration-[2s]",
              isLoaded ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-1 h-1 rounded-full bg-primary/40 transition-all duration-[3s]",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 200}ms`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 pb-24 pt-40">
          <div className={cn(
            "transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <span className="inline-block px-4 py-1.5 border border-primary/40 rounded-full text-primary text-xs font-semibold tracking-[0.3em] mb-6">
              CAREERS
            </span>
          </div>

          <h1 className={cn(
            "font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] mb-8 transition-all duration-1000 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <span className="block">Join</span>
            <span className="block text-primary italic">Us</span>
          </h1>

          <p className={cn(
            "max-w-xl text-white/70 text-lg leading-relaxed transition-all duration-1000 delay-400",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            {"Magic doesn't just happen, it takes brilliant minds and creative souls to take it to the next level. The Abrakadabra Crew is a family of dreamers, artists and experts who create something greater than the sum of its parts."}
          </p>

          <a
            href="#roles"
            className={cn(
              "inline-flex items-center gap-3 mt-10 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold tracking-wider text-sm hover:bg-primary/90 transition-all duration-500 hover:gap-5 group",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            EXPLORE ROLES
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={counterRef} className="relative bg-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Team Members" },
              { number: "12", label: "Countries" },
              { number: "100%", label: "Remote" },
              { number: "$0", label: "Course Cost" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "text-center transition-all duration-700",
                  countersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-xs tracking-[0.2em] text-background/60 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-24 lg:py-32 scroll-mt-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Opportunities</span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mt-4 text-balance">
                Join Our Team
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                Find the perfect role that matches your passion and skills. Every position is fully remote.
              </p>
            </div>
          </ScrollReveal>

          {/* Role Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <ScrollReveal key={role.id} delay={index * 100}>
                <div
                  className="group relative h-full"
                  onMouseEnter={() => setActiveRole(role.id)}
                  onMouseLeave={() => setActiveRole(null)}
                >
                  {/* Card */}
                  <div className={cn(
                    "relative h-full bg-card rounded-2xl overflow-hidden border transition-all duration-700",
                    activeRole === role.id ? "border-primary/40 shadow-2xl shadow-primary/10 -translate-y-2" : "border-border"
                  )}>
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={role.image || "/placeholder.svg"}
                        alt={role.title}
                        className={cn(
                          "w-full h-full object-cover transition-all duration-[1.2s]",
                          activeRole === role.id ? "scale-110 brightness-75" : "scale-100"
                        )}
                      />
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
                        role.accent,
                        activeRole === role.id && "opacity-60"
                      )} />

                      {/* Floating CTA on hover */}
                      <div className={cn(
                        "absolute inset-0 flex items-center justify-center transition-all duration-500",
                        activeRole === role.id ? "opacity-100" : "opacity-0"
                      )}>
                        <a
                          href={`https://wa.me/15551234567?text=${encodeURIComponent(`Hi, I'm interested in the ${role.title} position at Abrakadabra Realm!`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold tracking-wider text-sm transition-all duration-500 hover:bg-primary/90",
                            activeRole === role.id ? "translate-y-0 scale-100" : "translate-y-4 scale-90"
                          )}
                        >
                          {role.cta}
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-foreground tracking-wide mb-2">{role.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{role.description}</p>

                      {/* Expanded description on hover */}
                      <div className={cn(
                        "overflow-hidden transition-all duration-700",
                        activeRole === role.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      )}>
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-foreground/80 leading-relaxed">{role.longDescription}</p>
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex items-center gap-2 mt-4">
                        <span className="text-xs font-semibold tracking-wider text-primary">{role.cta}</span>
                        <svg
                          className={cn(
                            "w-4 h-4 text-primary transition-transform duration-500",
                            activeRole === role.id && "translate-x-2"
                          )}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 lg:py-32 bg-foreground overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image + Quote */}
            <ScrollReveal>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
                    alt="Abrakadabra event"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="font-serif text-2xl text-white italic leading-relaxed">
                      {"\"You don't just work, you are part of a "}
                      <span className="text-primary not-italic font-bold">movement</span>
                      {" that transforms the art and music industry.\""}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/30 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            {/* Right - Benefits */}
            <div>
              <ScrollReveal>
                <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Why Join</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-background mt-4 mb-12">
                  Benefits of Working With Us
                </h2>
              </ScrollReveal>

              <div className="grid gap-6">
                {benefits.map((benefit, i) => (
                  <ScrollReveal key={benefit.title} delay={i * 100}>
                    <div
                      className={cn(
                        "group flex gap-5 p-5 rounded-xl border transition-all duration-500 cursor-default",
                        hoveredBenefit === i
                          ? "bg-background/10 border-primary/40 -translate-x-2"
                          : "bg-transparent border-background/10"
                      )}
                      onMouseEnter={() => setHoveredBenefit(i)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                    >
                      {/* Icon */}
                      <div className={cn(
                        "shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500",
                        hoveredBenefit === i ? "bg-primary text-primary-foreground scale-110" : "bg-background/10 text-background/60"
                      )}>
                        {benefit.icon}
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className={cn(
                          "font-bold tracking-wider text-sm transition-colors duration-300",
                          hoveredBenefit === i ? "text-primary" : "text-background"
                        )}>
                          {benefit.title}
                        </h3>
                        <p className={cn(
                          "text-sm leading-relaxed mt-1 transition-all duration-500",
                          hoveredBenefit === i ? "text-background/80 max-h-20 opacity-100" : "text-background/50 max-h-0 opacity-0 overflow-hidden"
                        )}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto">
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-3xl border border-primary/20" />
              <div className="absolute top-3 left-3 right-3 bottom-3 rounded-2xl border border-border" />

              <div className="relative p-12 md:p-20 text-center">
                <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-semibold tracking-[0.3em] mb-6">
                  READY TO START?
                </span>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  Your Journey Begins Here
                </h2>

                <p className="text-muted-foreground max-w-lg mx-auto mb-10">
                  {"Working with Abrakadabra Realm means total freedom to design your life. Work from the comfort of your home, without strict schedules or prior education requirements."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/15551234567?text=${encodeURIComponent("Hi, I'm interested in joining the Abrakadabra Realm team!")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold tracking-wider text-sm hover:bg-[#1da851] transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/20"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    CONTACT VIA WHATSAPP
                  </a>

                  <a
                    href="mailto:join@abrakadabrarealm.com"
                    className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground rounded-full font-semibold tracking-wider text-sm hover:bg-secondary transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    SEND US AN EMAIL
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
