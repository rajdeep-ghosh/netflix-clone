import React from "react";
import "./Banner.css";

export default function Banner() {
  function truncate(string, n) {
    return string?.length > n ? `${string.substr(0, n - 1)} ...` : string;
  }

  return (
    <header
      className="h-96 relative object-contain text-white"
      style={{
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-8 pt-36 h-48">
        <h1 className="text-5xl font-bold pb-1">Movie Name</h1>
        <div>
          <button className="banner__btn hover:text-black hover:bg-[#e6e6e6] transition duration-200 focus:outline-none">
            Play
          </button>
          <button className="banner__btn hover:text-black hover:bg-[#e6e6e6] transition duration-200 focus:outline-none">
            My List
          </button>
        </div>
        <h1 className="text-sm w-[45rem] max-w-sm h-20 pt-4">
          {truncate(
            `This is a test description. This is a test description. This is a test description. This is a test description.
          This is a test description. This is a test description. This is a test description. This is a test description.
          This is a test description. This is a test description. This is a test description. This is a test description.
          This is a test description. This is a test description. This is a test description. This is a test description.
          This is a test description. This is a test description. This is a test description. This is a test description.
          This is a test description. This is a test description.`,
            130
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom h-28 mt-20" />
    </header>
  );
}
