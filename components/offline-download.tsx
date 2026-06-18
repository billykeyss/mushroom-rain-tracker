"use client";
import { useOfflineDownload } from "@/lib/use-offline-download";

/** Opt-in "download the whole field guide for offline use" control, shown in Settings. */
export default function OfflineDownload() {
  const { status, saved, total, start, estMb } = useOfflineDownload();
  if (status === "unsupported") return null;

  const pct = total ? Math.min(100, Math.round((saved / total) * 100)) : 0;

  return (
    <div
      className="mt-4 pt-4"
      style={{ borderTop: "1px solid var(--line)" }}
    >
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

      {status === "ready" ? (
        <p className="font-body" style={{ fontSize: 13, color: "var(--ink-soft)", margin: 0 }}>
          ✓ Saved for offline — {saved} photos on this device. The guide works with no signal.
        </p>
      ) : (
        <>
          <p
            className="font-body"
            style={{ fontSize: 13, color: "var(--ink-soft)", margin: "0 0 10px" }}
          >
            Pages, species, and trees already work offline. Tap to also save all{" "}
            <strong>{total} photos</strong> (~{estMb} MB) so they show with no signal.
            Best on Wi-Fi.
          </p>

          {status === "downloading" && (
            <div style={{ marginBottom: 10 }}>
              <div
                aria-hidden
                style={{
                  height: 6,
                  borderRadius: 6,
                  background: "rgba(0,0,0,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    background: "var(--moss)",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
              <div
                className="font-mono"
                style={{ fontSize: 10, color: "var(--ink-soft)", marginTop: 6 }}
              >
                Saving photos… {saved}/{total}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={start}
            disabled={status === "downloading" || status === "checking"}
            className="btn-primary"
            style={{ width: "100%", opacity: status === "downloading" ? 0.7 : 1 }}
          >
            {status === "downloading" ? "Downloading…" : `Download guide for offline (~${estMb} MB)`}
          </button>
        </>
      )}
    </div>
  );
}
