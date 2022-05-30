import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
          <div className="left">
            <div className="itemContainer">
              <a href="#intro" className="logo">Rogelio Castillo Jr.</a>
            </div>
            <div className="itemContainer">
                <Person className="icon" />
                <span>+639358722960</span>
            </div>
            <div className="itemContainer">
                <Mail className="icon" />
                <span>jayarr12.rc@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
          </div>
      </div>
    </div>
  )
}
