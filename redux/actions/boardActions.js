export const UPDATE_BOARD = "UPDATE_BOARD";
export const updateBoard = number => {
  return (dispatch) => {

    dispatch({
        type: UPDATE_BOARD,
        number,
    });
  };
};
