import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import '../components/centeral-styles.css'
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import MetaPost from '../components/MetaPost'
import logo from '../images/android-chrome-512x512.png'

export default ({ data }) => {
  const url = data.site.siteMetadata.url
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
                  {node.frontmatter.tags.map(tag => (
                    <Link to={`/tags/${tag}/`} key={tag} className="tag-style" >{tag}</Link>
                  ))}
                </div>
              </div>
            ))}

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
  query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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