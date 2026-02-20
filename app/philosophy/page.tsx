"use client"

import { useState, useEffect, useRef, useMemo, type RefObject, Suspense } from "react"
import Image from "next/image"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls as DreiOrbitControls, Environment, Stars } from "@react-three/drei"
import * as THREE from "three"
import {
  ChevronDown,
  Sparkles,
  Globe,
  Heart,
  Gem,
  HandHeart,
  ArrowRight,
  Shield,
  Truck,
  Palette,
  Eye,
  TrendingUp,
  BookOpen,
  Brain,
  Flame,
  Lightbulb,
  Users,
  Star,
  Music,
  Car,
  Shirt,
  MapPin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"
import { LuxuryHeader } from "@/components/luxury-header"

/* ─────────────────────────── useInView hook ─────────────────────────── */

function useInView(ref: RefObject<Element | null>, options: { threshold?: number; rootMargin?: string; once?: boolean } = {}): boolean {
  const { threshold = 0, rootMargin = "0px", once = true } = options
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, threshold, rootMargin, once])

  return isInView
}

/* ─────────────────────────── 3D Galaxy ─────────────────────────── */

function GalaxyParticles({
  count, size, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor,
}: {
  count: number; size: number; radius: number; branches: number; spin: number;
  randomness: number; randomnessPower: number; insideColor: string; outsideColor: string;
}) {
  const pointsRef = useRef<THREE.Points>(null)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const cIn = new THREE.Color(insideColor)
    const cOut = new THREE.Color(outsideColor)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const r = Math.random() * radius
      const sa = r * spin
      const ba = ((i % branches) / branches) * Math.PI * 2
      const rx = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r
      const ry = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r
      const rz = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r
      pos[i3] = Math.cos(ba + sa) * r + rx
      pos[i3 + 1] = ry
      pos[i3 + 2] = Math.sin(ba + sa) * r + rz
      const mc = cIn.clone().lerp(cOut, r / radius)
      col[i3] = mc.r; col[i3 + 1] = mc.g; col[i3 + 2] = mc.b
    }
    return [pos, col]
  }, [count, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor])

  useFrame((state) => { if (pointsRef.current) pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02 })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={size} sizeAttenuation depthWrite={false} vertexColors blending={THREE.AdditiveBlending} />
    </points>
  )
}

function CameraCtrl({ autoRotate }: { autoRotate: boolean }) {
  return (
    <DreiOrbitControls enablePan={false} enableZoom={false} enableRotate={false} autoRotate={autoRotate} autoRotateSpeed={0.15} enableDamping dampingFactor={0.05} />
  )
}

function GalaxyScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [4, 2.5, 4], fov: 65, near: 0.1, far: 1000 }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.05} />
          <pointLight position={[0, 0, 0]} intensity={0.8} color="#e8c8b8" />
          <Environment preset="night" />
          <Stars radius={300} depth={60} count={3000} factor={5} saturation={0} fade />
          <GalaxyParticles count={100000} size={0.007} radius={6} branches={4} spin={1.2} randomness={0.15} randomnessPower={3} insideColor="#c4584f" outsideColor="#f5e6d3" />
          <CameraCtrl autoRotate />
        </Suspense>
      </Canvas>
    </div>
  )
}

/* ─────────────────────────── Loading Screen ─────────────────────────── */

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-2 rounded-full border-2 border-secondary/30 animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} />
          <div className="absolute inset-4 rounded-full bg-primary/20 animate-glow-pulse" />
        </div>
        <p className="font-serif text-xl text-[#f5f5f5] tracking-wider">ABRAKADABRA</p>
        <p className="text-[#888] text-xs font-mono tracking-[0.3em] mt-1">LOADING REALM</p>
      </div>
    </div>
  )
}

