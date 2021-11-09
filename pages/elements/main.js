import React from 'react'
import './../../assets/css/page.css';

import astronaut from './../../assets/img/illustrations/Be_A_Part-03.svg'
import astronaut1 from './../../assets/img/illustrations/laptop_ass-04.svg'
export default function main() {
    return (
        <div>
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

     
        </div>
    )
}
