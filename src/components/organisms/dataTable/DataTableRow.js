import React, { memo } from "react";
import DataTableCell from "../dataTable/DataTableCell";
import { useDataTable } from "./DataTable-context";

function DataTableRow(props) {
  const { row } = props;
  const { columns } = useDataTable();
  return (
    <div className="p-2 flex-row gap-2">
      {columns.map((column) => (
        <div
          key={column.fieldName}
          className="flex-row flex"
          style={{
            width: column.width,
            flex: column.width !== undefined ? "unset" : undefined,
          }}
        >
          <DataTableCell cell={row} column={column} />
        </div>
      ))}
    </div>
  );
}

export default memo(DataTableRow);
