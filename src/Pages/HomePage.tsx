import React from 'react'
import Banner0 from '../Layouts/Banner0';
import Banner1 from '../Layouts/Banner1';
import Banner2 from '../Layouts/Banner2';
import MainProducts from '../Layouts/MainProducts';
import Nav from '../Layouts/Nav';

const HomePage = () => {
  return (
    <main>
        <Banner0/>
        <Nav/>
        <Banner1/>
        <Banner2/>
        <MainProducts/>
    </main>
  )
}

export default HomePage;