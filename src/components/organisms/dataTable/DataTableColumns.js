import React from "react";
import { useDataTable } from "./DataTable-context";
import "./DataTableColumns.css";

function DataTableColumns() {
  const { columns } = useDataTable();
  return (
    <div className="p-2 flex-row gap-2">
      {columns.map(({ headerName, width }) => (
        <div
          key={headerName}
          className="flex-row flex data-table-columns-item"
          style={{
            width,
            flex: width !== undefined ? "unset" : undefined,
          }}
        >
          {headerName}
        </div>
      ))}
    </div>
  );
}

export default DataTableColumns;
