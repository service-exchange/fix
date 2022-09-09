const devServerPlugin = require("./src/plugins/devServer/index.js");

const isProd = process.env.NODE_ENV === "production";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Tele-CMS - Documentation",
  tagline: "Low-code framework to Build internal tools and business apps.",
  url: "https://docs.service.exchange",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "Tele-CMS", // Usually your GitHub org/user name.
  projectName: "Tele-CMS", // Usually your repo name.
  themeConfig: {
    image: "img/telecms-og-image.png",
    announcementBar: {
      id: "support_us",
      content:
        '⭐️ If you like Tele-CMS, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/service-exchange/fix">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Tele-CMS">Twitter</a>',
      backgroundColor: "#297edf",
      textColor: "#ffffff",
      isCloseable: true,
    },
    colorMode: {},
    navbar: {
      logo: {
        href: "/docs",
        alt: "Tele-CMS Logo",
        src: "img/logo.svg",
        width: 90,
      },
      items: [
        {
          type: "search",
          position: "left",
        },
        {
          href: "https://github.com/service-exchange/fix",
          position: "right",
          className: "navbar-social-link navbar-github-logo",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://join.slack.com/",
          position: "right",
          className: "navbar-social-link navbar-slack-logo",
          "aria-label": "Slack workspace",
        },
        {
          href: "https://twitter.com/Tele-CMS",
          position: "right",
          className: "navbar-social-link navbar-twitter-logo",
          "aria-label": "Twitter account",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://join.slack.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/service-exchange/fix",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Tele-CMS",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tele-CMS Solutions, Inc.`,
    },
    algolia: {
      appId: "O8HQRLI0WA",
      apiKey: process.env.ALGOLIA_API_KEY || "development", // Public API key: it is safe to commit it
      indexName: "telecms",
      contextualSearch: true,
      externalUrlRegex: "external\\.com|domain\\.com",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/service-exchange/fix/blob/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {},
        gtag: isProd
          ? {
              trackingID: process.env.GA_MID,
              // Optional fields.
              anonymizeIP: true, // Should IPs be anonymized?
            }
          : undefined,
      },
    ],
  ],
  plugins: [devServerPlugin],
};
