import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import choose from "../images/choose.svg";
import circle from "../images/circle-2.png";
import chooseCol from "../images/ChooseCol.png";
import affordable from "../images/affordable.png";

function Choose() {
  return (
    <>
      <section className="choose position-relative">
        <div className="choosebg">
          <img src={choose} className="img-fluid w-100" alt="" />
        </div>
        <div className="abscircle">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <>
                <div className={`transcircle${index + 1} transcircle`}></div>
              </>
            );
          })}
        </div>

        <Container fluid className="position-relative">
          <Row className="align-items-center justify-content-center">
            <Col md="11">
              <Row>
                <Col md="12 text-center pb-5">
                  <span className="chooseheading text-white text-center my-5">
                    Why to Choose <span className="brandname">i-Arunya</span>
                  </span>
                </Col>
                <Col md="12">
                  <Row className="bg-white rounded-3 align-items-center justify-content-center">
                    <Col md="5">
                      <div className="text-center">
                        <img src={chooseCol} className="img-fluid" alt="" />
                      </div>
                    </Col>
                    <Col md="7">
                      <Row className="align-items-center justify-content-center ">
                        {/* <Col md="6">
                          <div className="affordableimg">
                            <img
                              src={affordable}
                              alt=""
                              style={{
                                border: " 3px solid #916caf",
                                padding: "5px",
                                borderRadius: " 20px",
                                boxShadow: " 0 0 10px #916caf",
                              }}
                              className="img-fluid "
                            />
                            <div
                              className="affordablebox"
                              style={{ background: " #916caf" }}
                            >
                              <h6>
                                Aff ordable Digital Education to Achieve the
                                Goal,{" "}
                                <span className="fw-bold">
                                  ‘EDUCATION FOR ALL’
                                </span>
                              </h6>
                            </div>
                          </div>
                        </Col> */}
                        {[1, 2, 3, 4].map((item) => {
                          return (
                            <>
                              <Col md="6">
                                <div className="affordableimg m-3">
                                  <img
                                    src={affordable}
                                    alt=""
                                    className="img-fluid "
                                  />
                                  <div className="affordablebox text-center">
                                    <span className="p-4" style = {{fontSize : "22px"}}>
                                      <span className="fw-bold" style = {{fontSize:"22px"}}>Affordable</span> Digital Education<br></br> to Achieve
                                      the Goal,{" "}
                                      <span className="fw-bold">
                                        ‘EDUCATION FOR ALL’
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </Col>
                            </>
                          );
                        })}
                        {/* <Col md="6">
                          <div className="affordableimg">
                            <img
                              src={affordable}
                              alt=""
                              className="img-fluid "
                            />
                            <div className="affordablebox">
                              <h6>
                                Aff ordable Digital Education to Achieve the
                                Goal,{" "}
                                <span className="fw-bold">
                                  ‘EDUCATION FOR ALL’
                                </span>
                              </h6>
                            </div>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="affordableimg">
                            <img
                              src={affordable}
                              alt=""
                              className="img-fluid "
                            />
                            <div className="affordablebox">
                              <h6>
                                Aff ordable Digital Education to Achieve the
                                Goal,{" "}
                                <span className="fw-bold">
                                  ‘EDUCATION FOR ALL’
                                </span>
                              </h6>
                            </div>
                          </div>
                        </Col> */}
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Choose;
