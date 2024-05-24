import Layout from "@theme/Layout";
import QuickLink from "../components/QuickLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const coreConcepts = [
  {
    title: "Architecture",
    content:
      "Discover a robust architecture of frontend applications on MultiversX.",
    docName: "/docs/intro",
    icon: "🏗️",
  },
  {
    title: "Technologies",
    content:
      "Explore the technologies used to build our frontend applications.",
    docName: "/docs/intro",
    icon: "🔧",
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
        {coreConcepts.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>
    </Layout>
  );
}
