import React from 'react';
import './App.css';
import { Board } from './components/Board';
import { Modifier, ModifierDisplay } from './components/Modifier';

export interface State {
  score: number,
  modifier: number
}

class App extends React.Component<Object, State> {
  constructor(props: object){
    super(props);
      this.state = {
        score: 1,
        modifier: 2
      }
  }
  updateScore = (newScore: number) => {
    this.setState({
      score: newScore
    });
  }
  updateMod = (newMod: number) => {
    this.setState({
      modifier: newMod
    });
  }
  render() {
    return (
      <div className="App">
        <Modifier modifier={this.state.modifier} 
        update={this.updateMod} />
        <ModifierDisplay modifier={this.state.modifier}/>
        <Board 
        score={this.state.score} 
        modifier={this.state.modifier} 
          onUpdate={this.updateScore}
        />
      </div>
    );
  }
}
export default App;