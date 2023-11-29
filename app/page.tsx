/**
 * (thuang): Emotion currently doesn't support React Server Components,
 * so we need to add "use client" to the top of the file for now.
 */
"use client";

import { Card, Center, Code, Description, Grid, Main } from "@/app/style";
import { Button } from "@czi-sds/components";

export default function Home() {
  return (
    <Main>
      <Description>
        <p>
          Get started by editing&nbsp;
          <Code>app/page.tsx</Code>
        </p>
      </Description>

      <Center>
        <Button sdsType="primary" sdsStyle="rounded">
          Primary Rounded
        </Button>

        <Button sdsType="primary" sdsStyle="square">
          Primary Square
        </Button>

        <Button sdsType="primary">Primary Minimal</Button>
      </Center>

      <Grid>
        <Card
          href="https://sds.czi.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            SDS Docs <span>-&gt;</span>
          </h2>
          <p>
            Find in-depth information about Science Design System (SDS) features
            and API.
          </p>
        </Card>

        <Card
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn Next.js <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </Card>

        <Card
          href="https://czi.atlassian.net/wiki/spaces/SI/pages/2050621483/Happy+Path+Intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Learn about how to use Happy to deploy your app</p>
        </Card>
      </Grid>
    </Main>
  );
}
