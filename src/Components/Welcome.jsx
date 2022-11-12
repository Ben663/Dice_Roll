
import { useState } from 'react';

function Welcome({setValueWin}) {
	const [StartGame, setStartGame] = useState(false);

	function handle(el) {
		el.preventDefault();
		setStartGame(true);
	}

	function changeHandle(el) {
		setValueWin(el.target.value)

	}

	if (!StartGame) {
		return (
			<div className='welcomePage'>
				<h2>Welcome To The Game Dice Roll</h2>
				<form>
					<h3>Please Choose Value To Play</h3>
					<input type='number'onChange={changeHandle}/>
					<button onClick={handle}>Start Game</button>
				</form>
			</div>
		)
	}
}

export default Welcome;
