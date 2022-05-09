import ImageBanner1 from '../Assets/Images/banner1.jpg'

const Banner1 = () => {
  return (
    <div className="banner1-container">
        <div className="banner1-image">
            <img src={ImageBanner1}></img>
        </div>
        <div className="banner1-info">
            <h1 className='banner1-title'>Lorem ipsum dolor sit amet.</h1>
            <p className='banner1-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestias laboriosam optio at tenetur quis omnis eos perferendis enim hic.</p>
            <button>Get the Recipe</button>
        </div>
    </div>
  )
}

export default Banner1