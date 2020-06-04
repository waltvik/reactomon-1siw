import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class ListItem extends Component {
  render() {
    const { name, url } = this.props.pokemon;

    const newUrl = url.substr(26);

    return (
      <div className="pokeCard">
        <div className="card-name">{name}</div>
        <Link
          className="card-link"
          to={{
            pathname: newUrl,
            state: {
              pokurl: this.props.pokemon.url,
            },
          }}
        >
          check me out
        </Link>
      </div>
    );
  }
}

ListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
