// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IBM Defense Model Lab Guides',
  tagline: 'Hands-on labs for IBM Defense Model',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://ibm.github.io',
  baseUrl: '/defense-model-bootcamp/',

  organizationName: 'IBM',
  projectName: 'defense-model-bootcamp',

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/IBM/defense-model-bootcamp/edit/main/defense-model-labs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'IBM Defense Model Lab Guides',
        logo: {
          alt: 'IBM Logo',
          src: 'img/ibm-logo.png',
          srcDark: 'img/ibm-logo-dark.png',
          height: 60,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Labs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://github.com/IBM/defense-model-bootcamp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Labs',
            items: [
              {
                label: 'Lab Overview',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Event Resources',
                to: '/docs/resources',
              },
            ],
          },
          {
            title: 'IBM Resources',
            items: [
              {
                label: 'IBM Defense Model',
                href: 'https://www.ibm.com/products/watsonx-ai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/IBM/defense-model-bootcamp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IBM Corporation. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
