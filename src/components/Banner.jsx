import React, { useEffect, useState } from "react";
import "./styles/Banner.css";
import axios from "../api/base";
import requests from "../api/endpoints";
import { getGenre } from "../api/genres";

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

  // console.log(featuredShow);

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
        <p className="pl-[2px] pb-2 font-medium uppercase tracking-wider">Featured</p>
        <h1 className=" text-[3rem] leading-9 font-mulish font-black max-w-[840px] pb-1">
          {featuredShow?.title || featuredShow?.original_name || featuredShow?.name || featuredShow?.original_name}
          <span className="text-2xl leading-4 font-thin opacity-50">
            &nbsp;&nbsp;({getReleaseYear(featuredShow?.release_date || featuredShow?.first_air_date)})
          </span>
        </h1>
        <p className="pl-[2px] pt-2 font-medium uppercase">
          {featuredShow?.genre_ids?.slice(0,3).map((genre) => {
            return <span>{getGenre(genre)}&nbsp;&nbsp;</span>;
          })}
        </p>
        <p className="text-base leading-5 font-normal w-[45rem] max-w-sm h-20 pt-4 ml-1">
          {truncate(featuredShow?.overview ,125)}
        </p>
        <p className="pl-[2px] mt-2 font-medium uppercase flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-500 float-left" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-500 float-left" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-500 float-left" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-500 float-left" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-500 float-left" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="pl-2">
            {featuredShow?.vote_average}
            &nbsp;
            ({featuredShow?.vote_count})
          </span>
        </p>
        <div className="mt-4">
          <button className="banner__btn rounded-3xl flex items-center hover:text-black hover:bg-[#e6e6e6] transition duration-200 focus:outline-none">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
            </span>
            <span className="uppercase tracking-wide font-normal">&nbsp;&nbsp;Play</span>
          </button>
          {/* <button className="banner__btn hover:text-black hover:bg-[#e6e6e6] transition duration-200 focus:outline-none">
            My List
          </button> */}
        </div>
      </div>

      <div className="h-28 mt-20" />
    </header>
  );
}
