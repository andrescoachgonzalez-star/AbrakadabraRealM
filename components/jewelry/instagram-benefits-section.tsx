"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { Truck, Shield, CreditCard } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders, no matter where you are.",
  },
  {
    icon: Shield,
    title: "15 Days Return",
    description: "Returns accepted within 15 days for damaged or defective items only.",
  },
  {
    icon: CreditCard,
    title: "100% Secure",
    description: "Your transactions are fully protected with secure encryption.",
  },
]

export function InstagramBenefitsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Instagram Banner */}
      <div className="relative h-[500px] md:h-[600px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex justify-end">
              <ScrollReveal direction="right">
                <div className="text-center max-w-md">
                  {/* Instagram Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-2xl border-4 border-white/90 flex items-center justify-center bg-transparent backdrop-blur-sm">
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="1.5"
                        className="w-14 h-14"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="18" cy="6" r="1.5" fill="white" stroke="none" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm mb-4 tracking-wide">
                    ~ Follow us in our official account ~
                  </p>

                  <a 
                    href="https://instagram.com/abrakadabrarealm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 border-2 border-white text-white font-bold tracking-[0.2em] text-sm rounded-full hover:bg-white hover:text-foreground transition-all duration-300"
                  >
                    @ABRAKADABRAREALM
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-background py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="text-center group">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <benefit.icon 
                        className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" 
                        strokeWidth={1}
                      />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-foreground mb-2 italic">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
