import React from 'react'
import './../../assets/css/page.css';
import wave1 from './../../assets/img/illustrations/div_-03.png'
import wave2 from './../../assets/img/illustrations/div_-05.png'
import wave3 from './../../assets/img/illustrations/div_-04.png'
import mainlanding from './../../assets/img/landing/mainlanding.png'

import wave4 from './../../assets/img/illustrations/div_header_footer-04.png'
import Footer from "./../../components/Footers/footer"

import astronaut from './../../assets/img/illustrations/Be_A_Part-03.svg'
import astronaut1 from './../../assets/img/illustrations/laptop_ass-04.svg'
export default function main() {
    return (
        <div>
            <img src={mainlanding} width="100%" />
            <div className="main-text section-title mt-5 mb-3 text-center" data-aos="fade-up" data-aos-delay="0.1s">
                <h1 className="text-black">About Us</h1>
                <p className="mt-4">
                    Our Artificial Intelligence powered tools use millions of project data
                </p>
            </div>
            <div className="container" data-aos="zoom-in">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center">
                            <img src={astronaut} width="80%" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="mt-5 text-center text-md-start px-sm-3 p-md-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti facilis quaerat eius? Aut, praesentium soluta ex velit totam adipisci fugiat aliquid quae quia repellat dolore hic, quisquam tempora maxime. Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, accusantium voluptatibus enim deleniti consequuntur deserunt, in soluta illo commodi quisquam ea earum odio magni, aut a cumque nostrum numquam accusamus.
                        </p>
                        <div className="row mt-5">
                            <div className="col-md-3 d-none d-lg-block">
                                <div className="icon"><i className="fas fa-chart-line"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="col-md-3 d-none d-lg-block">
                                <div className="icon"><i className="fas fa-chart-line"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="col-md-3 d-none d-lg-block">
                                <div className="icon"><i className="fas fa-chart-line"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-sm-block d-lg-none">
                        <div className="row mt-5 justify-content-center">
                            <div className="col-sm-4 text-center">
                                <div className="icon"><i className="fas fa-chart-line"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="icon"><i className="fas fa-chart-line"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="icon"><i className="fas fa-chart-line"></i></div>
                                <p>Lorem, ipsum.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2 col-sm-4 col-xs-4 mt-3">
                        <div className="feature-card text-center">
                            <div className="icon"><i className="fas fa-user-graduate"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4 mt-3">
                        <div className="feature-card text-center">
                            <div className="icon"><i className="fas fa-user-graduate"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4 mt-3">
                        <div className="feature-card text-center">

                            <div className="icon"><i className="fas fa-user-graduate"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4 mt-3">
                        <div className="feature-card text-center">

                            <div className="icon"><i className="fas fa-user-graduate"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4 mt-3">
                        <div className="feature-card text-center">

                            <div className="icon"><i className="fas fa-user-graduate"></i></div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4 mt-3">
                        <div className="feature-card text-center">

                            <div className="icon"><i className="fas fa-user-graduate"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="main-text section-title mb-5 text-center" data-aos="zoom-in">
                    <h2 className="text-black">What we do?</h2>
                    <p className="mt-4">Our Artificial Intelligence powered tools use millions of project data</p>
                </div>
                <div className="row" data-aos="zoom-in">
                    <div className="col-md-5 ">
                        <div className="d-flex justify-content-center">
                            <img src={astronaut1} width="100%" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4 my-auto">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum dolor sit Lorem, ipsum dolorsit Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-auto">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum dolor sit Lorem,sit Lorem, ipsum dolor ipsum dolor.</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum dolors it Lorem, ipsum dolor sit Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-auto">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">heading</h2>
                                        <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum sit Lorem, ipsum dolor dolor sit Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={wave1} width="100%" className="mt-5"/>
      <div className="container-fluid" style={{"background" : "#000033"}} >
          <div className="row">
            <div className="col-12">
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
            </div>
          </div>

      </div>
      <img src={wave2} width="100%" className="mb-5"/>

            
            <div className="container mt-5">
                <div className="main-text section-title mb-5 text-center" data-aos="zoom-in">
                    <h2 className="text-black">What we do?</h2>
                    <p className="mt-4">Our Artificial Intelligence powered tools use millions of project data</p>
                </div>
                <div className="row" data-aos="zoom-in">
                    <div className="col-md-5 ">
                        <div className="d-flex justify-content-center">
                            <img src={astronaut1} width="100%" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">Step-1</h2>
                                        <h1 className="text-center"><i className="fas fa-chart-line"></i></h1>

                                        <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum dolor sit Lorem, ipsum dolorsit Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-md-5 mt-0">
                                
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">Step-2</h2>
                                        <h1 className="text-center"><i className="fas fa-chart-line"></i></h1>
                                        <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum dolors it Lorem, ipsum dolor sit Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex justify-content-center aligin-items-center">
                                    <div className="service-card py-2 px-3 mt-4">
                                        <div className="service-icon text-center">

                                        </div>
                                        <h2 className="text-center">Step-3</h2>
                                        <h1 className="text-center"><i className="fas fa-chart-line"></i></h1>
                                        <p className="text-center">Lorem ipsum dolor ipsum dolorLorem ipsum sit Lorem, ipsum dolor dolor sit Lorem, ipsum dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={wave3} width="100%" className="mt-5"/>
      <div className="container-fluid" style={{"background" : "#000033"}} >
          <div className="row">
            <div className="col-12">
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
                <p className="text-white text-center">Losmdxlasmdsml;dmas;lm;la</p>
            </div>
          </div>

      </div>
      <img src={wave4} width="100%" className="mb-5"/>
      <Footer/>

        </div>
    )
}
