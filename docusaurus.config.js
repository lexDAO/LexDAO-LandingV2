const path = require("path");

module.exports = {
  title: 'lexDAO',
  tagline: 'Community of Legal Engineers',
  url: 'https://nifty-heisenberg-a6b091.netlify.app',
  baseUrl: '/',
  favicon: 'img/lexDAO-Substack-Header.png',
  organizationName: 'lexDAO', // Usually your GitHub org/user name.
  projectName: 'lexDAO', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "lexDAO",
      // logo: {
      //   alt: 'lexDAO-Logo',
      //   src: 'img/lexDAO-Substack-Header.png',
      // },
      links: [ 
        {
          href: 'DAOLINK',
          label: 'DAO',
          position: 'right',
        },
        {to: 'docs',activeBasePath: 'docs/', label: 'Handbook', position: 'right'},
        {
          href: 'https://snapshot.page/#/lexdao',
          label: 'Snapshot',
          position: 'right',
        },
        {
          href: 'https://discord.gg/qbUhmH4', // need link in handbook
          label: 'Join',
          position: 'right',
        },
        {
          href: 'https://discord.gg/qbUhmH4',
          label: 'Community',
          position: 'right',
        },
        {
          href: 'https://discord.gg/KmFNEmp',
          label: 'Support',
          position: 'right',
        },
        {
          href: 'https://dapps.lexdao.org',
          label: 'dApps',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook',
          items: [
            {
              label: 'Manifesto',
              to: 'docs/manifesto',
            },
            {
              label: 'Mission',
              to: 'docs/doc2/',
            },
            {
              label: 'How to Join',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ecXCaWC',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getjuris',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://getjuris.com/publications',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jurisproject',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} lexDAO.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/scss/index.scss'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, "./node_modules/docusaurus-plugin-sass")],
};
