import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import styles from "./lienhe.module.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Thông tin đã được gửi! Chúng tôi sẽ liên hệ với bạn sớm.");
    reset(); // Reset form sau khi submit
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        {/* Form Liên Hệ */}
        <motion.div
          className={styles.contactForm}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={styles.contactTitle}>LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <p className={styles.contactSubtitle}>
            Vui lòng điền thông tin để nhận tư vấn từ nhà hàng tiệc cưới của chúng tôi.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Họ và Tên *</label>
              <input
                type="text"
                id="fullName"
                {...register("fullName", { required: "Vui lòng nhập họ và tên" })}
                className={styles.input}
              />
              {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Vui lòng nhập email",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Email không hợp lệ",
                  },
                })}
                className={styles.input}
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Số Điện Thoại *</label>
              <input
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "Vui lòng nhập số điện thoại",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Số điện thoại phải gồm 10 chữ số",
                  },
                })}
                className={styles.input}
              />
              {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="eventDate">Ngày Tổ Chức *</label>
              <input
                type="date"
                id="eventDate"
                {...register("eventDate", { required: "Vui lòng chọn ngày" })}
                className={styles.input}
              />
              {errors.eventDate && <span className={styles.error}>{errors.eventDate.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Lời Nhắn *</label>
              <textarea
                id="message"
                {...register("message", { required: "Vui lòng nhập lời nhắn" })}
                className={styles.textarea}
                rows="4"
                placeholder="Nhập yêu cầu hoặc thông tin thêm..."
              />
              {errors.message && <span className={styles.error}>{errors.message.message}</span>}
            </div>

            <motion.button
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GỬI THÔNG TIN
            </motion.button>
          </form>
        </motion.div>

        {/* Bản Đồ */}
        <motion.div
          className={styles.mapSection}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={styles.mapTitle}>VỊ TRÍ CỦA CHÚNG TÔI</h2>
          <p className={styles.mapSubtitle}>
            Tham quan bản đồ để tìm đường đến nhà hàng tiệc cưới của chúng tôi.
          </p>
          <div className={styles.mapImageWrapper}>
            <img
              src="https://via.placeholder.com/400x300" // Thay bằng URL bản đồ thực tế hoặc ảnh
              alt="Map of Wedding Venue"
              className={styles.mapImage}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;