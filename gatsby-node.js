const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
const _ = require('lodash');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {

        resolve(graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
              fields{
                  slug
              }
            frontmatter {
              title
              date
              tags
              template
            }
          }
        }
      }
    }
  `).then(result => {
            if (result.errors) {
                console.log(result.errors)
                return reject(result.errors)
            }
            const tagSet = new Set()
            const blogTemplate = path.resolve('./src/templates/post.js');
            const tagTemplate = path.resolve('./src/templates/tags.js')
            console.log(result.data.allMarkdownRemark.edges.length)

            const allPosts = result.data.allMarkdownRemark.edges

            paginate({
                createPage, // The Gatsby `createPage` function
                items: allPosts, // An array of objects
                itemsPerPage: 15, // How many items you want per page
                pathPrefix: ({ pageNumber }) => {
                    if (pageNumber === 0) {
                        return `/`
                    } else {
                        return `/page`
                    }
                },
                component: path.resolve('src/templates/index.js'), // Just like `createPage()`
            })

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                if (node.frontmatter.tags) {
                    node.frontmatter.tags.forEach(tag => {
                        tagSet.add(tag)
                    })
                }

                if (node.frontmatter.template === 'post') {
                    createPage({
                        path: node.fields.slug,
                        component: blogTemplate,
                        context: {
                            slug: node.fields.slug,
                            tag: node.frontmatter.tags[0]
                        }, // additional data can be passed via context
                    })
                }
            })

            const tagList = Array.from(tagSet);

            tagList.forEach(tag => {
                createPage({
                    path: `/tag/${_.kebabCase(tag)}/`,
                    component: tagTemplate,
                    context: {
                        tag
                    },
                })
            })
            return
        })
        )
    })
}


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })

    }
}