// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gateway',
  tagline: 'Document',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gateway-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'D3LAB-DAO', // Usually your GitHub org/user name.
  projectName: 'gateway-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Gateway',
        logo: {
          alt: 'Gateway Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introduction',
          },
          {
            href: '/category/for-developers',
            position: 'left',
            label: 'For Developers',
          },
          {
            href: 'https://youtu.be/RKFvcTzRr3Y',
            position: 'left',
            label: 'Video',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/D3LAB-DAO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'For Developers',
                to: '/category/for-developers',
              },
              {
                label: 'Video',
                to: 'https://youtu.be/RKFvcTzRr3Y',
              },
            ],
          },
          {
            title: 'Gateway GitHub',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Gateway Docs',
                href: 'https://github.com/D3LAB-DAO/gateway-docs',
              },
              {
                label: 'Gateway Contract',
                href: 'https://github.com/D3LAB-DAO/gateway-contract',
              },
              {
                label: 'Gateway Backend',
                href: 'https://github.com/D3LAB-DAO/gateway-backend',
              },
            ],
          },
          {
            title: 'D3LAB',
            items: [
              {
                label: 'lukepark327@gmail.com',
                href: 'mailto:lukepark327@gmail.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/D3LAB-DAO',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/d3lab',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Project Gateway.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
