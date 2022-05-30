import BestSellerCard from '../Components/BestSellerCard'
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const BestSellers:FC = () => {

  const productsArray = useSelector((state:RootState) => state.shop.productsArray);
  const windowWidth = useSelector((state:RootState) => state.menu.windowWidth);
  

  const [bestSellersArray, setBestSellersArray] = useState<any[]>([]);
  const [activePage, setActivePage] = useState<number>(0);
  const [productPerPage,setProductPerPage] = useState<number>(1);
  
  const bestSellerCardElement = bestSellersArray.map((product) => {
    return  <BestSellerCard    name={product.name}
                            price={product.price}
                            rating={product.rating}
                            image={product.image}
                            isBestSeller={product.isBestSeller}
                            id={product.id}
                            key={product.id}
            />
  });

  const slideRight = () => {
      setActivePage(activePage+1);
  }

  const slideLeft = () => {
      setActivePage(activePage-1);
  }

  useEffect(() => {
      const newArray = productsArray.filter(product => product.isBestSeller === true);
      setBestSellersArray(newArray);    
  }, [productsArray]);

  useEffect(() => {
    if (windowWidth < 480) {
      setProductPerPage(1);
    } else if (windowWidth > 480) {
      setProductPerPage(0.5);
    }

  }, [windowWidth])

  return (
    <div className="bestSellers-container">
        <div className="bestSellers-title">
            <h1>Shop Our Bestsellers</h1>
        </div>
        <div className="arrows-container">
            {(activePage !== 0 && windowWidth < 1024) && <div className="arrow-left"><FaArrowAltCircleLeft onClick={slideLeft}/></div>}
            {(activePage < ((bestSellersArray.length-1)* productPerPage) && windowWidth < 1024) && <div className="arrow-right"><FaArrowAltCircleRight onClick={slideRight}/></div>}
          </div>
        <div className="bestSellerCard-container" style={{transform:`translateX(-${activePage * 100 * productPerPage}%)`}}>
            {bestSellerCardElement}
        </div>
    </div>
  )
}

export default BestSellers;