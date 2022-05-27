import React from 'react'
import FilterProducts from '../Layouts/FilterProducts'
import Products from '../Layouts/Products'

const ProductsPage = () => {

    

  return (
    <div className="productsPage">
        <main className='main-productsPage'>
            <FilterProducts/>
            <Products/>
        </main>
    </div>
  )
}

export default ProductsPage