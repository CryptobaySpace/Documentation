import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const CoreConceptsLinks: PageLinkProps[] = [
  {
    title: "Concepts",
    content:
      "Discover how Sovereign chains are working and what possibilities they offer to different kind of projects.",
    docName: "/docs/sovereign-chains/intro",
    icon: "🛠️",
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
    <Layout title="Sovereign Chains">
      <PageHeader
        title="Sovereign Chains"
        subtitle="Learn how to deploy your own sovereign chain using MultiversX technology."
      />
      <PageSection title="Introduction">
        {CoreConceptsLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
