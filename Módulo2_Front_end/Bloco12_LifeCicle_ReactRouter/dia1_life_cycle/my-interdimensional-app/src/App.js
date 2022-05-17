import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => this.setState({ characters: data.results }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    const loading = <span>'loading...'</span>;
    return(
      <div className='App'>
        <h1>Rick and Morty Characters</h1>
        {/* { Boolean(characters.length) ? <h2>{characters[0].name}</h2> : loading } */}
        <div className='body'>
          {characters.map(({ name, image }) => {
            return (
              <div className='container'>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
