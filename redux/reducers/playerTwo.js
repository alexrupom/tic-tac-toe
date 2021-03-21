import {PLAYER_TWO_NAME} from '../actions/playersActions';

const playerTwo = (state = {name: 'Player Two', mark: 'O'}, action) => {
    switch (action.type) {
        case PLAYER_TWO_NAME:
            return {...state, name: action.name};
        default:
            return {...state};
    }
};

export default playerTwo;
