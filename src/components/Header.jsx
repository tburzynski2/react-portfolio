import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      {/* <div>
        <img
          src="/images/tom-b-avatar.png"
          alt="Tom Burzynski's profile avatar"
        />
        <p className="title-text">Tom.Com</p>
      </div> */}
      <Nav />
    </header>
  );
};

export default Header;
