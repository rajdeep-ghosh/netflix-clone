import React from "react";
import NetflixLogo from "../assets/netflix-logo.png";
import NetflixAvatar from "../assets/netflix-avatar.png";

export default function Nav() {
  return (
    <div>
      <div>
        <img className="fixed w-24" src={NetflixLogo} alt="Netflix logo" />
        <img className="fixed w-6" src={NetflixAvatar} alt="Netflix avatar" />
      </div>
    </div>
  );
}
