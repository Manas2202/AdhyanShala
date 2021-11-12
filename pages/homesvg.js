import React,{Component } from "react";
import './../../assets/css/style.css';
import hero from './../../assets/img/landing/MainLanding.svg';
import  {ReactComponent as Home } from './../../assets/img/landing/MainLanding.svg';

function Homepage() {
  return (
    <>
       {/* Page content */}
     <div className="landing" >
      <img src={hero} />
      
     </div>
    </>
  );
}


export default Homepage;
