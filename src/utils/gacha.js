// src/utils/gacha.js
import items from '../data/items';

function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export { getRandomItem };
