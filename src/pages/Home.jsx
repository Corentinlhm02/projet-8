import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Projet from '../components/Projet';

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <div className="home">
        <Banner/>
        <Projet/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;



