import React from "react";
import "./GameLoading.css"; 

const GameLoading = () => {
  return (
    <div className="game-loading-container">
      <div className="spinner"></div>
      <div className="loading-text">Carregando...</div>
    </div>
  );
};

export default GameLoading;
