import React from "react";

import axios from "axios";

import Pokemon from "../Pokemon/Pokemon.js";
const uuid4 = require("uuid4");

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      loading: false,
      url: "",
      previous: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => {
        this.setState({ pokemon: res.data.results, url: res.data.next });
        console.log(this.state.pokemon);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleNext = () => {
    axios
      .get(this.state.url)
      .then(res => {
        this.setState({
          pokemon: res.data.results,
          url: res.data.next,
          previous: res.data.previous
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handlePrev = () => {
    axios.get(this.state.previous).then(res => {
      this.setState({
        pokemon: res.data.results,
        url: res.data.next,
        previous: res.data.previous
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          this.state.pokemon.map(mon => {
            return <Pokemon key={uuid4()} {...mon} />;
          })
        ) : (
          <p>Loading...</p>
        )}
        {this.state.previous !== "" && this.state.previous !== null ? (
          <button onClick={this.handlePrev}>Previous Mons</button>
        ) : null}
        <button onClick={this.handleNext}>Load More Mons</button>
      </React.Fragment>
    );
  }
}

export default PokeList;
