import Banner0 from '../Layouts/Banner0';
import Banner1 from '../Layouts/Banner1';
import Banner2 from '../Layouts/Banner2';
import Bestsellers from '../Layouts/Bestsellers';
import SearchLocation from '../Layouts/SearchLocation';
import Ingredients from '../Layouts/Ingredients';
import MainProducts from '../Layouts/MainProducts';
import Nav from '../Layouts/Nav';
import Reviews from '../Layouts/Reviews';
import Instagram from '../Layouts/Instagram';
import Footer from '../Layouts/Footer';
import Menu from '../Components/Menu';
import SearchBar from '../Components/SearchBar';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import Cart from '../Components/Cart';
import { useEffect } from 'react';

const HomePage = () => {
  
  const isDisplaySearchBar = useSelector((state:RootState)=> state.shop.isDisplaySearchBar);
  const isDisplayCart = useSelector((state:RootState)=> state.shop.isDisplayCart);

  // useEffect(()=>{
  //   isDisplayCart ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
  // },[isDisplayCart]);

  return (
    <div className="homePage">
        <Banner0/>
        {isDisplaySearchBar ? <SearchBar/> : <Nav/> }
        <Menu/>
        <Cart/>
        <main className='main-homePage'>
            <Banner1/>
            <Banner2/>
            <MainProducts/>
            <Ingredients/>
            <Bestsellers/>
            <SearchLocation/>
            <Reviews/>
            <Instagram/>
        </main>
        <Footer/>
    </div>
  )
}

export default HomePage;