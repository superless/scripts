const config = {
    gatsby: {
      pathPrefix: '/',
      siteUrl: 'https://localhost:8000',
      gaTrackingId: "UA-176549140-1",
      trailingSlash: false,
    },
    header: {
      logo: 'https://www.uv.cl/images/menu_marca_mono.png',
      logoLink: 'https://uv.trifenix.io',
      title:
        "Documentos de clases de Desarrollo Web y Arquitectura Web",
      githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
      helpUrl: '',
      tweetText: '',
      social: ``,
      links: [{ text: '', link: '' }],
      search: {
        enabled: true,
         indexName: 'test-index',
        algoliaAppId: "FZD56GX53Y",
        algoliaSearchKey: "70e2b920cc9e222045bd1586f9c976bb",
        algoliaAdminKey: "1864994855ac95c74980fedfa024486b",
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
      docsLocation: 'https://github.com/trifenix/wiki-uv/blob/wikiMaster',
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
  
  