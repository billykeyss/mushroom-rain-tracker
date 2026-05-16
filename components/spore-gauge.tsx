interface Props {
  score: number;
  label: string;
}

export default function SporeGauge({ score, label }: Props) {
  const r = 86;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - score / 100);
  return (
    <div className="relative mx-auto" style={{ maxWidth: 280, aspectRatio: 1 }}>
      <svg
        viewBox="0 0 200 200"
        className="block w-full h-full"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="rgba(44,58,42,0.12)"
          strokeWidth={10}
        />
        <g stroke="rgba(44,58,42,0.3)" strokeWidth={1}>
          <line x1="100" y1="6" x2="100" y2="14" />
          <line x1="100" y1="186" x2="100" y2="194" />
          <line x1="6" y1="100" x2="14" y2="100" />
          <line x1="186" y1="100" x2="194" y2="100" />
        </g>
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a14a2a" />
            <stop offset="1" stopColor="#3f5238" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth={10}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(.2,.8,.2,1)" }}
        />
        <g
          transform="translate(70, 60)"
          style={{ color: "rgba(44,58,42,0.05)" }}
        >
          <path
            d="M10 35 Q10 12, 40 12 Q70 12, 70 35 Q70 42, 60 42 L20 42 Q10 42, 10 35 Z M30 42 L30 75 Q30 88, 40 88 Q50 88, 50 75 L50 42"
            fill="currentColor"
            transform="scale(0.75)"
          />
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div
          className="font-display"
          style={{
            fontWeight: 300,
            fontSize: 92,
            lineHeight: 0.85,
            color: "var(--moss)",
            letterSpacing: "-0.04em",
          }}
        >
          {score}
        </div>
        <div
          className="font-mono"
          style={{
            fontSize: 11,
            color: "var(--ink-soft)",
            marginTop: 2,
            letterSpacing: "0.16em",
          }}
        >
          / 100 SPORE
        </div>
      </div>
    </div>
  );
}
