const jsn = require("./package.json")

const searchSupported = "#{search-supported}#"=="true";

const pwaSupported = "#{pwa-supported}#"=="true";






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
    social: `#{html-social}#`,    
    search: {
      enabled: searchSupported,
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
    
    frontline: true,
    ignoreIndex: true,
    title:
      `#{side-title}# - v : ${jsn.version}`,
  },
  siteMetadata: {
    title: '#{site-title-metadata}#',
    description: '#{site-description-metadata}#',
    ogImage: null,
    docsLocation: '#{home-git}#',
    favicon: '#{favicon}#',
  },
  pwa: {
    enabled: pwaSupported, // disabling this will also remove the existing service worker.
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
