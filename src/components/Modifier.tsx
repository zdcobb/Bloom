import React from 'react';

export interface Props {
    modifier: number,
    update: Function
}

// function Modifier(props: Props) {
class Modifier extends React.Component<Props, {modifier: number}> {
    constructor(props: Props) {
        super(props);
        this.state = {
            modifier: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({ modifier: this.props.modifier });
    }
    handleChange = (event: any) => {
        this.props.update(event.target.value);
        this.setState({ modifier: event.target.value });
        event.preventDefault();
    }
    render() {
        return (
        <div id="modifier">
            <div className="input-group">
                <label>Modifier</label>
                <input type="number" className="input" value={this.state.modifier} onChange={this.handleChange}></input>
            </div>
        </div>
        )
    }
}

function ModifierDisplay(props: {modifier: number}) {
    return (
        <div id="modifier-display">
            <p>Powers of {props.modifier}</p>
        </div>
    )
}

export { Modifier, ModifierDisplay };