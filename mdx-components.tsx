import type { MDXComponents } from "mdx/types";
import { MdxBody } from "./app/components/MDX/MdxBody";
import { MdxAccordion } from "./app/components/MDX/MdxAccordion";
import {
  MdxClass,
  MdxFunction,
  MdxString,
  MdxOperator,
  MdxPunctuation,
} from "./app/components/MDX/MdxCode";
import { MdxEmail } from "./app/components/MDX/MdxEmail";
import { MdxPageTitle } from "./app/components/MDX/MdxPageTitle";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Accordion: MdxAccordion,
    Body: MdxBody,
    Class: MdxClass,
    Email: MdxEmail,
    Function: MdxFunction,
    Str: MdxString,
    Op: MdxOperator,
    Punc: MdxPunctuation,
    PageTitle: MdxPageTitle,
  };
}
