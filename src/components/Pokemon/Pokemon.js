import React from "react";

const pokemon = props => {
  console.log(props.pokemon);
  props.pokemon.map(mon => {
    console.log(mon);
    return (
      <div mon={mon} key={mon.name}>
        <h2>{mon.name}</h2>
      </div>
    );
  });
};

export default pokemon;
