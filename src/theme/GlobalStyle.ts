import { createGlobalStyle, keyframes } from "../utils/styledWithConfig";

export const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(22px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const float = keyframes`
  0% {
    transform: translateY(0) rotate(-4deg);
  }
  50% {
    transform: translateY(-58vh) rotate(4deg);
  }
  100% {
    transform: translateY(-120vh) rotate(-4deg);
  }
`;

export const planeBob = keyframes`
  0%,
  100% {
    transform: translate(0, 0) rotate(-14deg);
  }
  50% {
    transform: translate(-10px, 8px) rotate(-10deg);
  }
`;

export const hotAirFloat = keyframes`
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-28px) translateX(-8px);
  }
`;

export const cloudDrift = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(40px);
  }
`;

export const trailDash = keyframes`
  to {
    stroke-dashoffset: -40;
  }
`;

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
    margin: 0;
  }

  body {
    font-family:
      ui-rounded,
      "SF Pro Rounded",
      "Segoe UI",
      system-ui,
      -apple-system,
      sans-serif;
    color: var(--ink);
    background: var(--page-bg);
    -webkit-font-smoothing: antialiased;
    transition:
      background 0.25s ease,
      color 0.25s ease;
  }

  html[lang="hi"] body {
    font-family: "Noto Sans Devanagari", ui-rounded, system-ui, sans-serif;
  }

  html[lang="pa"] body {
    font-family: "Noto Sans Gurmukhi", ui-rounded, system-ui, sans-serif;
  }

  html[lang="bn"] body {
    font-family: "Noto Sans Bengali", ui-rounded, system-ui, sans-serif;
  }

  @media (prefers-reduced-motion: reduce) {
    body {
      transition: none;
    }
  }
`;
