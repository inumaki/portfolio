import "../App.css";
import { useState, useEffect } from "react";
import rightArrow from "../assets/png/right-arrow.png";
import { Link, useLocation } from "react-router-dom";
import { path, text} from "../constants/constant";

function More() {
  const [direction, setDirection] = useState(1);
  const [position, setPosition] = useState(0);

  var currentPath = useLocation().pathname;
  const nextPath = path.get(currentPath);
  const seeMoreText = text.get(currentPath);
  

  return (
    <>
      <div className="more-about">
        <Link to={"/" + nextPath}>
          <div className="about-me-section">
            <div>{seeMoreText}</div>
            <div className="arrow-container">
              <div className="moving-arrow" style={{ left: `${position}px` }}>
                <img
                  src={rightArrow}
                  style={{ height: "32px", width: "24px" }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default More;
