import React from "react";
import { buttonConstants } from "./Button-constants";
import "./Button.css";

function Button(props) {
  const {
    pallete = "primary",
    variant = "contained",
    classes,
    ...rest
  } = props;
  return (
    <button
      className={`button button-pallete-${
        buttonConstants.pallete.variations.includes(pallete)
          ? pallete
          : buttonConstants.pallete.default
      } button-variant-${
        buttonConstants.variant.variations.includes(variant)
          ? variant
          : buttonConstants.variant.default
      } `.concat(classes)}
      {...rest}
    />
  );
}

export default Button;
