import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

// const exercises = ['correr', 'jogar', 'treinar', 'comer', 'dormir', 'correr', 'ler'];

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
        <Footer />
        {/* {exercises.map((ex) => Task(ex))} */}
      </React.Fragment>
    );
  }
}

export default App;