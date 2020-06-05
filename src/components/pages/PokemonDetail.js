import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetail = (props) => {
  const [pokeDetails, setPokeDetails] = useState({});

  useEffect(() => {
    const werk = props.location.state.pokurl;
    console.log(werk);
    axios.get(werk).then((res) => setPokeDetails(res.data));
  }, [props.location.state.pokurl]);

  return (
    <div>
      <div>{pokeDetails.name}</div>
      <div>{pokeDetails.weight}</div>
      <div>{pokeDetails.base_experience}</div>
    </div>
  );
};

export default React.memo(PokemonDetail);
