import React, { useState, useEffect } from "react";
import styles from "./icon.module.css";
import { FaPhone, FaFacebookMessenger, FaEnvelope } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Icons = () => {
    const [showPhone, setShowPhone] = useState(false);

    return (
      <div className={styles.floatingContainer}>
        {/* Icon điện thoại */}
        <div
          className={styles.phoneContainer}
          onMouseEnter={() => setShowPhone(true)}
          onMouseLeave={() => setShowPhone(false)}
        >
          {showPhone && <span className={styles.phoneNumber}>+123 456 789</span>}
          <a href="tel:+123456789" className={`${styles.icon} ${styles.phone}`}>
            <FaPhone />
          </a>
        </div>
  
        {/* Các icon khác */}
        <a href="https://zalo.me/" className={`${styles.icon} ${styles.zalo}`}><SiZalo /></a>
        <a href="mailto:your@email.com" className={`${styles.icon} ${styles.email}`}><FaEnvelope /></a>
        <a href="https://m.me/yourpage" className={`${styles.icon} ${styles.messenger}`}><FaFacebookMessenger /></a>
      </div>
    );
  };

export default Icons;
