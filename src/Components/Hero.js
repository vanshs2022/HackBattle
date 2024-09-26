import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="maxcontainer">
        <div className="container">
          <h4>Your Ultimate Ticket Marketplace</h4>
          <h1>Discover Events Like Never Before</h1>
          <p>
            EventBuzz offers a seamless platform for buying and selling event tickets with user-friendly features and secure payment options. Find your next event today!
          </p>
          <div className="buttons">
            <button className='b1'>Search Events</button>
            <button className="b2">Sell Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
