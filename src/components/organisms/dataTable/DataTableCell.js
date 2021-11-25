import React from "react";
import { dataTableCellTypes } from "./DataTable-constants";
import DataTableCellAction from "./DataTableCellAction";
import DataTableCellDefault from "./DataTableCellDefault";

function DataTableCell(props) {
  const { cell = {}, column = {} } = props;

  const { type } = column;

  switch (type) {
    case dataTableCellTypes.ACTION:
      return <DataTableCellAction cell={cell} column={column} />;
    default:
      return <DataTableCellDefault cell={cell} column={column} />;
  }
}

export default DataTableCell;
