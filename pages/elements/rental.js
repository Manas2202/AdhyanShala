import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import './../../assets/css/rental.css';
import border from './../../assets/img/theme/border.png';

import astronaut from './../../assets/img/illustrations/Be_A_Part-03.svg'
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
      <div className="d-flex align-item-center justify-content-center" >
       <Col className="mt-5 ml-5"  lg ="6" md="8">
        <Card className="bg-secondary shadow border-0" style={{borderRadius:'20px',}}>
          <img className="imgs" src={border} style={{borderRadius:'20px',}} />
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-5">
              <p style={{fontSize:'27px',fontWeight:'600',paddingTop:'20px',color:'#000033'}}>Rental Form</p>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                  </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contact"
                    type="email"
                    
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Address" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                                          </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contact"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Gadget Type"
                    type="text"
                   
                  />
                </InputGroup>
              </FormGroup>
			               <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="to"
                    type="date"
                   
                  />
                </InputGroup>
              </FormGroup>
             <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                  
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="To"
                    type="date"
                   
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4 " color="primary" type="button">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
      </div>
	  
<section className="cards containers grid ">
<div className="text-center text-muted ">
              <p style={{fontSize:'36px',fontWeight:'700',paddingBottom:'60px',color:'#000033'}}>Get Your Gadget Now!</p>
            </div>
  <div className="card__container grid ">
    
    <article className="card__content grid">
      <div className="card__pricing">
        <div className="card__pricing-number">
          <span className="card__pricing-symbol">$</span>0
        </div>
        <span className="card__pricing-month">/month</span>
      </div>

      <header className="card__header">
        <div className="card__header-circle grid">
          <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/free-coin.png" alt="" className="card__header-img"/>
        </div>

        <span className="card__header-subtitle">Free plan</span>
        <h1 className="card__header-title">Basic</h1>
      </header>

      <ul className="card__list grid">
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">3 user request</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">10 downloads por day</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Daily content updates</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Fully editable files</p>
        </li>
      </ul>

      <button className="card__button">Choose this plan</button>
    </article>

    
    <article className="card__content grid">
      <div className="card__pricing">
        <div className="card__pricing-number">
          <span className="card__pricing-symbol">$</span>19
        </div>
        <span className="card__pricing-month">/month</span>
      </div>

      <header className="card__header">
        <div className="card__header-circle grid">
          <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/pro-coin.png" alt="" className="card__header-img"/>
        </div>

        <span className="card__header-subtitle">Most popular</span>
        <h1 className="card__header-title">Professional</h1>
      </header>

      <ul className="card__list grid">
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">100 user request</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Unlimited downloads</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Unlock all features from our site</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Daily content updates</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Fully editable files</p>
        </li>
      </ul>

      <button className="card__button">Choose this plan</button>
    </article>

   
    <article className="card__content grid">
      <div className="card__pricing">
        <div className="card__pricing-number">
          <span className="card__pricing-symbol">$</span>29
        </div>
        <span className="card__pricing-month">/month</span>
      </div>

      <header className="card__header">
        <div className="card__header-circle grid">
          <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/enterprise-coin.png" alt="" className="card__header-img"/>
        </div>

        <span className="card__header-subtitle">For agencies</span>
        <h1 className="card__header-title">Enterprise</h1>
      </header>

      <ul className="card__list grid">
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Unlimited  user request</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Unlimited downloads</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Unlock all features from our site</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Daily content updates</p>
        </li>
        <li className="card__list-item">
          <i className="uil uil-check card__list-icon"></i>
          <p className="card__list-description">Fully editable files</p>
        </li>
      </ul>

      <button className="card__button">Choose this plan</button>
    </article>
  </div>
</section>
    </>
  );
}


export default Home;
