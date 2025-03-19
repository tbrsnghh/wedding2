import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import đầy đủ modules
import styles from "./gioithieu2.module.css";


// Thành phần Gioithieu2 được cung cấp
const Gioithieu2 = () => {
  const features = [
    {
      number: "01",
      title: "4 Sảnh tiệc với không gian thoáng",
      description:
        "Trần cao, không có cột trụ ở giữa sảnh, giúp tất cả khách mời đều nhìn rõ sân khấu.",
    },
    {
      number: "02",
      title: "Địa điểm tổ chức tiệc cưới",
      description: "Phù hợp từ 100 đến 600 khách mời trong cùng một không gian.",
    },
    {
      number: "03",
      title: "1.000 m² bãi giữ xe",
      description: "Bãi giữ xe ô tô và xe máy rộng rãi, giúp khách mời an tâm dự tiệc.",
    },
    {
      number: "04",
      title: "Menu đa dạng ",
      description: "Đầu bếp của chúng tôi là những đầu bếp nỗi tiếng xếp hạng 5 sao đem lại cho quý khách hàng những trải nghiệm món ăn tuyệt vời nhất",
    },
  ];

  return (
    <div className={styles.gioithieuContainer}>
      {/* Video nền */}
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="/images/videonen.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>ĐIỀU ĐẶC BIỆT TẠI SẢNH TIỆC CƯỚI ĐÔNG Á</h2>
        <div className={styles.icon}>
          
        </div>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <h3 className={styles.number}>{feature.number}</h3>
              <h4 className={styles.featureTitle}>{feature.title}</h4>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
  
      </div>
    </div>
  );
};

// Thành phần chính kết hợp banner và Gioithieu2
const WeddingPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Gioithieu2 />

      <div className={styles.banner}>
        <h1 className={styles.bannerHeading}>MỘT SỐ HÌNH ẢNH ĐÁM CƯỚI TỪ NHÀ HÀNG CHÚNG TÔI</h1>

            <Swiper
      spaceBetween={30} // Khoảng cách giữa các ảnh
      slidesPerView={5} 
      loop={true} // Vòng lặp vô hạn
      autoplay={{
        delay: 4000, // Tự động chuyển ảnh sau 3 giây
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }} // Hiển thị dấu chấm điều hướng
      navigation={true} // Bật nút điều hướng
      modules={[Autoplay, Pagination, Navigation]} // Thêm module để Swiper hoạt động
    >
      <SwiperSlide>
        <img src="/images/test1.png" alt="Hình cưới 1" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/test2.png" alt="Hình cưới 2" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/test3.png" alt="Hình cưới 3" className={styles.weddingImage} />
      </SwiperSlide> 
      <SwiperSlide>
        <img src="/images/test5.png" alt="Hình cưới 4" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/test9.png" alt="Hình cưới 1" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/test14.png" alt="Hình cưới 2" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/19.png" alt="Hình cưới 3" className={styles.weddingImage} />
      </SwiperSlide> 
      <SwiperSlide>
        <img src="/images/20.png" alt="Hình cưới 4" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/21.png" alt="Hình cưới 4" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/22.png" alt="Hình cưới 4" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/23.png" alt="Hình cưới 4" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/24.png" alt="Hình cưới 4" className={styles.weddingImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/25.png" alt="Hình cưới 4" className={styles.weddingImage} />
      </SwiperSlide>
    </Swiper>

      </div>
    </div>
  );
};

export default WeddingPage;