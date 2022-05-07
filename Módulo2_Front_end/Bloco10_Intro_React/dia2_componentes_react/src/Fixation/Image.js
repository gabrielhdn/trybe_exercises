import React from 'react';

// Exercício de fixação 10.2

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.alternativeText} />
    );
  }
}

export default Image;