import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} sm={7} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
          <div>
          <p className="">Copyright 2023. All Rights Reserved</p>
          </div>
        </Row>
      </Container>
    </footer>
  )
}