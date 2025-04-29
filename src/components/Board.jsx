import React from 'react';
import Square from './Square';//Brings in the Square component, which will represent a single cell of the board.
import '../App.css';
//board: an array of 9 elements representing the game state.
//onSquareClick: a function to be called when a square is clicked.
//This div wraps all the squares. The class board is used for styling the grid layout (usually a 3x3 grid in CSS).
/*
board.map():Loops through each element in the board array using .map().

value will be 'X', 'O', or null.

index is the position (0 through 8).
*/
function Board({ board, onSquareClick }) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square 
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}
/*
For each square:

A Square component is rendered.

key={index} is used by React to track elements efficiently.

value={value} passes the current content (X, O, or null) to that square.

onClick={() => onSquareClick(index)} passes a function that tells the parent (Game) which square was clicked.
*/
export default Board;//Makes the Board component available to import in other files like Game.js.
