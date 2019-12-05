import React from 'react'
import PostMarkDown from '../components/PostMarkdown'
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import logo from '../images/android-chrome-512x512.png'
import '../components/centeral-styles.css';


class Post extends React.Component {
  render() {
    // const post = this.props.data.markdownRemark;
    const { url } = this.props.data.site.siteMetadata
    const similar = this.props.data.allMarkdownRemark;

    return (
      <Layout>
        <Header />
        <PostMarkDown
          data={this.props.data}
          location={this.props.location}
          pageContext={this.props.pageContext}
          similar={similar}
          thumbnail={url + logo}
        />
        <Footer />
      </Layout>
    )
  }
}

export default Post;

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!,$tag:String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date(formatString: "ll")
        tags
      }
    }
    site {
      siteMetadata {
        url
        author
      }
    }
allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
    nodes {
      frontmatter {
        title
      }
      fields{
        slug
      }
    }
  }
}
`