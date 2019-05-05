import React from 'react';

export interface Props {
    modifier: number
}

function Modifier(props: Props) {
    return (
        <div id="modifier">
            <div className="input-group">
                <label>Modifier</label>
                <input type="number" className="input"></input>
            </div>
        </div>
    )
}

function ModifierDisplay(props: Props) {
    return (
        <div id="modifier-display">
            <p>Powers of {props.modifier}</p>
        </div>
    )
}

export { Modifier, ModifierDisplay };