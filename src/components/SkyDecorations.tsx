import styledWithConfig, { css } from "../utils/styledWithConfig";
import { cloudDrift, float, hotAirFloat, planeBob } from "../theme/GlobalStyle";

const SkyLayer = styledWithConfig("div")`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const motionSafe = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
`;

const balloonBase = css`
  position: fixed;
  bottom: -150px;
  width: 56px;
  height: 70px;
  border-radius: 50% 50% 48% 48%;
  opacity: 0.55;
  animation: ${float} linear infinite;
  pointer-events: none;
  box-shadow: inset -8px -10px 20px rgba(0, 0, 0, 0.08);

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -36px;
    width: 1px;
    height: 38px;
    background: var(--balloon-string);
    transform: translateX(-50%);
  }

  ${motionSafe};
`;

const BalloonNavy = styledWithConfig("div")`
  ${balloonBase};
  left: 10%;
  background: linear-gradient(145deg, #4a6288 0%, var(--explorer-navy) 100%);
  animation-duration: 22s;
`;

const BalloonOlive = styledWithConfig("div")`
  ${balloonBase};
  left: 32%;
  background: linear-gradient(145deg, #95a86e 0%, var(--explorer-olive) 100%);
  animation-duration: 26s;
  width: 48px;
  height: 60px;
`;

const BalloonPeach = styledWithConfig("div")`
  ${balloonBase};
  left: 58%;
  background: linear-gradient(145deg, #f0c99a 0%, var(--explorer-peach) 100%);
  animation-duration: 20s;
`;

const BalloonTan = styledWithConfig("div")`
  ${balloonBase};
  left: 78%;
  background: linear-gradient(145deg, #e8c090 0%, var(--explorer-tan) 100%);
  animation-duration: 24s;
  width: 50px;
  height: 64px;
`;

const Cloud = styledWithConfig("div")<{ $top: string; $left: string; $scale?: number }>`
  position: fixed;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 120px;
  height: 48px;
  opacity: 0.35;
  animation: ${cloudDrift} 28s ease-in-out infinite alternate;
  transform: scale(${({ $scale = 1 }) => $scale});

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: rgba(184, 212, 232, 0.7);
    border-radius: 50%;
  }

  &::before {
    width: 56px;
    height: 56px;
    left: 0;
    bottom: 0;
  }

  &::after {
    width: 72px;
    height: 72px;
    right: 0;
    bottom: -4px;
  }

  ${motionSafe};
`;

const Star = styledWithConfig("span")<{ $top: string; $left: string; $color: string }>`
  position: fixed;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  font-size: 14px;
  color: ${({ $color }) => $color};
  opacity: 0.45;
`;

const BiplaneScene = styledWithConfig("div")`
  position: fixed;
  top: 2%;
  right: 2%;
  width: min(220px, 42vw);
  height: min(160px, 30vw);
  opacity: 0.88;
  animation: ${planeBob} 10s ease-in-out infinite;
  ${motionSafe};

  @media (max-width: 720px) {
    top: 1%;
    right: 0;
    width: min(170px, 48vw);
    height: min(124px, 34vw);
  }
`;

const HotAirBalloon = styledWithConfig("div")`
  position: fixed;
  bottom: 6%;
  right: 3%;
  width: min(110px, 26vw);
  height: min(168px, 40vw);
  opacity: 0.9;
  animation: ${hotAirFloat} 11s ease-in-out infinite;
  ${motionSafe};

  @media (max-width: 720px) {
    bottom: 4%;
    right: 1%;
    width: min(88px, 30vw);
    height: min(134px, 46vw);
  }
`;

function VintageBiplaneScene() {
  return (
    <svg viewBox="0 0 220 160" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="wingTan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c9a0" />
          <stop offset="100%" stopColor="#b8895a" />
        </linearGradient>
        <linearGradient id="fuselageBrown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a06a" />
          <stop offset="100%" stopColor="#8b6840" />
        </linearGradient>
        <filter id="watercolorSoft" x="-8%" y="-8%" width="116%" height="116%">
          <feGaussianBlur stdDeviation="0.45" />
        </filter>
      </defs>

      {/* loop-de-loop dotted flight path */}
      <path
        d="M 198 58 C 150 30, 118 92, 82 52 C 58 28, 34 48, 14 62"
        stroke="#8b7355"
        strokeWidth="2"
        strokeDasharray="5 6"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />

      {/* vintage biplane — top right, angled down-left */}
      <g transform="translate(148 34) rotate(-18)" filter="url(#watercolorSoft)">
        {/* lower wing */}
        <ellipse cx="36" cy="34" rx="34" ry="7" fill="url(#wingTan)" opacity="0.92" />
        {/* upper wing */}
        <ellipse cx="36" cy="22" rx="30" ry="6" fill="url(#wingTan)" opacity="0.95" />
        {/* struts */}
        <line x1="18" y1="24" x2="18" y2="34" stroke="#7a5f3c" strokeWidth="1.2" />
        <line x1="54" y1="24" x2="54" y2="34" stroke="#7a5f3c" strokeWidth="1.2" />
        {/* fuselage */}
        <ellipse cx="36" cy="30" rx="18" ry="6" fill="url(#fuselageBrown)" />
        {/* cockpit */}
        <ellipse cx="28" cy="27" rx="6" ry="4" fill="#d4e8f0" opacity="0.75" />
        {/* tail */}
        <path d="M 58 28 L 72 24 L 72 32 L 58 32 Z" fill="#3d5278" opacity="0.8" />
        <path d="M 66 18 L 72 24 L 66 26 Z" fill="url(#wingTan)" opacity="0.9" />
        {/* propeller hub */}
        <circle cx="12" cy="30" r="3.5" fill="#5c4a38" />
        <path
          d="M 12 30 L 4 26 M 12 30 L 4 34 M 12 30 L 2 30"
          stroke="#6b7a8f"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* wheels */}
        <circle cx="24" cy="40" r="3" fill="#4a3d30" />
        <circle cx="46" cy="40" r="3" fill="#4a3d30" />
        <line x1="24" y1="36" x2="24" y2="40" stroke="#6b5a45" strokeWidth="1" />
        <line x1="46" y1="36" x2="46" y2="40" stroke="#6b5a45" strokeWidth="1" />
      </g>
    </svg>
  );
}

