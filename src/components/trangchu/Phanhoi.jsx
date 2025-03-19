import React from "react";
import { motion } from "framer-motion";
import styles from "./phanhoi.module.css";

const phanhoi = [
  {
    id: 1,
    name: "Khách Hàng A",
    review: "Dịch vụ rất tốt, nhân viên chu đáo!",
    rating: 5, 
    image: "/images/test1.png",
    reply: "Cảm ơn anh A! Mong sớm gặp lại anh. 😊",
  },
  {
    id: 2,
    name: "Khách Hàng B",
    review: "Không gian đẹp, món ăn ngon.",
    rating: 4, 
    image: "/images/test2.png",
    reply: "Cảm ơn chị B! Hy vọng chị sẽ quay lại! ❤️",
  },
  {
    id: 3,
    name: "Khách Hàng C",
    review: "Tổ chức sự kiện chuyên nghiệp, rất ưng ý.",
    rating: 5, 
    image: "/images/test3.png",
    reply: "Cảm ơn anh C! Hẹn gặp anh lần sau 🎉",
  },
];


const renderStars = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const Phanhoi = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Phản Hồi Khách Hàng</h2>
      <div className={styles.commentSection}>
        {phanhoi.map((item) => (
          <div key={item.id}>
            {/* Bình luận khách hàng */}
            <motion.div
              className={styles.comment}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.image} alt={item.name} className={styles.avatar} />
              <div className={styles.commentContent}>
                <h4 className={styles.name}>{item.name}</h4>
                <p className={styles.stars}>{renderStars(item.rating)}</p> {/* Hiển thị sao */}
                <p className={styles.review}>{item.review}</p>
              </div>
            </motion.div>

            {/* Phản hồi từ quản lý */}
            <motion.div
              className={styles.reply}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.replyContent}>
                <h4 className={styles.adminName}>Nhà Hàng Đông Á</h4>
                <p className={styles.replyText}>{item.reply}</p>
              </div>
              <img
                src="/images/2.png"
                alt="Admin"
                className={styles.adminAvatar}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phanhoi;
