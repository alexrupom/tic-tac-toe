import {PLAYER_ONE_NAME} from '../actions/playersActions';

const playerOneReducer = (state = {name: 'Player One'}, action) => {
    switch (action.type) {
        case PLAYER_ONE_NAME:
            return {...state, name: action.name};
        default:
            return {...state};
    }
};

export default playerOneReducer;
