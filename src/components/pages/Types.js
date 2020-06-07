import React, { useState, useEffect } from "react";
import TypeContainer from "../TypeContainer";
import axios from "axios";
import styled /*, { ThemeProvider, css }*/ from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

const Types = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  return (
    <Container className="card-container">
      <TypeContainer types={types} />
    </Container>
  );
};

export default React.memo(Types);
