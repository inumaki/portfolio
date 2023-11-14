import "../App.css";
import "../assets/Css/underline.css"
import profile from "../assets/png/profile.jpg"

function Navbar() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isMenuOpen, setMenuOpen] = useState(false);


  return (
    <div className="navbar">
      <div className="profile-image">
        <img src = {profile} style={{height: '32px', width : '32px'}}/>
      </div>
      <div className="info">
        {!isMobile && (
        <div className="hover-underline-animation">About</div>
        <div className="hover-underline-animation">Projects</div>
        <div className="hover-underline-animation">Contact</div>
      </div>
      )
        }
    </div>
  );
}

export default Navbar;
