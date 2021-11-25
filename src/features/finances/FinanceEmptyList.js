import React from "react";
import Hero from "../../components/atoms/hero/Hero";
import empty from "../../resources/svgs/empty.svg";

function FinancesEmptyList() {
  return (
    <Hero
      src={empty}
      title="Não há registros!"
      message="Crie seu primeiro registro clicando no botão azul com '+' no canto inferior direito da tela"
    />
  );
}

export default FinancesEmptyList;
