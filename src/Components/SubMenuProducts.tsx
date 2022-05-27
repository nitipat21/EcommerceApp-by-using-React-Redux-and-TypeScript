import { FC } from 'react'
import { Link } from 'react-router-dom'

const SubMenuProducts:FC = () => {
  return (
    <div className='subMenuProducts'>
        <Link to='/products'>Best Sellers</Link>
        <Link to='/products'>Cakes</Link>
        <Link to='/products'>Cookies</Link>
        <Link to='/products'>Pies</Link>
    </div>
  )
}

export default SubMenuProducts