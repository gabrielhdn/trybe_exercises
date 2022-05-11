import React from 'react';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clickCount1: 0,
      clickCount2: 0,
      clickCount3: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id.includes('1')) {
      this.setState((prevState, _props) => ({
        clickCount1: prevState.clickCount1 + 1
      }))
    } else if (event.target.id.includes('2')) {
      this.setState((prevState, _props) => ({
        clickCount2: prevState.clickCount2 + 1
      }))
    } else {
      this.setState((prevState, _props) => ({
        clickCount3: prevState.clickCount3 + 1
      }))
    }
  }

  changeColor(number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  // handleClick = () => {
  //   console.log(this);
  //   console.log("It's working!");
  // }
  
  render() {
    return (
      <React.Fragment>
        <button
         id='1'
         onClick={this.handleClick}
         style={{ backgroundColor: this.changeColor(this.state.clickCount1)}}
         >
           {this.state.clickCount1}
        </button>
        <button
         id='2'
         onClick={this.handleClick}
         style={{ backgroundColor: this.changeColor(this.state.clickCount2)}}
         >
           {this.state.clickCount2}
        </button>
        <button
         id='3'
         onClick={this.handleClick}
         style={{ backgroundColor: this.changeColor(this.state.clickCount3)}}
         >
           {this.state.clickCount3}
        </button>
      </React.Fragment>
    );
  }
}

export default App;
