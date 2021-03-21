export const PLAYER_ONE_NAME = "PLAYER_ONE_NAME";
export const addPlayerOneName = (name) => {
    return (dispatch) => {
        dispatch({
            type: PLAYER_ONE_NAME,
            name,
        });
      };
};

export const PLAYER_TWO_NAME = "PLAYER_TWO_NAME";
export const addPlayerTwoName = (name) => {
    return (dispatch) => {
        dispatch({
            type: PLAYER_TWO_NAME,
            name,
        });
      };
};

export const SAVE_PLAYERS_NAME = "SAVE_PLAYERS_NAME";
export const savePlayersName = (playerOneName, playerTwoName) => {
    return (dispatch) => {
        dispatch(addPlayerTwoName(playerOneName));
        dispatch(addPlayerOneName(playerTwoName));
      };
};