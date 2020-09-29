const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://#{site}#',
    gaTrackingId: "#{ga}#",
    trailingSlash: false,
  },
  header: {
    logo: 'https://www.uv.cl/images/menu_marca_mono.png',
    logoLink: 'https://#{site}#',
    title:
      "Documentos de clases de Desarrollo Web y Arquitectura Web",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: '#{indexName}#',
      algoliaAppId: "#{algoliaAppId}#",
      algoliaSearchKey: "#{algoliaSearchKey}#",
      algoliaAdminKey: "#{algoliaAdminKey}#",
    },
  },
  sidebar: {
    forcedNavOrder: [
    ],
    collapsedNav: [
      
    ],
    links: [{ text: 'trifenix', link: 'https://www.trifenix.io' }],
    frontline: true,
    ignoreIndex: true,
    title:
      "Docs",
  },
  siteMetadata: {
    title: 'Arquitectura de software - Desarrollo Web',
    description: 'Cursos de la universidad de valparaiso',
    ogImage: null,
    docsLocation: '#{home-git}#',
    favicon: 'https://www.uv.cl/favicon.ico',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Docs de la universidad de valparaiso',
      short_name: 'valpo-docs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
