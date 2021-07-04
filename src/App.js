import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import MoviesList from "./containers/MoviesList";
// import MovieDetails from "./Components/MovieDetails";
import MovieTreeView from "./containers/MovieTreeView";
import Home from './containers/Home'

import './App.css';
import "./lib/font-awesome/css/all.min.css";


function App() {

  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/moviesList">
          <MoviesList />
        </Route>
        <Route path="/moviesTreeView">
          <MovieTreeView />
        </Route>
      </Switch>
    </Router>

  );

}





export default App;