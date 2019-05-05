import React, { Component } from 'react';
import './App.css';
import { Board } from './components/Board.js';
import { Modifier, ModifierDisplay } from './components/Modifier.js';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        score: 1,
        modifier: 2
      }
  }
  updateScore = (newScore) => {
    this.setState({
      score: newScore
    });
  }
  updateMod = (newMod) => {
    this.setState({
      modifier: newMod
    });
  }
  render() {
    return (
      <div className="App">
        {/* <Modifier mod={this.props.modifier} 
        update={this.updateMod} /> */}
        <ModifierDisplay modifier={this.state.modifier}/>
        <Board 
        score={this.state.score} 
        modifier={this.state.modifier} 
        onUpdate={this.updateScore}/>
      </div>
    );
  }
}
export default App;