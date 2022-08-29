import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import referral3 from '../50off.png';
import referral2 from '../referandearn.png';
import referral1 from '../referral1.jpg';
import "../css/Info.css";
import Submit from './Submit.js';

const images = [
    referral1 ,referral2,referral3
 ];


const Info = () => {
  return (
    <div className="info">
        <div className="info__top">
            <SimpleImageSlider
                width="100%"
                height={450}
                images={images}
                showBullets={true}
                showNavs={true}
                slideDuration={1.5}
                autoPlay={true}
                style={{  marginTop: '0px', marginBottom: '50px' }}
            />
        </div> 
        <div className="info__bottom">
            <Submit />
            </div>
    </div>
  )
}

export default Info