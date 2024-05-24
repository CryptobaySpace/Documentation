import Layout from "@theme/Layout";
import QuickLink, { QuickLinkProps } from "../components/QuickLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const CoreConceptsLinks: QuickLinkProps[] = [
  {
    title: "Architecture",
    content:
      "Discover a robust architecture of frontend applications on MultiversX.",
    docName: "/docs/intro",
    icon: "🏗️",
    disabled: true,
  },
  {
    title: "Technologies",
    content:
      "Explore the technologies used to build our frontend applications (Vite, React, Typecript, Chakra UI).",
    docName: "/docs/intro",
    icon: "🔧",
    disabled: true,
  },
];

const TemplatesLinks: QuickLinkProps[] = [
  {
    title: "Create a basic frontend",
    content:
      "Bootstrap your dapp using the best technologies and integrate the MvX Dapp Sdk properly.",
    docName: "/docs/dapp/frontend/simple-install",
    icon: "🚀",
  },
  {
    title: "Mature your frontend",
    content:
      "Add functionalities to your dapp (Theme, Security...) and securily connect it to your backend.",
    docName: "/docs/intro",
    icon: "🚢",
    disabled: true,
  },
  {
    title: "Deploy along with backend",
    content: "Deploy your frontend with docker and CI/CD pipelines.",
    docName: "/docs/intro",
    icon: "🚚",
    disabled: true,
  },
];

export default function Frontend(): JSX.Element {
  return (
    <Layout
      title="Frontend"
      description="Create frontend applications on MultiversX."
    >
      <PageHeader
        title="Frontend Journey"
        subtitle="Learn how to create frontend services for your Dapp."
      />
      <PageSection title="Core Concepts">
        {CoreConceptsLinks.map((props, idx) => (
          <QuickLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
      <PageSection title="Templates">
        {TemplatesLinks.map((props, idx) => (
          <QuickLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
