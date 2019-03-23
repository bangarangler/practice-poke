import React from "react";

import axios from "axios";

import Pokemon from "../Pokemon/Pokemon.js";
const uuid4 = require("uuid4");

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => {
        this.setState({ pokemon: res.data.results });
        console.log(this.state.pokemon);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.pokemon);
    return (
      <Pokemon pokemon={this.state.pokemon} />
    )
  }
}

export default PokeList;

//{this.state.pokemon.map(pokename => {
//return <Pokemon key={uuid4()} pokeName={pokeName} />;
//})}
