import { useId } from 'react'

// Motif géométrique à étoile à huit branches, répété en fond.
export default function Pattern({ className = '', size = 72 }: { className?: string; size?: number }) {
  const id = useId()
  const c = size / 2
  const r = size * 0.3
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="0.8">
            <rect x={c - r} y={c - r} width={r * 2} height={r * 2} />
            <rect x={c - r} y={c - r} width={r * 2} height={r * 2} transform={`rotate(45 ${c} ${c})`} />
            <circle cx={c} cy={c} r={r * 0.45} />
            <path d={`M0 0 L${size * 0.12} ${size * 0.12} M${size} 0 L${size * 0.88} ${size * 0.12} M0 ${size} L${size * 0.12} ${size * 0.88} M${size} ${size} L${size * 0.88} ${size * 0.88}`} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

export function Star({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="22" y="22" width="56" height="56" />
        <rect x="22" y="22" width="56" height="56" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="18" />
        <circle cx="50" cy="50" r="40" strokeOpacity="0.4" />
      </g>
    </svg>
  )
}
