import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const Header = lazy(() => import("./components/header/Header"));
const HeroSection = lazy(() => import("./components/herosection/HeroSection"));
const Trangchu = lazy(() => import("./components/trangchu/Trangchu"));
const Lienhe = lazy(() => import("./components/lienhe/Lienhe"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Icon = lazy(() => import("./components/icon/Icon"));
const ProtectedRoute = lazy(() => import("./admin/ProtectedRoute"));
const Sidebar = lazy(() => import("./admin/components/sidebar/Sidebar"));

// Lazy Load các trang ít sử dụng
const WeddingPage = lazy(() => import("./components/sanhtiec/Sanhtiec"));
const Thucdon = lazy(() => import("./components/thucdon/Thucdon"));
const Promotions = lazy(() => import("./components/khuyenmai/khuyenmai"));
const ThiepCuoi = lazy(() => import("./components/thiepcuoi/thiepcuoi"));
const ThiepCuoiEditor = lazy(() => import("./components/thiepcuoi/editthiepcuoi"));
const Booking = lazy(() => import("./page/Booking"));
const Login = lazy(() => import("./page/Login"));
const Register = lazy(() => import("./page/Register"));
const Admin = lazy(() => import("./admin/Admin"));
const UserManage = lazy(() => import("./admin/pages/User_manage"));
const HallManage = lazy(() => import("./admin/pages/Hall_manage"));
const MenuManage = lazy(() => import("./admin/pages/Menu_manage"));

export default function App() {
  const location = useLocation();

  return (
    <>  
      {location.pathname === "/" && <HeroSection />}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <Trangchu />
              <Footer />
              <Icon />
            </Suspense>
          }
        />
        <Route
          path="/lienhe"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <Lienhe />
              <Footer />
              <Icon />
            </Suspense>
          }
        />

        {/* Các trang Lazy Load */}
        <Route path="/gioithieu" element={<Suspense fallback={<div>Loading...</div>}><Header /><WeddingPage /><Footer /><Icon /></Suspense>} />
        <Route path="/thucdon" element={<Suspense fallback={<div>Loading...</div>}><Header /><Thucdon /><Footer /><Icon /></Suspense>} />
        <Route path="/khuyenmai" element={<Suspense fallback={<div>Loading...</div>}><Header /><Promotions /><Footer /><Icon /></Suspense>} />
        <Route path="/thiepcuoi" element={<Suspense fallback={<div>Loading...</div>}><Header /><ThiepCuoi /><Footer /><Icon /></Suspense>} />
        <Route path="/edit-template/:id" element={<Suspense fallback={<div>Loading...</div>}><Header /><ThiepCuoiEditor /><Footer /><Icon /></Suspense>} />

        {/* Các trang không cần Header/Footer */}
        <Route path="/booking" element={<Suspense fallback={<div>Loading...</div>}><Booking /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>} />

        {/* Admin Panel */}
        <Route path="/admin/home" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><Sidebar /><Admin /></Suspense></ProtectedRoute>}/>
        <Route path="/admin/users" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><Sidebar /><UserManage /></Suspense></ProtectedRoute>}/>
        <Route path="/admin/menu" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><Sidebar /><MenuManage /></Suspense></ProtectedRoute>}/>
        <Route path="/admin/halls" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><Sidebar /><HallManage /></Suspense></ProtectedRoute>}/>
      </Routes>
    </>
  );
}
