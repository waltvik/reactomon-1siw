import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Pokemons from "./components/pages/Pokemons";
import Types from "./components/pages/Types";
import PokemonsDetail from "./components/pages/PokemonDetail";
import styled /*, { ThemeProvider, css }*/ from "styled-components";

import "./App.css";

const H1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: #3b4255;
`;

const H2 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #3b4255;
`;

const App = () => {
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
                <H1>Welcome?</H1>
                <H2>You gotta catch them all...</H2>
              </React.Fragment>
            )}
          />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/types" component={Types} />
          <Route path="/pokemon/" component={PokemonsDetail} />
        </div>
      </div>
    </Router>
  );
};

export default React.memo(App);
