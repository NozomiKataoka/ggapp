// src/components/GachaCapsule.js
import React from 'react';

function GachaCapsule({ item }) {
    if (!item) return null;

  return (
    <div className="gacha-capsule">
         <div className={`item ${item.rarity}`}>
             {item.name} {/* ここにアイテムの名前や画像を表示します */}
        </div>
    </div>
  );
}

export default GachaCapsule;
