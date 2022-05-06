import React from 'react';
import './Content.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    estado: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    estado: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    estado: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    estado: 'Aprenderei'
  },
];

class Component extends React.Component {
  render() {
    return (
      <div className='content-container'>
       {conteudos.map(({ conteudo, bloco, estado }, index) => {
        return (
          <div className='div' key={conteudo + index}>
            <h3>O conteúdo é: {conteudo}</h3>
            <p>Status: {estado}</p>
            <p>Bloco: {bloco}</p>
          </div>
        )
      })}
      </div>
    );
  }
}

export default Component;