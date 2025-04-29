import React, { useState } from 'react';
import Board from './Board';
import '../App.css';
const BOARD_SIZE = 7;
const WIN_LENGTH = 7;

function Game() {
  const [squares, setSquares] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));// Holds the state for the game board.
  const [board, setBoard] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));//a state for the current board.
  const [isXNext, setIsXNext] = useState(true);//Keeps track of whose turn it is /If isXNext is true, X plays; otherwise, O plays.

  //This function runs when a square is clicked.
  const handleSquareClick = (index) => {
    //if (board[index] || calculateWinner(board)) return; //If the square is already taken (board[index] is not null), or if the game already has a winner, we stop — no more clicks allowed.
    if (board[index] || calculateWinner(board, BOARD_SIZE, WIN_LENGTH) )return;
    const newBoard = [...board];//Makes a copy of the current board using spread syntax (...).
    //In React, we avoid editing state directly, so we create a copy.
    newBoard[index] = isXNext ? 'X' : 'O';// If it’s X’s turn, place 'X' in the clicked square; otherwise, place 'O'.
    setBoard(newBoard);//Updates the board state with the new copy.
    setIsXNext(!isXNext); //Flips the player: if it was X, now it's O, and vice versa.
  };

  //calculateWinner checks if there is a winning line of X or O based on the current state of the board.
  function calculateWinner(squares, size, winLength) {
    const lines = [];//This will store all the winning lines
  
    // Rows
    for (let r = 0; r < size; r++) {
      for (let c = 0; c <= size - winLength; c++) {
        const line = [];
        for (let i = 0; i < winLength; i++) {
          line.push(r * size + (c + i));
        }
        lines.push(line);
      }
    }
  
    // Columns
    for (let c = 0; c < size; c++) {
      for (let r = 0; r <= size - winLength; r++) {
        const line = [];
        for (let i = 0; i < winLength; i++) {
          line.push((r + i) * size + c);
        }
        lines.push(line);
      }
    }
  
    // Diagonals: top-left to bottom-right
    for (let r = 0; r <= size - winLength; r++) {
      for (let c = 0; c <= size - winLength; c++) {
        const line = [];
        for (let i = 0; i < winLength; i++) {
          line.push((r + i) * size + (c + i));
        }
        lines.push(line);
      }
    }
  
    // Diagonals: top-right to bottom-left
    for (let r = 0; r <= size - winLength; r++) {
      for (let c = winLength - 1; c < size; c++) {
        const line = [];
        for (let i = 0; i < winLength; i++) {
          line.push((r + i) * size + (c - i));
        }
        lines.push(line);
      }
    }
  
    // Check all lines
    for (const line of lines) {
      const first = squares[line[0]];
      if (first && line.every(index => squares[index] === first)) {
        return first;
      }
    }
  
    return null;
  }
  

  
  const winner = calculateWinner(board, BOARD_SIZE, WIN_LENGTH);//It checks whether there is a winner based on the current state of the board.
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };//Resets the game by clearing the board and setting the turn back to X.

return (
  <div className="container">
    <div className="game">
      <h2>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}</h2>
      <Board board={board} onClick={handleSquareClick} size={BOARD_SIZE} />
      
      {/* Reset Button */}
      <button className="reset-button" onClick={handleReset}>Reset Game</button>
    </div>
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