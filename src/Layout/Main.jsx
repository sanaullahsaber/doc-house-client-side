import React from 'react';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet> 
      <Footer></Footer>
    </div>
  );
};

export default Main;