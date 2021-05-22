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

  function getReleaseYear(date) {
    const year = new Date(date);
    return year.getFullYear();
  }

  return (
    <header className="w-full pt-28 px-12 pb-12 bg-gradient-to-tl from-netflix-red-light to-netflix-black">
      <div 
        className="absolute top-0 right-0 w-3/4 h-[30rem] mix-blend-overlay banner__overlay"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280${featuredShow?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}>
      </div>

      <div className="relative pt-20 h-48 z-10 text-white font-work-sans">
      <p className="pl-[2px] pb-2 font-medium uppercase">Featured</p>
        <h1 className=" text-[2.5rem] leading-9 font-mulish font-black max-w-[840px] pb-1">
          {featuredShow?.title || featuredShow?.original_name || featuredShow?.name || featuredShow?.original_name}
          <span className="text-2xl leading-4 font-thin opacity-50">&nbsp;&nbsp;({getReleaseYear(featuredShow?.release_date || featuredShow?.first_air_date)})</span>
        </h1>
        <div className="mt-4">
          <button className="banner__btn hover:text-black hover:bg-[#e6e6e6] transition duration-200 focus:outline-none">
            Play
          </button>
          <button className="banner__btn hover:text-black hover:bg-[#e6e6e6] transition duration-200 focus:outline-none">
            My List
          </button>
        </div>
        <p className="text-base leading-5 font-normal w-[45rem] max-w-sm h-20 pt-4">
          {truncate(featuredShow?.overview ,130)}
        </p>
      </div>

      <div className="h-28 mt-20" />
    </header>
  );
}
