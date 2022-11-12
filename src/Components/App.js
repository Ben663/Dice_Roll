import React, { useState } from "react";
import Welcome from "./Welcome";
import PlayerScore from './PlayerScore';
import DiceRoll from './DiceRoll';
import Counter from './Counter';
import HandleWinning from "./HandleWinning";
import { gameOver } from './HandleWinning';

import './App.css';


function App() {
  const [RollOne, setRollOne] = useState(0);
  const [RollTwo, setRollTwo] = useState(0);
  const [activePlayer, setActivePlayer] = useState('playerOne');
  const [score, setScore] = useState(0);
  const [playerOneScore, setplayerOneScore] = useState(null);
  const [playerTwoScore, setplayerTwoScore] = useState(null);
  const [valueWin, setValueWin] = useState(100);

  function handlerRoll() {
    if (!gameOver) {
			let rollTemp = Math.floor(Math.random() * 6) + 1;
			setRollOne(rollTemp);
			let rollTempTwo = Math.floor(Math.random() * 6) + 1;
			setRollTwo(rollTempTwo);
			setScore(score + rollTemp + rollTempTwo);
			if (rollTemp === 6 && rollTempTwo === 6) {
				setScore(0);
				if (activePlayer === 'playerOne') {
					setActivePlayer('playerTwo');
				} else if (activePlayer === 'playerTwo') {
					setActivePlayer('playerOne');
				}
			}
		} 
  }

  function handlerHold() {
    if (!gameOver) {
      if (score !== 0) {
        if (activePlayer === 'playerOne') {
          setActivePlayer('playerTwo')
          setplayerOneScore(prev=>prev+score)
        } else if (activePlayer === 'playerTwo') {
          setActivePlayer('playerOne')
          setplayerTwoScore(prev => prev + score)
        }
        setScore(0)
      }
    }
  }


  function newGameHandle() {
    window.location.reload()
  }
  return (
		<div className='App'>
			<Welcome setValueWin={setValueWin} />
			<div className='container'>
				<div className='playerBox'>
					Player One have: 
					<PlayerScore score={playerOneScore} />
				</div>
				<div className='gameBox'>
					<button onClick={newGameHandle}>New Game</button>
					<DiceRoll
						RollOne={RollOne}
						RollTwo={RollTwo}
					/>
					<Counter score={score} />
					<button onClick={handlerRoll}>Dice Roll</button>
					<button onClick={handlerHold}>Hold</button>
					<HandleWinning
						valueWin={valueWin}
						playerOneScore={playerOneScore}
						playerTwoScore={playerTwoScore}
						score={score}
						activePlayer={activePlayer}
					/>
				</div>
        <div className='playerBox'>
          Player Two have:
					<PlayerScore score={playerTwoScore} />
				</div>
			</div>
		</div>
	);
}

export default App;
