import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";



const FilterProducts = () => {

  const productsArray = useSelector((state:RootState) => state.shop.productsArray);

  const [filterName,setFilterName] = useState<string>('');
  const [filterType,setFilterType] = useState<string | null>('All');
  const [filterPrice,setFilterPrice] = useState<number>(99.99);
  const [newArray,setNewArray] = useState<any[]>([]);

  const filterProducts = (name:string, type:string | null,price:number) => {
    
    setNewArray([...productsArray]);

    if (name) {
      const filterNameArray= newArray.filter(product => product.name.toLowerCase().includes(`${name.toLowerCase()}`));
      setNewArray([...filterNameArray]);
    }

    if (type !== 'All') {
      if (type === 'BestSeller') {
        // filter only best seller
        const filterBestSellerArray = newArray.filter(product => product.isBestSeller === true);
        setNewArray([...filterBestSellerArray]);
      } else {
        // filter by type name
        const filterTypeNameArray = newArray.filter(product => product.type === type?.toLowerCase());
        setNewArray([...filterTypeNameArray]);
      }
    }

    // filter by price
    const filterPriceArray = newArray.filter(product => product.price < price);
    setNewArray([...filterPriceArray]);
  }

  useEffect(()=>{
    console.log('useEffect')
    console.log(newArray);
  },[newArray])
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
        <button>Clear</button>
      </div>
    </div>
  )
}

export default FilterProducts