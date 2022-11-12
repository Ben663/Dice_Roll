export let gameOver = false;
export let winOne = 0;
export let winTwo = 0;


function HandleWinning({ valueWin, playerOneScore, playerTwoScore, score, activePlayer }) {
  if (playerOneScore > valueWin || (score > valueWin && activePlayer === 'playerOne')) {
    gameOver = true;
    winTwo = 1;
    return (<h3>The Player 2 Win</h3>)
  } else if (playerTwoScore > valueWin || (score > valueWin && activePlayer === 'playerTwo')) {
    gameOver = true;
    winOne = 1;
    return (<h3>The Player 1 Win</h3>)
  } else if (playerOneScore === valueWin) {
    gameOver = true;
    winOne = 1;
    return(<h3>The Player 1 Win</h3>)
  } else if (playerTwoScore === valueWin) {
    gameOver = true;
    winTwo = 1;
    return <h3>The Player 2 Win</h3>;
  }
}

export default HandleWinning;