import React from "react";

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
      <div>
        <h1>Movie Name</h1>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1>This is a test description</h1>
      </div>
    </header>
  );
}
