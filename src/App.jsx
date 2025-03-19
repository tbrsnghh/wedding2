import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import HeroSection from "./components/herosection/HeroSection";
import WeddingPage from "./components/sanhtiec/Sanhtiec"; 
import Thucdon from "./components/thucdon/Thucdon";
import Promotions from "./components/khuyenmai/khuyenmai";
import Trangchu from "./components/trangchu/Trangchu";
import Lienhe from "./components/lienhe/Lienhe";
import Footer from "./components/footer/Footer";
import ThiepCuoi from "./components/thiepcuoi/thiepcuoi";
import ThiepCuoiEditor from "./components/thiepcuoi/editthiepcuoi";
import Icon from "./components/icon/Icon";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" && <HeroSection />}
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/lienhe" element={<Lienhe />} />
        <Route path="/gioithieu" element={<WeddingPage />} /> 
        <Route path="/thucdon" element={<Thucdon />} />
        <Route path="/khuyenmai" element={<Promotions />} />
        <Route path="/thiepcuoi" element={<ThiepCuoi />} />
        <Route path="/edit-template/:id" element={<ThiepCuoiEditor />} />
      </Routes>
      <Footer />
      <Icon />
    </>
  );
}