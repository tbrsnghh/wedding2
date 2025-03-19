import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Banner from "./banner";
import Gioithieu2 from "./gioithieu2";
import About from "./Gioithieu"; // Import About
import styles from "./gioithieu2.module.css";

const WeddingPage = () => {
  return (
    <div className={styles.pageContainer}>
     
      {/* About (Gioithieu) */}
      <About />

      {/* Gioithieu2 */}
      <Gioithieu2 />

    
    </div>
  );
};

export default WeddingPage;