import React from 'react';

function Modifier() {
    return (
        <div id="modifier">
            <div class="input-group">
                <label>Modifier</label>
                <input type="number" className="input"></input>
            </div>
        </div>
    )
}

function ModifierDisplay(props) {
    return (
        <div id="modifier-display">
            <p>Powers of {props.modifier}</p>
        </div>
    )
}

export { Modifier, ModifierDisplay };