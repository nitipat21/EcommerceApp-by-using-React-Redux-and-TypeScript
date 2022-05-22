import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Cart from './Components/Cart';
import SearchBar from './Components/SearchBar';
import Menu from './Components/SideMenu';
import Banner0 from './Layouts/Banner0';
import Footer from './Layouts/Footer';
import Nav from './Layouts/Nav';
import PageOverlay from './Layouts/PageOverlay';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RecoverPage from './Pages/RecoverPage';
import RegisterPage from './Pages/RegisterPage';
import { RootState } from './store';

function App() {

  const isDisplaySearchBar = useSelector((state:RootState)=> state.menu.isDisplaySearchBar);

  return (
    <>
    <PageOverlay/>
    <Banner0/>
    <Menu/>
    <Cart/>
    {isDisplaySearchBar ? <SearchBar/> : <Nav/>}
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/account/login' element={<LoginPage/>}></Route>
      <Route path='/account/register' element={<RegisterPage/>}></Route>
      <Route path='/account/recover' element={<RecoverPage/>}></Route>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
