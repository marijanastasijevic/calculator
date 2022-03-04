import React from 'react';

import classes from './App.module.css'

function App() {
    return(
        <div className={classes.calculator__grid}>
            <div className={classes.display}>
                <div className={classes.previous__operand}>123</div>
                <div className={classes.current__operand}>456</div>
            </div>
            <button>AC</button>
            <button>%</button>
            <button>/</button>
            <button>*</button>
            <button>7</button>
            <button>8</button>
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