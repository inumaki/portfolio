import "../App.css";
import "../assets/Css/underline.css";
import profile from "../assets/png/profile.jpg";
import { useState, useEffect } from "react";
import { NavOption } from "./NavOption";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <a href = "/"><div className="profile-image">
        <img src={profile} style={{ height: "32px", width: "32px" }} />
      </div></a>

      {!isMobile && (
        <>
          <div className="info">
            <NavOption />
          </div>
        </>
      )}
      {isMobile && !clicked && (
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
