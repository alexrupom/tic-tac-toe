import playerOne from './playerOne';
import playerTwo from './playerTwo';
import board from './board';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    playerOne,
    playerTwo,
    board,
});

export default rootReducer;
