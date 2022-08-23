import React from 'react'
import "../css/Ad.css";
import whatsapp from '../WhatsApp.png';
import email from '../email.png';
import reviews from '../reviews.png';

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
            <div className="ad__left__third"><span>Or Share Your Contact Below</span></div>
            <div classame="Input" >
                <input type="tel" 
                className="input__text"
                id="input_phone"
                name="phone" 
                value="" 
                placeholder="Your Mobile Number*" 
                required="" 
              >
                </input>
                <input
                className="input__button"
                id="input__button__id"
                type="submit"
               ></input>

            </div>
        </div>
        <div className="ad__right">
          <img src={reviews} alt="" />

        </div>
    </div>
  )
}

export default Ad