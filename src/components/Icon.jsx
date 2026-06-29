// Minimal inline icon set (stroke-based, inherits currentColor).
const paths = {
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z M9 12l2 2 4-4" />,
  plug: <path d="M9 3v5m6-5v5M7 8h10v3a5 5 0 01-10 0V8zM12 16v5" />,
  chart: <path d="M4 19h16M7 16V9m5 7V5m5 11v-5" />,
  handshake: <path d="M3 12l4-4 4 3 3-3 7 5M8 13l2 2 2-2 2 2M3 12v4h2m14-4v4h-2" />,
  globe: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" />,
  gavel: <path d="M14 4l6 6-3 3-6-6 3-3zM11 7L4 14l3 3 7-7M5 21h10" />,
  compass: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5 5-2z" />,
  building: <path d="M5 21V5l7-2 7 2v16M9 8h2m2 0h2M9 12h2m2 0h2M9 16h2m2 0h2" />,
  anchor: <path d="M12 6a2 2 0 100-4 2 2 0 000 4zm0 0v14M5 12a7 7 0 0014 0M5 12H3m18 0h-2" />,
  arrowUp: <path d="M12 20V5M6 11l6-6 6 6" />,
  lock: <path d="M6 11V8a6 6 0 0112 0v3M5 11h14v9H5v-9z" />,
  cpu: <path d="M7 7h10v10H7V7zM10 10h4v4h-4v-4zM9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2" />,
  network: <path d="M12 3a2 2 0 100 4 2 2 0 000-4zM5 17a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4zM12 7v4m0 0l-5 6m5-6l5 6" />,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />,
  coin: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v10M9.5 9.5h4a1.5 1.5 0 010 3h-3a1.5 1.5 0 000 3h4" />,
  scale: <path d="M12 3v18M7 6h10M7 6L4 13h6L7 6zm10 0l-3 7h6l-3-7zM8 20h8" />,
}

export default function Icon({ name, size = 26, stroke = 1.6, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || paths.shield}
    </svg>
  )
}
