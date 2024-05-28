import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const CoreConceptsLinks: PageLinkProps[] = [
  {
    title: "Architecture",
    content:
      "Discover how Sovereign chains are working and what possibilities they offer to different kind of projects.",
    docName: "/docs/intro",
    icon: "🛠️",
    disabled: true,
  },
  {
    title: "Deployment",
    content: "Let's deploy your own sovereign chain connected to MultiversX testnet.",
    docName: "/docs/intro",
    icon: "📚",
    disabled: true,
  },
];

export default function SovereignChains(): JSX.Element {
  return (
    <Layout title="Assets">
      <PageHeader
        title="Assets & Utilities"
        subtitle="Learn how to create & manage assets on MultiversX"
      />
      <PageSection title="Concepts">
        {CoreConceptsLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
