// src/components/GachaButton.js
import React from 'react';

function GachaButton({ onClick }) {
  return (
    <button className="gacha-button" onClick={onClick}>
      ガチャを引く
    </button>
  );
}

export default GachaButton;
