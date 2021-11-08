import React from "react";
import './../../assets/css/style.css';
import hero from './../../assets/img/landing/about.svg';


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
       <a className="btn-get-started" href="#">Know More</a>
      </div>           
    </>
  );
}


export default Homepage;
