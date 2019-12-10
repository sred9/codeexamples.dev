import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostListing from '../components/PostListing';
import Header from '../components/header';
import Footer from '../components/footer';
import MetaPost from '../components/MetaPost';
import logo from '../images/android-chrome-512x512.png'
import '../components/centeral-styles.css';


export default class TagTemplate extends Component {
  render() {
    const { tag } = this.props.pageContext;
    const ex = this.props.data.allMarkdownRemark.edges.length > 1 ? 'Examples' : 'Example'
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const total = this.props.data.allMarkdownRemark.totalCount;
    const tagHead = `${tag.slice(0, 1).toUpperCase() + tag.slice(1)}`
    const { url, description } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <MetaPost title={tagHead}
          url={url}
          description={description}
          thumbnail={url + logo}
          stop
        />
        <Header />
        <div className="ui-wrapper">
          <h1 className="slim">{total} {ex} Available in <u>{tag}</u></h1>
          <PostListing postEdges={postEdges} />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "ll")
            template
          }
        }
      }
    }
     site {
      siteMetadata {
        url
        description
      }
    }
  }
`