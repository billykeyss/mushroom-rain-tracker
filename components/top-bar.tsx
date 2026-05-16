"use client";

import Image from "next/image";
import Link from "next/link";
import RegionPicker from "@/components/region-picker";
import SettingsButton from "@/components/settings-button";

export default function TopBar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 mx-auto max-w-[480px] lg:hidden"
      style={{
        background: "rgba(240, 228, 200, 0.85)",
        borderBottom: "1px solid var(--line)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        paddingTop: "max(8px, env(safe-area-inset-top))",
        paddingBottom: "8px",
      }}
    >
      <div className="flex items-center justify-between px-4 gap-2">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          style={{ textDecoration: "none" }}
        >
          <Image
            src="/foray-icon.png"
            alt=""
            width={28}
            height={28}
            priority
            style={{ width: 28, height: 28, objectFit: "contain" }}
          />
          <span
            className="font-display"
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "var(--moss)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Foray
          </span>
        </Link>
        <div className="flex items-center gap-2 shrink-0">
          <RegionPicker variant="pill" align="right" />
          <SettingsButton variant="icon" />
        </div>
      </div>
    </header>
  );
}
