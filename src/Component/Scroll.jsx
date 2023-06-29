// // // import React, { useState } from "react";
// // // import { Scrollama, Step } from "react-scrollama";
// // // import Design2 from "../images/Design-2.png";
// // // import Design3 from "../images/Design-3.jpg";

// // // const Scroll = () => {
// // //   const [currentStepIndex, setCurrentStepIndex] = useState(0);

// // //   const handleStepEnter = ({ index }) => {
// // //     setCurrentStepIndex(index);
// // //   };

// // //   return (
// // //     <div className="container" style={{ minHeight: "100vh" }}>
// // //       <div className="row">
// // //         <Scrollama onStepEnter={handleStepEnter}>
// // //           <Step data={{ index: 0 }}>
// // //             <div
// // //               className={`col-md-3 ${
// // //                 currentStepIndex === 0 ? "is-visible" : ""
// // //               }`}
// // //             >
// // //               <img src={Design2} className="img-fluid" alt="Image 1" />
// // //             </div>
// // //           </Step>
// // //           <Step data={{ index: 1 }}>
// // //             <div
// // //               className={`col-md-3 ${
// // //                 currentStepIndex === 1 ? "is-visible" : ""
// // //               }`}
// // //             >
// // //               <img src={Design3} className="img-fluid" alt="Image 2" />
// // //             </div>
// // //           </Step>
// // //           <Step data={{ index: 2 }}>
// // //             <div
// // //               className={`col-md-3 ${
// // //                 currentStepIndex === 2 ? "is-visible" : ""
// // //               }`}
// // //             >
// // //               <img src={Design3} className="img-fluid" alt="Image 3" />
// // //             </div>
// // //           </Step>
// // //         </Scrollama>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Scroll;

// // import React from "react";
// // import { useInView } from "react-intersection-observer";
// // import Design2 from "../images/Design-2.png";
// // import Design3 from "../images/Design-3.jpg";

// // const Scroll = () => {
// //   const [ref1, inView1] = useInView({
// //     triggerOnce: true,
// //     threshold: 0.2, // Adjust this value to control the visibility trigger
// //   });
// //   const [ref2, inView2] = useInView({
// //     triggerOnce: true,
// //     threshold: 0.2,
// //   });
// //   const [ref3, inView3] = useInView({
// //     triggerOnce: true,
// //     threshold: 0.2,
// //   });

// //   return (
// //     <div className="container">
// //       <div className="row">
// //         <div ref={ref1} className={`col-md-3 ${inView1 ? "is-visible" : ""}`}>
// //           <img src={Design2} className="img-fluid" alt="Image 1" />
// //         </div>
// //         <div ref={ref2} className={`col-md-3 ${inView2 ? "is-visible" : ""}`}>
// //           <img src={Design3} className="img-fluid" alt="Image 3" />
// //         </div>
// //         <div ref={ref3} className={`col-md-3 ${inView3 ? "is-visible" : ""}`}>
// //           <img src={Design2} className="img-fluid" alt="Image 1" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Scroll;

// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel = "stylesheet" href = "style.css">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script><link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet"/><link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

// </head>
// <body>

// </body>
// </html>
