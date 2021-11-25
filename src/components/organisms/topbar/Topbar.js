import React from "react";
import Container from "../../atoms/container/Container";
import Logo from "../../atoms/logo/Logo";
import Paper from "../../atoms/paper/Paper";
import "./Topbar.css";

function Topbar() {
  return (
    <Paper classes="border-bottom p-1">
      <Container>
        <Logo />
      </Container>
    </Paper>
  );
}

export default Topbar;
