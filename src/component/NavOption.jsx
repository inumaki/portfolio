import { useLocation } from "react-router-dom";

export const NavOption = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {currentPath != "/about" && (
        <a href="about">
          <div className="hover-underline-animation">About</div>
        </a>
      )}
      {currentPath != "/projects" && (
        <a href="projects">
          <div className="hover-underline-animation">Projects</div>
        </a>
      )}
      {currentPath != "/contact" && (
        <a href="contact">
          <div className="hover-underline-animation">Contact</div>
        </a>
      )}
    </>
  );
};
