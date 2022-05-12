import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleFormChange = this.handleFormChange.bind(this);

    this.state = {
      selectV: '',
      inputEmail: '',
      inputPassword: '',
      textAreaV: '',
      checkboxV: false,
    }

  }

  handleFormChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <section>
        <form className='form'>
          <select name='selectV' value={this.state.selectV} onChange={this.handleFormChange}>
            <option name='first option'>first option</option>
            <option name='second option'>second option</option>
          </select>
          <fieldset>
            <input type='email' name='inputEmail' value={this.state.inputEmail} onChange={this.handleFormChange} />
            <input type='password' name='inputPassword' value={this.state.inputPassword} onChange={this.handleFormChange} />
          </fieldset>
          <textarea name='textAreaV'  value={this.state.textAreaV} onChange={this.handleFormChange} />
          <input type='checkbox' name='checkboxV' value={this.state.checkboxV} onChange={this.handleFormChange} />
        </form>
      </section>
    );
  }
}

export default Form;