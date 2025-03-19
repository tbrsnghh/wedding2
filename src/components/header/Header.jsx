import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

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
    <nav className={`navbar ${isScrolled || !isHomeOrThucdon ? "navbar-bg" : ""}`}>
      <Link to="/" className="nav-logo">
        <img src="/images/2.png" alt="Nhà Hàng Tiệc Cưới Đông Á" />
      </Link>
      <ul className="nav-menu">
        <li><Link to="/" className="nav-link">TRANG CHỦ</Link></li>
        <li><Link to="/Gioithieu" className="nav-link">SẢNH TIỆC</Link></li>
        <li><Link to="/Thucdon" className="nav-link">THỰC ĐƠN</Link></li>
        <li><Link to="/thiepcuoi" className="nav-link">TẠO THIỆP CƯỚI</Link></li>
        <li><Link to="/sanpham" className="nav-link">ĐẶT LỊCH</Link></li>
        <li><Link to="/Lienhe" className="nav-link">LIÊN HỆ</Link></li>
      </ul>
    </nav>
  );
};

export default Header;