import React from 'react';

import classes from './App.module.css';
import './actions.js';
import { useReducer } from 'react';
import { actions } from './actions.js';
import DigitButton from './DigitButton';
import DigitButtonTwo from './DigitButtonTwo';
import OperationButton from './OperationButton';
import ACButton from './ACButton';
import EqualButton from './EqualButton'



const isNotZeroOrDot = (input) => {
    if(input === '0' || input === '.'){
        return false;
    }
    return true;
};

const calculate = (firstOp, operation, secondOp) => {
    if(firstOp === ''){
        return secondOp;
    }
    switch(operation){
        case '%':
            return Number(firstOp) % Number(secondOp);
        case '/':
            return Number(firstOp) / Number(secondOp);
        case '*':
            return Number(firstOp) * Number(secondOp);
        case '-':
            return Number(firstOp) - Number(secondOp);
        case '+':
            return Number(firstOp) + Number(secondOp);
        default:
            console.log('Unknown operation');
            return;
    }
}

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
            if(state.newOperand === ''){
                return {
                    ...state,
                    operation: `${payload}`
                }
            }
            return{
                ...state,
                prevOperand: `${calculate(state.prevOperand, state.operation, state.newOperand)}`,
                operation: `${payload}`,
                newOperand: '',
            };
        case actions.delete_all:
            return{
                ...state,
                newOperand: '0',
                prevOperand: '',
                operation: '',
            
            }
        case actions.calculate:
            return{
                ...state,
                newOperand: `${calculate(state.prevOperand, state.operation, state.newOperand)}`,
                prevOperand: '',
                operation: ''
            };
        default:
            console.log('Unknown action');
            return;
    }

}

function App() {
    const [{newOperand, prevOperand, operation}, dispatch]= useReducer(reducer, {newOperand: '0', prevOperand: '', operation: ''});

    return(
        <div className={classes.calculator__grid}>
            <div className={classes.display}>
                <div className={classes.previous__operand}>{prevOperand}{operation}</div>
                <div className={classes.current__operand}>{newOperand}</div>
            </div>
            <ACButton onClickClb={dispatch} deleteAll='AC'/>
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
            <EqualButton onClickClb={dispatch} equal='='/>
            <DigitButtonTwo onClickClb={dispatch} digit='0'/>
            <DigitButton onClickClb={dispatch} digit='.' />
               
        </div>
    )
}

export default App;