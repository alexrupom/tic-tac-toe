import {PLAYER_ONE_NAME} from '../actions/playersActions';

const playerOne = (state = {name: 'Player One', mark: 'X'}, action) => {
    switch (action.type) {
        case PLAYER_ONE_NAME:
            return {...state, name: action.name};
        default:
            return {...state};
    }
};

export default playerOne;
