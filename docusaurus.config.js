// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CurseForge Community",
  tagline: "Welcome to the CurseForge Community",
  url: "https://cf-community.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "curseforgecommunity",
  projectName: "curseforgecommunity.github.io",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/curseforgecommunity/curseforgecommunity.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/curseforgecommunity/curseforgecommunity.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CurseForge Community",
        items: [
          {
            to: "/games",
            position: "left",
            label: "Games",
          },
          {
            to: "/tools",
            position: "left",
            label: "Tools",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/curseforgecommunity/curseforgecommunity.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "Community Tools",
                to: "/tools",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/vBuzrFepcB",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/curseforgecommunity/curseforgecommunity.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CurseForge Community, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
