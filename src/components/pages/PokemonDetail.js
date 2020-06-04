import React, { Component } from "react";
import axios from "axios";

export default class PokemonDetail extends Component {
  state = {
    pokeDetails: [],
  };

  componentDidMount() {
    console.log("heloooo" + this.props.location.state.pokurl);
    const werk = this.props.location.state.pokurl;
    axios.get(werk).then((res) => this.setState({ pokeDetails: res.data }));
  }

  render() {
    console.log("pokedetailzz" + this.state.pokeDetails);
    return (
      <div>
        details to come <div>{this.state.pokeDetails.name}</div>
        <div>{this.state.pokeDetails.weight}</div>
        <div>{this.state.pokeDetails.base_experience}</div>
      </div>
    );
  }
}
