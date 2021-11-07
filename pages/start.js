import React from "react";
import './../assets/css/style.css';
import Home from './home.js';
import About from './about.js';
import HorizontalScroll from 'react-scroll-horizontal';
import hero from './../assets/img/landing/Main Landing-13.png';
import about from './../assets/img/landing/about.svg';
function Start() {
  const child= { width :`100em`, height:`100%`}
  return (
    <>
      {/* Page content */}
     <div className="start">
       <HorizontalScroll>
        <div style={child}>
          <Home/>    
        </div>   
       </HorizontalScroll>
     </div>
      
    </>
  );
}


export default Start;
