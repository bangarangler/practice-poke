import React, { Component } from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";
import PokeList from "./components/PokeList/PokeList.js";
import PokemonTeam from "./components/PokemonTeam/PokemonTeam.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemon-list/">Pokemon List</Link>
            </li>
            <li>
              <Link to="/pokemon-team/">Pokemon Team</Link>
            </li>
          </ul>
        </nav>
        <h1>Welcom To PokeDex</h1>
        <Route exact path="/" />
        <Route
          path="/pokemon-list/"
          render={props => <PokeList {...props} />}
        />
        <Route
          exact
          path="/pokemon-team/"
          render={props => <PokemonTeam {...props} />}
        />
      </div>
    );
  }
}

export default App;
