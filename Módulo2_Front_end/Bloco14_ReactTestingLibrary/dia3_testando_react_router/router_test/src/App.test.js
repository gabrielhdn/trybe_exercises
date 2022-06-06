import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicação toda', () => {
  
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre'
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar um caminho não existente', async () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina-que-nao-existe');

    const notFoundTitle = await screen.findByRole('heading', {
      name: 'Página não encontrada' 
    });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('deve renderizar apenas o component About', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre'
    });
    expect(aboutTitle).toBeInTheDocument();
  });

});
