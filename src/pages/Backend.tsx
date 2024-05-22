import Layout from "@theme/Layout";
import QuickLink from "../components/QuickLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

export const BuilderList = [
  {
    title: "Why build on MultiversX ?",
    content:
      "Discover the power of our technology and the benefits of building in our ecosystem.",
    docName: "/docs/intro",
    icon: "🛠️",
  },
  {
    title: "Build a DApp",
    content:
      "Learn how to build your decentralized application step by step on MultiversX.",
    docName: "/docs/intro",
    icon: "🌍",
  },
  {
    title: "Build a Smart Contract",
    content: "Follow detailed guides to develop and deploy smart contracts.",
    docName: "/docs/intro",
    icon: "📜",
  },
];

export const GuidesList = [
  {
    title: "Manage a Wallet",
    content:
      "Learn how to create, manage, and use a MultiversX wallet with availables technologies.",
    docName: "/docs/intro",
    icon: "📱",
  },
  {
    title: "Create a Token",
    content:
      "Issue your own tokens on MultiversX with our ESDT token standard.",
    docName: "/docs/intro",
    icon: "🔷",
  },

  {
    title: "Create an NFT",
    content: "Create and manage your own NFTs on MultiversX.",
    docName: "/docs/intro",
    icon: "🔷",
  },
];

export default function Backend(): JSX.Element {
  return (
    <Layout title="Builder" description="Learn how to build on MultiversX.">
      <PageHeader
        title="Builders Journeys"
        subtitle="Choose your path you must."
      />
      <PageSection title="Builder Paths">
        {BuilderList.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>
      <PageSection title="Guides">
        {GuidesList.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>
      {/* <PageSection title="SDKs">
        {sdks.map((props, idx) => (
              <QuickLink key={idx} {...props} />
            ))}
      </PageSection> */}
    </Layout>
  );
}
