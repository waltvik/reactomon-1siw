import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerMain">
      <h1>Reactomon</h1>
      <Link className="link" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="link" to="/pokemons">
        Pokemons
      </Link>{" "}
      |{" "}
      <Link className="link" to="/types">
        Types
      </Link>
    </header>
  );
};

export default React.memo(Header);
