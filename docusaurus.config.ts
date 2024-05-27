import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Dapp Guides",
  tagline: "Builder Guides for Create Dapps on MultiversX",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://guides.cryptobay.space",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "phybyte",
  projectName: "dapp-guides",

  onBrokenLinks: "warn", //"throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      logo: {
        alt: "CryptoBay Guides",
        src: "img/logo.png",
        href: "/",
      },

      items: [
        {
          href: "/Frontend",
          label: "Frontend",
        },
        {
          href: "/Backend",
          label: "Backend",
        },
        {
          href: "/Assets",
          label: "Assets",
        },
        {
          href: "/Observer",
          label: "Observer",
        },
        {
          href: "/Validator",
          label: "Validator",
        },
        {
          href: "/Sovereign-Chains",
          label: "Sovereign Chains",
        },
        {
          href: "https://github.com/phybyte/mx-guides",
          label: "GitHub",
          position: "right",
        },
      ],
      
    },
    colorMode: {
      // Disable the light/dark mode switch and force dark mode
      defaultMode: "dark",
      disableSwitch: true,
    },
    stylesheets: ["src/css/custom.css"],
    footer: {
      style: "light",
      copyright: `Made with ❤️ by Phybyte`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
