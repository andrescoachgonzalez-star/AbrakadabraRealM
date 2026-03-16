"use client"

import { ArrowRight, MessageCircle, MessageSquare, Phone } from "lucide-react"
import { CONTACT_INFO } from "@/lib/contact-info"

type ArtistContactCardProps = {
  artistName: string
  inquiryLabel: string
  services: string[]
}

export function ArtistContactCard({
  artistName,
  inquiryLabel,
  services,
}: ArtistContactCardProps) {
  const contactMessage = `Hi, I'm interested in booking ${artistName} for ${inquiryLabel}. Could you share availability and next steps?`
  const whatsappHref = `https://wa.me/${CONTACT_INFO.colombia.whatsappNumber}?text=${encodeURIComponent(contactMessage)}`
  const smsHref = `${CONTACT_INFO.colombia.smsHref}?body=${encodeURIComponent(contactMessage)}`

  return (
    <div className="bg-secondary/30 rounded-3xl p-8 md:p-10 border border-border">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px w-10 bg-primary" />
        <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
          Booking Contact
        </p>
      </div>

      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
        Contact us to book <span className="text-primary italic">{artistName}</span>
      </h3>

      <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
        Reach out for availability, rates, campaign details, and booking coordination.
        We currently handle inquiries for:
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {services.map((service) => (
          <span
            key={service}
            className="rounded-full border border-primary/20 bg-background px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-foreground/80 uppercase"
          >
            {service}
          </span>
        ))}
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-primary py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:gap-5 hover:shadow-lg hover:shadow-primary/25"
      >
        BOOK VIA WHATSAPP
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground tracking-[0.25em] uppercase">
          Or Contact Us
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={CONTACT_INFO.colombia.phoneHref}
          className="group rounded-2xl border border-border bg-background/80 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-background"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                Call Colombia
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {CONTACT_INFO.colombia.display}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Direct line for bookings
              </p>
            </div>
          </div>
        </a>

        <a
          href={smsHref}
          className="group rounded-2xl border border-border bg-background/80 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-background"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                Write by SMS
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {CONTACT_INFO.colombia.display}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Ideal for quick booking details
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MessageCircle className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Preferred contact method
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              WhatsApp is the fastest way to coordinate bookings for editorials, campaigns,
              appearances, and performance opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
