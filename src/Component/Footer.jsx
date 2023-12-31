

import React from "react";
import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import iarunyalogo from '../images/iarunya logo-1.png'

function Footer() {
  return (
    <>
      <section className="footer py-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md="6" xs="6">
            <a className="navbar-brand logo " href="#">
            <img src = {iarunyalogo} className="iarunyalogo"/>
            <img src={logo} alt="" className="img-fluid arunya_logo" />
          </a>
            </Col>
            <Col md="6" xs="6">
              <div className="social-icons mb-xl-5">
                <ul className="">
                  <li>
                    <i class="fa-brands fa-facebook-f"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-linkedin"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-youtube"></i>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="12">
              <Row className="mt-md-5 resFooter">
                <Col md="2" xs="6">
                  <h3 className="footerheading">Company</h3>
                  <div className="bottom-border"></div>
                  <ul>
                    <li>
                      <NavLink>Home</NavLink>
                    </li>
                    <li>
                      <NavLink>Contact Us</NavLink>
                    </li>
                    <li>
                      <NavLink>About Us</NavLink>
                    </li>
                    <li>
                      <NavLink>Get Started</NavLink>
                    </li>
                  </ul>
                </Col>
                <Col md="2" xs="6">
                  <h3 className="footerheading">Classes</h3>
                  <div className="bottom-border"></div>
                  <ul>
                    <li>
                      <NavLink>Class 1</NavLink>
                    </li>
                    <li>
                      <NavLink>Class 2</NavLink>
                    </li>
                    <li>
                      <NavLink>Class 3</NavLink>
                    </li>
                    <li>
                      <NavLink>Class 4</NavLink>
                    </li>
                  </ul>
                </Col>
                <Col md="2" xs="6">
                  <h3 className="footerheading">Account</h3>
                  <div className="bottom-border"></div>
                  <ul>
                    <li>
                      <NavLink>Profile</NavLink>
                    </li>
                    <li>
                      <NavLink>My account</NavLink>
                    </li>
                    <li>
                      <NavLink>Prefrences</NavLink>
                    </li>
                    <li>
                      <NavLink>Purchase</NavLink>
                    </li>
                  </ul>
                </Col>
                <Col md="2" xs="6">
                  <h3 className="footerheading">Courses</h3>
                  <div className="bottom-border"></div>
                  <ul>
                    <li>
                      <NavLink>English</NavLink>
                    </li>
                    <li>
                      <NavLink>Maths</NavLink>
                    </li>
                    <li>
                      <NavLink>English</NavLink>
                    </li>
                    <li>
                      <NavLink>Maths</NavLink>
                    </li>
                  </ul>
                </Col>
                <Col md="4" >
                  <h3 className="footerheading">Subscribe</h3>
                  <div className="bottom-border"></div>
                  <input
                    type="text"
                    className="form-control shadow-none bg-trasnparent w-50"
                    placeholder="Enter your email"
                  />
                  <button
                    className="btn w-50 mt-2"
                    style={{ background: "#d0cdde" }}
                  >
                    Subscribe
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;