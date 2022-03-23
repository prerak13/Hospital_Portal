import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <Container> */}
        {/* <Row> */}
          {/* <Col className="text-left py-3"><img style={{width:"50px", height:"50px", marginTop:"0px", marginLeft:"5px"}} src="/Capture1.PNG" alt="Italian Trulli"></img></Col>
          <Col className="text-center py-3">Avaiable at</Col>
          <Col className="text-right  ml-2 py-3"><Row>Address</Row><Row>6299 South St, Halifax, NS B3H 4R2</Row><Row>Contact</Row><Row>+1(902)4853023</Row></Col>
        </Row> */}
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
