// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Craftsman',
  siteDescription:
  'Explicando codigo de forma estupida 😅',
  siteUrl: 'https://craftsman-code.lol',
  titleTemplate: `%s | Craftsman`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-74262845-1',
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'static/posts/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
          categories: {
            typeName: 'Category',
            create: true,
          },
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'Craftsman',
          description:
            'Explicando codigo de forma estupida 😅',
          link: 'https://craftsman-code.lol',
        },
        rss: {
          enabled: true,
          output: '/feed.xml',
        },
        atom: {
          enabled: false,
          output: '/feed.atom',
        },
        json: {
          enabled: true,
          output: '/feed.json',
        },

        maxItems: 25,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: node.summary,
        }),
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
        },
      },
    },
  ],
  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
    Category: '/category/:id',
  },
  transformers: {
    remark: {
      plugins: [
        ['gridsome-plugin-remark-shiki', { theme: 'monokai', skipInline: true }],
      ],
    },
  },
}
