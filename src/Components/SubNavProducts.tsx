import ImageProduct1 from '../Assets/Images/bestSeller1.jpg'

const SubNavProducts = () => {

  return (
    <div className='subNavProducts'>
      <ul className="subNavProducts-list">
        <li>Best Sellers</li>
        <li>Cakes</li>
        <li>Cookies</li>
        <li>Pies</li>
      </ul>
      <div className="subNavProducts-product">
        <div className="product">
          <div className="product-image">
            <img src={ImageProduct1}></img>
          </div>
          <div className="product-name">
            <h1>Cookies</h1>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageProduct1}></img>
          </div>
          <div className="product-name">
            <h1>Cookies</h1>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageProduct1}></img>
          </div>
          <div className="product-name">
            <h1>Cookies</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavProducts