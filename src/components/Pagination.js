import React from 'react';
import { Link } from 'gatsby'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'


const color = { color: 'inherit' }

const Pagination = ({ pageContext }) => (
    <ul className="pager">
        <li className="prev"> {pageContext.previousPagePath && <Link style={color} to={pageContext.previousPagePath} rel="prev">  <FaArrowLeft />&nbsp; Previous Page</Link>}</li>
        <li className="next">{pageContext.nextPagePath && <Link style={color} to={pageContext.nextPagePath} rel="next">Next Page  &nbsp;  <FaArrowRight /></Link>}</li>
    </ul>
)

export default Pagination;
