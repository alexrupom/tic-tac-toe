import React, { useState } from "react";
import {connect} from 'react-redux';
import {updateBoard} from '../../redux/actions/boardActions';

const Square = (props) => (
    <button onClick={props.onClick}>{props.value}</button>
);

const Board = ({ playerOne, playerTwo, updateBoard }) => {
    const DEFAULT_NAMES = {
        playerOne: 'Player One',
        playerTwo: 'Player Two'
    }

    const onSquareClick = (number) => {
        updateBoard(number)
    }

    return (
        <div className='test'>
            <div>
                Player one:  {playerOne.name}
            </div>
            <div>
                Player two:  {playerTwo.name}
            </div>
            <div>
                <Square value="1" onClick={() => onSquareClick('one')} />
                <Square value="2" onClick={() => onSquareClick('two')} />
                <Square value="3" onClick={() => onSquareClick('three')} />
                <Square value="4" onClick={() => onSquareClick('four')} />
                <Square value="5" onClick={() => onSquareClick('five')} />
                <Square value="6" onClick={() => onSquareClick('six')} />
                <Square value="7" onClick={() => onSquareClick('seven')} />
                <Square value="8" onClick={() => onSquareClick('eight')} />
                <Square value="9" onClick={() => onSquareClick('nine')} />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    playerOne: state.playerOne,
    playerTwo: state.playerTwo,
    board: state.board,
});

const mapDispatchToProps = dispatch => ({
    updateBoard: (number) => dispatch(updateBoard(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
