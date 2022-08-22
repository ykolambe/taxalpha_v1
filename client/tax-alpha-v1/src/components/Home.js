import React from 'react'
import Header from './Header.js';
import Slogan from './Slogan.js';
import Ad from './Ad.js';
const Home = () => {
  return (
    <div>
        <div className="header_main">
            <Header />
            <Slogan />
            <Ad />
        </div>
    </div>
  )
}

export default Home