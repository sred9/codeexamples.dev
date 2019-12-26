import React, { Component } from 'react';
import { Link } from 'gatsby';
import Subscribe from './subscribe';
import Share from './share';
import MetaPost from './MetaPost';
import kebabCase from 'lodash/kebabCase';


class PostMarkdown extends Component {
    state = {
        similarPosts: this.props.similar.nodes.sort(function () {
            return 0.5 - Math.random()
        }
        ).slice(0, 5)
    }
    render() {
        const post = this.props.data.markdownRemark
        const similar = this.props.similar
        const url = this.props.data.site.siteMetadata.url
        const pathname = this.props.location.pathname
        const { title, date, tags } = post.frontmatter
        const author = this.props.data.site.siteMetadata.author
        return (
            <div className="ui-wrapper">
                <MetaPost
                    title={title}
                    description={post.excerpt}
                    date={date}
                    url={url}
                    pathname={pathname}
                    thumbnail={this.props.thumbnail}
                    stop
                />
                <div className=" main-content">
                    <main className="main-box">
                        <article>
                            <div>
                                {date && <time dateTime={date}>{date}</time>}
                                <strong style={{ float: "right" }}>
                                    <span>by{' '}
                                        <a
                                            style={{ color: ' rgb(14, 86, 140)' }}
                                            href="https://twitter.com/saigowthamr"
                                        >
                                            {author}
                                        </a></span>
                                </strong>
                            </div>
                            <h1 className="title" >{title}</h1>
                            <span className="bread-crumbs"><Link to="/">Home</Link> {" » "}<Link
                                to={`/tag/${kebabCase(tags[0])}/`} >{tags[0]}</Link>{" » "}{title}</span>
                            <div className="post-meta">
                                <div className="">
                                    {tags && tags.map(tag => (
                                        <strong key={tag}><Link to={`/tag/${kebabCase(tag)}/`} className="tag-style">{tag}</Link></strong>
                                    ))}
                                </div>
                                {/* <strong className="readtime">{post.timeToRead && post.timeToRead + "min read"}</strong> */}
                            </div>
                            <div
                                className="content-render"
                                style={{ marginTop: '4.4rem' }}
                                ref={node => this.article = node}
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                            <Share
                                title={`${title}`}
                                url={url}
                                pathname={pathname}
                            />
                        </article>
                        <hr />
                        <a href="https://reactgo.com/best-programming-laptops/">Best Programming laptops</a>
                    </main>
                    <aside className="aside-box">
                        <Subscribe />
                        {
                            similar.nodes.length > 1 && <div className="similar-articles">
                                <h2>Related Examples</h2>
                                {this.state.similarPosts.map((node) => {
                                    if (node.frontmatter.title !== title) {
                                        return <Link to={node.fields.slug} key={node.fields.slug}>{node.frontmatter.title}</Link>
                                    }
                                })}
                            </div>
                        }
                    </aside>
                </div>
            </div>
        )
    }

}

export default PostMarkdown;