import ImageBanner2 from '../Assets/Images/banner2.jpg'

const Banner2 = () => {
  return (
    <div className="banner2-container">
        <div className="banner2-image">
            <img src={ImageBanner2}></img>
        </div>
        <div className="banner2-info">
            <p className='banner2-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestias laboriosam optio at tenetur quis omnis eos perferendis enim hic.</p>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Banner2