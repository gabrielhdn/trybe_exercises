import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <main className='main-section'>
        <section className='pokemons-section'>
          {pokemons.map((pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
        </section>
      </main>
    );
  }
}

export default Pokedex;