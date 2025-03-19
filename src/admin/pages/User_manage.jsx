import React from "react";

export default function UserManage() {
  const usersData = [
    {
      id: 1,
      role: "user",
      email: "gG9b9@example.com",
      name: "Nguyễn Văn A",
      birth: "01/01/1990",
      genger: "male",
      phone: "0901234567",
      address: "Hà Nội",
    },
    {
      name: "Nguyễn Văn B",
      birth: "15/05/1992",
      genger: "male",
      phone: "0912345678",
      address: "Hồ Chí Minh",
    },
    {
      name: "Nguyễn Văn C",
      birth: "20/07/1995",
      genger: "male",
      phone: "0987654321",
      address: "Đà Nẵng",
    },
  ];

  return (
    <div className="w-full p-6 bg-[#f8f9fa] min-h-screen">
      {/* Tiêu đề */}
      <h1 className="text-4xl font-bold text-[#d63384] mb-6 text-center">
        Quản lý khách hàng
      </h1>

      {/* Thanh công cụ */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <button className="bg-[#d63384] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#c21867] transition">
          ➕ Thêm khách hàng
        </button>
        <p className="border border-[#f5c518] px-4 py-2 rounded-full w-56 text-center">
          Tổng số khách hàng{" "}
          <span className="text-[#f5c518]">{usersData.length}</span>
        </p>
        <input
          type="text"
          placeholder="🔍 Tìm khách hàng..."
          className="border border-gray-300 px-4 py-2 rounded-full flex-1 shadow-md"
        />
        <button className="bg-[#d63384] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#c21867] transition">
          Lọc
        </button>
      </div>

      {/* Danh sách khách hàng */}
      <div className="border rounded-lg p-4 bg-white shadow-lg">
        <table className="w-full border-collapse text-center ">
          <thead className="bg-[#f9c5d1] text-[#d63384]">
            <tr className="border-b">
              <th className="p-3">Tên khách hàng</th>
              <th className="p-3">Ngày sinh</th>
              <th className="p-3">Số điện thoại</th>
              <th className="p-3">Địa chỉ</th>
              <th className="p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {/* Dữ liệu khách hàng */}
            {usersData.map((user, index) => (
              <tr
                key={index}
                className="border-b hover:bg-[#fff5f7] transition"
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.birth}</td>
                <td className="p-3">{user.phone}</td>
                <td className="p-3">{user.address}</td>
                <td className="p-3 space-x-2">
                  <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#138496] transition">
                    🔍 chi tiết
                  </button>
                  <button className="bg-[#f5c518] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#d4a215] transition">
                    Tiệc đã đặt
                  </button>
                  <button className="bg-[#f5c518] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#d4a215] transition">
                    ✏️
                  </button>
                  <button className="bg-[#dc3545] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#b02a37] transition">
                    🗑️
                  </button>
                  <button className="bg-[#dc3545] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#b02a37] transition">
                    ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
