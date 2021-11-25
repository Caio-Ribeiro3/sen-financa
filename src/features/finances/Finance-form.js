import { formSwitchFieldsTypes } from "../../components/organisms/form/Form-constants";
import { financeTypesOptions } from "./Finance-constants";

export const financeFormFields = (payload) => [
  {
    formFieldType: formSwitchFieldsTypes.TEXT_INPUT,
    name: "title",
    label: "Título",
    initialValue: payload?.title,
  },
  {
    formFieldType: formSwitchFieldsTypes.SELECT,
    name: "type",
    label: "Tipo",
    initialValue: payload?.type,
    options: financeTypesOptions,
  },
  {
    formFieldType: formSwitchFieldsTypes.TEXT_INPUT,
    name: "category",
    label: "Categoria",
    initialValue: payload?.category,
  },
  {
    formFieldType: formSwitchFieldsTypes.TEXT_INPUT,
    name: "value",
    label: "Valor",
    type: "number",
    min: "0",
    initialValue: payload?.value,
  },
  { formFieldType: formSwitchFieldsTypes.SUBMIT, label: "Criar" },
];
