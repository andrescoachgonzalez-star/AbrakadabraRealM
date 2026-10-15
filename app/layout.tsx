import React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import "./globals.css"

export const metadata: Metadata = {
  title: "Abrakadabra RealM",
  description:
    "More than a brand, we are a philosophy of life. Discover art, emeralds, exclusive clothing, and luxury car rentals.",
  icons: {
    icon: [{ url: "/Logo.png", type: "image/png" }],
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  )
}
