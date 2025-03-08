import React from 'react'
import './Css/ShopCategory.css'

export const ShopCategory = (props) => {
  const {All_products} = React.useContext(ShopContext);
  return (
  <div className="shop-catory">
    <div className="shopcategory-indexsort">
      <p>
        <span>Showing 1-10</span> out of 30 product
      </p>
    </div>

  </div>

  )
}
