import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const CoreConceptsLinks: PageLinkProps[] = [
  {
    title: "Architecture",
    content:
      "Discover a robust architecture of frontend applications on MultiversX.",
    docName: "/docs/dapp/frontend/architecture",
    icon: "🏛️", // Changed to represent a structured and stable architecture.
    disabled: true,
  },
  {
    title: "Technologies",
    content:
      "Explore the technologies used to build our frontend applications (Vite, React, TypeScript, Chakra UI).",
    docName: "/docs/dapp/frontend/technologies",
    icon: "🛠️", // Represents a set of tools and technologies.
  },
];

const TemplatesLinks: PageLinkProps[] = [
  {
    title: "Create a Basic Frontend",
    content:
      "Bootstrap your dapp using the best technologies and integrate the MvX Dapp SDK properly.",
    docName: "/docs/dapp/frontend/simple-install",
    icon: "🚀", // Represents launching or starting a project.
  },
  {
    title: "Enhance Your Frontend",
    content:
      "Add functionalities to your dapp (theme, security) and securely connect it to your backend.",
    docName: "/docs/intro",
    icon: "🔒", // Changed to represent security and enhancement.
    disabled: true,
  },
  {
    title: "Deploy Along with Backend",
    content: "Deploy your frontend with Docker and CI/CD pipelines.",
    docName: "/docs/intro",
    icon: "📦", // Changed to represent deployment and packaging.
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
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
      <PageSection title="Templates">
        {TemplatesLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
