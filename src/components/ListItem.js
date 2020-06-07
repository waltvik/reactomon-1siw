import React from "react";
import { Link } from "react-router-dom";
import styled /*, { ThemeProvider, css }*/ from "styled-components";

const Card = styled.div`
  background: #f4c20d;
  width: 200px;
  margin: 10px;
  box-shadow: 9px 9px 22px -8px rgba(0, 0, 0, 0.2);
`;

const Name = styled.div`
  padding: 20px 20px;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #3b4255;
`;

const Label = styled.div`
  width: 200px;
  background: #f5d14f;
  padding: 10px 0;
`;

const Checkout = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1rem;
  color: #ebe8bf;
  text-transform: uppercase;
  &:hover {
    color: red;
  }
`;

const ListItem = (props) => {
  const { name, url } = props.pokemon;

  const newUrl = url.substr(26);

  return (
    <Card className="pokeCard">
      <Name className="card-name">{name}</Name>
      <Label>
        <Checkout
          className="card-link"
          to={{
            pathname: newUrl,
            state: {
              pokurl: props.pokemon.url,
            },
          }}
        >
          check me out
        </Checkout>
      </Label>
    </Card>
  );
};

export default React.memo(ListItem);
