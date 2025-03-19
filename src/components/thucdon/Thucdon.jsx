import React, { useState, useEffect } from "react";
import { menuData } from "./menuData";
import styles from "./thucdon.module.css";
import Banner from "./bannermenu";
import MonAn from "./monAn";

// Thành phần MenuItem
const MenuItem = ({ name, isSelected, onClick }) => {
  return (
    <div
      className={`${styles.menuItem} ${isSelected ? styles.active : ""}`}
      onClick={onClick}
    >
      <span>{name}</span>
    </div>
  );
};

// Thành phần MenuSection
const MenuSection = ({
  title,
  items,
  activeSection,
  setActiveSection,
  sets,
  activeSet,
  setActiveSet,
}) => {
  const [selectedItem, setSelectedItem] = useState(items[activeSection]?.items[0] || { name: "No item", image: "" });
  useEffect(() => {
  
    setActiveSection(0);
  }, [activeSet, setActiveSection]);

  useEffect(() => {
    // Khi activeSection hoặc items thay đổi, chọn món đầu tiên của set hiện tại
    setSelectedItem(items[activeSection]?.items[0] || { name: "No item", image: "" });
  }, [activeSection, items]);

  return (
    <div className={styles.menuSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>
        <div className={styles.itemsContainer}>
          {items[activeSection]?.items.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              isSelected={selectedItem.name === item.name}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
        <div className={styles.sectionImageContainer}>
          <img
            src={selectedItem.image || "/images/default.jpg"}
            alt={selectedItem.name}
            className={styles.sectionImage}
          />
        </div>
      </div>
      <div className={styles.setMenuButtons}>
        {sets.map((set, index) => (
          <button
            key={index}
            className={`${styles.setMenuButton} ${
              activeSection === index ? styles.activeSetMenuButton : ""
            }`}
            onClick={() => setActiveSection(index)}
          >
            {set.displayName}
          </button>
        ))}
      </div>
      <div className={styles.pagination}>
        {menuData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              activeSet === index ? styles.activeDot : ""
            }`}
            onClick={() => setActiveSet(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

// Thành phần chính Thucdon
const Thucdon = () => {
  const [activeSet, setActiveSet] = useState(0); 
  const [activeSection, setActiveSection] = useState(0); 

  
  const sections = menuData.map((menu) => ({
    title: menu.price,
    data: menu.sets, 
  }));

  return (
    <div className={styles.thucdonContainer}>
      {/* Banner ở trên cùng */}
      <Banner />

      {/* Nội dung chính */}
      <div className={styles.contentWrapper}>
        {/* Phần mô tả (nếu muốn giữ) */}
        <div className={styles.leftPanel}>
          <h1 className={styles.setMenu}>SET MENU</h1>
          <h2 className={styles.subTitle}>DÀNH CHO TIỆC CƯỚI</h2>
          <p className={styles.description}>
            — Được các chuyên gia ẩm thực giàu kinh nghiệm của Grand Palace chế biến,
            thực đơn của chúng tôi luôn được lựa chọn kỹ lưỡng để mang đến cho thực
            khách những món ăn đa dạng và có sự dung hòa giữa văn hóa ẩm thực Á -
            Âu, đáp ứng tất cả các nhu cầu của quý khách.
          </p>
        </div>

        {/* MenuSection hiển thị dưới banner */}
        <div className={styles.rightPanel}>
          <MenuSection
            title={sections[activeSet].title}
            items={sections[activeSet].data}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            sets={sections[activeSet].data}
            activeSet={activeSet}
            setActiveSet={setActiveSet}
          />
        </div>
      </div>

      {/* Phần món ăn ngẫu nhiên ở dưới cùng */}
      <div className={styles.randomMenuSection}>
        <MonAn itemsPerCategory={3} />
      </div>
    </div>
  );
};

export default Thucdon;