const jsn = require("./package.json")

const searchSupported = "true" == "true";

const pwaSupported = "true" == "true";

const linkHeaders = [{
  text: 'trifenix',
  link: 'https://www.trifenix.io'
}];

const sideBarLinks = [{
  text: 'trifenix',
  link: 'https://www.trifenix.io'
}];




const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://logos.trifenix.cl',
    gaTrackingId: "",
    trailingSlash: false,
  },
  header: {
    logo: 'logo1.png',
    logoLink: 'https://logos.trifenix.cl',
    title: "Logos e iconos",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: 'ayudanos con tus pull request ',
    social: ``,
    links: linkHeaders,
    search: {
      enabled: searchSupported,
      indexName: 'logos',
      algoliaAppId: "FZD56GX53Y",
      algoliaSearchKey: "70e2b920cc9e222045bd1586f9c976bb",
      algoliaAdminKey: "1864994855ac95c74980fedfa024486b",
    },
  },
  sidebar: {
    forcedNavOrder: [],
    collapsedNav: [

    ],
    links: sideBarLinks,
    frontline: true,
    ignoreIndex: true,
    title: `Logos e iconos como recursos. - v : ${jsn.version}`,
  },
  siteMetadata: {
    title: 'Logos e iconos para trifenix',
    description: 'logos e iconos como material de apoyo',
    ogImage: null,
    docsLocation: 'https://github.com/trifenix/logos/blob/main',
    favicon: 'logo2.ico',
  },
  pwa: {
    enabled: pwaSupported, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Logos trifenix',
      short_name: 'logos',
      start_url: '/',
      background_color: '#FF0000',
      theme_color: '#FF0000',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [{
        src: 'logo1.png',
        sizes: `512x512`,
        type: `image/png`,
      }, ],
    },
  },
};

module.exports = config;
