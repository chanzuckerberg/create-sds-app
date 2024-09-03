import Faq from "@/website-docs/example-faq.mdx";
import MdxLayoutWrapper from "../components/MDX/MdxLayoutWrapper";

const FaqPage = () => {
  return (
    <MdxLayoutWrapper>
      <article>
        <Faq />
      </article>
    </MdxLayoutWrapper>
  );
};

export default FaqPage;
