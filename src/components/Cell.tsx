type CellProps = {
  value: string;
  onClick: () => void;
};

function Cell({ value, onClick }: CellProps) {
  return (
    <div className="cell" onClick={onClick}>
      {value}
    </div>
  );
}

export default Cell;
