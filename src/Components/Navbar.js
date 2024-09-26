import React from 'react';
import '../Styles/Navbar.css';
import {useNavigate} from "react-router-dom";

function Navbar(){
  const navigate=useNavigate();
  const handleEventListingClick = ()=>{
    navigate("/EventListing");
  }
  return (
    <div className='navbar'>
        <div className="left"><img src='https://cdn.wegic.ai/assets/onepage/thread/icon/1727246114581.png' id='left1' alt='logo' /></div>
        <div className="center">
            <button className='nav'> Home Page</button>
            <button className='nav' onClick={handleEventListingClick}> Event Listings Page</button>
            <button className='nav'> Event Details Page</button> 
        </div>
        <div className="right">
            <button className='join'>Join Us</button>
            <button>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar