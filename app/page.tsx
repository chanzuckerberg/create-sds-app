"use client";

import {
  ButtonGroup,
  Code,
  CodeExampleWrapper,
  Description,
  Grid,
  Main,
} from "@/app/style";
import { StyledButton } from "./style";
import {
  Icon,
  Dropdown,
  ContentCard,
  ContentCardBody,
} from "@czi-sds/components";
import { useState } from "react";
import Link from "next/link";

const sizeOptions = [
  { name: "Size xs", value: "xs" },
  { name: "Size s", value: "s" },
  { name: "Size m", value: "m" },
  { name: "Size l", value: "l" },
  { name: "Size xl", value: "xl" },
];

export default function Home() {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[2]);

  return (
    <Main>
      <Description>
        <p>
          Get started by editing&nbsp;
          <Code>app/page.tsx</Code>
        </p>
      </Description>

      <CodeExampleWrapper>
        <p>Example SDS Buttons:</p>
        <ButtonGroup>
          <StyledButton
            sdsType="primary"
            sdsStyle="icon"
            sdsSize="large"
            icon="DNA"
            style={{ margin: 0 }}
          />

          <StyledButton
            sdsType="primary"
            sdsStyle="rounded"
            startIcon={<Icon sdsIcon="Copy" sdsSize="s" />}
          >
            Primary Rounded
          </StyledButton>

          <StyledButton sdsType="primary" sdsStyle="square">
            Primary Square
          </StyledButton>

          <StyledButton sdsType="primary" sdsStyle="minimal" isAllCaps={false}>
            Primary Minimal
          </StyledButton>
        </ButtonGroup>
      </CodeExampleWrapper>

      <CodeExampleWrapper>
        <p>Example SDS Dropdown:</p>
        <Dropdown
          label="Select Size"
          options={sizeOptions}
          value={selectedSize}
          multiple={false}
          onChange={(_event, newValue) => {
            if (
              newValue &&
              typeof newValue === "object" &&
              "value" in newValue
            ) {
              setSelectedSize(newValue);
            }
          }}
          InputDropdownProps={{
            width: "200px",
          }}
        />
      </CodeExampleWrapper>

      <Grid>
        <ContentCard
          visualElementType="icon"
          clickableCard
          clickableCardProps={{
            href: "https://sds.czi.design",
            target: "_blank",
            component: Link,
          }}
          titleText="SDS Docs"
          decorativeBorder
          icon={<Icon sdsIcon="DNA" sdsSize="xl" />}
          metadataText="ZeroHeight Documentation"
        >
          <ContentCardBody>
            Find in-depth information about Science Design System (SDS) features
            and API.
          </ContentCardBody>
        </ContentCard>

        <ContentCard
          visualElementType="icon"
          clickableCard
          clickableCardProps={{
            href: "https://nextjs.org/docs",
            target: "_blank",
            component: Link,
          }}
          titleText="Next.js Docs"
          decorativeBorder
          icon={<Icon sdsIcon="DNA" sdsSize="xl" />}
          metadataText="NecxtJs Documentation"
        >
          <ContentCardBody>
            Learn about Next.js features and API.
          </ContentCardBody>
        </ContentCard>
      </Grid>
    </Main>
  );
}
