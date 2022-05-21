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
import Cart from '../Components/Cart';
import PageOverlay from '../Layouts/PageOverlay';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../firebase-config';
import { shopSliceActions } from '../store/productsSlice';

const HomePage:FC = () => {
  
  const dispatch = useDispatch();

  const productsCollectionRef = collection(db, "products");

  const isDisplaySearchBar = useSelector((state:RootState)=> state.menu.isDisplaySearchBar);
  const isDisplayCart = useSelector((state:RootState)=> state.menu.isDisplayCart);
  const isDisplayMenu = useSelector((state:RootState)=> state.menu.isDisplayMenu);

  useEffect(()=>{
    isDisplayCart || isDisplayMenu ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  },[isDisplayCart,isDisplayMenu]);

  useEffect(() => {
    const getProducts = async () => {
        const newArray:any[] = [];
        const data = await getDocs(productsCollectionRef);

        data.docs.map((doc:any) => newArray.push({...doc.data(), id: doc.id}));

        dispatch(shopSliceActions.setProducts(newArray));
    };

    getProducts();

  }, []);

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