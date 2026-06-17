export const metadata = { title: "Offline · Foray" };

export default function OfflinePage() {
  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: 480, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--moss)" }}>
        You&rsquo;re offline
      </h1>
      <p style={{ color: "var(--ink-soft)" }}>
        The field guide, species, and trees are saved on your device. Weather,
        the map, and the spot-finder need a signal — they&rsquo;ll come back when
        you do.
      </p>
    </main>
  );
}
