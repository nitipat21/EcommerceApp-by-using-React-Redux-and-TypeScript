import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterProducts from '../Layouts/FilterProducts'
import Products from '../Layouts/Products'
import { RootState } from '../store'
import { shopSliceActions } from '../store/productsSlice'

const ProductsPage = () => {

    const dispatch = useDispatch();

    const isDisplayFilter = useSelector((state:RootState) => state.shop.isDisplayFilter);

    return (
      <div className="productsPage">
          <main className='main-productsPage'>
            <div className="filter-wrapper">
              <div className="filter-container">
                <button className='displayFilterButton'onClick={()=>dispatch(shopSliceActions.toggleFilter())}>Filter</button>
                {isDisplayFilter && <FilterProducts/>}
              </div>
            </div>
              <Products/>
          </main>
      </div>
    )
}

export default ProductsPage