/* ─────────────────────────── Hero Section ─────────────────────────── */

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setIsVisible(true), 500); return () => clearTimeout(t) }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#c4584f]/8 blur-[100px]" />
      </div>
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-[2000ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-foreground/20" />
          <span className="text-foreground/60 text-xs font-mono tracking-[0.4em] uppercase">Est. MMXXII</span>
          <div className="h-px w-12 bg-foreground/20" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-none mb-6">
          <span className="text-gradient-crimson">ABRAKADABRA</span>
        </h1>
        <div className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] text-foreground/70 mb-12">REALM</div>
        <div className="glass rounded-2xl px-8 py-6 max-w-2xl mx-auto mb-12">
          <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
            {"\"More than a brand, we are a philosophy of life\""}
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-foreground/15" />
            <span className="text-foreground/50 text-xs tracking-[0.3em] uppercase font-mono">Andres Henao</span>
            <div className="h-px w-8 bg-foreground/15" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Emeralds", "Art", "Courses", "Music", "Rentals", "Merch"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="glass-accent px-6 py-2.5 rounded-full text-sm text-foreground/80 hover:text-foreground transition-all duration-300 hover:border-primary/40 font-mono tracking-wider uppercase">
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-muted-foreground text-xs font-mono tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-5 h-5 text-primary animate-glow-pulse" />
      </div>
    </section>
  )
}

/* ─────────────────────────── Philosophy Section ─────────────────────────── */

const pillars = [
  { icon: Gem, title: "Luxury & Craft", description: "Every piece we create is a testament to artisan excellence. From Colombian emeralds to bespoke jewelry, we merge centuries of tradition with bold modern design." },
  { icon: Heart, title: "Spirituality & Art", description: "Art is the bridge between the visible and the invisible. Through abstract expression, we capture the essence of the soul and transform it into something tangible." },
  { icon: Sparkles, title: "Music & Energy", description: "Music makes us better than we truly are. Our artists, DJs, and producers channel cosmic energy into soundscapes that elevate consciousness." },
  { icon: Globe, title: "Global Vision", description: "Rooted in Colombia, alive in Miami, reaching Spain and beyond. Abrakadabra Realm is a borderless movement uniting cultures through beauty and purpose." },
]

function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary text-xs font-mono tracking-[0.4em] uppercase block mb-4">Our Philosophy</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Where <span className="text-gradient-crimson">Purpose</span> Meets <span className="text-gradient-light">Passion</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in the transformative power of beauty, art, and sound. Every creation is an invitation to connect with something greater than yourself.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className={`glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className={`glass-accent rounded-2xl p-10 text-center transition-all duration-1000 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <HandHeart className="w-7 h-7 text-primary" />
            </div>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">We Give Back. Always.</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-2">
            Abrakadabra Realm is not driven by profit. Our mission is to share knowledge, inspire growth, and empower people to become the best version of themselves. That is why we offer <span className="text-foreground font-semibold">free self-improvement courses</span> to anyone who wants to move forward in life -- no strings attached, no hidden fees, just genuine purpose.
          </p>
          <p className="text-foreground/60 text-sm font-mono tracking-wider mt-4 uppercase">Knowledge should never have a price tag</p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Emeralds Section ─────────────────────────── */

const emeraldFeatures = [
  { icon: Sparkles, label: "100% Natural Colombian Emeralds" },
  { icon: Shield, label: "Handcrafted by Expert Artisans" },
  { icon: Truck, label: "Free Worldwide Shipping" },
]
const collections = ["Cross of Eternity", "OM Green", "Heartbeat of Light", "Hamsa Green"]

function EmeraldsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} id="emeralds" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image src="/images/emerald-jewelry.jpg" alt="Luxury Colombian emerald pendant in 18K gold" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass rounded-xl p-4">
                  <p className="text-foreground font-serif text-lg">Emerald Whispers Collection</p>
                  <p className="text-muted-foreground text-sm">{"A tribute to nature's rarest treasures"}</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-glow-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-secondary/10 blur-2xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <span className="text-primary text-xs font-mono tracking-[0.4em] uppercase block mb-4">Colombian Emeralds</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Timeless Luxury, <span className="text-gradient-crimson">Eternal Beauty</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Experience the elegance of Colombian emeralds - rare, natural masterpieces renowned for their vivid green hue and unmatched quality. Each piece is expertly crafted to embody timeless beauty, blending mysticism, art, and power.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {emeraldFeatures.map((f) => { const I = f.icon; return (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><I className="w-4 h-4 text-primary" /></div>
                  <span className="text-foreground/80 text-sm">{f.label}</span>
                </div>
              )})}
            </div>
            <div className="mb-10">
              <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3">Signature Collections</p>
              <div className="flex flex-wrap gap-2">
                {collections.map((n) => <span key={n} className="glass px-4 py-2 rounded-full text-sm text-foreground/70">{n}</span>)}
              </div>
            </div>
            <a href="/jewelry/shop" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300 group">
              Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Art Section ─────────────────────────── */

