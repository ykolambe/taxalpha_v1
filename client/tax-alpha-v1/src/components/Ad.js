import React from 'react'
import "../css/Ad.css";
import Submit from './Submit.js';
import whatsapp from '../WhatsApp.png';
import email from '../email.png';
import referral3 from '../50off.png';
import referral2 from '../referandearn.png';
import referral1 from '../referral1.jpg';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
   referral1 ,referral2,referral3
];

const Ad = () => {

  
  return (
    <div className="ad__main">
        <div className="ad__left">
           <div className="ad__left__first"><span>For Accurate Tax Filing  </span></div>  
           <div className="ad__left__first"><span>and Tax Savings , </span></div>  
           <div className="ad__left__second"><span>Connect With Us On</span></div>
           <div className="contact__logo">
           <img src={whatsapp} className="whatsapp__img" alt=""/>
           <img src={email} className="email__img" alt="" />
            </div>
            
            <div className="Input" >
                <Submit />
            </div>
        </div>
         <div className="ad__right">
         <SimpleImageSlider
         className="slider"
         width="100%"
        height="100%"
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={2.0}
        autoPlay={true}
        style={{  marginTop: '0px', marginBottom: '50px' }}
      />
     

  </div> 
    </div>
  )
}

export default Ad