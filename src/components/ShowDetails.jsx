import React, { useEffect, useState } from "react";
import "./styles/Banner.css";
import Rating from "@material-ui/lab/Rating";
import PlayButton from "./PlayButton";
import VideoModal from "./VideoModal";
import axios from "../api/base";
import { getReleaseYear } from "../features/releaseYear";
import { truncate } from "../features/textTruncate";

export default function ShowDetails({ match }) {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const url = `/${match.params.contentType}/${match.params.id}?api_key=${API_KEY}`;
  const [title, setTitle] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setTitle(request.data);
      return request;
    }

    fetchData();
  }, [url]);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full pt-28 px-12 pb-12 bg-gradient-to-b to-netflix-red-light from-netflix-black">
      <div
        className="absolute top-0 right-0 w-3/4 h-[30rem] mix-blend-overlay banner__overlay"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280${title?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}
      ></div>

      <div className="relative pt-20 z-10 text-white font-work-sans">
        <p className="pl-[2px] pb-2 font-medium uppercase tracking-wider">
          {match.params.contentType}
        </p>
        <h1 className=" text-[3rem] leading-[3rem] font-mulish font-black max-w-[840px] pb-1">
          {title?.title ||
            title?.original_title ||
            title?.name ||
            title?.original_name}
          <span className="text-2xl leading-4 font-thin opacity-50">
            &nbsp;&nbsp;(
            {getReleaseYear(
              title?.release_date || title?.first_air_date
            )}
            )
          </span>
        </h1>
        <p className="pl-[2px] pt-2 font-medium uppercase">
          {title?.genres?.slice(0, 3).map((genre) => {
            return <span key={genre.id}>{genre.name}&nbsp;&nbsp;</span>;
          })}
        </p>
        <p className="text-base leading-5 font-normal w-[45rem] max-w-[50%] pt-4 ml-[0.1rem]">
          {truncate(title?.overview, 200)}
        </p>
        <p className="pl-[2px] mt-2 font-medium uppercase">
          <Rating
            className="h-5 w-5 float-left"
            name="read-only"
            value={title?.vote_average / 2}
            precision={0.5}
            readOnly
          />
          <span className="pl-28">
            {title?.vote_average}
            &nbsp; ({title?.vote_count})
          </span>
        </p>
        <div className="mt-4">
          <VideoModal
            open={isOpen}
            contentType={match.params.contentType}
            id={title?.id}
            close={handleChange}
          />
          <PlayButton click={handleChange} />
        </div>
      </div>
    </header>
  );
}
