import "../App.css";
import { useState, useEffect } from "react";
import rightArrow from "../assets/png/right-arrow.png";
import { Link, useLocation } from "react-router-dom";
import { path, text} from "../constants/constant";

function More() {

  var currentPath = useLocation().pathname;
  const nextPath = path.get(currentPath);
  const seeMoreText = text.get(currentPath);
  console.log(nextPath, seeMoreText);
  return (
    <>
      <div className="more-about">
        <Link to={"/" + nextPath}>
          <div className="about-me-section">
            <div>{seeMoreText}</div>
            <div className="arrow-container">
              <div className="moving-arrow">
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
