import React, { useMemo } from "react";
import DataTable from "../../components/organisms/dataTable/DataTable";
import { modalKeys } from "../../components/UI-constants";
import { useUI } from "../../components/UI-context";
import { financeDataTableColumns } from "./Finance-constants";
import { useFinance } from "./Finance-context";
import { createURLString } from "./Finance-utils";
import "./Finance.css";
import FinancesEmptyList from "./FinanceEmptyList";

function FinanceList() {
  const { setModal } = useUI();
  const {
    finances,
    loading,
    deleteRegister,
    setRegisterToUpdate,
    getRegisters,
  } = useFinance();

  const payload = useMemo(
    () => ({
      actionsField: {
        deleteAction: (cell) => {
          deleteRegister({ id: cell.id });
        },
        editAction: (cell) => {
          setRegisterToUpdate({ id: cell.id });
          setModal(modalKeys.CREATE_EDIT_FINANCE_REGISTER_FORM);
        },
      },
    }),
    [deleteRegister, setRegisterToUpdate, setModal]
  );

  const columns = useMemo(() => {
    return financeDataTableColumns(payload);
  }, [payload]);

  if (!loading && !finances.length) {
    return <FinancesEmptyList />;
  }

  return (
    <div
      className={`flex-column gap-2 finance-container ${
        loading ? "no-scroll" : ""
      }`}
    >
      <h3>Registros</h3>
      <DataTable
        onFilterChange={({ values }) => {
          getRegisters(createURLString(values));
        }}
        isLoading={loading}
        data={finances}
        columns={columns}
      />
    </div>
  );
}

export default FinanceList;
