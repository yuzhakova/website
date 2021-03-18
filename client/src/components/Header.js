import React from "react";
import { Link } from "react-scroll";

import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>business processes and reports optimization</h1>

        <Typed
          className="typed-text"
          strings={[
            "Productivity Increase",
            "Processes Optimization",
            "Reporting Design",
            "Excel Training",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        >
          <input className="typed-text" type="text" />
        </Typed>
        <a href="#" className="btn-main-offer">
          <Link smooth={true} to="contact" href="#">
            Contact
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Header;
