import React from "react";
import Input from "../../atoms/input/Input";
import Select from "../../atoms/input/Select";

import { formSwitchFieldsTypes } from "./Form-constants";
import SubmitField from "./SubmitField";

function FormSwitchFields(props) {
  const { formFieldType, ...rest } = props;
  switch (formFieldType) {
    case formSwitchFieldsTypes.TEXT_INPUT:
      return <Input {...rest} />;
    case formSwitchFieldsTypes.SELECT:
      return <Select {...rest} />;
    case formSwitchFieldsTypes.SUBMIT:
      return <SubmitField {...rest} />;
    default:
      return <div>Field type not yet implemented</div>;
  }
}

export default FormSwitchFields;
