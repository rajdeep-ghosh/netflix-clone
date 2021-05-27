import React from "react";
import Banner from "./Banner";
import List from "./List";
import Nav from "./Nav";
import requests from "../api/endpoints";

export default function HomeScreen() {
  return (
    <div>
      {/* Nav */}
        <Nav />
      
      {/* Banner */}
        <Banner />

      {/* List */}
        <List title="Top Rated Movies" fetchURL={requests.fetchTopRated} />
    </div>
  );
}
