import React from 'react'
import Header from './Header.js';
import Slogan from './Slogan.js';
import Ad from './Ad.js';
import Services from './Services.js';
import Footer from './Footer.js';
const Home = () => {
  return (
    <div>
        <div className="header_main">
            <Header />
            <Slogan />
            <Ad />
            <Services />
            <Footer />
        </div>
    </div>
  )
}

export default Home