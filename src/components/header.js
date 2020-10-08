import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.svg"
import anime from "animejs"

class Header extends React.Component {
  componentDidMount(){
    anime({
      targets: ".header-indicator",
      backgroundColor: ["#f1981c","#ea5237"],
      translateY : [10,0],
      opacity : [0,1],
      duration: 500,
      easing: "easeInOutQuad"
    });
    anime({
      targets: ".header-active",
      color: ["#f1981c","#ea5237"],
      duration: 500,
      easing: "easeInOutQuad"
    });
    anime({
      targets: "#content-wrap",
      opacity: [0,1],
      duration: 500,
      easing: "easeInOutQuad"
    });
  }
  render() {
    return (
      <header>
        <Link to="/">
          <img
            className="header-logo"
            src={logo}
            alt="logo alexandre haas"
            title="Logo d'Alexandre Haas"
          />
        </Link>
        <nav>
          <ul className="header-list">
            <li>
              <Link activeClassName="header-active" to="/">
                Accueil
                <div className="header-indicator"></div>
              </Link>
            </li>
            <li>
              <Link activeClassName="header-active" to="/qui-suis-je/">
                Qui suis-je ?
                <div className="header-indicator"></div>
                </Link>
            </li>
            <li>
              <Link activeClassName="header-active" to="/services/">
                Services
                <div className="header-indicator"></div>
                </Link>
            </li>
            <li>
              <Link activeClassName="header-active" to="/contact/">
                Contact
                <div className="header-indicator"></div>
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;