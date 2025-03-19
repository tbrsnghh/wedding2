import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"; 
import styles from "./banner.module.css";

const Banner = () => {
  const bannerImages = [
    "/images/bannermenu2.png",
    "/images/bannermenu1.png",
    "/images/bannermenu3.png",
  ];

  const navigate = useNavigate(); 

  const handleBannerClick = () => {
    navigate("/khuyenmai"); 
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className={styles.bannerWrapper}>
      <Slider {...settings} className={styles.bannerSlider}>
        {bannerImages.map((img, index) => (
          <div key={index} className={styles.bannerSlide}>
            <div
              className={styles.banner}
              style={{ backgroundImage: `url(${img})` }}
              onClick={handleBannerClick} 
            >
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;