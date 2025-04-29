import React from 'react';
import '../App.css'; // reuse styles
/*
Defines a functional component named Square.

It receives two props:

value: What should appear in the square — usually 'X', 'O', or null.

onClick: A function to run when the square is clicked (e.g., marking the move).
*/
function Square({ value, onClick }) {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
}
/*
Returns a <button> element that:

Has a className="square" for CSS styling (usually size, color, font, etc.).

Triggers the onClick function when clicked.

Displays the current value inside the button — this is where 'X' or 'O' shows up.
*/
export default Square;// Makes the Square component available for import in Board.js.
