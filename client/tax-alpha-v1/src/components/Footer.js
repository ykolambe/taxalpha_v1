import React from 'react'
import "../css/Footer.css";
const Footer = () => {
  return (
    <div>
    <div className="footer">
        <div className="footer__1">
            <h5>Services</h5>
            <h5>About Us</h5>
        </div>
        <div className="footer__2">
        <h5>Terms and Conditions</h5>
            <h5>FAQs</h5>
            <h5>Privacy Policy</h5>
        </div>
        <div className="footer__3">
        <h5>Notices</h5>
            <h5>Glossary</h5>
            <h5>News</h5>
        </div>
        <div className="footer__4">
            <h5>Contact Us</h5>
            <h5>Email: support@taxalpha.in</h5>
            <h5>Phone: +91 8959040813</h5>
        </div>

    </div>
    <div className="copyright">
        <h6>Copyright © 2022 Tax Alpha Pvt. Ltd. All Rights Reserved.</h6>
    </div>
    </div>
  )
}

export default Footer