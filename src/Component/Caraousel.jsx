
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import buttonimg from "../images/button.png";
import dog from "../images/dogs.jpg";
import bannerslider from "../images/bannerslider.jpg";
import catslider from "../images/catslider.jpg";
import duck from "../images/duck.jpeg";

const Caraousel = () => {
  return (
    <section>
    <Container fluid>
      <Row className="align-items-center justify-content-center toppadding">
        <Col md="12">
          <Row>
            <Col md="12" >
              <div className="carousel_slide">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide text-center"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators" style = {{ marginLeft:"auto", marginRight :"auto"}}>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      // aria-current="true"
                      aria-label="Slide 1"
                    >
                      <img
                        src={buttonimg}
                        className="img-fluid"
                        style={{ height: "70px"}}
                        alt=""
                      />
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
                        style={{ height: "70px" }}
                        alt=""
                      />
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
                        style={{ height: "70px"}}
                        alt=""
                      />
                    </button>


                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    >
                      <img
                        src={buttonimg}
                        className="img-fluid"
                        style={{ height: "70px"}}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                      class="active"
                    >
                      <img
                        src={buttonimg}
                        className="img-fluid"
                        style={{ height: "70px"}}
                        alt=""
                      />
                    </button>
                    
                    
                  </div>
                  <div class="carousel-inner" style = {{textAlign : "end"}}>
                    <div class="carousel-item ">
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
                    <div class="carousel-item">
                      <img src={duck} class="img-fluid " alt="..." />
                    </div>
                    <div class="carousel-item active">
                      <img src={catslider} class="img-fluid " alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Caraousel

