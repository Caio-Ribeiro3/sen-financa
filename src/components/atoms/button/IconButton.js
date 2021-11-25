import React from "react";
import Button from "./Button";
import "./IconButton.css";

function IconButton(props) {
  const { classes, ...rest } = props;
  return <Button classes={"icon-button ".concat(classes)} {...rest} />;
}

export default IconButton;
