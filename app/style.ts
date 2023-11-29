import styled from "@emotion/styled";
import Image from "next/image";

export const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
  }
`;

export const Code = styled.code`
  font-weight: 700;
  font-family: var(--font-mono);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(25%, auto));
  max-width: 100%;
  width: var(--max-width);
`;

export const Card = styled.a`
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition:
    background 200ms,
    border 200ms;

  span {
    display: inline-block;
    transition: transform 200ms;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
  }

  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;

  :before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  :after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }

  :before,
  :after {
    content: "";
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }
`;

export const Logo = styled(Image)`
  position: relative;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;

  /* Enable hover only on non-touch devices */
  @media (hover: hover) and (pointer: fine) {
    ${Card}:hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);
    }

    ${Card}:hover span {
      transform: translateX(4px);
    }
  }

  @media (prefers-reduced-motion) {
    ${Card}:hover span {
      transform: none;
    }
  }

  /* Mobile */
  @media (max-width: 700px) {
    .content {
      padding: 4rem;
    }

    ${Grid} {
      grid-template-columns: 1fr;
      margin-bottom: 120px;
      max-width: 320px;
      text-align: center;
    }

    ${Card} {
      padding: 1rem 2.5rem;
    }

    ${Card} h2 {
      margin-bottom: 0.5rem;
    }

    ${Center} {
      padding: 8rem 0 6rem;
    }

    ${Center}::before {
      transform: none;
      height: 300px;
    }

    ${Description} {
      font-size: 0.8rem;
    }

    ${Description} a {
      padding: 1rem;
    }

    ${Description} p,
    ${Description} div {
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
    }

    ${Description} p {
      align-items: center;
      inset: 0 0 auto;
      padding: 2rem 1rem 1.4rem;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
      background: linear-gradient(
        to bottom,
        rgba(var(--background-start-rgb), 1),
        rgba(var(--callout-rgb), 0.5)
      );
      background-clip: padding-box;
      backdrop-filter: blur(24px);
    }

    ${Description} div {
      align-items: flex-end;
      pointer-events: none;
      inset: auto 0 0;
      padding: 2rem;
      height: 200px;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgb(var(--background-end-rgb)) 40%
      );
      z-index: 1;
    }
  }

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    ${Grid} {
      grid-template-columns: repeat(2, 50%);
    }
  }

  @media (prefers-color-scheme: dark) {
    .vercelLogo {
      filter: invert(1);
    }

    ${Logo} {
      filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
