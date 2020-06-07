import React from "react";
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

const TypeItem = (props) => {
  return (
    <Card className="pokeCard">
      <Name className="card-name">{props.type.name}</Name>
    </Card>
  );
};

export default React.memo(TypeItem);
