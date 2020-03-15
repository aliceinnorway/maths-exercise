import React from '../../node_modules/react';
import Exercises from '../Components/Exercises/exercises';
import './App.scss';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
// test
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">Maths Homework</h1>
        <Exercises className="exercise"/>
        <button>Check Answer</button>
        <p>{Exercises.answer}</p>
      </div>
    )
  }
}



export default App;