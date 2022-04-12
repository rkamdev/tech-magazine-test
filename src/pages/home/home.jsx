import React from 'react';
import './styles/home.scss';
import { Header , BrandList , ProductList , Footer } from '../../components/index';

function Home(){
  return(
    <div className="home">
      <Header />
      <BrandList />
      <ProductList />
      <Footer />
    </div>
  )
}

export default Home;