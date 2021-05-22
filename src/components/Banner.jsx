import React, { useEffect, useState } from "react";
import "./styles/Banner.css";
import axios from "../api/base";
import requests from "../api/endpoints";

export default function Banner() {
  const [featuredShow, setFeaturedShow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setFeaturedShow(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(featuredShow);

  function truncate(string, n) {
    return string?.length > n ? `${string.substr(0, n - 1)} ...` : string;
  }

  return (
    <header
      className="h-[30rem] relative object-contain text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${featuredShow?.backdrop_path}")`,
        backgroundPosition: "right top",
      }}
    >
      <div className="ml-8 pt-36 h-48">
        <h1 className="text-5xl font-bold pb-1">
          Movie Name
          <span className="text-2xl leading-4 font-thin">&nbsp;&nbsp;(1993)</span>
        </h1>
        <div className="mt-4">
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
