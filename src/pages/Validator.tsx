import Layout from "@theme/Layout";
import QuickLink, { QuickLinkProps } from "../components/QuickLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const ConceptsLinks: QuickLinkProps[] = [
  {
    title: "Why Running Validator Nodes?",
    content:
      "What are the advantages of running validator nodes on MultiversX?",
    docName: "/docs/node-runner/intro",
    icon: "💰",
    disabled: true,
  },
  {
    title: "Requirements",
    content: "What do you need to run a node on MultiversX?",
    docName: "/docs/intro",
    icon: "📊",
    disabled: true,
  },

  {
    title: "Staking Provider",
    content:
      "Learn how to accept user delegations and earn more rewards on MultiversX.",
    docName: "/docs/intro",
    icon: "💰",
    disabled: true,
  },
];

const RunNodesLinks: QuickLinkProps[] = [
  {
    title: "Setup a Validator Node",
    content: "Learn how to set up and run a validator node on MultiversX.",
    docName: "/docs/intro",
    icon: "🖥",
    disabled: true,
  },
  {
    title: "Use Multikey",
    content:
      "Learn how to use Multikey to manage numerous validator nodes on MultiversX.",
    docName: "/docs/node-runner/intro",
    icon: "🔗",
  },
  {
    title: "Maintenance & Monitoring",
    content: "Understand how to maintain and monitor your validator node.",
    docName: "/docs/intro",
    icon: "🔧",
    disabled: true,
  },
];

export default function Validator(): JSX.Element {
  return (
    <Layout
      title="Validator"
      description="Learn how to run nodes & validate on MultiversX."
    >
      <PageHeader
        title="Validator Path"
        subtitle="Learn how to run nodes & validate on MultiversX."
      />
      <PageSection title="Core Concepts">
        {ConceptsLinks.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>

      <PageSection title="Run Nodes">
        {RunNodesLinks.map((props, idx) => (
          <QuickLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
