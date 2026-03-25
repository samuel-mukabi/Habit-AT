import "./globals.css";
import React from 'react';
import { Lexend, Public_Sans, Plus_Jakarta_Sans } from "next/font/google";
import SideBar from '@/app/(frontend)/components/(page components)/SideBar';
import TopNav from '@/app/(frontend)/components/(page components)/TopNav';

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "Habit Tracker Ecosystem",
  description: "Advanced Habit Tracker Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${lexend.variable} ${publicSans.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-background text-on-surface min-h-screen flex m-0">
          <SideBar />

          {/* Main Content Area */}
          <main className="layout-main">
            <TopNav />

            <div className="layout-content">
              {children}
            </div>
          </main>
      </body>
    </html>
  );
}
