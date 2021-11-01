import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";
// layout for this page

// core components
import Homes from "layouts/home.js"
import "./../../assets/css/style.css";
import Header from "components/Navbars/navbar";

function Home() {
  return (
    <>
  
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <h1>Hello</h1>
          </div>
        </Row>
      </Container>
    </>
  );
}

Home.layout = Homes;

export default Home;
