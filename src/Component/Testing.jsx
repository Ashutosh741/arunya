// import React, { useEffect, useState } from "react";
// import Design2 from "../images/Design-2.png";
// import Design3 from "../images/Design-3.jpg";

// const Testing = () => {
//   const [angle, setAngle] = useState(0);
//   const images = [Design2, Design3, Design2, Design3, Design2, Design3];
//   const animationSpeed = 0.5; // Adjust this value to slow down or speed up the animation

//   useEffect(() => {
//     const animationId = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   const animate = () => {
//     setAngle((prevAngle) => (prevAngle + animationSpeed) % 360);
//     requestAnimationFrame(animate);
//   };

//   const getImageStyle = (index) => {
//     const radius = 100;
//     const centerX = 200;
//     const centerY = 200;
//     const angleInRadians = ((angle + index * 60) * Math.PI) / 180;

//     const imageX = centerX + Math.cos(angleInRadians) * radius;
//     const imageY = centerY + Math.sin(angleInRadians) * radius;

//     return {
//       "--imageX": `${imageX}px`,
//       "--imageY": `${imageY}px`,
//     };
//   };

//   return (
//     <div className="circle-container">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Image ${index + 1}`}
//           className="circle-image"
//           style={getImageStyle(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Testing;
