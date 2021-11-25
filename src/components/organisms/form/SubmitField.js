import React from "react";
import Button from "../../atoms/button/Button";
import { useForm } from "./Form-context";

function SubmitField(props) {
  const { label, style, ...rest } = props;

  const { handleOnSubmit, isSubmiting } = useForm();

  return (
    <Button
      style={{ marginLeft: "auto", ...style }}
      disabled={isSubmiting}
      onClick={handleOnSubmit}
      {...rest}
    >
      {label}
    </Button>
  );
}

export default SubmitField;
