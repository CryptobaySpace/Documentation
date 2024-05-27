import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const ConceptsLinks: PageLinkProps[] = [
  {
    title: "What are Observing Squad?",
    content:
      "What are observing squad and what are their roles in the network?",
    docName: "/docs/node-runner/observer/observing-squad",
    icon: "💰",
    disabled: true,
  },
  {
    title: "Requirements",
    content:
      "What do you need to run an observing squad through different methods? (VPS, AWS, Google)",
    docName: "/docs/intro",
    icon: "📊",
    disabled: true,
  },
];

const RunNodesLinks: PageLinkProps[] = [
  {
    title: "Install Observing Squad",
    content:
      "Deploy your observing squad on a VPS end benefit from your private access to the network.",
    docName: "/docs/intro",
    icon: "🖥",
    disabled: true,
  },
  {
    title: "Install Squad with full history",
    content:
      "Deploy your observing squad with full history and benefit from the full history of the network.",
    docName: "/docs/intro",
    icon: "🔗",
    disabled: true,
  },
  {
    title: "Maintenace & Monitoring",
    content:
      "Understand how to maintain and monitor your observing squad with Zabbix & Grafana.",
    docName: "/docs/node-runner/install/maintenance",
    icon: "🔧",
  },
];

export default function Observer(): JSX.Element {
  return (
    <Layout
      title="Observer"
      description="Learn how to read the network and monitor transactions."
    >
      <PageHeader
        title="Observer Path"
        subtitle="Learn how to read the network and monitor transactions."
      />

      <PageSection title="Core Concepts">
        {ConceptsLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>

      <PageSection title="Installation">
        {RunNodesLinks.map((props, idx) => (
          <PageLink key={idx} {...props} disabled={props.disabled} />
        ))}
      </PageSection>
    </Layout>
  );
}
