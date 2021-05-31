import React from "react";
import Banner from "./Banner";
import List from "./List";
import Nav from "./Nav";
import requests from "../api/endpoints";

export default function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <List
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isFirstList={true}
        isLastList={false}
      />
      <List
        title="Latest & Trending"
        fetchURL={requests.fetchTrending}
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Top Rated Movies"
        fetchURL={requests.fetchTopRated}
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Top Rated Series For You"
        fetchURL={requests.fetchWebSeries}
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Anime Series"
        fetchURL={requests.fetchAnime}
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Anime Movies"
        fetchURL={requests.fetchAnimeMovies}
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Romantic Movies"
        fetchURL={requests.fetchRomanceMovies}
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Animated Movies"
        fetchURL={requests.fetchAnimationMovies}
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Made in India"
        fetchURL={requests.fetchIndianMovies}
        isFirstList={false}
        isLastList={false}
      />
      <List
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        isFirstList={false}
        isLastList={true}
      />
      
    </div>
  );
}
