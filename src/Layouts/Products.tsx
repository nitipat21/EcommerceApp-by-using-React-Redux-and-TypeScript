import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import { RootState } from '../store';

const Products = () => {

    const filteredProductArray = useSelector((state:RootState) => state.shop.filteredProductArray);

    const productCardElement = filteredProductArray.map((product) => {
        return  <ProductCard    name={product.name}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                                id={product.id}
                                key={product.id}
                                isBestSeller={product.isBestSeller}
                />
    });

    return (
        <div className="products-container">
            {productCardElement}
        </div>
    )
}

export default Products