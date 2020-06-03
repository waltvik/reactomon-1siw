import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class ListItem extends Component {
  render() {
    console.log(this.props.pokemon);
    const { name, url } = this.props.pokemon;
    return (
      <div className="pokeCard">
        <div className="card-name">{name}</div>
        <Link className="card-link" to={url}>
          check me out
        </Link>
      </div>
    );
  }
}

ListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
