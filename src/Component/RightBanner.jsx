import React, { startTransition, useEffect, useRef, useState } from 'react';
import fish from "../images/Design-3.jpg";
import buttonImg from '../images/button.png';
import mouse from '../images/mouse.jpeg';
import mickey from '../images/mickey.jpeg';
import boundary from '../images/circle-2.png'
import duck from '../images/duck.jpeg'
const RightBanner = () => {
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [img4, setImg4] = useState('');

  const circleRef = useRef(null);
  const previousRotation = useRef(0);

  useEffect(() => {
    const circleElement = circleRef.current;
    let animationFrameId;

    const checkRotation = () => {
      const currentRotation = getRotationAngle(circleElement);

      if (currentRotation === previousRotation.current) {
        console.log('Angle when previous and current angle are the same:', currentRotation);
        if (currentRotation === 0) {
          setImg1('active');
          setImg2('');
          setImg3('');
          setImg4('');
        } else if (currentRotation === 120) {
          setImg1('');
          setImg2('active');
          setImg3('');
          setImg4('');
        } else if (currentRotation === 240) {
          setImg1('');
          setImg2('');
          setImg3('active');
          setImg4('');
        }
      }

      previousRotation.current = currentRotation;
      animationFrameId = requestAnimationFrame(checkRotation);
    };

    animationFrameId = requestAnimationFrame(checkRotation);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getRotationAngle = (element) => {
    const style = window.getComputedStyle(element);
    const transform = style.getPropertyValue('transform');
    const matrix = transform.match(/^matrix\((.+)\)$/);

    if (matrix) {
      const values = matrix[1].split(',');
      const a = values[0];
      const b = values[1];
      const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      return angle >= 0 ? angle : 360 + angle;
    }

    return 0;
  };

  const handleButtonSlider1Click = () => {
    const circleElement = circleRef.current;
    circleElement.style.animation = 'none'; // Stop the rotation animation
    const currentRotation = getRotationAngle(circleElement);
    circleElement.style.transform = `rotate(0deg)`; // Set the rotation to 0 degrees
  };

  const handleButtonSlider2Click = () => {
    const circleElement = circleRef.current;
    circleElement.style.animation = 'none'; // Stop the rotation animation
    circleElement.style.transform = 'rotate(120deg)'; // Set the rotation to 120 degrees
  };

  const handleButtonSlider3Click = () => {
    const circleElement = circleRef.current;
    circleElement.style.animation = 'none'; // Stop the rotation animation
    circleElement.style.transform = 'rotate(240deg)'; // Set the rotation to 240 degrees
  };

  const handleMouseLeave = () => {
    const circleElement = circleRef.current;
    circleElement.style.animation = ''; // Start the rotation animation
  };

  return (
    <div>
      <div ref={circleRef} className="parent">
        <div className="children">
          <div className="child1">
            <img src={fish} id="childImg" />
          </div>
          <div className="child2 ">
            <img src={mouse} id="childImg" />
          </div>
          <div className="child3">
            <img src={mickey} id="childImg" />
          </div>
          <div className="child4">
            <img src={duck} id="childImg" />
          </div>
        </div>
      </div>
      <div className="ring">
        {/* <img className='img_boundary' src = {boundary}/> */}
        <div className="indicatorSlider" onMouseLeave={handleMouseLeave}>
          <img
            src={buttonImg}
            className={`buttonSlider1 ${img1}`}
            onMouseEnter={handleButtonSlider1Click}
          />
          <img
            src={buttonImg}
            className={`buttonSlider2 ${img2}`}
            onMouseEnter={handleButtonSlider2Click}
          />
          <img
            src={buttonImg}
            className={`buttonSlider3 ${img3}`}
            onMouseEnter={handleButtonSlider3Click}
          />
          <img
            src={buttonImg}
            className={`buttonSlider4 ${img4}`}
            onMouseEnter={handleButtonSlider3Click}
          />
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
