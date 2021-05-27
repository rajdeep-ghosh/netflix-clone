import React from "react";

export default function ListItem(props) {
  const posterBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <img
        src={`${posterBaseURL}${props.content.poster_path}`}
        alt={props.content.name}
      />
    </div>
  );
}
