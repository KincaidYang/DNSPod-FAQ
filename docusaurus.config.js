// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DNSPod FAQ',
  tagline: 'DNSPod 相关产品常见问题',
  url: 'https://smb.wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KincaidYang', // Usually your GitHub org/user name.
  projectName: 'DNSPod-FAQ', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KincaidYang/DNSPod-FAQ/tree/main/blog',
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
      navbar: {
        title: 'DNSPod FAQ',
        items: [
          /** {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          }, */
          {
            href: 'https://github.com/KincaidYang/DNSPod-FAQ',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '教程',
            items: [
              {
                label: '介绍',
                to: '/',
              },
              {
                label: 'FAQ',
                to: '/category/faq',
              },
              {
                label: '自助排障',
                to: '/category/网站自助排障',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'DNSPod 公众号',
                href: 'https://cloudcache.tencent-cloud.cn/open_proj/proj_qcloud_v2/tc-console/dnspod/gateway/css/img/wechat.png',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'DNSPod 官网',
                href: 'https://www.dnspod.cn/',
              },
              {
                label: 'DNSPod 域名检测工具',
                href: 'https://tool.dnspod.cn/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/KincaidYang/DNSPod-FAQ',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DNSPod FAQ.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
