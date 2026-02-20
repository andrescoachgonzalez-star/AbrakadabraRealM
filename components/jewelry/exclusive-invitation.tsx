"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ArrowRight, Sparkles, Mail, Phone, MessageCircle } from "lucide-react"

export function ExclusiveInvitation() {
  const [isHovered, setIsHovered] = useState(false)
  const [messageText, setMessageText] = useState("")

  const whatsappNumber = "15551234567"
  const whatsappLink = `https://wa.me/${whatsappNumber}${messageText ? `?text=${encodeURIComponent(messageText)}` : ""}`

  return (
    <section id="begin-your-journey" className="py-32 bg-background relative overflow-hidden scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Floating Diamonds */}
        <div className="absolute top-20 left-[15%] w-4 h-4 rotate-45 border border-primary/20 animate-float" />
        <div className="absolute top-40 right-[20%] w-3 h-3 rotate-45 border border-primary/30 animate-float animation-delay-300" />
        <div className="absolute bottom-32 left-[25%] w-5 h-5 rotate-45 border border-primary/15 animate-float animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Section */}
        <ScrollReveal>
          <div
            className={cn(
              "relative max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl border transition-all duration-700",
              "bg-gradient-to-b from-card to-card/50",
              isHovered ? "border-primary/40 shadow-2xl shadow-primary/10" : "border-border"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-6 left-6 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-px bg-primary/50" />
              <div className="absolute top-0 left-0 w-px h-full bg-primary/50" />
            </div>
            <div className="absolute top-6 right-6 w-8 h-8">
              <div className="absolute top-0 right-0 w-full h-px bg-primary/50" />
              <div className="absolute top-0 right-0 w-px h-full bg-primary/50" />
            </div>
            <div className="absolute bottom-6 left-6 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-full h-px bg-primary/50" />
              <div className="absolute bottom-0 left-0 w-px h-full bg-primary/50" />
            </div>
            <div className="absolute bottom-6 right-6 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-px bg-primary/50" />
              <div className="absolute bottom-0 right-0 w-px h-full bg-primary/50" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Private Consultation
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Begin Your Journey
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              Experience the art of personalized luxury. Send us a message via WhatsApp to schedule a private consultation with our jewelry experts.
            </p>

            {/* WhatsApp Message Input */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-12">
              <div className="relative flex-1">
                <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Tell us about your dream piece..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25 hover:gap-3 hover:brightness-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                REQUEST
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
              <span className="text-xs tracking-wider text-muted-foreground">OR CONTACT US DIRECTLY</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-[#25D366] transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full border border-border group-hover:border-[#25D366]/50 group-hover:bg-[#25D366]/10 flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </a>

              <a href="tel:+15551234567" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group">
                <div className="w-11 h-11 rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/5 flex items-center justify-center transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </a>

              <a href="mailto:luxury@abrakadabrarealm.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group">
                <div className="w-11 h-11 rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/5 flex items-center justify-center transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">luxury@abrakadabrarealm.com</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Tagline */}
        <ScrollReveal delay={200}>
          <div className="mt-20 text-center">
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Crafted with passion since 1987
            </p>
            <p className="font-serif text-2xl md:text-3xl text-foreground/80 italic">
              &ldquo;Where dreams become heirlooms&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
