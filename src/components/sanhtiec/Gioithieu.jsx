import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Banner from "./banner";
import styles from "./gioithieu.module.css";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={className}
      style={{ ...style, left: "5px", zIndex: 2, fontSize: "24px", color: "#fff", cursor: "pointer" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{ ...style, right: "5px", zIndex: 2, fontSize: "24px", color: "#fff", cursor: "pointer" }}
      onClick={onClick}
    />
  );
};

const About = () => {
  const halls = {
    "Paradise Hall": {
      images: ["/images/4.png", "/images/5.png", "/images/15.png", "/images/16.png"],
      description: "Biểu trưng cho sự hoàn hảo, nơi diễn ra một đám cưới đẹp như thiên đường.",
      features: ["Sức chứa 500 – 700 khách", "Tiệc cưới, tiệc gala, hội nghị công ty, quy mô lớn", "Kiến trúc hoàng gia châu Âu, lộng lẫy với đèn chùm pha lê và bàn tiệc cao cấp"],
    },
    "Bliss Hall": {
      images: ["/images/8.png", "/images/12.png", "/images/18.png", "/images/17.png"],
      description: "Mang đến sự ấm áp và hạnh phúc trọn vẹn cho ngày trọng đại.",
      features: ["Sức chứa 300 – 450 khách", "Tiệc cưới ấm cúng, vừa phải Không gian rộng rãi", "Trang trí với tone màu pastel nhẹ nhàng, hoa tươi lãng mạn, không gian gần gũi và ấm cúng."],
    },
    "SPearl Hall": {
      images: ["/images/3.png", "/images/14.png", "/images/9.png", "/images/10.png"],
      description: "Thể hiện sự quý giá, sang trọng như viên ngọc sáng giữa lòng thành phố.",
      features: ["Sức chứa 200 – 300 khách", "Phong cách ấm cúng", "Thiết kế trang nhã với tone trắng – vàng, bàn tiệc đơn giản nhưng tinh tế, phù hợp phong cách hiện đại hoặc truyền thống."],
    },
    "Sunrise Hall": {
      images: ["/images/6.png", "/images/7.png", "/images/11.png", "/images/13.png"],
      description: "Biểu tượng cho khởi đầu mới, tương lai rực rỡ và hạnh phúc dài lâu.",
      features: ["Sức chứa 100 – 150 khách", "Tiệc cưới nhỏ, tiệc báo hỷ", "Không gian mở với ánh sáng tự nhiên, tone màu tươi sáng, phù hợp với phong cách trẻ trung, hiện đại."],
    },
  };

  const [currentHall, setCurrentHall] = useState(halls["Paradise Hall"]);

  const handleHallClick = (hallName) => {
    setCurrentHall(halls[hallName]);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={styles.aboutContainer}>
      <Banner />
      <h1 className={styles.aboutTitle}>SẢNH TIỆC TẠI NHÀ HÀNG ĐÔNG Á</h1>
      <p className={styles.introText}>
        Lấy cảm hứng từ vẻ đẹp vĩnh cửu của các viên ngọc quý, các sảnh tiệc tại Nhà hàng Đông Á được đặt tên để phản ánh sự sang trọng và độc đáo. 
        Paradise Hall mang nét rực rỡ của ngọc bích, tượng trưng cho sự hoàn hảo và lộng lẫy. 
        Bliss Hall dịu dàng như hồng ruby, đại diện cho tình yêu ấm áp và hạnh phúc trọn vẹn. 
        SPearl Hall rạng ngời như ngọc trai, thể hiện sự tinh tế và quý phái. 
        Sunrise Hall lung linh như ngọc mặt trời, biểu tượng cho khởi đầu mới và ánh sáng rực rỡ. 
        Mỗi sảnh là một kiệt tác, biến ngày trọng đại của bạn thành một viên ngọc quý giá.
      </p>
      <div className={styles.hallButtons}>
        {Object.keys(halls).map((hall) => (
          <button
            key={hall}
            onClick={() => handleHallClick(hall)}
            className={`${styles.hallButton} ${
              currentHall === halls[hall] ? styles.active : ""
            }`}
          >
            {hall}
          </button>
        ))}
      </div>

      <div className={styles.hallDetails}>
        <div className={styles.hallSliderWrapper}>
          <Slider {...sliderSettings} className={styles.hallSlider}>
            {currentHall.images.map((img, idx) => (
              <div key={idx} className={styles.sliderImageContainer}>
                <img
                  src={img}
                  alt={`${currentHall.title} ${idx + 1}`}
                  className={styles.hallImage}
                />
              </div>
            ))}
          </Slider>
          <div className={styles.hallInfo}>
            <p>{currentHall.description}</p>
            <ul>
              {currentHall.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;