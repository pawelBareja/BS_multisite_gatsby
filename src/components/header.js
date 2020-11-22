import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import '../assets/style/header.css'

const Header = ({ siteTitle }) => {

  const [heading, setHeading] = useState(true)

  useEffect(e => {
    let distanceFromTop = window.pageYOffset

    window.addEventListener('scroll', () => {
      let newDistanceFromTop = window.pageYOffset
      let difference = distanceFromTop - newDistanceFromTop

      if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
        setHeading(true)
      } else {
        setHeading(false)
      }

      difference = distanceFromTop - newDistanceFromTop
      distanceFromTop = newDistanceFromTop
    })
  })

  return (<header
    className={heading ? 'header' : 'header hide'}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
