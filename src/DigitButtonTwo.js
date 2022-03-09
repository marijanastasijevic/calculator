import { actions } from './actions.js';

import classes from './DigitButtonTwo.module.css';

const DigitButtonTwo = ({onClickClb, digit}) => {
    return (
    <button className={classes.span__two__column} onClick={() => onClickClb({type: actions.enter_digit, payload: digit})}>{digit}</button>
    )
}

export default DigitButtonTwo;
