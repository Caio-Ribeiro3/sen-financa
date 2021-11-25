import React from "react";
import { useForm } from "../../organisms/form/Form-context";
import "./Input.css";

function Input(props) {
  const { label, name, type, classes, ...rest } = props;
  const { values, errors, updateField, isSubmiting } = useForm();

  return (
    <div className={"input-container flex-column gap ".concat(classes)}>
      {label && (
        <label className="secondary-text-color-typography">{label}</label>
      )}
      <input
        className="p-1 border-radius border input"
        onChange={(e) => {
          updateField(
            name,
            type === "number"
              ? Number(e.target.value)
              : type === "date"
              ? new Date(
                  e.target.value.split("-").map((str) => Number(str))
                ).getTime()
              : e.target.value
          );
        }}
        type={type}
        value={
          type === "date"
            ? new Date(values?.[name])?.toJSON?.()?.split("T")[0]
            : values?.[name]
        }
        disabled={isSubmiting ? "disabled" : ""}
        {...rest}
      />
    </div>
  );
}

export default Input;
