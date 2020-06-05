import React, { useState, useEffect } from "react";
import PoContainer from "../PoContainer";
import axios from "axios";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));
  }, []);

  return (
    <div className="card-container">
      <PoContainer pokemons={pokemons} />
    </div>
  );
};

export default React.memo(Pokemons);
