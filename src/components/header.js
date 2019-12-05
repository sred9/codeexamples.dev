import { Link } from "gatsby"
import React from "react"
import './header.css';

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="center header-container">
      <Link to="/">
        <div>
          <span>{siteTitle}</span>
        </div>
      </Link>
      <nav className="navigation">
        <Link to="/tag/react/">React</Link>
        <Link to="/tag/vue/">Vue.js</Link>
        <Link to="/tag/angular/">Angular</Link>
      </nav>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: `Code Examples`,
}

export default Header
