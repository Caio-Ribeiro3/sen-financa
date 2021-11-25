import React from "react";
import { useForm } from "../../organisms/form/Form-context";

function Select(props) {
  const { name, label, options = [], classes } = props;
  const { values, updateField, isSubmiting } = useForm();
  return (
    <div className={"input-container flex-column gap ".concat(classes)}>
      {label && (
        <label className="secondary-text-color-typography">{label}</label>
      )}
      <select
        value={values?.[name]}
        onChange={(e) => {
          updateField(name, e.target.value);
        }}
        className="p-1 border-radius border input"
        disabled={isSubmiting ? "disabled" : ""}
      >
        {options.map((option) => (
          <option key={option.label}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
