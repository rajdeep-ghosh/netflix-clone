import React from "react";
import NetflixLogo from "../assets/netflix-logo.png";
import NetflixAvatar from "../assets/netflix-avatar.png";

function Nav() {
  return (
    <div>
      <nav>
        <div>
          <img 
            className=""
            src={NetflixLogo} 
            alt="Netflix logo">
          </img>

          <img 
            className="" 
            src={NetflixAvatar}
            alt="Netflix avatar">
          </img>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
