import React, { Component } from "react";
import PoContainer from "../PoContainer";
import axios from "axios";

export default class Pokemons extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ pokemons: res.data.results }));
  }
  render() {
    return (
      <div className="card-container">
        <PoContainer pokemons={this.state.pokemons} />
      </div>
    );
  }
}
