import React from 'react'
import Header from './Header.js';
import Slogan from './Slogan.js';
import Ad from './Ad.js';
import Services from './Services.js';
import Footer from './Footer.js';
import Info from './Info.js';
import Testinomials from './Testinomials.js';
import Accordian from './Accordian.js';
import "../css/Home.css";


const Home = () => {
  return (
    <div>
        <div className="header_main">
            <Header />
            <Slogan />
            <Info />
            <Ad />
            <div className="accordian__div">
            <h1>We have range of services for your taxation problems </h1>
            <Accordian />
            </div>
            
            <Testinomials />
            <Footer />
            <div>
      
    </div>
        </div>
    </div>
  )
}

export default Home