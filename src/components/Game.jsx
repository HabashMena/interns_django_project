import React, { useState } from 'react';//Brings in React, and the useState hook which lets us track variables like the board and whose turn it is.
import Board from './Board';//import the Board component (which shows the grid)
import '../App.css';//style

function Game() /*functional component*/{
  const [board, setBoard] = useState(Array(9).fill(null));//setBoard is used to update the board after a move.  array with 9 elements, all null at first.
  const [isXNext, setIsXNext] = useState(true);//Keeps track of whose turn it is /If isXNext is true, X plays; otherwise, O plays.

  //This function runs when a square is clicked.
  const handleSquareClick = (index) => {
    if (board[index] || calculateWinner(board)) return; //If the square is already taken (board[index] is not null), or if the game already has a winner, we stop — no more clicks allowed.

    const newBoard = [...board];//Makes a copy of the current board using spread syntax (...).
    //In React, we avoid editing state directly, so we create a copy.
    newBoard[index] = isXNext ? 'X' : 'O';// If it’s X’s turn, place 'X' in the clicked square; otherwise, place 'O'.
    setBoard(newBoard);//Updates the board state with the new copy.
    setIsXNext(!isXNext); //Flips the player: if it was X, now it's O, and vice versa.
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
  
    const winningLine = lines.find(([a, b, c]) => 
      squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
    );//.find() goes through each sub-array ([a,b,c]) and stops at the first one that satisfies the condition.
  
    return winningLine ? squares[winningLine[0]] : null; //If a winning line is found (like [0, 1, 2]), winningLine becomes that array.
  };//squares[winningLine[0]]--->This gives us who the winner is.
  

  const winner = calculateWinner(board);//Runs the winner check based on the current board and stores it in winner.

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };//Resets the game by clearing the board and setting the turn back to X.

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <Board board={board} onSquareClick={handleSquareClick} />
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>}
      <button onClick={handleReset} className="reset-button">
        Restart
      </button>
    </div>
  );
}
//Start of what the component shows on the screen.
// Shows the board using the Board component.
//Passes down the current board array and the function to handle square clicks.
//f there’s a winner, show the winner. Otherwise, show whose turn it is.
// A button to restart the game. It runs handleReset when clicked.

export default Game;
//Makes the Game component available for import into App.js.