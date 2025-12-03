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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Link,
} from "@czi-sds/components";
import { useState } from "react";

const sizeOptions = [
  { name: "Size xs", value: "xs" },
  { name: "Size s", value: "s" },
  { name: "Size m", value: "m" },
  { name: "Size l", value: "l" },
  { name: "Size xl", value: "xl" },
];

export default function Home() {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[2]);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(true);
  };

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

      <CodeExampleWrapper>
        <p>Example SDS Dialog:</p>
        <div>
          <Button sdsStyle="minimal" sdsType="primary" onClick={handleClick}>
            Open SDS Dialog
          </Button>
        </div>
        <Dialog onClose={handleClose} open={isOpen} sdsSize="xs">
          <DialogTitle
            title="Dialog Title"
            subtitle="This is an optional subtitle"
            overline="This is an optional overline"
            onClose={handleClose}
          />
          <DialogContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </DialogContent>
          <DialogActions buttonPosition="right">
            <Button sdsType="secondary" sdsStyle="square" onClick={handleClose}>
              Cancel
            </Button>
            <Button sdsType="primary" sdsStyle="square" onClick={handleClose}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </CodeExampleWrapper>

      <CodeExampleWrapper>
        <Link href="#" sdsStyle="default">
          SDS Link component
        </Link>
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
