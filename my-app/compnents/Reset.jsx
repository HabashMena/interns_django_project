function Reset({ gameState, onReset }) {
    if (gameState === 3) return null; // If game still in progress, no button
  // If the game  has ended show the reset button
    return (
         // A button that triggers the 'onReset' function when clicked
      <button className="reset-button" onClick={onReset}>
        Reset Game
      </button>
    );
  }
  
  export default Reset;
  