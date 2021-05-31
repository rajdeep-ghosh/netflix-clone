import React, { useEffect, useState } from "react";
import "./styles/List.css";
import ListItem from "./ListItem";
import axios from "../api/base";

export default function List(props) {
  const [contents, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setContent(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);

  return (
    <div
      className={`px-12 py-6 w-full flex bg-gradient-to-b from-netflix-red-light to-netflix-black ${
        !props.isFirstList && `list__notfirst`
      }`}
    >
      <div className="mr-8 relative big__list">
        <h2 className="font-mulish font-extrabold text-2xl text-white leading-5 mb-8">
          {props.title}
        </h2>
        <div className="flex overflow-y-hidden overflow-x-scroll p-2 -ml-2 -mt-2 list__posters">
          {contents.map((content) => {
            return <ListItem key={content.id} content={content} />;
          })}
        </div>
      </div>
    </div>
  );
}
