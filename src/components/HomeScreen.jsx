import React from "react";
import Banner from "./Banner";
import List from "./List";
import requests from "../api/endpoints";

export default function HomeScreen() {
  return (
    <div>
      <Banner />
      <List
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        contentType="tv"
        isFirstList={true}
        isLastList={false}
      />
      <List
        title="Latest & Trending"
        fetchURL={requests.fetchTrending}
        contentType="movie"
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Top Rated Movies"
        fetchURL={requests.fetchTopRated}
        contentType="movie"
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Top Rated Series For You"
        fetchURL={requests.fetchWebSeries}
        contentType="tv"
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Anime Series"
        fetchURL={requests.fetchAnime}
        contentType="tv"
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Anime Movies"
        fetchURL={requests.fetchAnimeMovies}
        contentType="movie"
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Romantic Movies"
        fetchURL={requests.fetchRomanceMovies}
        contentType="movie"
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Animated Movies"
        fetchURL={requests.fetchAnimationMovies}
        contentType="movie"
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Made in India"
        fetchURL={requests.fetchIndianMovies}
        contentType="movie"
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        contentType="movie"
        isFirstList={false}
        isLastList={true}
      /> 
    </div>
  );
}
