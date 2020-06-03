import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokemons from "./components/pages/Pokemons";
import Types from "./components/pages/Types";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <h1>Welcome?</h1>
                </React.Fragment>
              )}
            />
            <Route path="/Pokemons" component={Pokemons} />
            <Route path="/Types" component={Types} />
          </div>
        </div>
      </Router>
    );
  }
}
