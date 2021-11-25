import React from "react";
import { useUI } from "../../UI-context";
import "./Container.css";

function Container(props) {
  const { maxWidth = "lg", style, classes, ...rest } = props;
  const { breakPoints } = useUI();

  return (
    <div
      className={"container ".concat(classes)}
      style={{
        maxWidth: Object.keys(breakPoints).includes(maxWidth)
          ? breakPoints[maxWidth]
          : maxWidth,
        ...style,
      }}
      {...rest}
    />
  );
}

export default Container;
