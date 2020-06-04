import React, { Component } from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

export default class PoContainer extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <ListItem key={pokemon.name} pokemon={pokemon} />
    ));
  }
}

PoContainer.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
