import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5 rounded-top fixed-bottom" style={{backgroundColor: "#E6F2FC"}}>
      <Container>
        <Row>
          <Col md={6}>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              velit maximus, molestie est a, tempor magna.
            </p>
          </Col>
          <Col md={3}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <FaPhoneAlt />
                <span className="ml-2">(123) 456-7890</span>
              </li>
              <li>
                <FaEnvelope />
                <span className="ml-2">
                  <a href="mailto:info@mywebsite.com">info@mywebsite.com</a>
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr className="my-3" />
      <Container>
        <Row>
          <Col>
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
