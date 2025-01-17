import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "PreBuddy",
  description: "Generated by Low-Code Legends",
};

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
