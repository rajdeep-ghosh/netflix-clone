import React from "react";
import tmdbIcon from "../assets/tmdb.svg";

export default function Footer() {
  return (
    <div className="bg-netflix-red-light flex flex-col items-center justify-center p-4 pt-24">
      <img className="w-32" src={tmdbIcon} alt="TMDB icon" />
      <div className="pt-4 font-work-sans font-medium text-base text-white">
        <p className="whitespace-nowrap w-full">
          &copy; 2021 Rajdeep Ghosh | 
          <a href="https://github.com/rajdeep-ghosh/netflix-clone" target="_blanck"> GitHub</a>
        </p>
      </div>
    </div>
  );
}
