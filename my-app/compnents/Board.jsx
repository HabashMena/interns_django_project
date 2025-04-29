import Tile from "./Tile";// i used this to import the Tile component from the  file 'Tile.js'

function Board({ tiles, onTileClick, playerTurn }) {//to define the board functional components with props(pass data from parents to child)
  return (
    //main container for the game
    <div className="board" > 
     {/*goes through the array and displays a cell component for each item */}
      {tiles.map((tile, index) => (
        <Tile
          key={index}//a unique key needed(for correct rendering)
          value={tile} // Pass the current cell value ('X', 'O') to the cell component
          onClick={() => onTileClick(index)}  // When a cell is clicked, call the onTileClick function with the cell's index
          playerTurn={playerTurn}
        />
      ))}
    </div>
  );
}

export default Board;
