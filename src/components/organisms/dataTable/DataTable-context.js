import React, { createContext, useContext, useMemo } from "react";

const DataTableContext = createContext({});

export const DataTableProvider = (props) => {
  const { children, data, columns, onFilterChange } = props;

  const value = useMemo(
    () => ({
      data,
      columns,
      onFilterChange,
    }),
    [data, columns, onFilterChange]
  );

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};

export const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context)
    throw new Error(
      "Data Table Context must be used inside Data Table Provider"
    );
  return context;
};
