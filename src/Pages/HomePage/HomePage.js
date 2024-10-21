import React from 'react';
import Header from '../../components/Header/Header';
import MainSection from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
// import NavBar from '../../components/NavBar/NavBar';
// import { Container } from './styles';

function HomePage() {
  return (
    <>
      <div>
        <Header />
        <MainSection/> 
        <hr></hr>
        <Footer/> 
      </div>
    </>
  )
}

export default HomePage;