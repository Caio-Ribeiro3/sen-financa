import React from "react";
import { useUI } from "../../UI-context";
import DataTableSkeleton from "./DataTable-skeletons";
import "./DataTable.css";
import DataTableColumns from "./DataTableColumns";
import DataTableFilters from "./DataTableFilters";
import DataTableRow from "./DataTableRow";
import { DataTableProvider } from "./DataTable-context";

function DataTable(props) {
  const {
    data = [],
    columns = [],
    metadata,
    isLoading,
    onFilterChange,
  } = props;

  const { breakPoints } = useUI();

  if (isLoading) {
    return (
      <>
        <div className="border border-radius data-table-container">
          {new Array((metadata?.limit ?? 10) + 1).fill(1).map((_, index) => (
            <DataTableSkeleton cells={columns.length} key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <DataTableProvider
      columns={columns}
      data={data}
      onFilterChange={onFilterChange}
    >
      <div
        className={`border border-radius data-table-container ${
          !isLoading ? "data-table-container-width" : ""
        }`}
      >
        <DataTableFilters />
        <DataTableColumns />
        {data.map((el) => (
          <DataTableRow key={el.id} row={el} />
        ))}
      </div>
    </DataTableProvider>
  );
}

export default DataTable;
