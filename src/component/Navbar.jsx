import "../App.css";
import "../assets/Css/underline.css";
import profile from "../assets/png/profile2.png";
import { useState, useEffect } from "react";
import { NavOption } from "./NavOption";
import cross from "../assets/png/cross.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  if (clicked) {
    document.body.classList.add("no-scroll");

   
  } else if(!clicked  ) {
    document.body.classList.remove("no-scroll");
  
  }
  if(!isMobile) {
    document.body.classList.remove("no-scroll");
  }

  const toggle = () => {
    setClicked((prevState) => !prevState);
  };

  if (!isMobile) {
    return (
      <div className="navbar">
        <a href="/">
          <div className="profile-image">
            <img src={profile} style={{ height: "32px", width: "32px" }} />
          </div>
        </a>

        <div className="info">
          <NavOption class="hover-underline-animation" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        {!clicked && (
          <div onClick={toggle} className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}

        {clicked && (
          <div className="min-navbar">
            <NavOption class="mini-nav" />
            <div className="cross">
              <img src={cross} onClick={toggle} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