const artworks = ["The Lion", "Breath of Life", "The Four Elements", "Water of Life", "Xchel", "Feeling"]
const artValues = [
  { icon: Palette, title: "Spiritual Expression", desc: "Each piece captures life experiences and knowledge that invite deep reflection." },
  { icon: Eye, title: "Emotional Connection", desc: "Art that creates a bridge between the viewer and their own inner essence." },
  { icon: TrendingUp, title: "Art as Investment", desc: "Unique works that can increase in value over time, a tangible financial legacy." },
]

function ArtSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} id="art" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-foreground/50 text-xs font-mono tracking-[0.4em] uppercase block mb-4">Abstract Art</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            The Vibrant Expression of <span className="text-gradient-crimson">Adriana Henao</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            An artist whose abstract work goes beyond the visual, connecting deeply with emotions and spirituality. Her art is a search for transcendence.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="flex flex-col gap-6 mb-10">
              {artValues.map((v, i) => { const I = v.icon; return (
                <div key={v.title} className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"><I className="w-5 h-5 text-primary" /></div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-1">{v.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              )})}
            </div>
            <div className="mb-8">
              <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3">Featured Works</p>
              <div className="grid grid-cols-2 gap-2">
                {artworks.map((n) => <span key={n} className="glass px-4 py-2 rounded-lg text-sm text-foreground/70 text-center">{n}</span>)}
              </div>
            </div>
            <a href="/art" className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-foreground/5 transition-colors duration-300 group">
              View Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image src="/images/abstract-art.jpg" alt="Abstract spiritual artwork by Adriana Henao" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass rounded-xl p-4">
                  <p className="text-foreground font-serif text-lg">Physical & Digital Art</p>
                  <p className="text-muted-foreground text-sm">{"Art within everyone's reach"}</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Courses Section ─────────────────────────── */

const courses = [
  { icon: Brain, title: "Mindset Mastery", description: "Reprogram your thinking patterns. Learn to overcome mental blocks, build resilience, and develop the unshakable confidence needed to pursue your dreams.", tag: "FREE" },
  { icon: Heart, title: "Emotional Intelligence", description: "Understand and manage your emotions. Develop deeper relationships, better communication, and the self-awareness that separates the extraordinary from the ordinary.", tag: "FREE" },
  { icon: Flame, title: "Purpose & Passion", description: "Discover your life's true calling. This course guides you through exercises that reveal your core values, passions, and the unique contribution only you can make.", tag: "FREE" },
  { icon: Lightbulb, title: "Creative Awakening", description: "Unlock the creative potential within you. Whether through art, music, writing or business -- learn to channel your inner creator and bring ideas to life.", tag: "FREE" },
  { icon: Users, title: "Leadership & Influence", description: "Lead from the heart, not from the ego. Gain tools to inspire others, build teams, and create a positive impact in your community and beyond.", tag: "FREE" },
  { icon: Star, title: "Spiritual Growth", description: "Explore practices of meditation, mindfulness, and self-reflection. Connect with your inner self and find the peace that fuels lasting transformation.", tag: "FREE" },
]

function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.05 })

  return (
    <section ref={sectionRef} id="courses" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span className="text-primary text-xs font-mono tracking-[0.4em] uppercase block mb-4">Free Courses</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Grow Without <span className="text-gradient-crimson">Limits</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Abrakadabra Realm, we believe that personal transformation should be accessible to everyone. Our self-improvement courses are <span className="text-foreground font-semibold">completely free</span> -- no subscriptions, no upsells, no hidden agendas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are not here to sell you motivation. We are here to walk alongside you on a journey of genuine growth. This philosophy exists because we believe the world changes when people have the tools to change themselves.
            </p>
            <div className="flex gap-8 mb-8">
              <div><div className="font-serif text-3xl font-bold text-foreground">100%</div><div className="text-muted-foreground text-sm font-mono">Free Forever</div></div>
              <div className="w-px bg-border" />
              <div><div className="font-serif text-3xl font-bold text-foreground">6+</div><div className="text-muted-foreground text-sm font-mono">Courses</div></div>
              <div className="w-px bg-border" />
              <div><div className="font-serif text-3xl font-bold text-foreground">0</div><div className="text-muted-foreground text-sm font-mono">Hidden Costs</div></div>
            </div>
            <a href="#cta" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300 group">
              Start Learning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image src="/images/courses.jpg" alt="People learning together in an inspiring self-improvement workshop" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass rounded-xl p-4">
                  <p className="text-foreground font-serif text-lg">Self-Improvement Academy</p>
                  <p className="text-muted-foreground text-sm">Free knowledge for those who seek growth</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-glow-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => { const Icon = course.icon; return (
            <div key={course.title} className={`glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-700 relative ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="absolute top-4 right-4 bg-primary/15 text-primary text-xs font-mono tracking-widest px-3 py-1 rounded-full border border-primary/20">{course.tag}</div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300"><Icon className="w-6 h-6 text-primary" /></div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{course.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{course.description}</p>
              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-mono tracking-wider group-hover:gap-3 transition-all duration-300">
                <BookOpen className="w-4 h-4" /><span>Enroll Free</span>
              </div>
            </div>
          )})}
        </div>
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic font-serif">
            {"\"We don't profit from your growth -- we celebrate it. Every course is our gift to you, because a better you means a better world.\""}
          </p>
          <p className="text-foreground/50 text-sm font-mono tracking-wider mt-4">-- Andres Henao, Founder</p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Showcase Section ─────────────────────────── */

const showcaseItems = [
  { id: "music", icon: Music, label: "DJ / Producers", title: "Sound that Elevates the Soul", description: "Music makes us better than we truly are. Our artists and producers create unique sounds that give you a creative edge and elevate your experience to the next level.", image: "/images/dj-music.jpg", imageAlt: "DJ performing at an exclusive nightclub with emerald green and gold lights", link: "/artists/dj-producers", linkText: "Listen Now", accentColor: "primary", features: ["Sample Packs", "Music Packs", "Live Events", "Exclusive Beats"] },
  { id: "rentals", label: "Miami Car Rental", icon: Car, title: "Exclusivity on Every Road", description: "The most exclusive vehicles in Miami Beach, just one click away. Experience luxury at the launch price and turn every drive into an unforgettable journey.", image: "/images/luxury-car.jpg", imageAlt: "Luxury exotic supercar in Miami Beach at golden hour", link: "/car-rental", linkText: "Rent Now", accentColor: "white", features: ["Exotic Fleet", "Miami Beach", "Concierge Service", "From $999/day"] },
  { id: "merch", label: "Merchandising", icon: Shirt, title: "Exclusive Garments, Worn Once", description: "Each garment is more than just clothing: it's an exclusive piece made with premium materials. You'll be wearing a work of art, designed to last and stand out on any occasion.", image: "/images/merchandising.jpg", imageAlt: "Exclusive oversized streetwear t-shirt with mystical artwork", link: "/clothing", linkText: "Shop Now", accentColor: "primary", features: ["Limited Editions", "Oversize T-Shirts", "Premium Materials", "Wearable Art"] },
]

function ShowcaseItem({ item, reversed }: { item: typeof showcaseItems[0]; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const Icon = item.icon
  const isPrimary = item.accentColor === "primary"

  return (
    <div ref={ref} id={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className={`relative ${reversed ? "lg:order-2" : ""} transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="relative rounded-3xl overflow-hidden aspect-video">
          <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
        <div className={`absolute -bottom-4 ${reversed ? "-left-4" : "-right-4"} w-28 h-28 rounded-full bg-primary/10 blur-2xl animate-glow-pulse`} />
      </div>
      <div className={`${reversed ? "lg:order-1" : ""} transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-primary">{item.label}</span>
        </div>
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{item.title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">{item.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {item.features.map((f) => <span key={f} className="glass px-4 py-2 rounded-full text-xs font-mono text-foreground/60 tracking-wider">{f}</span>)}
        </div>
        <a href={item.link} className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase transition-colors duration-300 group ${isPrimary ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-foreground/20 text-foreground hover:bg-foreground/5"}`}>
          {item.linkText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

function ShowcaseSection() {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {showcaseItems.map((item, i) => <ShowcaseItem key={item.id} item={item} reversed={i % 2 !== 0} />)}
      </div>
    </section>
  )
}

/* ─────────────────────────── Team Section ─────────────────────────── */

const team = [
  { name: "Andres Henao", role: "Founder & Visionary", country: "Colombia", flag: "CO", instagram: "@abrakadabrarealm" },
  { name: "Sandra Henao", role: "USA Operations", country: "USA", flag: "US", instagram: "@abrakadabrarealm" },
  { name: "Adriana Henao", role: "Artist & Creator", country: "Spain", flag: "ES", instagram: "@abrakadabrarealm" },
]

function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-foreground/50 text-xs font-mono tracking-[0.4em] uppercase block mb-4">Our Team</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            The Minds Behind the <span className="text-gradient-crimson">Vision</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">A global team united by passion, creativity, and the pursuit of extraordinary beauty.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={member.name} className={`glass rounded-2xl p-8 text-center group hover:border-primary/20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center overflow-hidden group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-300">
                <span className="text-2xl font-serif text-primary font-bold">{member.name.charAt(0)}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 text-primary" /><span className="font-mono tracking-wider">{member.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── CTA Section ─────────────────────────── */

function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [email, setEmail] = useState("")

  return (
    <section ref={sectionRef} id="cta" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`glass-accent rounded-3xl p-12 md:p-16 text-center relative overflow-hidden transition-all duration-1000 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" /></div>
          <div className="relative z-10">
            <span className="text-primary text-xs font-mono tracking-[0.4em] uppercase block mb-6">Join the Realm</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Start Your Journey <span className="text-gradient-crimson">Today</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-4 leading-relaxed">
              Get access to our free self-improvement courses, new collections, exclusive events, and be part of a community that believes in growing together -- without ever asking for a cent.
            </p>
            <p className="text-foreground/50 text-sm font-mono mb-10">No spam. No sales. Just value.</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-12">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full sm:flex-1 px-6 py-4 rounded-full bg-[#1a1a1a] border border-[#333] text-[#f5f5f5] placeholder:text-[#666] focus:outline-none focus:ring-2 focus:ring-[#c4584f]/50 text-sm font-mono" />
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300 group">
                Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="https://instagram.com/abrakadabrarealm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors"><Instagram className="w-4 h-4" /><span className="font-mono">@abrakadabrarealm</span></a>
              <a href="mailto:abrakadabrarealm@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors"><Mail className="w-4 h-4" /><span className="font-mono">abrakadabrarealm@gmail.com</span></a>
              <a href="https://wa.me/19175475787" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="w-4 h-4" /><span className="font-mono">WhatsApp</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Footer ─────────────────────────── */

const navLinks = [
  { label: "Our Brand", href: "/clothing" },
  { label: "Art", href: "/art" },
  { label: "Emeralds", href: "/jewelry/shop" },
  { label: "Courses", href: "#courses" },
  { label: "Music", href: "/our-music" },
  { label: "Rentals", href: "/car-rental" },
  { label: "Merch", href: "/clothing" },
]

function SiteFooter() {
  return (
    <footer className="relative border-t border-[#222] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gradient-crimson">ABRAKADABRA</h3>
            <p className="text-muted-foreground text-xs font-mono tracking-widest mt-1">REALM</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wider uppercase">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="h-px bg-[#222] mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>{"\"More than a brand, we are a philosophy of life\""}</p>
          <div className="flex items-center gap-4">
            <span>Colombia</span><span className="w-1 h-1 rounded-full bg-primary" /><span>Miami</span><span className="w-1 h-1 rounded-full bg-primary" /><span>Spain</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────── Divider ─────────────────────────── */

function Divider({ accent }: { accent?: boolean }) {
  return (
    <div className="relative h-px mx-auto max-w-2xl">
      <div className={`absolute inset-0 ${accent ? "bg-[#c4584f]/25" : "bg-[#f5f5f5]/10"}`} />
      <div className={`absolute inset-0 ${accent ? "bg-[#c4584f]/40" : "bg-[#f5f5f5]/15"} blur-sm`} />
    </div>
  )
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */

export default function AbrakadabraRealm() {
  return (
    <main className="dark relative min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <LuxuryHeader />
      <Suspense fallback={<LoadingScreen />}>
        <GalaxyScene />
      </Suspense>
      <div className="relative z-10">
        <HeroSection />
        <Divider accent />
        <PhilosophySection />
        <Divider />
        <EmeraldsSection />
        <Divider accent />
        <ArtSection />
        <Divider />
        <CoursesSection />
        <Divider accent />
        <ShowcaseSection />
        <Divider />
        <TeamSection />
        <CTASection />
        <SiteFooter />
      </div>
    </main>
  )
}
