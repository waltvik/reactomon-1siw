import React from "react";
import ListItem from "./ListItem";

const PoContainer = (props) => {
  return props.pokemons.map((pokemon) => (
    <ListItem key={pokemon.name} pokemon={pokemon} />
  ));
};

export default React.memo(PoContainer);
