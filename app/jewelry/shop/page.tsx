"use client"

import { useState, useEffect, useMemo } from "react"
import { cn } from "@/lib/utils"
import { SlidersHorizontal, X, ChevronDown, ChevronUp, Search } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { LuxuryFooter } from "@/components/luxury-footer"

// ✅ IMPORTA la fuente única de productos (la que ya tienes en jewelry/data)
import { allProducts } from "../data/jewelry-products"

const materialFilters = [
  { id: "gold", label: "Gold", color: "bg-amber-500" },
  { id: "diamonds", label: "Diamonds", color: "bg-slate-300" },
  { id: "emeralds", label: "Emeralds", color: "bg-emerald-500" },
  { id: "rubies", label: "Rubies", color: "bg-red-500" },
]

const typeFilters = [
  { id: "rings", label: "Rings", disabled: false },
  { id: "necklaces", label: "Necklaces", disabled: false },
  { id: "bracelets", label: "Bracelets", disabled: false },
  { id: "earrings", label: "Earrings", disabled: false },
  { id: "chains", label: "Chains", disabled: true },
  { id: "watches", label: "Watches", disabled: true },
]

export default function ShopPage() {
  const searchParams = useSearchParams()
  const initialMaterial = searchParams.get("material")
  const initialType = searchParams.get("type")

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter sections open state
  const [openSections, setOpenSections] = useState({
    material: true,
    type: true,
    price: true,
  })

  // Apply URL params on mount
  useEffect(() => {
    if (initialMaterial) {
      setSelectedMaterials([initialMaterial])
    }
    if (initialType && typeFilters.some((type) => type.id === initialType && !type.disabled)) {
      setSelectedTypes([initialType])
    }
  }, [initialMaterial, initialType])

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const toggleMaterial = (id: string) => {
    setSelectedMaterials((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]))
  }

  const toggleType = (id: string) => {
    if (typeFilters.find((type) => type.id === id)?.disabled) {
      return
    }

    setSelectedTypes((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]))
  }

  const clearAllFilters = () => {
    setSelectedMaterials([])
    setSelectedTypes([])
    setSearchQuery("")
  }

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts]

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          (p.collection?.toLowerCase?.() ?? "").includes(query)
      )
    }

    if (selectedMaterials.length > 0) {
      filtered = filtered.filter((p) => selectedMaterials.includes(p.material))
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter((p) => selectedTypes.includes(p.type))
    }

    return filtered
  }, [selectedMaterials, selectedTypes, searchQuery])

  const activeFiltersCount = selectedMaterials.length + selectedTypes.length

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Simple Header - Not sticky */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            {/* Title Row */}
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="/jewelry"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors mb-2 inline-flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Collection
                </a>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Shop Collection
                </h1>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-secondary rounded-full text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Mobile Filter Button + Results Count */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
              </p>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {selectedMaterials.map((m) => {
                  const material = materialFilters.find((f) => f.id === m)
                  return (
                    <button
                      key={m}
                      onClick={() => toggleMaterial(m)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {material?.label}
                      <X className="w-3 h-3" />
                    </button>
                  )
                })}
                {selectedTypes.map((t) => {
                  const type = typeFilters.find((f) => f.id === t)
                  return (
                    <button
                      key={t}
                      onClick={() => toggleType(t)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {type?.label}
                      <X className="w-3 h-3" />
                    </button>
                  )
                })}
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              {/* Material Filter */}
              <div className="border-b border-border pb-6">
                <button
                  onClick={() => toggleSection("material")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="font-semibold text-foreground">Material</h3>
                  {openSections.material ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openSections.material && (
                  <div className="mt-4 space-y-3">
                    {materialFilters.map((material) => (
                      <label
                        key={material.id}
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => toggleMaterial(material.id)}
                      >
                        <div
                          className={cn(
                            "w-5 h-5 rounded border-2 transition-all flex items-center justify-center",
                            selectedMaterials.includes(material.id)
                              ? "border-primary bg-primary"
                              : "border-border group-hover:border-primary/50"
                          )}
                        >
                          {selectedMaterials.includes(material.id) && (
                            <svg
                              className="w-3 h-3 text-primary-foreground"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <div className={cn("w-3 h-3 rounded-full", material.color)} />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {material.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Filter */}
              <div className="border-b border-border pb-6">
                <button
                  onClick={() => toggleSection("type")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="font-semibold text-foreground">Type</h3>
                  {openSections.type ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openSections.type && (
                  <div className="mt-4 space-y-3">
                    {typeFilters.map((type) => (
                      <label
                        key={type.id}
                        className={cn(
                          "flex items-center gap-3",
                          type.disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer group"
                        )}
                        onClick={() => !type.disabled && toggleType(type.id)}
                      >
                        <div
                          className={cn(
                            "w-5 h-5 rounded border-2 transition-all flex items-center justify-center",
                            selectedTypes.includes(type.id)
                              ? "border-primary bg-primary"
                              : type.disabled
                                ? "border-border"
                                : "border-border group-hover:border-primary/50"
                          )}
                        >
                          {selectedTypes.includes(type.id) && (
                            <svg
                              className="w-3 h-3 text-primary-foreground"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-sm text-muted-foreground transition-colors",
                            type.disabled ? "" : "group-hover:text-foreground"
                          )}
                        >
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="pb-6">
                <button
                  onClick={() => toggleSection("price")}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="font-semibold text-foreground">Price Range</h3>
                  {openSections.price ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openSections.price && (
                  <div className="mt-4">
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">On Demand</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={100}
                      disabled
                      aria-disabled="true"
                      className="h-2 w-full cursor-not-allowed appearance-none rounded-full bg-secondary accent-primary opacity-50"
                    />
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Lower</span>
                      <span>Higher</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Products Grid - Always 3 columns */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <a
                  key={product.id}
                  href={`/jewelry/shop/${product.id}`}
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 block"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative bg-gradient-to-br from-secondary via-muted to-secondary overflow-hidden aspect-square">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* New Badge */}
                    {product.isNew && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold tracking-wider rounded-full">
                        NEW
                      </div>
                    )}

                    {/* View Details Overlay */}
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="px-6 py-2.5 bg-background text-foreground rounded-full font-medium text-sm tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs font-medium tracking-wider text-primary uppercase mb-1">
                      {product.collection}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-foreground line-clamp-1">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <span className="font-serif text-xl font-bold text-foreground">
                        On Demand
                      </span>
                      <div
                        className={cn(
                          "w-3 h-3 rounded-full",
                          materialFilters.find((m) => m.id === product.material)?.color
                        )}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">No pieces match your filters</p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-all duration-300",
          isFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setIsFilterOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl max-h-[80vh] overflow-y-auto transition-transform duration-300",
            isFilterOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          {/* Handle */}
          <div className="sticky top-0 bg-background pt-4 pb-2 px-6 border-b border-border">
            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-4" />
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Material Filter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Material</h3>
              <div className="flex flex-wrap gap-2">
                {materialFilters.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => toggleMaterial(material.id)}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all",
                      selectedMaterials.includes(material.id)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    )}
                  >
                    <div className={cn("w-2.5 h-2.5 rounded-full", material.color)} />
                    {material.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Type</h3>
              <div className="flex flex-wrap gap-2">
                {typeFilters.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => !type.disabled && toggleType(type.id)}
                    disabled={type.disabled}
                    className={cn(
                      "px-4 py-2 rounded-full border transition-all",
                      type.disabled
                        ? "cursor-not-allowed border-border text-muted-foreground/40"
                        : selectedTypes.includes(type.id)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    )}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
              <div>
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">On Demand</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={100}
                  disabled
                  aria-disabled="true"
                  className="h-2 w-full cursor-not-allowed appearance-none rounded-full bg-secondary accent-primary opacity-50"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Lower</span>
                  <span>Higher</span>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="sticky bottom-0 bg-background p-6 border-t border-border">
            <div className="flex gap-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-3 border border-border rounded-full font-medium text-muted-foreground hover:bg-secondary transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <LuxuryFooter />
    </div>
  )
}
