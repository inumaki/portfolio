import "../App.css";
import linkedind from "../assets/png/linkedin-d.png";
import githubd from "../assets/png/github-d.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <a href = "https://github.com/inumaki"><img id="github" src={githubd}/></a>
        </div>
        <div> 
          <a  href = "https://www.linkedin.com/in/nk2y/"><img src={linkedind}/></a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
