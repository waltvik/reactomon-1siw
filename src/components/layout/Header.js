import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Colors";
import styled /*, { ThemeProvider, css }*/ from "styled-components";

import ThemeToggler from "../../ThemeToggler";

const Headerr = styled.header`
  background: #66c3b1;
  color: #3b4255;
  padding: 10px;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: #3b4255;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  &:hover {
    background: #3b4255;
    color: #f4c20d;
  }
  margin: auto 0;
`;

const Title = styled.h1`
  color: #3b4255;
  text-align: left;
  margin: 0;
  font-size: 3rem;
`;

const Nav = styled.div`
  padding: 20px;
`;

const Header = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <Headerr
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <Title className="title">Reactomon</Title>
      <Nav>
        <StyledLink className="link" to="/">
          Home
        </StyledLink>{" "}
        |{" "}
        <StyledLink className="link" to="/pokemons">
          Pokemons
        </StyledLink>{" "}
        |{" "}
        <StyledLink className="link" to="/types">
          Types
        </StyledLink>
        <ThemeToggler />
      </Nav>
    </Headerr>
  );
};

export default React.memo(Header);
