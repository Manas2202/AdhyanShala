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
      {/* Page content 
     <div className="start">  
        <div  className="main">
        <img className="main" src={hero} />
        </div>     

        <div  className="main">
        <object className="main" type="image/svg+xml" data={about}> </object>
        </div> 
        <div  className="main">
        <object className="main" type="image/svg+xml" data={about}> </object>
        </div>    
     </div>*/}
     <div className="slider">
  <section style={{
           backgroundImage: `url('${hero}')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}>
     <a href="elements/main" className="btn1">Get started</a>
  </section>
  <section style={{
           backgroundImage: `url('${about}')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}>
       <a href="elements/about" className="btn1">About us</a>
  </section>
  <section style={{
           backgroundImage: `url('${Donate}')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}>
       <a href="element/donate" className="btn1">Know More</a>
  </section>
  <section style={{
           backgroundImage: `url('${hero}')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}>
       <a href="elements/skills" className="btn1">Know More</a>
  </section>
  <section style={{
           backgroundImage: `url('${hero}')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}>
       <a href="elements/contact" className="btn1">Know More</a>
  </section>
</div>  
    </>
  );
}


export default Start;
                     