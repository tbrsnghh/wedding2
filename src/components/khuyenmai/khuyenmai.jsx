import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./khuyenmai.module.css";

// Dữ liệu mẫu cho các ưu đãi, khuyến mãi, và dịch vụ (chi tiết hơn dựa trên hình ảnh)
const promotionsData = [
  {
    title: "Ưu Đãi Tiệc Cưới Trọn Gói",
    description: "Giảm ngay 10% khi đặt tiệc cưới trọn gói trong tháng này!",
    details: [
      "Bia Beck Ice lon 2.5 giờ",
      "Nước Pepsi (1.5L) & nước tinh khiết",
      "Giỏ hoa tiệc mừng",
      "Trụ hoa lễ đi",
      "Hoa tươi & Ảnh nền trên bàn tiệc",
      "Lễ Tấn chào đón khách",
      "Món ăn nhẹ dành cho cô dâu, chú rể",
      "Liên ký tên & 02 cây bút lưu niệm",
      "Pháo hoa kim tuyến (03 viên)",
      "Thắp ly, đà khói & 02 chai Champagne",
      "Bánh cưới 5 tầng giả",
      "Màn hình LED suốt tiệc",
    ],
    price: "Miễn phí",
   
    link: "/uu-dai/tiec-cuoi",
  },
  {
    title: "COMBO 10 BÀN TẶNG 2 BÀN",
    description: "Đặt 10 bàn tiệc cưới hoặc sự kiện, nhận ngay 2 bàn miễn phí cùng nhiều ưu đãi hấp dẫn!",
    details: [
      "Trang trí bàn tiệc phong cách hiện đại",
      "Tặng 1,500,000đ mua gói Trang trí Cao Cấp",
      "Miễn phí nước ngọt và bia Tiger cho 2 bàn tặng thêm",
      "Màn hình LED chiếu hình ảnh suốt tiệc",
    ],
    price: "Áp dụng cho tiệc từ 10 bàn trở lên",
    image: "/images/combo-promo.jpg",
    link: "/uu-dai/combo-10-ban",
  },
  {
    title: "CƯỚI 1 LẦN ƯU - ĐÃI MUÔN LẦN",
    description: "Chương trình ưu đãi đặc biệt dành cho khách hàng đã đặt tiệc và giới thiệu người quen!",
    details: [
      "Giảm 10% cho lần đặt tiệc thứ hai trở lên",
      "Tặng 2,000,000đ tiền mặt khi giới thiệu bạn bè đặt tiệc cưới",
      "Miễn phí dịch vụ trang trí bàn tiệc cho tiệc bổ sung",
      "Tặng voucher nghỉ dưỡng 1 đêm tại khách sạn 4 sao cho mỗi 5 khách giới thiệu thành công",
      "Ưu tiên chọn khung giờ vàng cho khách hàng thân thiết",
    ],
    price: "Áp dụng cho khách đã đặt tiệc từ 15 bàn trở lên",
    image: "/images/loyalty-promo.jpg",
    link: "/uu-dai/cuoi-1-lan",
  }
];

