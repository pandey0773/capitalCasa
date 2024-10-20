import React from 'react';
import Header from '../../components/Header/Header';
// import NavBar from '../../components/NavBar/NavBar';
// import { Container } from './styles';

function HomePage() {
  return (
    <>
      <div>
        <Header />
        <div className="text-center p-10">
          <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind CSS</h1>
        </div>
      </div>
    </>
  )
}

export default HomePage;