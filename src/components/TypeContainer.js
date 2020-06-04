import React, { Component } from "react";
import TypeItem from "./TypeItem";
import PropTypes from "prop-types";

export default class TypeContainer extends Component {
  render() {
    return this.props.types.map((type) => (
      <TypeItem key={type.name} type={type} />
    ));
  }
}

TypeContainer.propTypes = {
  Types: PropTypes.array.isRequired,
};
