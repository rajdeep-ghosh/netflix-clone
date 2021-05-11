import React from "react";
import NetflixLogo from "../assets/netflix-logo.png";
import NetflixAvatar from "../assets/netflix-avatar.png";

export default function Nav() {
  return (
    <div>
      <div>
        <img src={NetflixLogo} alt="Netflix logo" />
        <img src={NetflixAvatar} alt="Netflix avatar" />
      </div>
    </div>
  );
}
