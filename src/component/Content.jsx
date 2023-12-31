import "../App.css";
import More from "../component/More";
import "../assets/Css/glitch.scss";
import { Link } from "react-router-dom";
import { Resume } from "./Resume";
import "../assets/Css/resume.css"

function Content() {
  return (
    <>
     <Link to = "/"> <div className="title glitch">Aryan Katiyar</div></Link>

      <p className="summary">
        I am a postgraduate from the National Institute of Technology Patna,
        graduating with a <strong>Master's</strong> in Computer Applications in
        2023.
      </p>
      <p className="summary">
        In the coding universe, I'm a software engineer juggling both front-end
        finesse and back-end brawn. Beyond the <strong>syntax</strong>, you'll
        catch me in the realms of <strong>articles</strong>, manga, and creative{" "}
        <strong>coding</strong> adventures.
      </p>
      <Resume/>
    </>
  );
}

export default Content;
