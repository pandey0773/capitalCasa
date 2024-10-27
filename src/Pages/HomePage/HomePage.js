import React from 'react';
import Header from '../../components/Header/Header';
import MainSection from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
// import NavBar from '../../components/NavBar/NavBar';
// import { Container } from './styles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link
} from 'react-router-dom';


function HomePage() {
  return (
    <>
      <div>
        <Header />
        <>
          <Outlet />
        </>
        {/* <MainSection/>  */}
        <hr></hr>
        <Footer />
      </div>
    </>
  )
}

export default HomePage;