


const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://#{site}#',
    gaTrackingId: "#{ga}#",
    trailingSlash: false,
  },
  header: {
    logo: '#{logo-url}#',
    logoLink: 'https://#{site}#',
    title:
      "#{title}#",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '#{help-url}#',
    tweetText: '#{tweet-text}#',
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
      "#{side-title}#",
  },
  siteMetadata: {
    title: '#{site-title-metadata}#',
    description: '#{site-description-metadata}#',
    ogImage: null,
    docsLocation: '#{home-git}#',
    favicon: '#{favicon}#',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: '#{manifest-name}#',
      short_name: '#{manifest-short-name}#',
      start_url: '/',
      background_color: '#{background-color}#',
      theme_color: '#{theme-color}#',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: '#{src-icon-pwa}#',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
