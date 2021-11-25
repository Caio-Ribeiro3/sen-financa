import React from "react";
import "./Hero.css";

function Hero(props) {
  const { title, message, src } = props;
  return (
    <div className="hero-container flex-row border border-radius p-2 flex-wrap align-center">
      <div className="flex-column gap-2 hero-sub-container ">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
      <div className="hero-sub-container gap-2 flex-row justify-center align-center">
        <img
          src={src}
          alt="Listagem de registros financeiros vazia"
          className="hero-image gap-2"
        />
      </div>
    </div>
  );
}

export default Hero;
