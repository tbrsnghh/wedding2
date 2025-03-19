import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./trangchu2.module.css";
import Phanhoi from "./Phanhoi";

const services = [
  {
    title: "Sảnh tiệc",
    description:
      "Được thiết kế đa dạng phong cách, mang đến không gian sang trọng, hiện đại...",
    image:
      "/images/test10.png",
    link: "/Gioithieu",
  },
  {
    title: "Thực đơn",
    description:
      "Thực đơn tiệc cưới tại Đông Á là sự kết hợp của tinh hoa ẩm thực Á Âu...",
    image:
      "/images/banner4.png",
    link: "/Thucdon",
  },
  {
    title: "Ưu đãi",
    description: "Những ưu đãi cho tiệc cưới trọn gói cực kỳ hấp dẫn...",
    image:
      "/images/test9.png",
    link: "/khuyenmai",
  },
];

const Trangchu2 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dịch Vụ</h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.imageWrapper}>
              <motion.img
                src={service.image}
                alt={service.title}
                className={styles.image}
                whileHover={{ scale: 1.08 }}
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.description}>{service.description}</p>
              <motion.div
                className={styles.buttonWrapper}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link to={service.link} className={styles.button}>
                  Xem Thêm
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <Phanhoi/>
    </div>
  );
};

export default Trangchu2;
