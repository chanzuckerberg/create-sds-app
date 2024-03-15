import { Card, Center, Code, Description, Grid, Main } from "@/app/style";
import { StyledButton } from './style'

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
        <StyledButton sdsType="primary" sdsStyle="rounded">
          Primary Rounded
        </StyledButton>

        <StyledButton sdsType="primary" sdsStyle="square">
          Primary Square
        </StyledButton>

        <StyledButton sdsType="primary" sdsStyle="minimal">
          Primary Minimal
        </StyledButton>
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
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Next.js Docs <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js features and API</p>
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
