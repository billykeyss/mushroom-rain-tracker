import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Newsreader, Spectral, IBM_Plex_Mono } from "next/font/google";
import { LocationProvider } from "@/lib/location-context";
import { UnitsProvider } from "@/lib/units-context";
import { RegionProvider } from "@/lib/region-context";
import { ApiKeyProvider } from "@/lib/api-key-context";
import { ClipboardProvider } from "@/lib/clipboard-context";
import TabBar from "@/components/tab-bar";
import SideNav from "@/components/side-nav";
import TopBar from "@/components/top-bar";
import FieldClipboard from "@/components/field-clipboard";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";

// Display: Production Type's editorial workhorse — variable optical size, italic.
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});
// Body: Spectral was designed as Newsreader's book-text companion.
const body = Spectral({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
// Mono: IBM Plex Mono — distinctive slab, less ubiquitous than JetBrains Mono.
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foray · A Mushrooming Field Book",
  description: "A field book for the rain.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Foray",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
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
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <UnitsProvider>
          <RegionProvider>
            <ApiKeyProvider>
              <LocationProvider>
                <ClipboardProvider>
                  <KeyboardShortcuts />
                  <SideNav />
                  <TopBar />
                  <div className="relative mx-auto max-w-[480px] lg:max-w-none lg:ml-[260px] 2xl:mr-[300px] lg:mx-0 min-h-screen pb-24 lg:pb-0">
                    {children}
                  </div>
                  <FieldClipboard />
                  <TabBar />
                </ClipboardProvider>
              </LocationProvider>
            </ApiKeyProvider>
          </RegionProvider>
        </UnitsProvider>
      </body>
    </html>
  );
}
