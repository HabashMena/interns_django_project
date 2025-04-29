function Tile({ value, onClick, playerTurn }) {
    return (
      <div className="tile" onClick={onClick}>
        {/* Display the value of the tile (either null, 'X', or 'O') */}
        {value}
      </div>
    );
  }
  
  export default Tile;
  