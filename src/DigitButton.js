import { actions } from './actions.js';

const DigitButton = ({onClickClb, digit}) => {
    return (
    <button onClick={() => onClickClb({type: actions.enter_digit, payload: digit})}>{digit}</button>
    )
}

export default DigitButton;