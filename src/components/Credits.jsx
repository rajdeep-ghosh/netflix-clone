import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cast from "./Cast";
import axios from "../api/base";

const useStyles = makeStyles({
  root: {
    marginRight: '3rem',
    marginLeft: '3rem',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  media: {
    height: 180,
    objectFit: "contain",
  },
  content: {
    overflow: "hidden",
    textOverflow: "ellipses",
    whiteSpace: "nowrap",
  }
});

function Credits(props) {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const url = `/${props.contentType}/${props.id}/credits?api_key=${API_KEY}`;
  const [actors, setActors] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setActors(request.data.cast);
      return request;
    }

    fetchData();
  }, [url]);

  return (
    <div className="bg-gradient-to-b from-netflix-red-light to-netflix-black">
    <h2 className="text-white leading-5 font-extrabold text-2xl font-mulish ml-12">Cast</h2>
      <Grid container spacing={1} className={classes.root} >
        {actors.slice(0,14).map((actor) => {
          return (
            <Grid item >
              <Cast 
                name={actor.name || actor.original_name}
                character={actor.character}
                img={actor.profile_path}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

export default Credits;
