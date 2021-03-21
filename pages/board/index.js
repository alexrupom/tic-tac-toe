import React, { useState } from "react";

const Square = (props) => (
    <button onClick={props.onClick}>{props.value}</button>
);

const Board = ({ someProps }) => {

    return (
        <div className='test'>
            Board {someProps}
            <div>
                <Square value="1" onClick={() => onClick("dummy value")} />
                <Square value="2" onClick={() => onClick("dummy value")} />
                <Square value="3" onClick={() => onClick("dummy value")} />
                <Square value="4" onClick={() => onClick("dummy value")} />
                <Square value="5" onClick={() => onClick("dummy value")} />
                <Square value="6" onClick={() => onClick("dummy value")} />
                <Square value="7" onClick={() => onClick("dummy value")} />
                <Square value="8" onClick={() => onClick("dummy value")} />
                <Square value="9" onClick={() => onClick("dummy value")} />
            </div>
        </div>
    );
};

export default Board;
