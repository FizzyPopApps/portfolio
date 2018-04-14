import React from 'react'
import Link from 'gatsby-link'
import './productTile.css'

const ProductTile = ({page, name, display}) => (
    <div className='col-md-4 productTile'>
          <Link to={page}>
            <div className="square">
              <div className="content">
                  {name}
              </div>
            </div>
          </Link>
        </div>
)

export default ProductTile