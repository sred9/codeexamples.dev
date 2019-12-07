var _ = require('lodash');

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://codeexamples.dev'

module.exports = {
  siteMetadata: {
    title: `Code Examples`,
    description: `Examples about various programming languages like JavaScript, Python, Bash, Rust, Angular, React, Vue.js etc.`,
    author: `@saigowthamr`,
    url: URL,
    siteUrl: URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-141254872-2`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: URL,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Code Examples',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#ffff',
        display: 'standalone',
        icon: 'src/images/android-chrome-512x512.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-code-titles`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-external-links`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 20,
                sort: { fields: [frontmatter___date], order: DESC }
              ) {
                edges {
                  node {
                    excerpt (pruneLength: 200)
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: "Code Examples rss feed"
          },
        ],
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
  ],
}
