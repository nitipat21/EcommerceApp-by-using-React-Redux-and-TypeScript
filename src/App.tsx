import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Cart from './Components/Cart';
import SearchBar from './Components/SearchBar';
import Menu from './Components/SideMenu';
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

function App() {

  const dispatch = useDispatch();

  const isDisplaySearchBar = useSelector((state:RootState)=> state.menu.isDisplaySearchBar);

  useEffect(()=>{
    dispatch(authSliceActions.setAccountData());
  },[])

  return (
    <>
    <PageOverlay/>
    <Banner0/>
    <Menu/>
    <Cart/>
    {isDisplaySearchBar ? <SearchBar/> : <Nav/>}
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/account/login' element={<LoginPage/>}></Route>
      <Route path='/account/register' element={<RegisterPage/>}></Route>
      <Route path='/account/recover' element={<RecoverPage/>}></Route>
      <Route path='/account/address' element={<AddressPage/>}></Route>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
