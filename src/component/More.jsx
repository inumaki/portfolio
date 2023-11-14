import "../App.css";
import { useState, useEffect } from "react";
import rightArrow from "../assets/png/right-arrow.png";

function More() {
  const [direction, setDirection] = useState(1);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setPosition((prevPosition) => prevPosition + direction * 10);

      if (position >= 200 || position <= 0) {
        setDirection((prevDirection) => prevDirection * -1);
      }
    }, 500); 

    return () => clearInterval(intervalId); 
  }, [direction, position]);

  return (
    <>
      <div className="more-about">
        <div className="about-me-section">
        <div>See More About Me</div>
        <div className="arrow-container">
        <div className="moving-arrow" style={{ left: `${position}px` }}>
          <img src = {rightArrow} style={{height : '32px', width :  "24px"}}/>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default More;
