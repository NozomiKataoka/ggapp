// src/components/GachaMachine.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import  GachaButton  from './GachaButton';
import  GachaCapsule from './GachaCapsule';

import styles from './GachaMachine.module.css';


function GachaMachine() {
  // アイテムリスト
  const items = [
    { id: 1, name: "アイテム1", rarity: "common", probability: 50 }, // 50%の確率
    { id: 2, name: "アイテム2", rarity: "uncommon", probability: 30 }, // 30%の確率
    { id: 3, name: "アイテム3", rarity: "rare", probability: 20 }, // 20%の確率
    // ... 他のアイテム
  ];

  const [lastItem, setLastItem] = useState(null);

  const animationProps = useSpring({
    opacity: lastItem ? 1 : 0,
    transform: lastItem ? 'translateY(0%)' : 'translateY(100%)'
  });

  // 確率ベースのガチャのロジック
  const pullGacha = () => {
    let random = Math.random() * 100; // 0から99.999...までのランダムな数
    let cumulativeProbability = 0;
    let selectedItem = null;

    for (let item of items) {
      cumulativeProbability += item.probability;
      if (random < cumulativeProbability) {
        selectedItem = item;
        break;
      }
    }

    // もし何らかの理由でアイテムが選ばれなかった場合、最初のアイテムを選ぶ
    if (!selectedItem) {
      selectedItem = items[0];
    }

    setLastItem(selectedItem);
  };

  return (
    <div className={styles['gacha-machine']}>
      <GachaButton onClick={pullGacha} />
      <animated.div style={animationProps}>
        <GachaCapsule item={lastItem} />
      </animated.div>
      {lastItem && (
        <div className={styles['gacha-result']}>
          <h2>獲得したアイテム:</h2>
          <p>{lastItem.name} ({lastItem.rarity})</p>
        </div>
      )}
    </div>
  );
}

export default GachaMachine;
