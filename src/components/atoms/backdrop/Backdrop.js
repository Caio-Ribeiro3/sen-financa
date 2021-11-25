import React from "react";
import { useUI } from "../../UI-context";
import "./Backdrop.css";

function Backdrop(props) {
  const { children, isOpen, onClose, ...rest } = props;

  const { modalOpen, setModal } = useUI();

  return isOpen ? (
    <div
      onClick={(e) => {
        if (e.target?.className === "backdrop") {
          onClose();
          setModal(modalOpen);
        }
      }}
      className="backdrop"
      {...rest}
    >
      {children}
    </div>
  ) : (
    <></>
  );
}

export default Backdrop;
