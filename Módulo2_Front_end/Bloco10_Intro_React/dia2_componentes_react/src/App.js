import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Pokedex pokemons={pokemons}/>
        <Footer />
      </div>
    );
  }
}

export default App;