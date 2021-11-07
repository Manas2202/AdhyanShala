import React from "react";
import './../../assets/css/style.css';
import hero from './../../assets/img/landing/Main Landing-13.png';
import p1 from './../../assets/img/landing/Main Landing-03.png';
import p2 from './../../assets/img/landing/Main Landing-04.png';
import p3 from './../../assets/img/landing/Main Landing-05.png';
import p4 from './../../assets/img/landing/Main Landing-06.png';
import p5 from './../../assets/img/landing/Main Landing-07.png';
import p6 from './../../assets/img/landing/Main Landing-08.png';
import p7 from './../../assets/img/landing/Main Landing-09.png';
import p8 from './../../assets/img/landing/Main Landing-10.png';
import p9 from './../../assets/img/landing/Main Landing-11.png';
import p10 from './../../assets/img/landing/Main Landing-12.png';

function Homepage() {
  return (
    <>
       {/* Page content */}
      <div className="containers d-flex justify-content-center"
       style={{
           backgroundImage: `url('${hero}')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
      }}
      >  
       <a className="btn-get-started" href="#">Get Started</a>

      </div>
      
      
    </>
  );
}


export default Homepage;
