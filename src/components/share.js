import React from 'react'
import twitterIcon from '../images/twitter.png'
import fbIcon from '../images/facebook.png'

const Share = props => (
  <div style={{ marginTop: "3rem" }}>
    <div className="social">
      <div>Share:</div>
      <div style={{ margin: "0 10px 0 10px" }}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${props.url +
            props.pathname}`}
          target="blank"
        >
          <img src={fbIcon} alt="facebook" className="shareme" style={{ marginBottom: 0 }} />
        </a>
      </div>
      <div>
        <a
          href={`https://twitter.com/intent/tweet?url=${props.url +
            props.pathname}&text=${props.title} by @saigowthamr`}
          target="blank"
        >
          <img src={twitterIcon} alt="twitter" style={{ marginBottom: 0 }} />
        </a>
      </div>
    </div>
  </div>
)

export default Share
