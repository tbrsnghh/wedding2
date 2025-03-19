import React, { useEffect, useState } from "react";
import MenuList from "../components/menu/MenuList";
import DishList from "../components/menu/DishList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMenus } from "../../redux/menuSlice";


export default function MenuManage() {
  const menus = useSelector((state) => state.menu.menu);
  const [selectedMenu, setSelectedMenu] = useState(menus ? menus[0] : null);
  console.log('menus', menus);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMenus());
  }, []);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (menu) => {
    setSelectedMenu(menu);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMenu(null);
  };

  return (
    <div className="w-full p-6 bg-[#f8f9fa] min-h-screen">
      <h1 className="text-4xl font-bold text-[#d63384] mb-6 text-center">
        Quản lý thực đơn
      </h1>

      <div className="mb-4">
        <button className="bg-[#d63384] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#c21867] transition">
          ➕ Thêm thực đơn
        </button>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <MenuList menus={menus} openModal={openModal} />
        <DishList selectedMenu={selectedMenu} />
      </div>
    </div>
  );
}
