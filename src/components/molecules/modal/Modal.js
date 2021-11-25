import React from "react";
import Backdrop from "../../atoms/backdrop/Backdrop";
import Container from "../../atoms/container/Container";
import Paper from "../../atoms/paper/Paper";
import { useUI } from "../../UI-context";

function Modal(props) {
  const { children, name, onClose } = props;
  const { modalOpen } = useUI();
  return (
    <Backdrop onClose={onClose} isOpen={name === modalOpen}>
      <Container maxWidth="sm">
        <Paper classes="p-2 border-radius">{children}</Paper>
      </Container>
    </Backdrop>
  );
}

export default Modal;
