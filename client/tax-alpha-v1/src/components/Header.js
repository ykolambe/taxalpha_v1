import {React} from 'react'
import logo from '../logo.svg';
import '../css/Header.css';
import TextField from "@mui/material/TextField";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
  return (
    <div className='header'>
        <div className="header__left">
            <img className="header__logo" src={logo} alt="" />
            <h3>Services</h3>
            <ArrowDropDownIcon className="arrow"/>
        </div>
        
      <div className="header__middle">
       {/* <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          size="small"
       /> */}
      </div>
        <div className="header__right">
            <div className='navmenu'>
                <h3>GST</h3>
                <h3>Notices</h3>
                <h3>FAQ</h3>
                <h3>Contact Us</h3>
                <h3>Pricing</h3>
            </div>

        </div>
    </div>
  )
}

export default Header