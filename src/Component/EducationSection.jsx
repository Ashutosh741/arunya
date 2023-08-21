import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import educationimg from "../images/educationimg.png";

// ismein new or policy bold nhi hue hai

function EducationSection() {
  return (
    <>
      <section className="space" style={{ paddingTop: "3rem" }}>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md="11">
              <Row className="align-items-center justify-content-center">
                <Col md="6">
                  <div className="position-relative">
                    <h4 className="educationheading1">Based on</h4>
                    <h4 className="educationheading2">New Education</h4> 
                    <h3 className="educationheading3"> Policy</h3>
                    <h3 className="educationyear"> 2023</h3>
                    <img src={educationimg} className="img-fluid studentImage" alt="" />
                  </div>
                </Col>
                <Col md="6">
                  <div className="">
                    <p className="educationpara">
                      <span className="highlight">
                        i-ArunyaDigi Home Tuition
                      </span>{" "}
                      is a leading, prestigious and high quality education
                      solution provider. We are India’s top rated learning apps
                      creator. A cluster of best teachers, writers, editors and
                      designers brainstorm to design the study materials
                      strictly based on New Education Policy 2021
                    </p>
                  </div>
                  <div className="yellowbox mt-5">
                    <span className="" style = {{fontFamily:"cursive",fontSize:"32px",paddingBottom:"100px"}}>
                      Covered maximum lessons <br></br>within the syllabus, <span className="bold" style ={{fontFamily:"monospace",fontSize:"3rem"}}>NO</span> lesson<br></br>
                      missing
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EducationSection;
