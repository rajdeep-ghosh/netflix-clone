import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <header
      className="h-96 relative object-contain text-white"
      style={{
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundPosition: "center center"
      }}
    >
      <div className="ml-8 pt-36 h-48">
        <h1 className="text-5xl font-bold pb-1">Movie Name</h1>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="text-sm w-[45rem] max-w-sm h-20 pt-4">This is a test description</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}
