import React, { useState, useEffect } from 'react';
import '../App.css'; 
//useState is used for state management.
//useEffect is used for side effects, such as interacting with the DOM.

function generateWinningCombinations(size) {
  const combos = [];

  // for rows 
  for (let row = 0; row < size; row++) {
    const combo = [];
    for (let col = 0; col < size; col++) {
      combo.push(row * size + col);
    }
    combos.push(combo);
  }

  // for columns
  for (let col = 0; col < size; col++) {
    const combo = [];
    for (let row = 0; row < size; row++) {
      combo.push(row * size + col);
    }
    combos.push(combo);
  }

  
  const diag1 = [];
  for (let i = 0; i < size; i++) {
    diag1.push(i * size + i);
  }
  combos.push(diag1);

 
  const diag2 = [];
  for (let i = 0; i < size; i++) {
    diag2.push(i * size + (size - 1 - i));
  }
  combos.push(diag2);

  return combos;
}

const TicTacToe = () => {
  const L = 6; 
  const totalSquares = L * L;
  const [squares, setSquares] = useState(Array(totalSquares).fill(null));// An array representing the state of the grid
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombinations = generateWinningCombinations(L);

  useEffect(() => {
    document.documentElement.style.setProperty('--grid-size', L);
  }, [L]);

  useEffect(() => {
    for (let combo of winningCombinations) {
      const [first, ...rest] = combo;
      if (squares[first] && rest.every(i => squares[i] === squares[first])) {
        setWinner(squares[first]);
        return;
      }
    }

    if (!squares.includes(null)) {
      setWinner('Draw');
    }
  }, [squares]);

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => (
    <div className="square" onClick={() => handleClick(i)}>
      {squares[i]}
    </div>
  );
// genatrates the grid
  const renderBoard = () => {
    return Array.from({ length: totalSquares }, (_, i) => renderSquare(i));
  };

  return (
    <div>
      <h1> Tic Tac Toe</h1>
      <div className="board">{renderBoard()}</div>
      <div className="status">
        {winner
          ? winner === 'Draw'
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </div>
    </div>
  );
};

export default TicTacToe;
