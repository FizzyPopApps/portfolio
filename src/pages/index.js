import React, { Component } from 'react'
import Link from 'gatsby-link'
import Logo from '../components/logo'
import Bubbles from '../components/bubble';
import ProductTile from '../components/productTile';

const IndexPage = () => (
  <div id='background-wrap'>
    <Bubbles amount='50' />
    <Logo />
    <div className='container'>
      <div className='row'>
        <ProductTile display='true' name='Photograffiti' page="/pgx/" />
        <ProductTile display='true' name='Calm Kids' page="" />
        <ProductTile display='true' name="What's My Claim Worth" page="" />
      </div>
      <div className='row'>
        <ProductTile display='true' name="Scrumptious Students" page="" />
        <ProductTile display='true' name="Super Side Swiper" page="" />
        <ProductTile display='true' name="Top Totty" page="" />
      </div>
    </div>
    
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
