import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/Navbar';
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Metadata robusta para buscadores e IA
export const metadata: Metadata = {
  title: "Mauricio Rivas (mikmawi) | AI Engineer & System Architect",
  description:
    "Especialista en Ingeniería de IA, automatización inteligente, arquitecturas distribuidas de alto rendimiento y Computer Vision.",
  keywords: ["AI Engineer", "System Architect", "Computer Vision", "Python Developer", "Next.js", "Mikmawi"],
  authors: [{ name: "Mauricio Rivas", url: "https://mikmawi.dev" }],
  openGraph: {
    title: "Mauricio Rivas | AI Engineer & System Architect",
    description: "Engineering scalable AI systems and high-performance architectures.",
    url: "https://mikmawi.dev",
    siteName: "Mikmawi",
    locale: "es_EC", // Cambia a es_EC si tu mercado principal es Ecuador
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. Definimos el Schema JSON-LD para Gemini
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mauricio Rivas",
    "alternateName": "mikmawi",
    "url": "https://mikmawi.dev",
    "image": "https://mikmawi.dev/retrato1color.jpeg", // Recomendado: añade una foto real
    "jobTitle": "AI Engineer & System Architect",
    "knowsAbout": [
      "Artificial Intelligence",
      "Computer Vision",
      "Cloud Computing",
      "Distributed Systems",
      "Python",
      "Next.js"
    ],
    "sameAs": [
      "https://github.com/tu-usuario",
      "https://linkedin.com/in/tu-perfil"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* 3. Inyección del Schema para que la IA lo lea primero */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}