import React from 'react';
import './index.css';
import Photo from './Photo.png';
import Homepage from './Homepage.jsx';
const Sign = () =>{
    return(
        <div className="first_page">
        <div className="container">
        <img src={Photo} alt="prop" />
       <h2 className="page_title">Stay on top of your finance with us.</h2>
       <p className="para">We are your new financial Advisors to recommend the best investments for you.</p>
       <button className="btn" Action="Account.jsx">Create account</button>
       <div>
        <a href={Homepage.jsx} > Login </a>
        </div>
        </div>
       </div>
    );
}
export default Sign;