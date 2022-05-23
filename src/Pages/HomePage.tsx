import Banner1 from '../Layouts/Banner1';
import Banner2 from '../Layouts/Banner2';
import Bestsellers from '../Layouts/Bestsellers';
import SearchLocation from '../Layouts/SearchLocation';
import Ingredients from '../Layouts/Ingredients';
import MainProducts from '../Layouts/MainProducts';
import Reviews from '../Layouts/Reviews';
import Instagram from '../Layouts/Instagram';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../firebase-config';
import { shopSliceActions } from '../store/productsSlice';

const HomePage:FC = () => {
  
  const dispatch = useDispatch();

  const productsCollectionRef = collection(db, "products");

  const isDisplayCart = useSelector((state:RootState)=> state.menu.isDisplayCart);
  const isDisplayMenu = useSelector((state:RootState)=> state.menu.isDisplayMenu);

  useEffect(()=>{
    isDisplayCart || isDisplayMenu ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  },[isDisplayCart,isDisplayMenu]);

  useEffect(() => {
    const getProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        const newArray:any[] = data.docs.map((doc:any) => doc.data());
        console.log(newArray)

        dispatch(shopSliceActions.setProducts(newArray));
    };

    getProducts();

  }, []);

  return (
    <div className="homePage">       
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
    </div>
  )
}

export default HomePage;