import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import '../components/centeral-styles.css'
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import MetaPost from '../components/MetaPost'
import logo from '../images/android-chrome-512x512.png'
import kebabCase from 'lodash/kebabCase';
import Pagination from '../components/Pagination';

export default ({ data, pageContext }) => {
  const url = data.site.siteMetadata.url;
  // const pageContext = this.props.pageContext;

  return (
    <Layout>
      <Header />
      <MetaPost
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        url={url}
        thumbnail={url + logo}
        stop
        no
      />
      <div className="ui-wrapper">
        <div className="main-content">
          <main>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="link-content" key={node.id} >
                <Link to={node.fields.slug} className="link">
                  <div className="link-pista">
                    <h2>{node.frontmatter.title}</h2>
                    <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
                    <hr />
                  </div>
                </Link>
                <div className="tags">
                  {node.frontmatter.tags && node.frontmatter.tags.map(tag => (
                    <Link to={`/tag/${kebabCase(tag)}/`} key={tag} className="tag-style" >{tag}</Link>
                  ))}
                </div>
              </div>
            ))}

            <Pagination pageContext={pageContext} />
          </main>
          <aside>
            <Subscribe />
          </aside>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query AllPosts($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          skip: $skip
          limit: $limit
          ) {
        totalCount
      edges {
        node {
        id
        fields{
           slug
        }
      frontmatter {
        title
        date(formatString: "MMM DD")
        tags
    }
    excerpt
  }
}
}
 site {
      siteMetadata {
        title
        url
        description
      }
    }
}
`