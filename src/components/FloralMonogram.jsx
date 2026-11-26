export default function FloralMonogram({ className = '' }) {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 180 120"
        className="w-40 h-28 overflow-visible"
        aria-label="A & S Floral Monogram"
      >
        <defs>
          <linearGradient id="monogramGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9B77E" />
            <stop offset="50%" stopColor="#C59B5F" />
            <stop offset="100%" stopColor="#9E763E" />
          </linearGradient>
        </defs>

        {/* Outer delicate laurel wreath */}
        <path
          d="M 48 92 C 26 76, 22 44, 44 26 C 60 12, 82 12, 90 16"
          fill="none"
          stroke="url(#monogramGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 132 92 C 154 76, 158 44, 136 26 C 120 12, 98 12, 90 16"
          fill="none"
          stroke="url(#monogramGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Left floral leaves */}
        <path d="M 35 68 C 24 64, 22 55, 31 54 C 35 59, 36 63, 35 68 Z" fill="#C59B5F" opacity="0.55" />
        <path d="M 32 48 C 22 42, 24 32, 33 34 C 36 40, 35 44, 32 48 Z" fill="#C59B5F" opacity="0.7" />
        <path d="M 48 26 C 42 16, 49 10, 56 17 C 55 22, 52 24, 48 26 Z" fill="#C59B5F" opacity="0.6" />
        <path d="M 44 82 C 34 84, 31 76, 39 73 C 43 76, 44 79, 44 82 Z" fill="#4A0E17" opacity="0.25" />

        {/* Right floral leaves */}
        <path d="M 145 68 C 156 64, 158 55, 149 54 C 145 59, 144 63, 145 68 Z" fill="#C59B5F" opacity="0.55" />
        <path d="M 148 48 C 158 42, 156 32, 147 34 C 144 40, 145 44, 148 48 Z" fill="#C59B5F" opacity="0.7" />
        <path d="M 132 26 C 138 16, 131 10, 124 17 C 125 22, 128 24, 132 26 Z" fill="#C59B5F" opacity="0.6" />
        <path d="M 136 82 C 146 84, 149 76, 141 73 C 137 76, 136 79, 136 82 Z" fill="#4A0E17" opacity="0.25" />

        {/* Top blossom accent */}
        <circle cx="90" cy="14" r="3.2" fill="#4A0E17" opacity="0.85" />
        <circle cx="83" cy="16" r="2.2" fill="#C59B5F" />
        <circle cx="97" cy="16" r="2.2" fill="#C59B5F" />

        {/* Subtle inner ring */}
        <circle
          cx="90"
          cy="60"
          r="36"
          fill="none"
          stroke="#C59B5F"
          strokeWidth="0.75"
          strokeDasharray="2 3"
          opacity="0.7"
        />

        {/* Monogram Letters */}
        <text
          x="90"
          y="67"
          textAnchor="middle"
          fill="#4A0E17"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '30px',
            fontWeight: 600,
            letterSpacing: '0.08em',
          }}
        >
          A <tspan fill="#C59B5F" fontSize="22" fontStyle="italic">&amp;</tspan> S
        </text>

        {/* Bottom flourish */}
        <path
          d="M 62 98 Q 90 110 118 98"
          fill="none"
          stroke="url(#monogramGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="90" cy="104" r="2" fill="#C59B5F" />
      </svg>
    </div>
  )
}
