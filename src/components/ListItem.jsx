import React from "react";
import "./styles/ListItem.css";
import Rating from '@material-ui/lab/Rating';
import { truncate } from "../features/textTruncate";
import { getReleaseYear } from "../features/releaseYear";

export default function ListItem(props) {
  const posterBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="listitem h-[300px] mr-5 rounded-2xl overflow-hidden relative cursor-pointer shadow-md">
      <img
        className="w-full h-full object-cover block transform scale-110 transition-all ease-out duration-200 hover:scale-100"
        loading="lazy"
        src={`${posterBaseURL}${props.content.poster_path}`}
        alt={props.content?.title || props.content?.original_title || props.content?.name || props.content?.original_name}
      />
      {/* <div className="listitem__name absolute left-0 -bottom-1 p-4 pb-0 w-full z-10 text-white font-work-sans">
        <h5 className="text-xl font-extrabold truncate w-[95%] mb-4">
          {props.content?.title || props.content?.original_title || props.content?.name || props.content?.original_name}
          <span className="text-sm font-normal ml-2 opacity-75">
            ({getReleaseYear(props.content?.release_date || props.content?.first_air_date)})
          </span>
        </h5>
      </div> */}
      <div className="listitem__overlay absolute top-0 left-0 w-full h-full p-4 pt-20 opacity-0 hover:opacity-100 font-work-sans text-white">
        <h5 className="text-xl font-extrabold truncate w-[95%]">
          {props.content?.title || props.content?.original_title || props.content?.name || props.content?.original_name}
          <span className="text-sm font-normal ml-2 opacity-75">
            ({getReleaseYear(props.content?.release_date || props.content?.first_air_date)})
          </span>
        </h5>
        <p className="overflow-hidden mt-0 text-base">{truncate(props.content?.overview, 50)}</p>
        <Rating className="mt-2 float-left" name="read-only" value={props.content?.vote_average/2} precision={0.5} readOnly />
        <span className="absolute pt-2">{props.content?.vote_average}</span>
      </div>
    </div>
  );
}
