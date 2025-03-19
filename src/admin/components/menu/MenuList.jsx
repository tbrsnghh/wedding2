import React from "react";

export default function MenuList({ menus, openModal }) {
  return (
    <div className="h-150 border rounded-lg p-4 bg-white shadow-lg">
      <h2 className="text-2xl font-bold text-[#d63384] mb-4">
        Danh sách thực đơn
      </h2>
      <table className="w-full border-collapse text-center">
        <thead className="bg-[#f9c5d1] text-[#d63384]">
          <tr className="border-b">
            <th className="p-3">Tên thực đơn</th>
            <th className="p-3">Mô tả</th>
            <th className="p-3">Số món</th>
            <th className="p-3">Ngày tạo</th>
            {/* <th className="p-3">Hành động</th> */}
          </tr>
        </thead>
        <tbody>
          {menus && menus.map((menu) => (
            <tr
              key={menu.id}
              className="border-b hover:bg-[#fff5f7] transition"
              onClick={() => openModal(menu)}
            >
              <td className="p-3 font-semibold">{menu.name}</td>
              <td className="p-3 text-gray-600">{menu.description}</td>
              <td className="p-3">{menu.Dishes.length}</td>
              <td className="p-3">
                {new Date(menu.createdAt).toLocaleDateString()}
              </td>
              {/* <td className="p-3 space-x-2">
                <button className="bg-[#ffc107] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#d39e00] transition">
                  Chi tiết
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
