import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/Modal-Provider";
import ToasterProvider from "@/components/Toaster-Provider";
import CrispProvider from "@/components/Crisp-Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AiStar",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
