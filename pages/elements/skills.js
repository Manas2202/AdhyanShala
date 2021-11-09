import React from "react";
import './../../assets/css/skills.css';
import './../../assets/css/page.css';
import astronaut from './../../assets/img/illustrations/Be_A_Part-03.svg'
import astronaut1 from './../../assets/img/illustrations/laptop_ass-04.svg'
function Home() {
    
  return (
    <>
      {/* Page content */}
     <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                <h2 className="text-black">Overview</h2>
                <p className="mt-4">
                    Our Artificial Intelligence powered tools use millions of project data
                </p>
            </div>
            <div className="container" data-aos="zoom-in">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center align-middle">
                            <img src={astronaut} width="70%" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-center text-md-start px-sm-3 p-md-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti facilis quaerat eius? Aut, praesentium soluta ex velit totam adipisci fugiat aliquid quae quia repellat dolore hic, quisquam tempora maxime. Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, accusantium voluptatibus enim deleniti consequuntur deserunt, in soluta illo commodi quisquam ea earum odio magni, aut a cumque nostrum numquam accusamus.
                        </p>
                    </div>
                </div>
            </div>
             
            <section className="why-us section-bg">
                  <h2 className="text-black text-center mt-5"> Skills we provide </h2>
            <div className="container">

                <div className="row">
                    <div className="col video-box">
                        <img src={astronaut} />
                        
                    </div>

                    <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-chalkboard-teacher"></i></div>
                            <h4 className="title"><a href="">Retired Faculty</a></h4>
                            <p className="description">We are recruiting teachers who have been retired due to their age but are still willing to teach.Their experience can help the students understand better.</p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fa fa-laptop-code"></i></div>
                            <h4 className="title"><a href="">Gagdet Rental</a></h4>
                            <p className="description">We will provide all students with varios gadgets which they can take on rent for a small fee which will go towards insurance.This will help in best utilization of our platform.</p>
                        </div>
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-trophy"></i></div>
                            <h4 className="title"><a href="">Weekly Test</a></h4>
                            <p className="description"> We will be taking monthly quizes for students to compete with each other.We will be awarding the best performers with certificate of appreciation.</p>
                        </div>
                   
                    </div>
                </div>
            </div>
        </section>
       
    </>
  );
}


export default Home;