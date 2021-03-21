import {UPDATE_BOARD} from '../actions/boardActions'
const initialBoard = {
  numbers: {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null,
    nine: null,
  },
  currentPlayer: 'X',
}

const board = (state = initialBoard, action) => {
    switch (action.type) {
        case UPDATE_BOARD:
            const modifiedState = {...state}
            modifiedState.numbers[action.number] = state.currentPlayer
            modifiedState.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X'
            if(modifiedState.number.one === state.currentPlayer && modifiedState.number.one === state.currentPlayer)
            return {...modifiedState};
        default:
            return {...state};
    }
};

export default board;
