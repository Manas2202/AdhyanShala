import React from "react";
import './../assets/css/style.css';
import Home from './home.js';
import About from './about.js';
import HorizontalScroll from 'react-scroll-horizontal';
import hero from './../assets/img/landing/Main Landing-13.png';
import about from './../assets/img/landing/about.svg';
import Donate from './../assets/img/landing/donate.svg';
function Start() {
  const child= { width :`300em`, height:`100%`}
  return (
    <>
      {/* Page content */}
     <div className="start">  
       
        <div  className="main">
        <object type="image/svg+xml" data={about}> </object>
        </div> 
        <div  className="main">
        <object type="image/svg+xml" data={about}> </object>
        </div>    
     </div>  
    </>
  );
}


export default Start;
                     