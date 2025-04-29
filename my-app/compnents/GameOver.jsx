import GameState from "./GameState.jsx";

function GameOver({ gameState }) {
  if (gameState === GameState.playerXWins) {  // Check if the game state is 'playerXWins'
    return <div className="game-over">Player X Wins🏆</div>; // If player X wins, return a message indicating player X has won
  } else if (gameState === GameState.playerOWins) {// Check if the game state is 'playerOWins'
    return <div className="game-over">Player O Wins🏆</div>;// If player O wins, return a message indicating player O has won
  } else if (gameState === GameState.draw) { // Check if the game state is 'draw'
    return <div className="game-over">It's a Draw🤝</div>;  // If it's a draw, return a message indicating the game ended in a draw
  }
  return null;
  // If none of the above conditions are met (game still ongoing), return null (nothing will be showed)
}

export default GameOver;// can be used in other apps