function VintageHotAirBalloon() {
  return (
    <svg viewBox="0 0 110 168" fill="none" aria-hidden="true">
      <defs>
        <pattern
          id="hotAirStripes"
          patternUnits="userSpaceOnUse"
          width="14"
          height="100"
        >
          <rect width="7" height="100" fill="#dcc09a" />
          <rect x="7" width="7" height="100" fill="#3d5278" />
        </pattern>
        <radialGradient id="balloonShade" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.08" />
        </radialGradient>
        <filter id="balloonSoft" x="-6%" y="-6%" width="112%" height="112%">
          <feGaussianBlur stdDeviation="0.35" />
        </filter>
      </defs>

      {/* balloon envelope */}
      <ellipse
        cx="55"
        cy="52"
        rx="42"
        ry="48"
        fill="url(#hotAirStripes)"
        filter="url(#balloonSoft)"
      />
      <ellipse cx="55" cy="52" rx="42" ry="48" fill="url(#balloonShade)" />

      {/* triangular bunting */}
      {[-32, -18, -4, 10, 24].map((offset, index) => (
        <path
          key={offset}
          d={`M ${55 + offset} 78 L ${55 + offset - 5} 88 L ${55 + offset + 5} 88 Z`}
          fill={index % 2 === 0 ? "#3d5278" : "#7d8f5c"}
          opacity="0.9"
        />
      ))}

      {/* ropes */}
      <line x1="38" y1="96" x2="34" y2="128" stroke="#8b6b45" strokeWidth="1.1" />
      <line x1="48" y1="98" x2="46" y2="128" stroke="#8b6b45" strokeWidth="1.1" />
      <line x1="62" y1="98" x2="64" y2="128" stroke="#8b6b45" strokeWidth="1.1" />
      <line x1="72" y1="96" x2="76" y2="128" stroke="#8b6b45" strokeWidth="1.1" />

      {/* wicker basket */}
      <rect x="36" y="128" width="38" height="22" rx="3" fill="#9a6f3c" />
      <rect x="38" y="130" width="34" height="18" rx="2" fill="#c49a62" />
      <path
        d="M 40 134 H 70 M 40 138 H 70 M 40 142 H 70 M 40 146 H 70"
        stroke="#8b6840"
        strokeWidth="0.8"
        opacity="0.7"
      />

      {/* soft floral accent at base */}
      <ellipse cx="28" cy="152" rx="10" ry="7" fill="#b8d4e8" opacity="0.45" />
      <ellipse cx="82" cy="154" rx="11" ry="8" fill="#f0e6d8" opacity="0.5" />
      <ellipse cx="55" cy="158" rx="14" ry="8" fill="#9eb87a" opacity="0.35" />
    </svg>
  );
}

export function SkyDecorations() {
  return (
    <SkyLayer data-component-id="SkyDecorations" aria-hidden="true">
      <Cloud data-component-id="CloudOne" $top="8%" $left="6%" $scale={0.9} />
      <Cloud data-component-id="CloudTwo" $top="22%" $left="48%" $scale={1.1} />
      <Cloud data-component-id="CloudThree" $top="5%" $left="62%" $scale={0.75} />

      <Star data-component-id="StarOne" $top="12%" $left="18%" $color="#3d5278">
        ✦
      </Star>
      <Star data-component-id="StarTwo" $top="28%" $left="38%" $color="#c4a06a">
        ✦
      </Star>
      <Star data-component-id="StarThree" $top="16%" $left="58%" $color="#3d5278">
        ✦
      </Star>

      <BalloonNavy data-component-id="BalloonNavy" />
      <BalloonOlive data-component-id="BalloonOlive" />
      <BalloonPeach data-component-id="BalloonPeach" />
      <BalloonTan data-component-id="BalloonTan" />

      <BiplaneScene data-component-id="BiplaneScene">
        <VintageBiplaneScene />
      </BiplaneScene>

      <HotAirBalloon data-component-id="HotAirBalloon">
        <VintageHotAirBalloon />
      </HotAirBalloon>
    </SkyLayer>
  );
}

/** @deprecated Use SkyDecorations */
export const Balloons = SkyDecorations;
