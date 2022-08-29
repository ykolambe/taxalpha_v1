import React from 'react'
import "../css/Submit.css";
const Submit = () => {
  return (
    <div className="submitform">
        <div className="submit_title"><span>Share Your Details Below | Enjoy {'\u20B9'} 50 off on fees for first time</span></div>
            <input type="tel" 
                className="input__text"
                id="input_phone"
                name="phone" 
                value="" 
                placeholder="Your Mobile Number*" 
                required="" 
            >
            </input>
            <input type="text" 
                className="input__text"
                id="input_referral_code"
                name="referral_code" 
                value="" 
                placeholder="Referral Code (Optional)" 
            >
            </input>
            <input
                className="input__button"
                id="input__button__id"
                type="submit"
            >
            </input>
            </div>
  )
}

export default Submit