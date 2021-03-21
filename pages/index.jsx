import React, {useState} from 'react';
import {connect} from 'react-redux';
import {savePlayersName} from '../redux/actions/playersActions';
import Link from 'next/link';


const App = ({playerOne, playerTwo, savePlayersName}) => {
    const [playerOneName, setPlayerOneName] = useState(playerOne.name);
    const [playerTwoName, setPlayerTwoName] = useState(playerTwo.name);

    const savePlayersNameOnClick = () => {
        savePlayersName(playerOneName, playerTwoName);
    }
    return(
        <div>
            <div>
               <b>Tic Tac Toe </b> 
            </div>
            <br></br>
            <label>Insert the Player names</label>
            <div>
                Player One <b>X</b>
                <input value={playerOneName} onChange={event => setPlayerOneName(event.target.value)}/>
            </div>
            <div>
                Player Two <b>O</b>
                <input value={playerTwoName} onChange={event => setPlayerTwoName(event.target.value)}/>
        </div>
        <br></br>
        <Link href="/board" >
          <button onClick={savePlayersNameOnClick}>
              Start Game
          </button>
        </Link>
        </div>
)
}

const mapStateToProps = state => ({
    playerOne: state.playerOne,
    playerTwo: state.playerTwo,
});

const mapDispatchToProps = dispatch => ({
    savePlayersName: (playerOneName, playerTwoName) => dispatch(savePlayersName(playerOneName, playerTwoName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

