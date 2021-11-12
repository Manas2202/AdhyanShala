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

function Home() {
    
  return (
    <>
      {/* Page content */}
      <div className="d-flex align-item-center justify-content-center" >
       <Col className="mt-5 ml-5"  lg ="6" md="8">
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <p style={{fontSize:'21px',fontWeight:'600'}}>Rental Form</p>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
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
                <Button className="mt-4" color="primary" type="button">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
      </div>
    </>
  );
}


export default Home;
