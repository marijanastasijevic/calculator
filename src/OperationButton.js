import {actions} from './actions';

const OperationButton = ({onClickClb, operation}) => {
    return (
        <button onClick={() => onClickClb({type: actions.choose_operation, payload: operation})}>{operation}</button>
        )
}

export default OperationButton;