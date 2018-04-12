import React from 'react'
import Link from 'gatsby-link'
import YouTube from 'react-youtube';
import Logo from '../components/logo'

const IndexPage = () => (
  <div>
    <Logo />
    <YouTube
        videoId={'v8q7TARVCEU'}                  // defaults -> null
    />
    
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
