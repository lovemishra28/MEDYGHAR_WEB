// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MedyGhar | Complete Healthcare",
  description: "MedyGhar brings complete healthcare to your home with safety, privacy, and absolute simplicity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className="bg-white text-gray-heading min-h-screen font-sans antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
