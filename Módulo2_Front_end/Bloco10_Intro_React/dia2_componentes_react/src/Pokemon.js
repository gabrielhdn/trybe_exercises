import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <section className='pokemonCard'>
        <div><img src={image}/></div>
        <h3><a className='infoLink' href={moreInfo} target='_blank'>{name}</a></h3>
        <p>type: {type}</p>
        <p>average weight: {value} {measurementUnit}</p>
      </section>
    );
  }
}

export default Pokemon;