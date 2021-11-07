import React from "react";
import './../assets/css/style.css';
import Home from './home.js';
import AwesomeSlider from 'react-awesome-slider';
import hero from './../assets/img/landing/Main Landing-13.png';
import p8 from './../assets/img/landing/Main Landing-10.png';
import p9 from './../assets/img/landing/Main Landing-11.png';
import p10 from './../assets/img/landing/Main Landing-12.png';
import 'react-awesome-slider/dist/styles.css';
function Start() {
  return (
    <>
      {/* Page content */}
      <AwesomeSlider className="sLider" >
        <div data-src={hero} style={{padding:'0px'}}/>
        <div data-src={hero}/>
        <div data-src={hero}/>
      </AwesomeSlider>
    </>
  );
}


export default Start;
