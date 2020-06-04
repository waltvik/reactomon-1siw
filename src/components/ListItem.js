import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const { name, url } = props.pokemon;

  const newUrl = url.substr(26);

  return (
    <div className="pokeCard">
      <div className="card-name">{name}</div>
      <Link
        className="card-link"
        to={{
          pathname: newUrl,
          state: {
            pokurl: props.pokemon.url,
          },
        }}
      >
        check me out
      </Link>
    </div>
  );
};

export default React.memo(ListItem);
