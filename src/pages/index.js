import React, { Component } from 'react'
import Link from 'gatsby-link'
import Logo from '../components/logo'
import Bubbles from '../components/bubble';
import ProductTile from '../components/productTile';

const IndexPage = () => (
  <div id='background-wrap'>
    <Bubbles amount='10' />
    <Logo />
    <div className='container'>
      <div className='row'>
        <ProductTile name='Photograffiti' page="/pgx/" />
        <ProductTile name='Calm Kids' page="" />
        <ProductTile name="What's My Claim Worth" page="" />
      </div>
      <div className='row'>
        <ProductTile name="Scrumptious Students" page="" />
        <ProductTile name="Super Side Swiper" page="" />
        <ProductTile name="Top Totty" page="" />
      </div>
    </div>
    
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
