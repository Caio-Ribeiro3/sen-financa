import React, { cloneElement } from "react";
import "./MenuItem.css";

function MenuItem(props) {
  const { onClick, icon, label, closeMenu } = props;
  return (
    <li
      onClick={() => {
        onClick();
        closeMenu();
      }}
      className="menu-options-option p-1 flex-row gap-1"
    >
      <span>
        {cloneElement(icon, {
          ...icon.props,
          style: {
            color: "var(--secondary-text-color)",
            ...icon.props.style,
          },
        })}
      </span>
      <span>{label}</span>
    </li>
  );
}

export default MenuItem;
