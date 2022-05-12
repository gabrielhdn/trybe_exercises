import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    this.state = {
      mouseEnterCount: 0,
      inputName: '',
      inputEmail: '',
      inputCPF: '',
      inputAddress: '',
      inputCity: '',
      selectV: '',
      inputHome: '',
      textAreaResumee: '',
      textAreaCargo: '',
      textAreaCargoDescription: '',
    }
  }

  handleBlur() {
    return 'Hi';
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  handleMouseEnter() {
    if (this.state.mouseEnterCount < 1) alert('Preencha este campo com cuidado!');
    this.setState((prevState, _props) => ({
      mouseEnterCount: prevState.mouseEnterCount + 1
    }))
  }

  render() {
    return (
      <form className='form'>
        <fieldset>
          <input type='text' name='inputName' placeholder='Nome' maxLength={40} value={this.state.inputName.toUpperCase()} onChange={this.handleChange} required />
          <input type='email' name='inputEmail' placeholder='E-mail' maxLength={50} value={this.state.inputEmail} onChange={this.handleChange} required />
          <input type='text' name='inputCPF' placeholder='CPF' maxLength={11} value={this.state.inputCPF} onChange={this.handleChange} required />
          <input type='text' name='inputAddress' placeholder='Endereço' maxLength={200} value={this.state.inputAddress} onChange={this.handleChange} required />
          <input type='text' name='inputCity' placeholder='Cidade' maxLength={28} value={this.state.inputCity} onChange={this.handleChange} onBlur={this.handleBlur} required />
          <select name='selectV' value={this.state.selectV} onChange={this.handleChange} required>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goías</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraíma</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          <div className='radioDivs'>
            <label>
              <input type='radio' name='inputHome' onChange={this.handleChange} value='house' />Casa
            </label>
            <label>
              <input type='radio' name='inputHome' onChange={this.handleChange} value='apartment'/>Apartamento
            </label>
          </div>
        </fieldset>
        <fieldset>
          <label className='resumee'>Resumo do currículo 
            <textarea maxLength={1000} style={{height: '60px', width: '200px'}} name='textAreaResumee' value={this.state.textAreaResumee} onChange={this.handleChange} required />
          </label>
          <label className='cargo'>Cargo
            <textarea maxLength={40} style={{height: '20px', width: '200px'}} name='textAreaCargo' value={this.state.textAreaCargo} onChange={this.handleChange} onMouseEnter={this.handleMouseEnter} required />
          </label>
          <label className='cargoDescription'>Cargo
            <textarea maxLength={500} style={{height: '60px', width: '200px'}} name='textAreaCargoDescription' value={this.state.textAreaCargoDescription} onChange={this.handleChange} required />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;