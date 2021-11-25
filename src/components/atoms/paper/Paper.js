import React from "react";
import "./Paper.css";

function Paper(props) {
  const { classes, ...rest } = props;
  return <div className={"paper ".concat(classes)} {...rest} />;
}

export default Paper;
