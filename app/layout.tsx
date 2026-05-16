import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Fraunces, EB_Garamond, JetBrains_Mono } from "next/font/google";
import { LocationProvider } from "@/lib/location-context";
import { UnitsProvider } from "@/lib/units-context";
import { RegionProvider } from "@/lib/region-context";
import { ApiKeyProvider } from "@/lib/api-key-context";
import TabBar from "@/components/tab-bar";
import SideNav from "@/components/side-nav";
import TopBar from "@/components/top-bar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});
const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foray · A Mushrooming Field Book",
  description: "A field book for the rain.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f0e4c8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${garamond.variable} ${mono.variable}`}
    >
      <body>
        <UnitsProvider>
          <RegionProvider>
            <ApiKeyProvider>
              <LocationProvider>
                <SideNav />
                <TopBar />
                <div className="relative mx-auto max-w-[480px] lg:max-w-none lg:ml-[260px] lg:mx-0 min-h-screen pb-24 lg:pb-0">
                  {children}
                </div>
                <TabBar />
              </LocationProvider>
            </ApiKeyProvider>
          </RegionProvider>
        </UnitsProvider>
      </body>
    </html>
  );
}
