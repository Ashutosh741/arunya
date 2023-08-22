import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import videscreen from "../images/vidscreen.png";
import videscreen2 from "../images/vidscreen2.svg";

// import videscreen from '../images/learn-border.svg'
import video from "../images/videos.png";
import CardBottom from "./CardBottom";

const data = [
  {
    title: "Choose your Object",
    dataos: "fade-right",
    dataeasing: "300",
    dataeasesine: "linear",
    datadelay: "300",
    dataaosduration : "1000"
  },
  {
    title: "Select your Chapter",
    dataos: "fade-right",
    dataeasing: "300",
    dataeasesine: "linear",
    datadelay: "3000",
    dataaosduration : "1000"

  },
  {
    title: "Select your topic/whole you want to read",
    dataos: "fade-right",
    dataeasing: "300",
    dataeasesine: "linear",
    datadelay: "2000",
    dataaosduration : "1000"

  },
  {
    title: "Study with the best teacher with bilingual explanation.",
    dataos: "fade-right",
    dataeasing: "300",
    dataeasesine: "linear",
    datadelay: "4000",
    dataaosduration : "1000"

  },
  {
    title: "Whenever you have query, click on the help button.",
    dataos: "fade-right",
    dataeasing: "300",
    dataeasesine: "linear",
    datadelay: "16000",
    dataaosduration : "1000"

  },
];

function Learn() {
  const videoboxesRef = useRef([]);
  const fadeDelay = 300; // Adjust the delay (in milliseconds) between each videobox fade-in
  // const [sectionVisible, setSectionVisible] = useState(false);
  const [shrinkSection, setShrinkSection] = useState(false);

  const handleScroll = () => {
    videoboxesRef.current.forEach((videobox, index) => {
      const boxTop = videobox.getBoundingClientRect().top;
      const boxBottom = videobox.getBoundingClientRect().bottom;
      const isVisible = boxTop < window.innerHeight && boxBottom >= 0;
      const sectionTop = document
        .querySelector(".overlay")
        .getBoundingClientRect().top;
      const sectionVisible = sectionTop < window.innerHeight;

      setShrinkSection(sectionVisible);

      setTimeout(() => {
        videobox.classList.toggle("fade-in", isVisible);
      }, fadeDelay *4*index);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSectionVisible(true);
  //   }, 3000);
  // }, []);

  return (
    <>
      <section className={`learn position-relative py-3`}>
        <Container fluid>
          <Row className="align-items-center justify-content-center">
            <Col md="11">
              <Row>
                <Col md="12 resTop20rem">
                  <div className="text-center learningText">
                    <span className="learnheading">Here’s How You Learn &<br></br></span>
                    <span className="learnheading2">Become a Champion</span>
                    <p className="learnpara pt-3">
                      Rich Contents, Highly Skilled & Efficient Teachers &
                      Lively Animation
                    </p>
                  </div>
                </Col>

                <div
                  className="videoboxSection"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                  }}
                >
                  {data.map((item, index) => {
                    return (
                      <>
                        <div
                          className={`videobox${index + 1} videobox `}
                          ref={(element) =>
                            (videoboxesRef.current[index] = element)
                          }
                        >
                          <div className="firstbox">
                            <div
                              className={`insidevideo insidevideo${index + 1}`}
                            >
                              <h3
                                className=""
                                style={{
                                  fontSize: "12px",
                                  textAlign: "center",
                                }}
                              >
                                With maximum of 6{" "}
                                <span
                                  className="subbatch"
                                  style={{ color: "#eeaf93" }}
                                >
                                  students per Batch
                                </span>
                              </h3>
                              <div
                                className=""
                                style={{
                                  border: "5px solid #f49d82",
                                  borderRadius: "10px",
                                }}
                              >
                                <img src={video} className="img-fluid" alt="" />
                              </div>
                            </div>
                            <div
                              className={`w-100 d-flex  justify-content-center connect_BorderBox${
                                index + 1
                              }`}
                            >
                              <div
                                className={`connect_border${
                                  index + 1
                                } connect_border`}
                              ></div>
                            </div>
                            <div className="d-flex justify-content-center">
                              <h3
                                className={`headingnumber${
                                  index + 1
                                } headingnumber`}
                              >
                                {index + 1}
                              </h3>
                            </div>
                            <div
                              className={`text-center titlebox${
                                index + 1
                              } titlebox`}
                            >
                              <h4>{item.title}</h4>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <div style={{ height: "60vh" }} className={`w-100 curve`}>
          <img src={videscreen2} className="videoScreenSize" alt="" />
        </div>
        <div className={`overlay ${shrinkSection ? "shrink" : ""}`}></div>
      </section>
      <section className="d-lg-none d-xl-none d-md-block">
      <CardBottom/>
      </section>
    </>
  );
}

export default Learn;

{/* // when the scroll it become 100vw when scoll reac this sectio then animation will reduce the width slowly and do width 0 */}
