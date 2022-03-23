import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "rgb(235, 195, 64)",
        position: "absolute",
        marginBottom: "0px",
        left: "0",
        width: "100%"
      }}
    >
      <Container>
        <Row>
        <Col>
            <Row className="text-primary">About Us</Row>
            <Row>We are emrging healthcare solutions</Row>
            <Row>proving project. Our mission</Row>
            <Row>is to ensure that technology changes</Row>
            <Row>healthcare sector</Row>
          </Col>
          <Col className="ml-2">
            <Row className="text-primary">Contact Us</Row>
            <Row>Mobile: +1(903)322442</Row>
            <Row>Landline: (206)23135453</Row>
            <Row>Email: wecaresolutiona@gmail.com</Row>
          </Col>
          <Col className="text-left">
          <Row className="text-primary">Address</Row>
            <Row>6299 South St</Row>
            <Row>Halifax, Nova Scotia</Row>
            <Row>B3H 4R2</Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

