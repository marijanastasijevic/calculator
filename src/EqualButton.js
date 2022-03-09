import {actions} from './actions';
import classes from './EqualButton.module.css'

const EqualButton = ({onClickClb, equal}) => {
    return(
        <button className={classes.span__two__row} onClick={() => onClickClb({type: actions.calculate, payload: equal})}>{equal}</button>
    )
}

export default EqualButton;