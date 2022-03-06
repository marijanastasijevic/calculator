import React from 'react';

import classes from './App.module.css';
import './actions.js';
import { useReducer } from 'react';
import { actions } from './actions.js';

const reducer = (state, {type, payload}) => {
    switch(type) {
        case actions.enter_digit:
            console.log(payload);
            return{
                ...state,
                newOperand: `${state.newOperand || ""}${payload}`,
            };
        case actions.choose_operation:
            return;
        case actions.delete_all:
            return;
        case actions.calculate:
            return;
        default:
            console.log('Unknown action');
            return;
    }

}

function App() {
    const [{newOperand, prevOperand, operation}, dispatch]= useReducer(reducer, {});

    return(
        <div className={classes.calculator__grid}>
            <div className={classes.display}>
                <div className={classes.previous__operand}>{prevOperand}{operation}</div>
                <div className={classes.current__operand}>{newOperand}</div>
            </div>
            <button>AC</button>
            <button>%</button>
            <button>/</button>
            <button>*</button>
            <button>7</button>
            <button onClick={() => {dispatch({type: actions.enter_digit, payload: 8})}}>8</button>
            <button>9</button>
            <button>-</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className={classes.span__two__row}>=</button>
            <button className={classes.span__two__column}>0</button>
            <button>.</button>
               
        </div>
    )
}

export default App;