import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import HomeScreen from "./HomeScreen";
import Footer from "./Footer";
import ShowDetails from "./ShowDetails";

export default function App() {
  return (
    <Router>
      <div className="antialiased">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/:contentType/title/:id" component={ShowDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
