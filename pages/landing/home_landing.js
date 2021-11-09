import React from "react";
import './../../assets/css/style.css';
import hero from './../../assets/img/landing/Main Landing-13.png';

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
      
      </div>
      
      
    </>
  );
}


export default Homepage;
