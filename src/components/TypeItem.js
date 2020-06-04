import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TypeItem extends Component {
  render() {
    return (
      <div className="pokeCard">
        <div className="card-name">{this.props.type.name}</div>
      </div>
    );
  }
}

TypeItem.propTypes = {
  type: PropTypes.object.isRequired,
};
