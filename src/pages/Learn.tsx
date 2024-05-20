import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import QuickLink from "../components/QuickLink";
import styles from "../css/styles.module.css";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const coreConcepts = [
  {
    title: "Presentation of MultiversX",
    content: "Discover the core concepts & vision of the MultiversX network.",
    docName: "welcome/welcome-to-multiversx",
    icon: "🌍",
  },
  {
    title: "Key Features",
    content: "Explore the key features and benefits of MultiversX.",
    docName: "welcome/welcome-to-multiversx",
    icon: "🌍",
  },
];

const technologies = [
  {
    title: "Secure Proof of Stake",
    content: "Learn about the vision and mission of the MultiversX network.",
    docName: "welcome/welcome-to-multiversx",
    icon: "🎯",
  },
  {
    title: "Adaptive Sharding",
    content:
      "Ensures scalability and efficiency, optimizes the number of active shards to reduce overhead.",
    docName: "welcome/welcome-to-multiversx",
    icon: "📈",
  },
  {
    title: "ESDT Standard",
    content:
      "Elrond Standard Digital Token (ESDT) is a token standard on the MultiversX.",
    docName: "welcome/welcome-to-multiversx",
    icon: "🪙",
  },
  {
    title: "WASM VM",
    content:
      "MultiversX employs a unique VM architecture designed to enhance speed and scalability.",
    docName: "welcome/welcome-to-multiversx",
    icon: "⚙️",
  },
];


  export default function Learn(): JSX.Element {
  return (
    <Layout
      title="Learn"
      description="Explore the MultiversX ecosystem and learn how to build, validate, and participate in the network."
    >
      <PageHeader
        title="Discover MultiversX"
        subtitle="Dive into our technology and ecosystem."
      />
      <PageSection title="Core Concepts">
        {coreConcepts.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>
      <PageSection title="Technologies">
        {technologies.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>
    </Layout>
  );
}