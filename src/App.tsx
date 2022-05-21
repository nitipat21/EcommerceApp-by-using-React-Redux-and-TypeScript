import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import SearchBar from './Components/SearchBar';
import Banner0 from './Layouts/Banner0';
import Footer from './Layouts/Footer';
import Nav from './Layouts/Nav';
import PageOverlay from './Layouts/PageOverlay';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import { RootState } from './store';

function App() {

  const isDisplaySearchBar = useSelector((state:RootState)=> state.menu.isDisplaySearchBar);

  return (
    <>
    <PageOverlay/>
    <Banner0/>
    {isDisplaySearchBar ? <SearchBar/> : <Nav/>}
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>} ></Route>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
