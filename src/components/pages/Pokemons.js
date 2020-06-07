import React, { useState, useEffect } from "react";
import PoContainer from "../PoContainer";
import axios from "axios";
import styled /*, { ThemeProvider, css }*/ from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));
  }, []);

  return (
    <Container className="card-container">
      <PoContainer pokemons={pokemons} />
    </Container>
  );
};

export default React.memo(Pokemons);
