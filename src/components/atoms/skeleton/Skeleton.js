import React from "react";
import "./Skeleton.css";

function Skeleton(props) {
  const { classes, ...rest } = props;
  return (
    <div className={"border-radius skeleton ".concat(classes)} {...rest} />
  );
}

export default Skeleton;
