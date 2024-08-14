import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="bg-light py-3 border-bottom">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="/images/tom-b-avatar.png"
            alt="Tom Burzynski's profile avatar"
            className="rounded-circle mr-3"
            style={{ width: "50px", height: "50px" }}
          />
          <p className="h4 mb-0 ml-3">Tom.Com</p>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
