import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OpenGeometry',
  tagline: '3D CAD on the web',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://opengeometry.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opengeometry', // Usually your GitHub org/user name.
  projectName: 'openGeometry', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'opengeometry',
          sidebarPath: './sidebar/sidebar-opengeometry.ts',
          routeBasePath: 'opengeometry',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'openplans',
        path: 'openplans',
        routeBasePath: 'openplans',
        sidebarPath: './sidebar/sidebar-openplans.ts',
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'OpenGeometry',
      logo: {
        alt: 'OpenGeometry Logo',
        src: 'img/ogLogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kernelSidebar',
          position: 'left',
          label: 'Kernel',
        },
        {
          href: '/openplans/intro',
          position: 'left',
          label: 'OpenPlans',
        },
        {
          href: 'https://github.com/opengeometry-io/',
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
              label: 'Example',
              href: 'https://demos.opengeometry.io/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/9wJpbfgGGA',
            },
            {
              label: 'X',
              href: 'https://x.com/opengeometry',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/opengeometry-io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenGeometry.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
