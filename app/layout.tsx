import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />

        {children}
        <footer className="border-t bg-gray-50">
          <div className="container py-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <h3 className="mb-4 text-sm font-semibold">Бидний тухай</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Компани</li>
                  <li>Холбоо барих</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold">Үйлчилгээ</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Захиалга</li>
                  <li>Хүргэлт</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold">Тусламж</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Түгээмэл асуулт хариулт</li>
                  <li>Үйлчилгээний нөхцөл</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold">Холбоо барих</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>+976 7533 5599</li>
                  <li>info@example.com</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
