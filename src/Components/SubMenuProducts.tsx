import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { menuSliceActions } from '../store/menuSlice'

const SubMenuProducts:FC = () => {

  const dispatch = useDispatch();

  return (
    <div className='subMenuProducts'>
        <Link to='/products' onClick={()=>dispatch(menuSliceActions.displayMenu())}>Best Sellers</Link>
        <Link to='/products' onClick={()=>dispatch(menuSliceActions.displayMenu())}>Cakes</Link>
        <Link to='/products' onClick={()=>dispatch(menuSliceActions.displayMenu())}>Cookies</Link>
        <Link to='/products' onClick={()=>dispatch(menuSliceActions.displayMenu())}>Pies</Link>
    </div>
  )
}

export default SubMenuProducts