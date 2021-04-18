/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JasonScriptingUtilities',
  tagline: '⚙️A Powerful Client with Multiple Exclusive Features',
  url: 'https://jaxontekk.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JaxonTekk', // Usually your GitHub org/user name.
  projectName: 'JasonScriptingUtilities', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'JasonScriptingUtilities',
      logo: {
        alt: 'My Site Logo',
        src: 'img/jaxontekk.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Installation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/JaxonTekk/JasonScriptingUtilities',
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
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ZEDUWwJZPy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Updates',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/JaxonTekk/JasonScriptingUtilities',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jason Chen, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/JaxonTekk/JasonScriptingUtilities',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/JaxonTekk/JasonScriptingUtilities/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
