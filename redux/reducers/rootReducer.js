import playerOne from './playerOne';
import playerTwo from './playerTwo';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    playerOne,
    playerTwo,
});

export default rootReducer;
