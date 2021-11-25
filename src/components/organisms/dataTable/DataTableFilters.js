import React from "react";
import Form from "../form/Form";
import { formSwitchFieldsTypes } from "../form/Form-constants";
import { dataTableCellTypes } from "./DataTable-constants";
import { useDataTable } from "./DataTable-context";

function DataTableFilters() {
  const { columns, onFilterChange } = useDataTable();
  return (
    <Form
      classes="flex-row flex-wrap align-end"
      fields={[
        ...columns
          .filter(({ type }) => type !== dataTableCellTypes.ACTION)
          .map((el) => ({
            name: el.fieldName,
            label: el.headerName,
            formFieldType: el.filterType,
            ...el.filterProps,
          })),
        {
          name: "filter",
          label: "Filter",
          formFieldType: formSwitchFieldsTypes.SUBMIT,
        },
      ]}
      onSubmit={onFilterChange}
    />
  );
}

export default DataTableFilters;