// Dữ liệu bảng giá dịch vụ đi kèm (dựa trên hình "Bảng Giá Các Dịch Vụ Khách")
const additionalServices = [
  { service: "Liên ký tên lưu niệm", price: "350,000", unit: "VNĐ/Cái" },
  { service: "Lễ tấn chào đón khách", price: "350,000", unit: "VNĐ/Nguồn" },
  { service: "Thắp ly, đà khói + 2 chai Champagne", price: "350,000", unit: "VNĐ" },
  { service: "Pháo hoa kim tuyến (03 viên)", price: "200,000", unit: "VNĐ" },
  { service: "MC (Việt – Việt – Quảng, Việt – Phổ Thông)", price: "1,200,000", unit: "VNĐ/Nguồn" },
  { service: "MC (Việt – Triều)", price: "1,700,000", unit: "VNĐ/Nguồn" },
  { service: "Ban nhạc Nhẹ (02NC – 02 CS)", price: "2,200,000", unit: "VNĐ/Nguồn" },
  { service: "Ban nhạc Lớn (04NC – 03 CS)", price: "3,200,000", unit: "VNĐ/Show" },
  { service: "Ban nhạc hòa tấu trẻ (04NC)", price: "2,200,000", unit: "VNĐ/Show" },
  { service: "Ban nhạc Nhẹ (02NC – 02CS) + Màn hình chạy chiếu", price: "2,700,000", unit: "VNĐ/Show" },
  { service: "Màn hình chạy chiếu", price: "700,000", unit: "VNĐ/Show" },
  { service: "06 Giỏ hoa trưng", price: "400,000", unit: "VNĐ" },
  { service: "06 Trụ đèn hoa lễ đi", price: "1,500,000", unit: "VNĐ" },
  { service: "12 Trụ đèn hoa lễ đi", price: "2,500,000", unit: "VNĐ/Combo" },
  { service: "Cổng hoa + Bàn trang trí lưu niệm Cổ điển", price: "3,000,000", unit: "VNĐ/Combo" },
  { service: "Cổng hoa + Bàn trang trí lưu niệm Cao cấp", price: "8,000,000", unit: "VNĐ/Combo" },
  { service: "Vũ đoàn Múa Khai Tiệc (02 nguồn)", price: "1,500,000", unit: "VNĐ/Show" },
  { service: "Vũ đoàn Múa Khai Tiệc (06 nguồn)", price: "2,500,000", unit: "VNĐ/Show" },
  { service: "Violon độc dầu", price: "1,800,000", unit: "VNĐ/Show" },
  { service: "Màn hình LED (04 giờ)", price: "5,000,000", unit: "VNĐ/Show" },
  { service: "Phí thuê sân làm Gia Tiên (tr 01 giờ 03 giờ)", price: "4,000,000", unit: "VNĐ" },
  { service: "DV Lễ Gia Tiên tại Nhà hàng (Mẫu cổ điển) – tr 01 đến 03 giờ", price: "6,000,000", unit: "VNĐ" },
  { service: "DV Lễ Gia Tiên tại Nhà hàng (Mẫu lựa chọn) – tr 01 đến 03 giờ", price: "10,000,000", unit: "VNĐ" },
];

// Dữ liệu bảng giá dịch vụ bóng kịch nổ (dựa trên hình "Ưu Đãi Tiệc Cưới")
const balloonServices = [
  { quantity: "04", regular: "5,700,000", premium: "6,600,000", unit: "VNĐ" },
  { quantity: "06", regular: "8,100,000", premium: "9,000,000", unit: "VNĐ" },
  { quantity: "08", regular: "10,200,000", premium: "11,400,000", unit: "VNĐ" },
];

const Promotions = () => {
  return (
    <div className={styles.promotionsContainer}>
      {/* Tiêu đề chính */}
      <motion.h1
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ƯU ĐÃI 
      </motion.h1>

      {/* Phần ưu đãi chi tiết */}
      <div className={styles.promotionsGrid}>
        {promotionsData.map((promo, index) => (
          <motion.div
            key={index}
            className={styles.promoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            
            <div className={styles.promoContent}>
              <h2 className={styles.promoTitle}>{promo.title}</h2>
              <p className={styles.promoDescription}>{promo.description}</p>
              <ul className={styles.promoDetails}>
                {promo.details.map((detail, idx) => (
                  <li key={idx} className={styles.detailItem}>
                    <span className={styles.heartIcon}>♥</span> {detail}
                  </li>
                ))}
              </ul>
              <p className={styles.promoPrice}>{promo.price}</p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bảng giá dịch vụ đi kèm */}
      <motion.div
        className={styles.additionalServicesSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.servicesTitle}>BẢNG GIÁ CÁC DỊCH VỤ ĐI KÈM</h2>
        <table className={styles.servicesTable}>
          <thead>
            <tr>
              <th>Dịch Vụ</th>
              <th>Giá</th>
              <th>Đơn Vị</th>
            </tr>
          </thead>
          <tbody>
            {additionalServices.map((service, index) => (
              <tr key={index}>
                <td>{service.service}</td>
                <td>{service.price}</td>
                <td>{service.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Bảng giá dịch vụ bóng kịch nổ */}
      <motion.div
        className={styles.balloonServicesSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.servicesTitle}>DỊCH VỤ BÓNG KỊCH NỔ</h2>
        <table className={styles.balloonTable}>
          <thead>
            <tr>
              <th>Số Lượng Bóng Lớn</th>
              <th>Bóng Tự Đổ Bay Lên</th>
              <th>Bóng Tự Trên Bay Xuống</th>
            </tr>
          </thead>
          <tbody>
            {balloonServices.map((service, index) => (
              <tr key={index}>
                <td>{service.quantity}</td>
                <td>{service.regular} {service.unit}</td>
                <td>{service.premium} {service.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.note}>
          * Dịch vụ bóng kịch nổ khách mang vỏ tính phí 1,000,000 đồng. Vui lòng cung cấp đầy đủ giấy tờ liên quan.
        </p>
      </motion.div>
    </div>
  );
};

export default Promotions;