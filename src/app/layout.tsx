import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naga Polamarasetti | Fullstack Developer",
  description: "Portfolio of Naga Polamarasetti, a Fullstack Developer specializing in MERN stack and Next.js.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
