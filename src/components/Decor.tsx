type DecorProps = { className?: string; style?: React.CSSProperties };

export function Star({ className = "", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M20 3l4.8 11.2L37 15.6l-9.2 8 2.8 12L20 29.4 9.4 35.6l2.8-12-9.2-8 12.2-1.4z"
        fill="currentColor"
        stroke="#020617"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ className = "", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M20 2c1.5 10 8 16.5 18 18-10 1.5-16.5 8-18 18-1.5-10-8-16.5-18-18C12 18.500 18.500 12 20 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Heart({ className = "", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M20 35S4 25.500 4 14.500a8.500 8.500 0 0 1 16-4 8.500 8.500 0 0 1 16 4C36 25.500 20 35 20 35z"
        fill="currentColor"
        stroke="#020617"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 13c0-2.500 1.800-4 4-4"
        fill="none"
        stroke="#fff"
        strokeOpacity=".7"
        strokeWidth="2.500"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Cloud({ className = "", style }: DecorProps) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M24 52a16 16 0 0 1-2-31.800A22 22 0 0 1 64 16a18 18 0 0 1 14 35.500z"
        fill="currentColor"
        stroke="#020617"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 20"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="squiggle-path"
        d="M3 12c20-14 30 10 50 0s30-14 50 0 30 10 50 0 30-14 50 0 30 10 50 0"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wave({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-6 w-full sm:h-10 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 40c120 40 240 40 360 10s240-50 360-30 240 50 360 40 240-40 360-20v40H0z"
        fill="currentColor"
      />
    </svg>
  );
}
