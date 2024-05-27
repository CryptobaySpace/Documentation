import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const CoreConceptsLinks: PageLinkProps[] = [
  {
    title: "ESDT Standard",
    content:
      "Discover the power of the ESDT Standard and how to create your own tokens and NFTs native to the chains.",
    docName: "/docs/intro",
    icon: "🛠️",
    disabled: true,
  },
  {
    title: "Ressources",
    content: " Find ressources to help you create & manage your own assets.",
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
