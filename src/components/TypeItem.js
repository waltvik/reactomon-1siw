import React from "react";

const TypeItem = (props) => {
  return (
    <div className="pokeCard">
      <div className="card-name">{props.type.name}</div>
    </div>
  );
};

// TypeItem.propTypes = {
//  type: PropTypes.object.isRequired,
// };

export default React.memo(TypeItem);
