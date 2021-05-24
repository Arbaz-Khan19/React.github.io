import React from 'react';
import './index.css';
import { BsFilterRight, BsFillBellFill } from "react-icons/bs";

const Homepage = () => {
    return(
<div className="last_container">
  <div className="icon">
  <BsFilterRight className="icon1" />
  <BsFillBellFill className="icon2"  />
  </div>
  <h2>Welcome, Jessie.</h2>
  <div className="box">
    <p>Your total asset portfolio</p>
    <div>
    <h2>N203,935</h2>
    <button class="btn1">Invite now</button>
    </div>
  </div>
  <div className="plans">
    <p>Best plans</p>
    <p className="see">See All...</p>
  </div>
  <div className="carousel">
   <div className="image1">
     <h6>Gold</h6>
     <p>30% return</p>
   </div>
   <div className="image2">
   <h6>Silver</h6>
     <p>60% return</p>
   </div>
   <div className="image3">
   <h6>Platinum</h6>
     <p>90% return</p>
   </div>
  </div>
  <div className="section_news">
  <p className="p1">Investment Guide</p>
  <div className="news1">
    <h4>Basic type of investments</h4>
    <p>This is how you set your foot for 2020 stock market recession. what's next...</p>
  <div className="n1"></div>
  </div>
  <hr />
  <div className="news2">
    <h4>How much can you start wit..</h4>
    <p>What do you like to use? it's a very different market from 2018. The way...</p>
    <div className="n2"></div>
  </div>
  </div>
  </div>
    );
}

export default Homepage;