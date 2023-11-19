import "../App.css";
import { useState, useEffect } from "react";
import rightArrow from "../assets/png/right-arrow.png";
import { Link, useLocation } from "react-router-dom";
import { path, pathName } from "../constants/constant";

function More() {
  const [direction, setDirection] = useState(1);
  const [position, setPosition] = useState(0);
  // const [nextPath, setNextPath] = useState("about");

  const nextPath = "----------------------++++about"
  var currentPath = useLocation().pathname;
  console.log(currentPath.pathName)
  if (currentPath != "/") {
    (pathName[(path[currentPath] + 1) % path.length]);
  }

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
        <Link to={"/" + nextPath}>
          <div className="about-me-section">
            <div>See More {nextPath} Me</div>
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
