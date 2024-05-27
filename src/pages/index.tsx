import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";

import { PageLinkProps } from "../components/PageLink";
import PathLink from "../components/PathLink";
import styles from "../css/styles.module.css";
import PageHeader from "../layout/Header";

export const PathLinks: PageLinkProps[] = [
  {
    title: "Dapp Frontend Development",
    content:
      "Discover how to craft compelling frontends for your decentralized applications with our comprehensive guides.",
    docName: "/frontend",
    icon: "🖥️", // Changed to a more typical computer monitor icon.
  },
  {
    title: "Backend Development",
    content:
      "Dive into backend solutions for decentralized applications, learning to integrate and manage the server-side.",
    docName: "/backend",
    icon: "⚙️", // Represents settings or machinery, suitable for backend processes.
  },
  {
    title: "Managing Assets on MultiversX",
    content:
      "Learn how to create, manage, and innovate with assets on MultiversX, from NFTs to fungible tokens.",
    docName: "/assets",
    icon: "🏦", // A bank icon to symbolize asset management.
  },
  {
    title: "Observer Insights",
    content:
      "Unlock the power of observing and interpreting data on the blockchain to enhance your applications with observer nodes.",
    docName: "/observer",
    icon: "🔍", // A magnifying glass icon to represent observation and insight.
  },
  {
    title: "Validator Node Operations",
    content:
      "Secure MultiversX by running a validator node. Learn about staking, delegation, and network security.",
    docName: "/validator",
    icon: "🛡️", // A shield icon representing security and protection.
  },
  {
    title: "Building Sovereign Chains",
    content:
      "Explore how to construct and manage your own private blockchain within the MultiversX ecosystem.",
    docName: "/sovereign-chains",
    icon: "🌐", // A globe icon, suitable for representing global or network-wide concepts.
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  console.log("siteConfig", siteConfig);
  return (
    <Layout
      title="Builder's Guide to MultiversX"
      description="Unlock the potential of blockchain with our comprehensive development guides."
    >
      <PageHeader
        title="Embark on Your MultiversX Development Journey"
        subtitle="Master the essentials with our step-by-step guides and build cutting-edge blockchain solutions."
        style={{ paddingBottom: "40px" }}
      />
      <section className={clsx("container", styles.fullWidthContainer)}>
        {PathLinks.map((props, idx) => (
          <PathLink key={idx} {...props} />
        ))}
      </section>
    </Layout>
  );
}
