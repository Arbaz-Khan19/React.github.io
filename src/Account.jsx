import React from 'react';
import './index.css';
const Account = () =>{
    return(
        <div className="middle_container">
    <h2>Create an account</h2>
    <p>Invest and double your income now</p>
    
    <form>
      <input className="first" placeholder="Full name" /><br />
      <input className="second" placeholder="Email address"/><br />
      <input className="third"  placeholder="Password"/><br />
      <button>Create account</button><br />
      <a href="__blank">Already have an account?</a>
    </form>
  </div>
    );
}
export default Account;