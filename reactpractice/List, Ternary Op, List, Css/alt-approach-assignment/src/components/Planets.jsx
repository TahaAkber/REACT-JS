import React from "react";

function Planets(props) {
  return (
    <div>
      {props.isGasplanet && (
        <div>
          <h2>{props.name}</h2>
        </div>
      )}
    </div>
  );
}

export default Planets;
