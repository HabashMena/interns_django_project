import { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill(""));
  const [letter, setLetter] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string>("");
  const [gameOver, setGameOver] = useState(false);

  function move(index: number) {
    if (matrix[index] !== "" || gameOver) return;

    const newMatrix = [...matrix];
    newMatrix[index] = letter;
    setMatrix(newMatrix);

    if (checkWinner(newMatrix)) {
      setWinner(`Player ${letter === "X" ? "1" : "2"} wins!`);
      setGameOver(true);
    } else if (newMatrix.every((cell) => cell !== "")) {
      setWinner("Draw!");
      setGameOver(true);
    } else {
      setLetter(letter === "X" ? "O" : "X");
    }
  }

  function checkWinner(board: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }

  function reset() {
    setMatrix(Array(9).fill(""));
    setLetter("X");
    setWinner("");
    setGameOver(false);
  }

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board matrix={matrix} move={move} />
      <div className="message">{winner}</div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [matrix, setMatrix] = useState(Array(9).fill(""));
//   const [letter, setLetter] = useState<"X" | "O">("X");
//   const [winner, setWinner] = useState<string>("");
//   const [gameOver, setGameOver] = useState(false);

//   function move(index: number) {
//     if (matrix[index] !== "" || gameOver) return;

//     const newMatrix = [...matrix];
//     newMatrix[index] = letter;
//     setMatrix(newMatrix);

//     if (checkWinner(newMatrix)) {
//       setWinner(`Player ${letter === "X" ? "1" : "2"} wins!`);
//       setGameOver(true);
//     } else if (newMatrix.every((cell) => cell !== "")) {
//       setWinner("Draw!");
//       setGameOver(true);
//     } else {
//       setLetter(letter === "X" ? "O" : "X");
//     }
//   }

//   function checkWinner(board: string[]) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let [a, b, c] of lines) {
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         return true;
//       }
//     }
//     return false;
//   }

//   function reset() {
//     setMatrix(Array(9).fill(""));
//     setLetter("X");
//     setWinner("");
//     setGameOver(false);
//   }

//   return (
//     <div className="game">
//       <h1>Tic Tac Toe</h1>
//       <div className="board">
//         {matrix.map((cell, index) => (
//           <div key={index} className="cell" onClick={() => move(index)}>
//             {cell}
//           </div>
//         ))}
//       </div>
//       <div className="message">{winner}</div>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;
