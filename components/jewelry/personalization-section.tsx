"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { useState } from "react"

const steps = [
  {
    id: 1,
    title: "Delivery & Satisfaction Guaranteed",
    description: "Receive your custom piece at your doorstep and enjoy a one-of-a-kind jewel made just for you. We make sure you're 100% satisfied with the result.",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Handcrafted creation",
    description: "Our expert jewelers will bring your design to life using high-quality materials.",
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Exclusive 3D design",
    description: "See your jewelry in a 3D model before it's made.",
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Get your quote",
    description: "We'll send you a personalized estimate based on your design.",
    isHighlighted: false,
  },
  {
    id: 5,
    title: "Fill out the form",
    description: "Tell us your idea, style, and desired details.",
    isHighlighted: true,
  },
]

export function PersonalizationSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop"
                  alt="Jewelry design process"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating jewels decoration */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-background">
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop"
                  alt="Jewelry pieces"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal direction="right">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">
                How do we personalize your jewelry?
              </h2>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-border" />

                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div 
                      key={step.id}
                      className="relative pl-10 group"
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {/* Circle indicator */}
                      <div 
                        className={cn(
                          "absolute left-0 top-1 w-6 h-6 rounded-full border-2 transition-all duration-300",
                          step.isHighlighted 
                            ? "bg-primary border-primary" 
                            : "bg-background border-border",
                          hoveredStep === step.id && !step.isHighlighted && "border-primary/50"
                        )}
                      />

                      <div className="transition-all duration-300">
                        <h3 
                          className={cn(
                            "font-semibold text-base mb-1 transition-colors duration-300",
                            step.isHighlighted ? "text-primary" : "text-foreground",
                            hoveredStep === step.id && "text-primary"
                          )}
                        >
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <a 
                  href="#begin-your-journey" 
                  className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wider text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Personalize your jewelry now
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
