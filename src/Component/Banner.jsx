import React from "react";
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

function Banner() {
  return (
    <>
      <section className="banner">
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
                  <div className="">
                    <span className="heading">Learn anytime , anywhere<br></br> </span>
                    <span className="subheading">
                      with{" "}
                      <span className="subheadingtag">
                        i-Arunya <span className="text-dark">!</span>
                      </span>{" "}
                    </span>
                    <h4 className="realbannerbox">
                      Real Live Learning in small Batches for
                    </h4>
                    <div className="">
                      <div
                        className="boyimage ">
                        <img src={boyimg} alt="" />
                      </div>
                      <div className="starimage">
                        <img src={star} alt="" style={{ width: "250px" }} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6" style={{ position: "relative" }}>
                  {/* <div className="carousel_slide">
                    <div
                      id="carouselExampleIndicators"
                      class="carousel slide text-center"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          class="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        >
                          <img
                            src={buttonimg}
                            className="img-fluid"
                            style={{ height: "100px" }}
                            alt=""
                          />
                          <h4>App Compability</h4>
                        </button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        >
                          <img
                            src={buttonimg}
                            className="img-fluid"
                            style={{ height: "100px" }}
                            alt=""
                          />
                          <h4>App Compability</h4>
                        </button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        >
                          <img
                            src={buttonimg}
                            className="img-fluid"
                            style={{ height: "100px" }}
                            alt=""
                          />
                          <h4>App Compability</h4>
                        </button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src={catslider} class="img-fluid " alt="..." />
                        </div>
                        <div class="carousel-item">
                          <img
                            src={bannerslider}
                            class="img-fluid "
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <img src={dog} class="img-fluid " alt="..." />
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <RightBanner/>
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
