import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { dataTableCellTypes } from "../../components/organisms/dataTable/DataTable-constants";
import { formSwitchFieldsTypes } from "../../components/organisms/form/Form-constants";
import { formatDate, formatFinanceValue } from "../../utils/utils";
import { financeTypes } from "./services/contants";

export const financeReducerTypes = {
  LOADING_FINANCES: "LOADING_FINANCES",
  SET_FINANCES: "SET_FINANCES",
  SET_REGISTER_TO_UPDATE: "SET_REGISTER_TO_UPDATE",
};

export const financeTypesOptions = [
  { label: "", value: undefined },
  ...financeTypes.map((el) => ({ label: el, value: el })),
];

export const financeDataTableColumns = (payload) => [
  {
    fieldName: "title",
    headerName: "Título",
    filterType: formSwitchFieldsTypes.TEXT_INPUT,
  },
  {
    fieldName: "type",
    headerName: "Tipo",
    filterType: formSwitchFieldsTypes.SELECT,
    filterProps: {
      options: financeTypesOptions,
    },
  },
  {
    fieldName: "category",
    headerName: "Categoria",
    filterType: formSwitchFieldsTypes.TEXT_INPUT,
  },
  {
    fieldName: "value",
    headerName: "Valor",
    valueGetter: formatFinanceValue,
    filterType: formSwitchFieldsTypes.TEXT_INPUT,
    filterProps: {
      type: "number",
    },
  },
  {
    fieldName: "dt_register",
    headerName: "Data de criação",
    type: "date",
    valueGetter: formatDate,
    filterType: formSwitchFieldsTypes.TEXT_INPUT,
    filterProps: {
      type: "date",
    },
  },
  {
    fieldName: "actions",
    headerName: "Ações",
    type: dataTableCellTypes.ACTION,
    width: 100,
    actions: [
      {
        onClick: payload?.actionsField?.deleteAction,
        label: "Delete",
        icon: <MdDelete />,
      },
      {
        onClick: payload?.actionsField?.editAction,
        label: "Edit",
        icon: <MdEdit />,
      },
    ],
  },
];
