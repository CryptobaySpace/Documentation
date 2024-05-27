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

const CreateAssetLinks: PageLinkProps[] = [
  {
    title: "Issue & Manage a Token",
    content:
      "Create your own tokens on MultiversX with our ESDT token standard. Learn to manage its supply distribution and lifecycle.",
    docName: "/docs/intro",
    icon: "🔷",
    disabled: true,
  },
  {
    title: "Create an NFT",
    content:
      "Create and manage your own NFTs on MultiversX. Each Nft metadata is unique. ",
    docName: "/docs/intro",
    icon: "🎨",
    disabled: true,
  },
  {
    title: "Create an SFT Collection",
    content: "Create a certain amount of the same nft with the SFT standard.",
    docName: "/docs/intro",
    icon: "📦",
    disabled: true,
  },
];
const UtilityAssetsLinks: PageLinkProps[] = [
  {
    title: "Distribute your asset",
    content:
      "Distribute your asset to your users through whitelisting, airdrops, or other methods.",
    docName: "/docs/intro",
    icon: "🎁",
    disabled: true,
  },
  {
    title: "Staking Pool for your asset",
    content:
      "Create a staking pool for your asset and reward your users with your token.",
    docName: "/docs/intro",
    icon: "🏦",
    disabled: true,
  },
];

export default function Assets(): JSX.Element {
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
      <PageSection title="Create">
        {CreateAssetLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
      <PageSection title="Utilities">
        {UtilityAssetsLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
