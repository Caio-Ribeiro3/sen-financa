import React from "react";

function DataTableCellDefault(props) {
  const { cell = {}, column = {} } = props;
  const { fieldName, valueGetter } = column;
  return (
    <div>
      {typeof valueGetter === "function"
        ? valueGetter(cell[fieldName])
        : cell[fieldName]}
    </div>
  );
}

export default DataTableCellDefault;
