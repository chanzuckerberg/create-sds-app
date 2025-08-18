"use client";

import { fontWeightMedium } from "@/app/common/theme";
import styled from "@emotion/styled";
import {
  Button,
  CommonThemeProps,
  getSemanticColors,
} from "@czi-sds/components";

export const StyledButton = styled(Button)`
  font-weight: ${fontWeightMedium};
`;

export const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: 100%;
  z-index: 2;

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
  }
`;

export const Code = styled.code`
  font-weight: 700;
  font-family: var(--font-mono);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, auto));
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  ${(props: CommonThemeProps) => {
    const semanticColors = getSemanticColors(props);

    return `
      background-color: ${semanticColors?.base?.backgroundPrimary};
      color: ${semanticColors?.base?.textPrimary};
    `;
  }}

  /* Mobile */
  @media (max-width: 700px) {
    padding: 2rem;

    .content {
      padding: 0rem;
    }

    ${Grid} {
      grid-template-columns: 1fr;
      margin-bottom: 120px;
    }

    ${Center} {
      padding: 4rem 0 6rem;
    }

    ${Center}::before {
      transform: none;
      height: 300px;
    }
  }

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    ${Grid} {
      grid-template-columns: repeat(2, 50%);
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: start;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CodeExampleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
