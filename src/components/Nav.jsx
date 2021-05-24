import React, { useEffect, useState } from "react";
import NetflixLogo from "../assets/netflix-logo.png";
import NetflixAvatar from "../assets/netflix-avatar.png";

export default function Nav() {
  const [showNavbar, handleShow] = useState(false);

  function transitionNavbar() {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`fixed top-0 p-5 w-full h-20 z-20 ${showNavbar && `nav__dark`} transition ease-in duration-500`}>
      <nav className="flex justify-between">
        <img
          className="w-28 fixed left-0 top-3 object-contain pl-5 cursor-pointer"
          src={NetflixLogo}
          alt="Netflix logo"
        />
        <img
          className="w-6 fixed right-5 pt-2 cursor-pointer"
          src={NetflixAvatar}
          alt="Netflix avatar"
        />
      </nav>
    </div>
  );
}
