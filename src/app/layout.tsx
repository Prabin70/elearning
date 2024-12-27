"use client"; // Add this at the top of the file

import Navbar from "@/layout/Navbar";
import "../styles/globals.css";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const noNavbar = ["/auth/sign-in", "/auth/sign-up", "/auth/forgot-password"];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!noNavbar.includes(pathName) ? null : <Navbar />}
        {children}
      </body>
    </html>
  );
}
