import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Container from "../components/atoms/container/Container";
import FAB from "../components/atoms/button/Fab";
import Topbar from "../components/organisms/topbar/Topbar";
import { modalKeys } from "../components/UI-constants";
import { useUI } from "../components/UI-context";
import { withFinanceProvider } from "../features/finances/Finance-context";
import FinancesBalanceCards from "../features/finances/FinanceBalanceCards";
import FinanceCreateEditForm from "../features/finances/FinanceCreateEditForm";
import FinanceList from "../features/finances/FinanceList";
import "./screens.css";

function Home() {
  const { setModal } = useUI();
  return (
    <>
      <Topbar />
      <Container classes="gap-2 flex-column pv-8 screen">
        <FinancesBalanceCards />
        <FinanceCreateEditForm />
        <FinanceList />
      </Container>
      <FAB
        onClick={() => {
          setModal(modalKeys.CREATE_EDIT_FINANCE_REGISTER_FORM);
        }}
      >
        <AiOutlinePlus />
      </FAB>
    </>
  );
}

export default withFinanceProvider(Home);
