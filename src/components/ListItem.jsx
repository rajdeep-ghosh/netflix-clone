import React from "react";
import "./styles/ListItem.css";

export default function ListItem(props) {
  const posterBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="list__item h-[300px] mr-5 rounded-2xl overflow-hidden relative cursor-pointer shadow-md">
      <img
        className="w-full h-full object-cover"
        loading="lazy"
        src={`${posterBaseURL}${props.content.poster_path}`}
        alt={props.content?.title || props.content?.original_title || props.content?.name || props.content?.original_name}
      />
    </div>
  );
}
