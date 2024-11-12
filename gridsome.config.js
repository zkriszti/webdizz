// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: "https://krisztinazavecz.com",
  siteName: "HTML, CSS, JavaScript and related technologies",

  port: 8200,

  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs", "remark-attr"],
    },
  },

  css: {
    loaderOptions: {
      stylus: {
        // options here will be passed to stylus-loader
      },
    },
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: "gridsome-plugin-feed",
      options: {
        contentTypes: ["Post"],
        feedOptions: {
          title: "krisztinazavecz.com - Post Feed",
          description: "Krisztina Závecz | Frontend Developer",
          link: "https://krisztinazavecz.com/",
          language: "en",
        },
        rss: {
          enabled: true,
          output: "/rss.xml",
        },
        maxItems: 25,
        filterNodes: (node) => !!node.draft,
        nodeToFeedItem: (node) => ({
          title: node.title,
          author: node.author,
          date: node.date,
        }),
      },
    },
  ],
};
