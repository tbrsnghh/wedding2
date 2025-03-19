import React, { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  TableIcon,
  PlusCircleIcon,
  MenuIcon,
  OfficeBuildingIcon,
  CakeIcon,
  CheckIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/authSlice";

// Danh sách menu
const menuItems = [
  { name: "Tổng quan", path: "/admin/home", icon: HomeIcon },
  { name: "Tiệc đã đặt", path: "/admin/booking", icon: CheckIcon },
  { name: "Khách hàng", path: "/admin/users", icon: UsersIcon },
  { name: "Sảnh tiệc", path: "/admin/halls", icon: OfficeBuildingIcon },
  { name: "Thực đơn", path: "/admin/menu", icon: MenuIcon },
  { name: "Món ăn", path: "/admin/hall", icon: CakeIcon },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  }
  return (
    <div className="relative flex">
      {/* Nút mở sidebar */}
      <button
        className="p-2 bg-[#f5c518] rounded-full shadow-md fixed top-2 left-2 z-50 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <aside
        className={`mt-14  w-15 bg-[#f9c5d1] border-r border-[#f5c518] h-screen px-6 py-6 transition-all duration-300 
        ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
      >
        {isOpen && (
          <>
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center space-x-3 py-3 px-4 rounded-lg transition text-white
              ${isActive ? "bg-[#f5c518] font-semibold" : "hover:bg-[#f5b6c3]"}`
                  }
                >
                  {/* Thanh vàng bên trái nếu active */}
                  {({ isActive }) => (
                    <>
                      <span
                        className={`absolute left-0 top-0 h-full w-1 bg-white transition-all 
                  ${isActive ? "opacity-100" : "opacity-0"}`}
                      ></span>

                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              ))}

              {/* Nút Create Account */}
              <NavLink
                to="/admin/create"
                className="flex items-center justify-center bg-[#f5c518] text-white py-3 px-4 rounded-lg hover:bg-[#e0ac16] transition shadow-md"
              >
                <PlusCircleIcon className="w-5 h-5" />
                <span className="ml-2">Thêm tài khoản</span>
              </NavLink>

              <button
                to="/" onClick={handleLogout}
                className="elative flex items-center space-x-3 py-3 px-4 rounded-lg transition text-white"
              >
                Đăng xuất
              </button>
            </nav>
          </>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
