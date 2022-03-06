import React from 'react';

import classes from './App.module.css';
import './actions.js';
import { useReducer } from 'react';
import { actions } from './actions.js';
import DigitButton from './DigitButton';
import DigitButtonTwo from './DigitButtonTwo';

const reducer = (state, {type, payload}) => {
    switch(type) {
        case actions.enter_digit:
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
            <DigitButton onClickClb={dispatch} digit='%'/>
            <button>/</button>
            <button>*</button>
            <DigitButton onClickClb={dispatch} digit='7' />
            <DigitButton onClickClb={dispatch} digit='8' />
            <DigitButton onClickClb={dispatch} digit='9' />
            <button>-</button>
            <DigitButton onClickClb={dispatch} digit='4' />
            <DigitButton onClickClb={dispatch} digit='5' />
            <DigitButton onClickClb={dispatch} digit='6' />
            <button>+</button>
            <DigitButton onClickClb={dispatch} digit='1' />
            <DigitButton onClickClb={dispatch} digit='2' />
            <DigitButton onClickClb={dispatch} digit='3' />
            <button className={classes.span__two__row}>=</button>
            <DigitButtonTwo onClickClb={dispatch} digit='0'/>
            <DigitButton onClickClb={dispatch} digit='.' />
               
        </div>
    )
}

export default App;