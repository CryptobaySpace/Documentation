import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from "../css/styles.module.css";
import PageHeader from '../layout/Header';
import QuickLink from '../components/QuickLink';

export const TechnoList = [
  {
    title: "Overview",
    content: "Meet the blockchain that offers true internet-scale performance.",
    docName: "/docs/intro",
    icon: "💡",
  },
  {
    title: "Secure Proof of Stake",
    content:
      "Explore the efficiency and security benefits of SPoS over traditional consensus models.",
    docName: "/docs/intro",
    icon: "🔒",
  },
  {
    title: "SpaceVM",
    content:
      "Dive into the capabilities and roles of the Space Virtual Machine in smart contract execution.",
    docName: "/docs/intro",
    icon: "🌌",
  },
  {
    title: "Adaptive State Sharding",
    content:
      "Understand how MultiversX achieves high scalability through state sharding.",
    docName: "/docs/intro",
    icon: "🧩",
  },
  {
    title: "ESDT Token Standard",
    content:
      "Learn about MultiversX's token standards, including features and advantages of ESDT.",
    docName: "/docs/intro",
    icon: "🪙",
  },
  {
    title: "Sovereign Chains",
    content:
      "Explore how to build and manage custom blockchain solutions within the MultiversX ecosystem.",
    docName: "/docs/intro",
    icon: "🌐",
  },
];

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  console.log("siteConfig", siteConfig)
  return (
    <Layout
    title="Docs"
    description="A highly scalable, fast and secure blockchain platform for distributed apps, enterprise use cases and the new internet economy."
  >
    <PageHeader
      title="Welcome to the MultiversX Docs!"
      subtitle="Choose your path you must."
    />
    <section className={styles.features}>
      <div className={clsx("container", styles.container)}>
        <h1
          className={clsx(
            "hero__subtitle",
            "text--center",
            "justify-content--center",
            "font-weight--bold",
            "text-decoration--underline"
          )}
        >
          Our Technologies
        </h1>
        <div className={clsx("row", styles.row)}>
          {TechnoList.map((props, idx) => (
            <QuickLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
  );
}
