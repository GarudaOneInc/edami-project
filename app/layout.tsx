import type { Metadata } from "next";
import localFont from "next/font/local";
import { Changa } from 'next/font/google'
import "./globals.css";

// Navbar component import

import Navbar from "./components/navbar";

const changa = Changa({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={changa.className}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
