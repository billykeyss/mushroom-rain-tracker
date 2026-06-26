"use client";
import { useOfflineDownload, type OfflineGroup } from "@/lib/use-offline-download";

/** Opt-in "download the field guide for offline use" control, shown in Settings.
 *  Offers the whole guide plus per-region downloads (much smaller). */
export default function OfflineDownload() {
  const { supported, anyBusy, groups } = useOfflineDownload();
  if (!supported) return null;

  const everything = groups.find((g) => g.id === "all");
  const regions = groups.filter((g) => g.id !== "all");

  return (
    <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--line)" }}>
      <div
        className="font-mono"
        style={{
          fontSize: 9,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          marginBottom: 8,
        }}
      >
        Offline guide
      </div>
      <p className="font-body" style={{ fontSize: 13, color: "var(--ink-soft)", margin: "0 0 12px" }}>
        Pages, species, and trees already work offline. Save photos too so they show with
        no signal — grab everything, or just your region. Best on Wi-Fi.
      </p>

      {everything && <GroupRow group={everything} anyBusy={anyBusy} emphasis />}

      <div
        className="font-mono"
        style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-soft)", opacity: 0.7, margin: "14px 0 6px" }}
      >
        By region
      </div>
      {regions.map((g) => (
        <GroupRow key={g.id} group={g} anyBusy={anyBusy} />
      ))}
    </div>
  );
}

function GroupRow({ group, anyBusy, emphasis }: { group: OfflineGroup; anyBusy: boolean; emphasis?: boolean }) {
  const { label, total, saved, estMb, status, start } = group;
  const pct = total ? Math.min(100, Math.round((saved / total) * 100)) : 0;
  const done = status === "ready";

  return (
    <div style={{ marginBottom: emphasis ? 6 : 10 }}>
      <div className="flex items-center justify-between gap-3">
        <div style={{ minWidth: 0 }}>
          <div className="font-body" style={{ fontSize: 14, fontWeight: emphasis ? 600 : 400, color: "var(--ink)" }}>
            {label}
          </div>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--ink-soft)", opacity: 0.8 }}>
            {done ? `✓ saved · ${total} photos` : `${total} photos · ~${estMb} MB`}
          </div>
        </div>
        {done ? (
          <span className="font-mono flex-none" style={{ fontSize: 11, color: "var(--moss)" }}>✓</span>
        ) : (
          <button
            type="button"
            onClick={start}
            disabled={anyBusy}
            className={emphasis ? "btn-primary" : "btn-ghost"}
            style={{ flex: "none", opacity: anyBusy && status !== "downloading" ? 0.5 : 1, whiteSpace: "nowrap" }}
          >
            {status === "downloading" ? `Saving… ${pct}%` : "Download"}
          </button>
        )}
      </div>
      {status === "downloading" && (
        <div aria-hidden style={{ height: 5, borderRadius: 6, background: "rgba(0,0,0,0.08)", overflow: "hidden", marginTop: 6 }}>
          <div style={{ width: `${pct}%`, height: "100%", background: "var(--moss)", transition: "width 0.3s ease" }} />
        </div>
      )}
    </div>
  );
}
