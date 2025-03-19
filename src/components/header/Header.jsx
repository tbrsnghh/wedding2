import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      
      if (location.pathname === "/Thucdon" || location.pathname === "/Gioithieu") {
        const pageHeight = document.documentElement.scrollHeight; 
        const scrollThreshold = pageHeight * 0.1; 
        if (window.scrollY > scrollThreshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); 

  
  const isHomeOrThucdon = location.pathname === "/" || location.pathname === "/Thucdon" || location.pathname === "/Gioithieu";

  return (
    <nav className={`${styles.navbar} ${isScrolled || !isHomeOrThucdon ? `${styles.navbarBg}` : ""}`}>
      <Link to="/" className={`${styles.navLogo}`}>
        <img src="/images/2.png" alt="Nhà Hàng Tiệc Cưới Đông Á" />
      </Link>
      <ul className={`${styles.navMenu}`}>
        <li><Link to="/" className={`${styles.navLink}`}>TRANG CHỦ</Link></li>
        <li><Link to="/Gioithieu" className={`${styles.navLink}`}>SẢNH TIỆC</Link></li>
        <li><Link to="/Thucdon" className={`${styles.navLink}`}>THỰC ĐƠN</Link></li>
        <li><Link to="/thiepcuoi" className={`${styles.navLink}`}>TẠO THIỆP CƯỚI</Link></li>
        <li><Link to="/booking" className={`${styles.navLink}`}>ĐẶT LỊCH</Link></li>
        <li><Link to="/Lienhe" className={`${styles.navLink}`}>LIÊN HỆ</Link></li>
      </ul>
    </nav>
  );
};

export default Header;