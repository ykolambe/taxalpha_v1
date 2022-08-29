import React from 'react'
import "../css/Testinomials.css";
import SimpleImageSlider from "react-simple-image-slider";
import referral3 from '../50off.png';
import referral2 from '../referandearn.png';
import referral1 from '../referral1.jpg';

const images = [
    referral1 ,referral2,referral3
 ];

const Testinomials = () => {
  return (
    <div>
    <p className="testinomials__heading">Testinomials</p>
    <div className="testinomials">
        
         <SimpleImageSlider
                width="85%"
                height={250}
                images={images}
                showBullets={true}
                showNavs={true}
                slideDuration={1.5}
                autoPlay={true}
                style={{  marginTop: '0px', marginBottom: '50px' }}
            />
    </div>
    </div>
  )
}

export default Testinomials