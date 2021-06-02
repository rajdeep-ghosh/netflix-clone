import React, { useState, useEffect } from "react";
import { Grow } from "@material-ui/core";
import ModalVideo from "react-modal-video";
import axios from "../api/base";
import "./styles/VideoModal.css";

function VideoModal(props) {
  const [vidId, setVidId] = useState();
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const movieURL = `/movie/${props.id}/videos?api_key=${API_KEY}`;
  const tvURL = `/tv/${props.id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(movieURL);
      if (request.data.success === "false" || !request.data.results.length) {
        request = await axios.get(tvURL);
      }
      handleSet(request.data.results);
      return request;
    }

    fetchData();
  });

  function handleSet(shows) {
    for (let index = 0; index < shows.length; index++) {
      if (shows[index].type === "Trailer") {
        setVidId(shows[index].key);
        break;
      }
    }
  }

  return (
    <div>
      <Grow in={props.open} mountOnEnter unmountOnExit>
        <ModalVideo
          channel="youtube"
          isOpen={true}
          videoId={vidId}
          onClose={props.close}
        />
      </Grow>
    </div>
  );
}

export default VideoModal;
