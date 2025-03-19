import React, { useEffect, useState } from "react";
import { menuData } from "./menuData";
import styles from "./monan.module.css";

// Hàm lấy ngẫu nhiên các món ăn từ một mảng
const getRandomItems = (items, count) => {
  if (!Array.isArray(items)) return []; 
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const MonAn = () => {
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    
    const allItems = menuData
      .flatMap((menu) => menu.sets) 
      .flatMap((set) => set.items); 

    // Lấy 8 món ăn ngẫu nhiên
    const items = getRandomItems(allItems, 8);
    setRandomItems(items);
  }, []);

  return (
    <div className={styles.monAnContainer}>
      <h2>MỘT SỐ MÓN ĂN BESTSELLER CỦA NHÀ HÀNG CHÚNG TÔI</h2>
      <div className={styles.items}>
        {randomItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <img
              src={item.image || "/images/default.jpg"}
              alt={item.name}
              className={styles.itemImage}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonAn;