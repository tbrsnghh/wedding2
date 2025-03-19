import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1: Thông tin liên hệ */}
        <div className="footer-section">
          <h3>Liên Hệ</h3>
          <p><FaMapMarkerAlt /> 123 Đường ABC, Quận XYZ, TP.HCM</p>
          <p><FaPhoneAlt /> 0901 234 567</p>
          <p><FaEnvelope /> contact@nhahangtieccuoi.com</p>
        </div>

        {/* Cột 2: Giới thiệu */}
        <div className="footer-section">
          <h3>Về Chúng Tôi</h3>
          <p>Nhà hàng tiệc cưới sang trọng, đẳng cấp với không gian lộng lẫy và dịch vụ chuyên nghiệp.</p>
        </div>

        {/* Cột 3: Kết nối mạng xã hội */}
        <div className="footer-section">
          <h3>Kết Nối Với Chúng Tôi</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Nhà Hàng Tiệc Cưới. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
