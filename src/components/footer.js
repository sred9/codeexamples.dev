import { Link } from "gatsby"
import React from "react"
import './footer.css'

const Footer = ({ siteTitle }) => (
    <footer className="footer">
        <hr />
        <div className="center">
            <div className="footer-nav">
                <div className="left-col">
                    <Link to="/">
                        {siteTitle}
                    </Link>
                    <a href="https://twitter.com/saigowthamr"> @saigowthamr</a>
                </div>

                <div className="right-colo">

                </div>

            </div>
        </div>
    </footer>
)

Footer.defaultProps = {
    siteTitle: `Code Examples`,
}

export default Footer
