import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 200,
    maxWidth: 250,
    backgroundColor: "#111",
    color: "white",
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

function Cast(props) {
  const classes = useStyles();
  const imageBase = "https://image.tmdb.org/t/p/w200";
  const defaultImg = "https://bit.ly/3g9yvRA";

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.img !== null ? `${imageBase}${props.img}` : `${defaultImg}`}
        title={props.name}
      />
      <CardContent className={classes.content} >
        <Typography gutterBottom variant="h6" component="h6">
          {props.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.character}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cast;
