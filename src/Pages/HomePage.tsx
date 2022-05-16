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
import Menu from '../Components/SideMenu';
import SearchBar from '../Components/SearchBar';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import Cart from '../Components/Cart';
import PageOverlay from '../Layouts/PageOverlay';
import { useEffect } from 'react';

const HomePage = () => {
  
  const isDisplaySearchBar = useSelector((state:RootState)=> state.shop.isDisplaySearchBar);
  const isDisplayCart = useSelector((state:RootState)=> state.shop.isDisplayCart);
  const isDisplayMenu = useSelector((state:RootState)=> state.shop.isDisplayMenu);

  useEffect(()=>{
    isDisplayCart || isDisplayMenu ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  },[isDisplayCart,isDisplayMenu]);

  return (
    <div className="homePage">
        <PageOverlay/>
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