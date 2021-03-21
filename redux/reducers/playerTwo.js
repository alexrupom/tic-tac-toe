import {PLAYER_TWO_NAME} from '../actions/playersActions';

const playerTwoReducer = (state = {name: 'Player Two'}, action) => {
    switch (action.type) {
        case PLAYER_TWO_NAME:
            return {...state, name: action.name};
        default:
            return {...state};
    }
};

export default playerTwoReducer;