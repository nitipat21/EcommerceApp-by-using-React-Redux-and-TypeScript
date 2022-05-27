import BestSellerCard from '../Components/BestSellerCard'
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const BestSellers:FC = () => {

  const productsArray = useSelector((state:RootState) => state.shop.productsArray);

  const [bestSellersArray, setBestSellersArray] = useState<any[]>([]);
  
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

  useEffect(() => {
      const newArray = productsArray.filter(product => product.isBestSeller === true);

      setBestSellersArray(newArray);
      
  }, [productsArray]);

  return (
    <div className="bestSellers-container">
        <div className="bestSellers-title">
            <h1>Shop Our Bestsellers</h1>
        </div>
        <div className="bestSellerCard-container">
            {bestSellerCardElement}
        </div>
    </div>
  )
}

export default BestSellers;