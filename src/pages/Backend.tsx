import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const CoreConceptsLinks: PageLinkProps[] = [
  {
    title: "Architecture",
    content:
      "Discover a robust architecture of backend applications on MultiversX.",
    docName: "/docs/intro",
    icon: "🏛️", // Changed to represent a structured and stable architecture.
    disabled: true,
  },
  {
    title: "Technologies",
    content:
      "Explore the technologies used to build our backend applications (NestJS, Prisma, Docker).",
    docName: "/docs/dapp/backend/technologies",
    icon: "🛠️", // Represents a set of tools and technologies.
  },
];

const TemplatesLinks: PageLinkProps[] = [
  {
    title: "Create a Basic Backend",
    content:
      "Bootstrap your backend using the best technologies and integrate the MvX Dapp SDK properly.",
    docName: "/docs/intro",
    icon: "🚀", // Represents launching or starting a project.
    disabled: true,
  },
  {
    title: "Enhance Your Backend",
    content:
      "Add functionalities to your dapp (theme, security) and securely connect it to your frontend.",
    docName: "/docs/intro",
    icon: "🔒", // Changed to represent security and enhancement.
    disabled: true,
  },
  {
    title: "Deploy Along with Frontend",
    content: "Deploy your backend with Docker and CI/CD pipelines.",
    docName: "/docs/intro",
    icon: "📦", // Changed to represent deployment and packaging.
    disabled: true,
  },
];

export default function Backend(): JSX.Element {
  return (
    <Layout title="Backend" description="Learn how to create backend services.">
      <PageHeader
        title="Backend Journey"
        subtitle="Learn how to create backend services for your Dapp."
      />
      <PageSection title="Core Concepts">
        {CoreConceptsLinks.map((props, idx) => (
          <PageLink key={idx} {...props} />
        ))}
      </PageSection>
      <PageSection title="Guides">
        {TemplatesLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
