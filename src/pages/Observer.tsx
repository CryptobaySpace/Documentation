import Layout from "@theme/Layout";
import PageLink, { PageLinkProps } from "../components/PageLink";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const ConceptsLinks: PageLinkProps[] = [
  {
    title: "What are Observing Squads?",
    content:
      "Learn about observing squads and their roles in the network.",
    docName: "/docs/node-runner/observer/intro",
    icon: "🧐", // Represents observing and inspecting.
  },
  {
    title: "Requirements",
    content:
      "Understand the requirements to run an observing squad through different methods (VPS, AWS, Google).",
    docName: "/docs/intro",
    icon: "📋", // Represents a checklist or requirements.
    disabled: true,
  },
];

const RunNodesLinks: PageLinkProps[] = [
  {
    title: "Install Observing Squad",
    content:
      "Deploy your observing squad on a VPS and benefit from private access to the network.",
    docName: "/docs/intro",
    icon: "🖥️", // Represents installing and setting up servers.
    disabled: true,
  },
  {
    title: "Install Squad with Full History",
    content:
      "Deploy your observing squad with full history and benefit from the complete network history.",
    docName: "/docs/intro",
    icon: "📜", // Represents historical data and records.
    disabled: true,
  },
  {
    title: "Maintenance & Monitoring",
    content:
      "Learn how to maintain and monitor your observing squad using Zabbix & Grafana.",
    docName: "/docs/node-runner/maintenance",
    icon: "🔧", // Represents maintenance and tools.
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
