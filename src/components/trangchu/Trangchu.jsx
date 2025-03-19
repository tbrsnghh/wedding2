import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./trangchu.module.css";
import Trangchu2 from "./Trangchu2";

// Component ServiceSection để hiển thị từng phần dịch vụ
const ServiceSection = ({ title, description, image, reverse }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div className={styles.serviceSection} ref={ref}>
      <motion.div
        className={styles.serviceTextContainer}
        style={{ order: reverse ? 2 : 1 }} 
        initial={{ x: reverse ? 50 : -50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className={styles.serviceTitle}>{title}</h2>
        <p className={styles.serviceDescription}>{description}</p>
      </motion.div>
      <motion.div
        className={styles.serviceImageContainer}
        style={{ order: reverse ? 1 : 2 }} 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={image} alt={title} className={styles.serviceImage} />
      </motion.div>
    </div>
  );
};

const TrangChu = () => {
  const { ref: introRef, inView: introInView } = useInView({ threshold: 0.5 });

  return (
    <div className={styles.mainContainer}>
      {/* Phần Giới thiệu */}
      <div className={styles.introSection} ref={introRef}>
        <div className={styles.container}>
          <motion.div
            className={styles.contentBox}
            initial={{ x: -50, opacity: 0 }}
            animate={introInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className={styles.title}>GIỚI THIỆU CHUNG</h1>
            <div className={styles.divider} />
            <p className={styles.description}>
            Trung tâm Hội Nghị - Tiệc Cưới Đông Á là một trong những địa điểm sang trọng và đẳng cấp hàng đầu dành cho những cặp đôi mong muốn một lễ cưới trọn vẹn 
            hay các doanh nghiệp tìm kiếm không gian hội nghị chuyên nghiệp. Với kiến trúc hiện đại, không gian rộng rãi và dịch vụ chuyên nghiệp, 
            Đông Á cam kết mang đến những trải nghiệm hoàn hảo cho khách hàng.
            </p>
            
          </motion.div>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={introInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://storage.googleapis.com/a1aa/image/xCc252vVQgzfSEW4awsdKRbJBL-LuRhu-ei0VepDOps.jpg"
              alt="Grand Palace building"
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>

      <div className={styles.servicesContainer}>
        <ServiceSection
          title="TIỆC CƯỚI TRỌN VẸN"
          description="Đội ngũ tổ chức chuyên nghiệp, không gian sang trọng, thực đơn phong phú và đa dạng. Tất cả tạo nên một buổi tiệc cưới hoàn hảo, ý nghĩa và đáng nhớ cho đôi uyên ương. Dịch vụ trọn gói từ A đến Z, bạn chỉ cần tận hưởng khoảnh khắc quan trọng nhất trong đời."
          image="/images/test5.png"
          reverse={false}
        />
        <ServiceSection
          title="SINH NHẬT & TIỆC THÔI NÔI ĐẦY THÁNG"
          description="Đội ngũ tổ chức chuyên nghiệp, không gian trang trí dễ thương, ý nghĩa với các chủ đề đa dạng phù hợp bé trai, bé gái. Thực đơn phong phú, tươi ngon, đảm bảo sức khỏe cho bé và gia đình. Dịch vụ tận tâm, chu đáo."
          image="/images/test6.png"
          reverse={true}
        />

        <ServiceSection
          title="TIỆC HỘI NGHỊ ĐẲNG CẤP"
          description="Không gian sang trọng, hiện đại, hệ thống âm thanh ánh sáng tối ưu cho các sự kiện hội nghị, hội thảo, gala dinner. Thực đơn cao cấp, dịch vụ chuyên nghiệp, đảm bảo sự thành công cho sự kiện của bạn."
          image="/images/test7.png"
          reverse={false}
        />
        <ServiceSection
          title="TIỆC NGOẠI TRỜI KIỂU TÂY"
          description="Không gian ngoài trời thoáng đãng, phong cách trang trí hiện đại, lãng mạn. Thực đơn BBQ, buffet đa dạng, phù hợp với các bữa tiệc sinh nhật, tiệc cưới nhỏ, hoặc sự kiện gia đình ấm cúng."
          image="/images/test8.png"
          reverse={true}
        />
      </div>

      {/* Phần Trangchu2 */}
      <Trangchu2 />
    </div>
  );
};

export default TrangChu;