import { useLocation } from "react-router-dom";
import "../App.css"

export const NavOption = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
    {props.class == "mini-nav" && currentPath != '/' && (  <a className={props.class} href="/">
          <div >Home</div>
        </a>)}
      {currentPath != "/about" && (
        <a className={props.class} href="about">
          <div >About</div>
        </a>
      )}
      {currentPath != "/projects" && (
        <a className={props.class} href="projects">
          <div >Projects</div>
        </a>
      )}
      {currentPath != "/contact" && (
        <a className={props.class} href="contact">
          <div >Contact</div>
        </a>
      )}
    </>
  );
};
