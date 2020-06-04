import React from "react";
import TypeItem from "./TypeItem";

const TypeContainer = (props) => {
  return props.types.map((type) => <TypeItem key={type.name} type={type} />);
};

export default React.memo(TypeContainer);
