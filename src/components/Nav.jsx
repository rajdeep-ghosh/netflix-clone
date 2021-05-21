import React from "react";
import NetflixLogo from "../assets/netflix-logo.png";
import NetflixAvatar from "../assets/netflix-avatar.png";

export default function Nav() {
  return (
    <div className="fixed top-0 p-5 w-full h-20 z-[1] netflix__black transition ease-in duration-500">
      <nav className="flex justify-between">
        <img className="w-28 fixed left-0 top-3 object-contain pl-5 cursor-pointer" src={NetflixLogo} alt="Netflix logo" />
        <img className="w-6 fixed right-5 cursor-pointer" src={NetflixAvatar} alt="Netflix avatar" />
      </nav>
    </div>
  );
}
