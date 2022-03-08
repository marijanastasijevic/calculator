import React from 'react';

import classes from './App.module.css';
import './actions.js';
import { useReducer } from 'react';
import { actions } from './actions.js';
import DigitButton from './DigitButton';
import DigitButtonTwo from './DigitButtonTwo';
import OperationButton from './OperationButton';


const isNotZeroOrDot = (input) => {
    if(input === '0' || input === '.'){
        return false;
    }
    return true;
};

const reducer = (state, {type, payload}) => {
    switch(type) {
        case actions.enter_digit:
            if(state.newOperand === '0' && payload === '0'){
                return{
                    ...state
                } 
            }
            if(state.newOperand === '0' && isNotZeroOrDot(payload)){
                return{
                    ...state,
                    newOperand: `${payload}`
                }
            }
            if(state.newOperand.includes('.') && payload === '.'){
                return{
                    ...state
                }
            }
            return{
                ...state,
                newOperand: `${state.newOperand}${payload}`,
            };
        case actions.choose_operation:
            return{
                ...state,
                newOperand: `${state.newOperand}${payload}`
            };
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
    const [{newOperand, prevOperand, operation}, dispatch]= useReducer(reducer, {newOperand: '', prevOperand: '', operation: ''});

    return(
        <div className={classes.calculator__grid}>
            <div className={classes.display}>
                <div className={classes.previous__operand}>{prevOperand}{operation}</div>
                <div className={classes.current__operand}>{newOperand}</div>
            </div>
            <button>AC</button>
            <OperationButton onClickClb={dispatch} operation='%'/>
            <OperationButton onClickClb={dispatch} operation='/'/>
            <OperationButton onClickClb={dispatch} operation='*'/>
            <DigitButton onClickClb={dispatch} digit='7' />
            <DigitButton onClickClb={dispatch} digit='8' />
            <DigitButton onClickClb={dispatch} digit='9' />
            <OperationButton onClickClb={dispatch} operation='-'/>
            <DigitButton onClickClb={dispatch} digit='4' />
            <DigitButton onClickClb={dispatch} digit='5' />
            <DigitButton onClickClb={dispatch} digit='6' />
            <OperationButton onClickClb={dispatch} operation='+'/>
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