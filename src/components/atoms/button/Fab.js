import React from "react";
import "./FAB.css";
import IconButton from "./IconButton";

function FAB(props) {
  const { ...rest } = props;
  return <IconButton classes="FAB" {...rest} />;
}

export default FAB;
