import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Cart from './Components/Cart';
import SearchBar from './Components/SearchBar';
import SideMenu from './Components/SideMenu';
import { db } from './firebase-config';
import Account from './Layouts/Account';
import Banner0 from './Layouts/Banner0';
import Footer from './Layouts/Footer';
import Nav from './Layouts/Nav';
import PageOverlay from './Layouts/PageOverlay';
import AddressPage from './Pages/AddressPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RecoverPage from './Pages/RecoverPage';
import RegisterPage from './Pages/RegisterPage';
import { RootState } from './store';
import { authSliceActions } from './store/authSlice';
import { updateDoc, doc } from '@firebase/firestore';
import ProductsPage from './Pages/ProductsPage';
import { collection, getDocs } from '@firebase/firestore';
import { shopSliceActions } from './store/productsSlice';

function App() {

  const dispatch = useDispatch();

  const productsCollectionRef = collection(db, "products");

  const isDisplaySearchBar = useSelector((state:RootState) => state.menu.isDisplaySearchBar);
  const isDisplayCart = useSelector((state:RootState)=> state.menu.isDisplayCart);
  const isDisplayMenu = useSelector((state:RootState)=> state.menu.isDisplayMenu);
  const accountData = useSelector((state:RootState) => state.auth.accountData);

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    const sortArray:any[] = [];
    
    // sort best-seller product to the top
    data.docs.forEach((doc:any) => {
        const dataObj = doc.data();
        dataObj.isBestSeller ? sortArray.unshift({...dataObj,id:doc.id}) : sortArray.push({...dataObj,id:doc.id})
    });

    dispatch(shopSliceActions.setProducts(sortArray));
    dispatch(shopSliceActions.setfilteredProducts(sortArray));
  };

  // inititate app
  useEffect(()=>{
    dispatch(authSliceActions.setAccountData());
    getProducts();
  },[])

  // update account data to firebase
  useEffect(()=>{
    const userDocRef = doc(db, "users", `${accountData?.docId}`);
    const update =  async () => {
      try {
        await updateDoc(userDocRef, {...accountData});
        console.log('updated');
        
      } catch (error) {
        console.error(error);
      }
    }
    update();

  },[accountData])

  // hide overflowY when display page-overlay
  useEffect(()=>{
    isDisplayCart || isDisplayMenu ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
  },[isDisplayCart,isDisplayMenu]);

  return (
    <>
    <PageOverlay/>
    <Banner0/>
    <SideMenu/>
    <Cart/>
    {isDisplaySearchBar ? <SearchBar/> : <Nav/>}
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/account/login' element={<LoginPage/>}></Route>
      <Route path='/account/register' element={<RegisterPage/>}></Route>
      <Route path='/account/recover' element={<RecoverPage/>}></Route>
      <Route path='/account/address' element={<AddressPage/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
