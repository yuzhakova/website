import React from "react";
// import Typed from 'react-typed';

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>business processes and reports optimization</h1>

        {/* <Typed
          className="typed-text"
          strings={[
            'reporting design',
            'processes optimization',
            'excel training and automation',
            'productivity increase',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        >
          <input type="text" />
        </Typed> */}
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
