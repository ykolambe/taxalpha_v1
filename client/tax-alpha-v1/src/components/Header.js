import {React} from 'react'
import logo from '../logo.svg';
import '../css/Header.css';
import TextField from "@mui/material/TextField";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    
    <div className="topnav" id="myTopnav">
      <img className="header__logo" src={logo} alt="" />
  <h3>FAQ</h3>
  <h3>Notices</h3>
  <h3>Contact Us</h3>
  <div className="dropdown">
    <button className="dropbtn">Services
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <h3>GST</h3>
    <h3>ITR</h3>
    <h3>TDS</h3>
    <h3>Accounting And Book Keeping</h3>
    <h3>Company Registration</h3>
    <h3>Export</h3>
    </div>
  </div> 
  <h3 className="active">Home</h3>
  <h3  onClick={() => myFunction()} className="icon" >&#9776;</h3>
</div>
  )

 

}



export default Header