import Cell from "./Cell";

type BoardProps = {
  matrix: string[];
  move: (index: number) => void;
};

function Board({ matrix, move }: BoardProps) {
  return (
    <div className="board">
      {matrix.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => move(index)} />
      ))}
    </div>
  );
}

export default Board;
