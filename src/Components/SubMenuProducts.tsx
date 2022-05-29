import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../store'
import { menuSliceActions } from '../store/menuSlice'
import { shopSliceActions } from '../store/productsSlice'

const SubMenuProducts:FC = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isDisplayFilter = useSelector((state:RootState) => state.shop.isDisplayFilter);

  const directToProducts = (type:string) => {
    dispatch(menuSliceActions.displayMenu());

    if (!isDisplayFilter) {
      dispatch(shopSliceActions.toggleFilter());
    }
    
    dispatch(shopSliceActions.setFilterType(type)); 
    navigate('/products');
  }

  return (
    <div className='subMenuProducts'>
        <a onClick={()=>directToProducts('BestSeller')}>Best Sellers</a>
        <a onClick={()=>directToProducts('Cake')}>Cakes</a>
        <a onClick={()=>directToProducts('Cookie')}>Cookies</a>
        <a onClick={()=>directToProducts('Pie')}>Pies</a>
    </div>
  )
}

export default SubMenuProducts