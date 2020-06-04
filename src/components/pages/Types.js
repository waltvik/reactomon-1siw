import React, { Component } from "react";
import TypeContainer from "../TypeContainer";
import axios from "axios";

export default class Types extends Component {
  state = {
    types: [],
  };
  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => this.setState({ types: res.data.results }));
  }
  render() {
    console.log("types in Types" + this.state.types);
    return (
      <div className="card-container">
        <TypeContainer types={this.state.types} />
      </div>
    );
  }
}
