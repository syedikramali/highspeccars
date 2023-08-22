import React from "react";

const Grid = ({ children, columns }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 20,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
