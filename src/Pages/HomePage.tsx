import Banner1 from '../Layouts/Banner1';
import Banner2 from '../Layouts/Banner2';
import Bestsellers from '../Layouts/Bestsellers';
import SearchLocation from '../Layouts/SearchLocation';
import Ingredients from '../Layouts/Ingredients';
import MainProducts from '../Layouts/MainProducts';
import Reviews from '../Layouts/Reviews';
import Instagram from '../Layouts/Instagram';
import { FC } from 'react';

const HomePage:FC = () => {

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