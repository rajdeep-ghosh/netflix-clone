import React, { useEffect, useState } from "react";
import "./styles/Banner.css";
import Rating from '@material-ui/lab/Rating';
import PlayButton from "./PlayButton";
import VideoModal from "./VideoModal";
import axios from "../api/base";
import requests from "../api/endpoints";
import { getReleaseYear } from "../features/releaseYear";
import { getGenre } from "../features/genres";
import { truncate } from "../features/textTruncate";

export default function Banner() {
  const [featuredShow, setFeaturedShow] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setFeaturedShow(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full pt-28 px-12 pb-12 bg-gradient-to-b to-netflix-red-light from-netflix-black">
      <div 
        className="absolute top-0 right-0 w-3/4 h-[30rem] mix-blend-overlay banner__overlay"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280${featuredShow?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}>
      </div>

      <div className="relative pt-20 z-10 text-white font-work-sans">
        <p className="pl-[2px] pb-2 font-medium uppercase tracking-wider">Featured</p>
        <h1 className=" text-[3rem] leading-[3rem] font-mulish font-black max-w-[840px] pb-1">
          {featuredShow?.title || featuredShow?.original_title || featuredShow?.name || featuredShow?.original_name}
          <span className="text-2xl leading-4 font-thin opacity-50">
            &nbsp;&nbsp;({getReleaseYear(featuredShow?.release_date || featuredShow?.first_air_date)})
          </span>
        </h1>
        <p className="pl-[2px] pt-2 font-medium uppercase">
          {featuredShow?.genre_ids?.slice(0,3).map((genre) => {
            return <span key={genre}>{getGenre(genre)}&nbsp;&nbsp;</span>;
          })}
        </p>
        <p className="text-base leading-5 font-normal w-[45rem] max-w-[50%] pt-4 ml-[0.1rem]">
          {truncate(featuredShow?.overview ,200)}
        </p>
        <p className="pl-[2px] mt-2 font-medium uppercase">
          <Rating className="h-5 w-5 float-left" name="read-only" value={featuredShow?.vote_average/2} precision={0.5} readOnly />
          <span className="pl-28">
            {featuredShow?.vote_average}
            &nbsp;
            ({featuredShow?.vote_count})
          </span>
        </p>
        <div className="mt-4">
          <VideoModal open={isOpen} id={featuredShow?.id} close={handleChange} />
          <PlayButton click={handleChange} />
        </div>
      </div>
    </header>
  );
}
