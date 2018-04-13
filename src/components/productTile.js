import React from 'react'
import Link from 'gatsby-link'

const ProductTile = ({page, name}) => (
    <div className='col-md-4'>
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