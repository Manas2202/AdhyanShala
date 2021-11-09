import React from "react";
import './../assets/css/style.css';
import about from './../assets/img/landing/mabout2.svg';
import border from './../assets/img/theme/border.png';
import './../assets/css/contact.css';
function Home() {
    
  return (
    <>
      {/* Page content */}
    
    <div className="contact">
     <div className="container"  >
  <div className="content">
    <div className="left-side">
      <div className="address details">
        <i className="fas fa-map-marker-alt"></i>
        <div className="topic">Address</div>
        <div className="text-one">Surkhet, NP12</div>
        <div className="text-two">Birendranagar 06</div>
      </div>
      <div className="phone details">
        <i className="fas fa-phone-alt"></i>
        <div className="topic">Phone</div>
        <div className="text-one">+0098 9893 5647</div>
        <div className="text-two">+0096 3434 5678</div>
      </div>
      <div className="email details">
        <i className="fas fa-envelope"></i>
        <div className="topic">Email</div>
        <div className="text-one">email@gmail.com</div>
        <div className="text-two">info.email@gmail.com</div>
      </div>
    </div>
    <div className="right-side">
      <div className="topic-text">Send us a message</div>
      <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
          <textarea type="text" placeholder="Write your Message"/>
        </div>
        <div className="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
    </>
  );
}


export default Home;
