import React, { Component } from 'react'
import { Link } from 'gatsby'
import Subscribe from './subscribe'
import kebabCase from 'lodash/kebabCase';

export default class PostListing extends Component {
    getPostList() {
        const { postEdges } = this.props
        const postList = postEdges.map(postEdge => {
            return {
                path: postEdge.node.fields.slug,
                tags: postEdge.node.frontmatter.tags,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.frontmatter.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead,
            }
        })
        return postList
    }

    render() {
        const { simple } = this.props
        const postList = this.getPostList()

        return (
            <div className="main-content">
                <main>
                    {postList.map(post => {
                        return (
                            <div className="link-content" key={post.title}>
                                <Link to={post.path} className="link">
                                    <div className="link-pista">
                                        <h2>{post.title}</h2>
                                        <time dateTime={post.date}>{post.date}</time>
                                        <hr />
                                    </div>
                                </Link>
                                <div className="tags">
                                    {post.tags && post.tags.map(tag => (
                                        <Link to={`/tag/${kebabCase(tag)}/`} key={tag} className="tag-style">{tag}</Link>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </main>
                <aside>
                    <Subscribe />
                </aside>
            </div>
        )
    }
}

