// module.exports = {
//   title: 'Elastik Docs',
//   url: 'https://vedisha-r.github.io',
//   baseUrl: '/',
//   organizationName: 'vedisha-r', // GitHub username
//   projectName: 'Elastik',     // GitHub repo name
//   deploymentBranch: 'gh-pages',
//   trailingSlash: false,
// },
// presets; [
//   [
//     'classic',
//     {
//       docs: {
//         path: 'elastik-docs',
//         routeBasePath: 'elastik-docs', // or '/' if you want docs at root
//         sidebarPath: require.resolve('./sidebars.js'),
//       },
//     },
//   ],
// ]


module.exports = {
  title: 'Elastik Docs',
  url: 'https://vedisha-r.github.io',
  baseUrl: '/Elastik/',
  organizationName: 'vedisha-r', // GitHub username
  projectName: 'Elastik', // GitHub repo name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        // theme: {
        //   customCss: require.resolve('./src/css/custom.css'),
        // },
      },
    ],
  ],
};
