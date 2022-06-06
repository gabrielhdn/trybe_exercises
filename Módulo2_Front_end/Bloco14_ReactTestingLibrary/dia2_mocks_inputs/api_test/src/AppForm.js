import React, { Component } from 'react';

class AppForm extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          <label htmlFor="nome">
            Nome
            <input 
              type="text"
              id="nome"
              name="nome"
              value={ nome }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input 
              type="email"
              id="email"
              name="email"
              value={ email }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
      </div>
    );
  }
}

export default AppForm;
