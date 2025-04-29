import React from 'react';
import '../App.css'; 
function Square({ value, onClick }) {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
}
export default Square;
