import React from 'react'
import './../../assets/css/page.css';
import { SiCloudbees } from "react-icons/si";
export default function page() {
    return (
        <div>

            <section className="home-features">
                <div className="container">
                    <div className="features-section">
                        <div className="section-title text-center">
                            <h2>features</h2>
                            <p>We’ve been working with the teams around the world.</p>
                        </div>
                        <div className="features-container">
                            <div className="features-group">
                                <div className="features-item hoopsai">
                                    <div classNameName="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-group">
                                <div className="features-item agoda">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                                <div className="features-item getsafe">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-group">
                                <div className="features-item grab">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                                <div className="features-item crisp">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                                <div className="features-item anyleads">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-group">
                                <div className="features-item teachable">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                                <div className="features-item flyr">
                                    <div className="text-center">
                                        <SiCloudbees />
                                        <p>icon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-group">
                                <div className="features-item roger">
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
