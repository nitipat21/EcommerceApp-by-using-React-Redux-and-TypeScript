import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { shopSliceActions } from "../store/productsSlice";



const FilterProducts = () => {

  const dispatch = useDispatch();

  const productsArray = useSelector((state:RootState) => state.shop.productsArray);

  const [filterName,setFilterName] = useState<string>('');
  const [filterType,setFilterType] = useState<string | null>('All');
  const [filterPrice,setFilterPrice] = useState<number>(99.99);

  const filterProducts = (name:string, type:string | null,price:number) => {
    const newArray = productsArray.filter((product => {
      if (product.price < price) {
        if (name === '' || product.name.toLowerCase().includes(name.toLowerCase())) {
          if (type === 'All' || (type === 'BestSeller' && product.isBestSeller === true) || product.type === type?.toLowerCase()) {
            return product;
          }
        }
      }
    }));
    dispatch(shopSliceActions.setfilteredProducts([...newArray]));
  }

  const clearFilter = () => {
    setFilterName('');
    setFilterType('All');
    setFilterPrice(99.99);
  }

  return (
    <div className="filterProducts-container">
      <div className="filterName">
        <input type="search" placeholder="Product Name" value={filterName} onChange={(event)=>setFilterName(event.target.value)}/>
      </div>
      <div className="filterType">
        <ul>

          <li className={filterType === 'All' ? 'selected' : 'non-selected'} 
              onClick={(event)=>setFilterType(event.currentTarget.textContent)}>All</li>

          <li className={filterType === 'BestSeller' ? 'selected' : 'non-selected'} 
              onClick={(event)=>setFilterType(event.currentTarget.textContent)}>BestSeller</li>

          <li className={filterType === 'Cake' ? 'selected' : 'non-selected'} 
              onClick={(event)=>setFilterType(event.currentTarget.textContent)}>Cake</li>

          <li className={filterType === 'Cookie' ? 'selected' : 'non-selected'} 
              onClick={(event)=>setFilterType(event.currentTarget.textContent)}>Cookie</li>
          
          <li className={filterType === 'Pie' ? 'selected' : 'non-selected'} 
              onClick={(event)=>setFilterType(event.currentTarget.textContent)}>Pie</li>

        </ul>
      </div>
      <div className="filterPrice">
        <input type='range' name="filterPrice" min={0} max={50} value={filterPrice} onChange={(event)=>setFilterPrice(Number(event.target.value))}/>
        <div className="filterPrice-text">
          <label htmlFor="filterPrice">$0 - ${filterPrice}</label>
        </div>
      </div>
      <div className="filterButton">
        <button onClick={()=>filterProducts(filterName,filterType,filterPrice)}>Apply</button>
        <button onClick={clearFilter}>Clear</button>
      </div>
    </div>
  )
}

export default FilterProducts