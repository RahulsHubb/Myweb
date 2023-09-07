import React from 'react'

const ProductCard = () => {
  return (
    <div className='product_card'>
        <img src='https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5415202/2023/3/30/48bb1aab-42cb-4271-afe9-a91b5c5c3f311680168086320-Roadster-Men-Grey-Cargos-Trousers-5171680168085369-1.jpg' alt='' className=' product_img'/>

        <div className='product-productMetaInfo'>
          <h3 className='product_brand'>Roadster</h3>
          <p className='product_product'>Men Slim Fit Cotton Cargos</p>
          <div className='product-price'>
            <span className='product_sell_price'> RS. 839</span>
            <span className=' product_mrp'> RS. 2399</span>
            <span className='product-discountPercentage'>( 65 % OFF)</span>
          </div>

        </div>
    </div>
  )
}

export default ProductCard