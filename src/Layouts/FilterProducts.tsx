


const FilterProducts = () => {

  return (
    <div className="filterProducts-container">
      <div className="filterName">
        <input type="search" placeholder="Product Name"/>
      </div>
      <div className="filterType">
        <ul>
          <li>All</li>
          <li>BestSellers</li>
          <li>Cake</li>
          <li>Cookie</li>
          <li>Pie</li>
        </ul>
      </div>
      <div className="filterPrice">
        <input type='range' name="filterPrice" min={0} max={99.99}/>
        <div className="filterPrice-text">
          <label htmlFor="filterPrice">$00.00 - $99.99</label>
        </div>
      </div>
      <div className="filterButton">
        <button>Apply</button>
        <button>Clear</button>
      </div>
    </div>
  )
}

export default FilterProducts