import Banner0 from '../Layouts/Banner0';
import Banner1 from '../Layouts/Banner1';
import Banner2 from '../Layouts/Banner2';
import Bestsellers from '../Layouts/Bestsellers';
import SearchLocation from '../Layouts/SearchLocation';
import Ingredients from '../Layouts/Ingredients';
import MainProducts from '../Layouts/MainProducts';
import Nav from '../Layouts/Nav';
import ReviewCard from '../Components/ReviewCard';
import Reviews from '../Layouts/Reviews';
import Instagram from '../Layouts/Instagram';
import Footer from '../Layouts/Footer';

const HomePage = () => {
  return (
    <div className="homePage">
        <Banner0/>
        <Nav/>
        <main className='main-homePage'>
            <Banner1/>
            <Banner2/>
            <MainProducts/>
            <Ingredients/>
            <Bestsellers/>
            <SearchLocation/>
            <Reviews/>
            <Instagram/>
            <Footer/>
        </main>
    </div>
  )
}

export default HomePage;