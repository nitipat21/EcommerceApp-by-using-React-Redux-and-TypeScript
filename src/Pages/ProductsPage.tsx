import { useDispatch, useSelector } from 'react-redux'
import FilterProducts from '../Layouts/FilterProducts'
import Products from '../Layouts/Products'
import { RootState } from '../store'
import { shopSliceActions } from '../store/productsSlice'

const ProductsPage = () => {

    const dispatch = useDispatch();

    const isDisplayFilter = useSelector((state:RootState) => state.shop.isDisplayFilter);
    const windowWidth = useSelector((state:RootState) => state.menu.windowWidth);

    return (
      <div className="productsPage">
          <main className='main-productsPage'>
            <div className="filter-wrapper">
              <div className="filter-container">
                <button className='displayFilterButton'onClick={()=>dispatch(shopSliceActions.toggleFilter())}>Filter</button>
                {(isDisplayFilter || windowWidth>=1024) && <FilterProducts/>}
              </div>
            </div>
              <Products/>
          </main>
      </div>
    )
}

export default ProductsPage