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
    icon: "🏗️",
    disabled: true,
  },
  {
    title: "Technologies",
    content:
      "Explore the technologies used to build our backend applications (NestJS, Prisma, Docker).",
    docName: "/docs/dapp/backend/technologies",
    icon: "🔧",
  },
];

const TemplatesLinks: PageLinkProps[] = [
  {
    title: "Create a basic backend",
    content:
      "Bootstrap your backend using the best technologies and integrate the MvX Dapp Sdk properly.",
    docName: "/docs/intro",
    icon: "🚀",
    disabled: true,
  },
  {
    title: "Mature your backend",
    content:
      "Add functionalities to your dapp (Theme, Security...) and securily connect it to your backend.",
    docName: "/docs/intro",
    icon: "🚢",
    disabled: true,
  },
  {
    title: "Deploy along with frontend",
    content: "Deploy your backend with docker and CI/CD pipelines.",
    docName: "/docs/intro",
    icon: "🚚",
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
      {/* <PageSection title="SDKs">
        {sdks.map((props, idx) => (
              <PageLink key={idx} {...props} disabled={props.disabled}/>
            ))}
      </PageSection> */}
    </Layout>
  );
}
