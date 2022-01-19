import React, { useState } from "react";
import produce from "immer";
const numrows = 50;
const numcols = 50;

export default function index() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numrows; i++) {
      rows.push(Array.from(Array(numcols), () => 0));
    }
    return rows;
  });
  console.log(grid);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numcols}, 20px)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={`${i}-${k}`}
            onClick={() => {
              const newGrid = produce(grid, (gridCopy) => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
              });
              setGrid(newGrid);
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][k] ? "pink" : undefined,
              border: "1px solid black",
            }}
          ></div>
        ))
      )}
    </div>
  );
}
