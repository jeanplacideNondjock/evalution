// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext"; // ← IMPORT AJOUTÉ
import Navbar from "./navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VisionConfort",
  description: "Matériel de maison et bureau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* ENVELOPPE TOUT AVEC CartProvider */}
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          {/* Ton footer ici si tu en as un */}
        </CartProvider>
      </body>
    </html>
  );
}