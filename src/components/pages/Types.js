import React, { useState, useEffect } from "react";
import TypeContainer from "../TypeContainer";
import axios from "axios";

const Types = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  return (
    <div className="card-container">
      <TypeContainer types={types} />
    </div>
  );
};

export default React.memo(Types);
