import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bannerlayer from "../images/banner-layer.svg";
import underlayer from "../images/underlayer.svg";
import grass from "../images/GRASS.png";
import toplayer from "../images/toplayer.svg";
import boyimg from "../images/boy.png";
import star from "../images/star.svg";
import fish from "../images/fish.png";
import buttonimg from "../images/button.png";
import dog from "../images/dogs.jpg";
import bannerslider from "../images/bannerslider.jpg";
import catslider from "../images/catslider.jpg";
import bannerbg from "../images/bg.png";
import RightBanner from "./RightBanner";
import Caraousel from "./Caraousel";

function Banner() {
  // useEffect(() => {
  //   document.body.style.zoom = "67.5%";
  // }, []);
  return (
    <>
      <section className="banner ">
        {/* <div className="bannerimg ">
          <img src={bannerbg} className="img-fluid " alt="" />
        </div> */}
        <div className="toplayer ">
          <img src={toplayer} className="img-fluid w-100" alt="" />
        </div>
        <Container fluid>
          <Row className="align-items-center justify-content-center toppadding">
            <Col md="11">
              <Row>
                <Col md="6">
                  <div className="position-relative">
                    <h1 className="heading">Learn anytime, anywhere<br></br> </h1>
                    <span className="subheading">
                      with{" "}
                      <span className="subheadingtag">
                        i-Arunya <span className="text-dark">!</span>
                      </span>{" "}
                    </span>
                    <h4 className="realbannerbox">
                      Real Live Learning in small Batches for
                    </h4>
                    <div className="position-relative">
                      <div className="boyimage">
                        <img src={boyimg} alt="" />
                        
                      </div>

                      <div className="starimage">
                        <img src={star} alt="" style={{ width: "250px" }} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" style={{ position: "relative" }}>
                  <div className="carouselMobile d-lg-none d-xl-none d-md-block mb-5">
                          <Caraousel/>
                  </div>
                  <div className="rightBanner">
                    <RightBanner/>  
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        
        
        <div className="bg-layer w-100">
          <img src={bannerlayer} className="img-fluid w-100" alt="" />
        </div>
        <div className="grass">
          <img src={grass} className="img-fluid w-100" alt="" />
        </div>
        <div className="downlayer w-100">
          <img src={underlayer} className="img-fluid w-100" alt="" />
        </div>
      </section>
    </>
  );
}

export default Banner;
