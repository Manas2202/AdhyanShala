import React from 'react'
import './../../assets/css/page.css';
import { SiCloudbees } from "react-icons/si";
export default function page() {
    return (
        <div>

            <section class="home-features">
                <div class="container">
                    <div class="features-section">
                        <div class="section-title text-center">
                            <h2>features</h2>
                            <p>We’ve been working with the teams around the world.</p>
                        </div>
                        <div class="features-container">
                            <div class="features-group">
                                <div class="features-item hoopsai">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                            <div class="features-group">
                                <div class="features-item agoda">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                                <div class="features-item getsafe">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                            <div class="features-group">
                                <div class="features-item grab">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                                <div class="features-item crisp">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                                <div class="features-item anyleads">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                            <div class="features-group">
                                <div class="features-item teachable">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                                <div class="features-item flyr">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                            <div class="features-group">
                                <div class="features-item roger">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    )
}
