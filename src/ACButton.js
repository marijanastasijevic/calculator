import {actions} from './actions';

const ACButton = ({onClickClb, deleteAll}) => {
    return(
        <button onClick={() => onClickClb({type: actions.delete_all, payload: deleteAll})}>{deleteAll}</button>
    )
}

export default ACButton;