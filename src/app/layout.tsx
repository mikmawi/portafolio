import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauricio Rivas | AI Engineer & System Architect",
  description:
    "Engineering scalable AI systems, intelligent automation, IoT infrastructures, and high-performance distributed architectures.",
  openGraph: {
    title: "Mauricio Rivas | AI Engineer & System Architect",
    description:
      "Engineering scalable AI systems and high-performance architectures.",
    url: "https://mikmawi.dev",
    siteName: "Mauricio Rivas",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
