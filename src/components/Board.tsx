import React from 'react';
import { calculateChoices } from '../helpers/NumberGenerator';

export interface Props {
  score: number,
  modifier: number,
  onUpdate: Function
}

export interface State {
  choices: number[]
}

class Board extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      choices: []
    }
  }
  componentDidMount() {
    this.setState({
      choices: calculateChoices(this.props.score, this.props.modifier)
    });
  }
  handleClick = (i: number) => {
    if (i === (this.props.score * this.props.modifier)) {
      this.props.onUpdate(i);
    } else {
      alert("Wrong!");
      this.props.onUpdate(1);
      i = 1;
    }
    this.setState({
      choices: calculateChoices(i, this.props.modifier)
    });
  }
  renderChoice(i: number, direction: string) {
    return (
      <Choice
        number={this.state.choices[i]} 
        update={this.handleClick}
        direction={direction}
      />
    );
  }
  render() {
    return (
      <div className="board">
        <div className="gap"></div>
        {this.renderChoice(0, 'top')}
        <div className="gap"></div>
        {this.renderChoice(1, 'left')}
        <button className="score">{this.props.score}</button>
        {this.renderChoice(2, 'right')}
        <div className="gap"></div>
        {this.renderChoice(3, 'bottom')}
        <div className="gap"></div>
      </div>
    );
  }
}

export interface ChoiceProps {
  number: number,
  direction: string,
  update: Function
}

class Choice extends React.Component<ChoiceProps> {
  handleClick = () => {
    this.props.update(this.props.number);
    
  }
  render () {
    return (
      <button 
        onClick={this.handleClick}>
          {this.props.number}
      </button>
    )
  }
}

export { Board };