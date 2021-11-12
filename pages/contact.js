import React from "react";
import './../assets/css/style.css';
import about from './../assets/img/landing/mabout2.svg';
import border from './../assets/img/theme/border.png';
import './../assets/css/contact.css';
import './../assets/css/rental.css';
function Home() {

  return (
    <>
      {/* Page content */}
		<section id="testimonial"  className=" testimonial-area">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-5 col-lg-6">
                    <div className="testimonial-left-content mt-45">
                        <h6 className="sub-title">Testimonials</h6>
                        <h4 className="title">Who are we <br/> </h4>
                        <ul className="testimonial-line">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p className="text">Duis et metus et massa tempus lacinia. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum. <br/> <br/> ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="testimonial-right-content mt-50">
                        <div className="quota">
                            <i className="lni lni-quotation"></i>
                        </div>
                        <div className="testimonial-content-wrapper testimonial-active">
                            <div className="single-testimonial">
							
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
      <div className="contact">
        <div className="contact-container"  >
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
                <div className="text-two">+0069 3434 5678</div>
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
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-box message-box">
                  <textarea type="text" placeholder="Write your Message" />
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
