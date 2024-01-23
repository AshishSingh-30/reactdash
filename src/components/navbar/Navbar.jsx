import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./img/logo.svg" alt="" />
        <span>React~Dash</span>
      </div>
      <div className="icons">
        <img src="./img/search.svg" alt="" className="icon" />
        <img src="./img/app.svg" alt="" className="icon" />
        <img src="./img/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="./img/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3Ds"
            alt=""
          />
          <span>Jone</span>
        </div>
        <img src="./img/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
