import React from 'react'
import Link from 'gatsby-link'
import Logo from '../components/logo';
import YouTube from 'react-youtube';

const PGXPage = () => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Logo />
    <YouTube
        videoId={'v8q7TARVCEU'}                  // defaults -> null
    />
    <Link to="/">Go back</Link>
  </div>
)

export default PGXPage