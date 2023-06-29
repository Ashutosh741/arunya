import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import languageimg from "../images/languageimg.png";

function TopHeader() {
  return (
    <>
      <section className="topheader" style={{ height: "40px" }}>
        <Container fluid>
          <Row>
            <Col md="12">
              <div
                className="p-1 d-flex justify-content-end align-items-center"
                style={{ cursor: "pointer" }}
              >
                <img src={languageimg} className="img-fluid mb-1" alt="" />
                <span className="text-white" style={{ fontSize: "20px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight:"bolder" }}>
                  English
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default TopHeader;

// // // change language in web page content in react

// import React, { useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import languageimg from "../images/languageimg.png";

// function TopHeader() {
//   const [language, setLanguage] = useState("English");

//   const handleChangeLanguage = () => {
//     // Logic to change the language
//     // For this example, let's toggle between English and Spanish
//     if (language === "English") {
//       setLanguage("Spanish");
//     } else {
//       setLanguage("English");
//     }
//   };

//   return (
//     <>
//       <section className="topheader" style={{ height: "44px" }}>
//         <Container fluid>
//           <Row>
//             <Col md="12">
//               <div
//                 className="p-1 d-flex justify-content-end align-items-center"
//                 style={{ cursor: "pointer" }}
//                 onClick={handleChangeLanguage}
//               >
//                 <img src={languageimg} className="img-fluid" alt="" />
//                 <h3 className="text-white" style={{ fontSize: "16px" }}>
//                   {language}
//                 </h3>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default TopHeader;

// import React, { useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import languageimg from "../images/languageimg.png";

// function TopHeader() {
//   const [language, setLanguage] = useState("English");

//   const handleChangeLanguage = () => {
//     // Logic to change the language
//     // For this example, let's toggle between English and Spanish
//     if (language === "English") {
//       setLanguage("Spanish");
//     } else {
//       setLanguage("English");
//     }
//   };

//   return (
//     <>
//       <section className="topheader" style={{ height: "44px" }}>
//         <Container fluid>
//           <Row>
//             <Col md="12">
//               <div
//                 className="p-1 d-flex justify-content-end align-items-center"
//                 style={{ cursor: "pointer" }}
//                 onClick={handleChangeLanguage}
//               >
//                 <img src={languageimg} className="img-fluid" alt="" />
//                 <h3 className="text-white" style={{ fontSize: "16px" }}>
//                   {language}
//                 </h3>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="content">
//         <Container>
//           <Row>
//             <Col md="12">
//               {language === "English" && <h1>Welcome to my website!</h1>}

//               {language === "Spanish" && <h1>¡Bienvenido a mi sitio web!</h1>}

//               {/* Add more content for different languages */}
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default TopHeader;
