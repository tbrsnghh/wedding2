import React from "react";

export default function DishList({ selectedMenu }) {
  if (!selectedMenu) {
    return (
      <div className="border rounded-lg p-4 bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-[#d63384] mb-4">Chi tiết món ăn</h2>
        <p className="text-gray-500">Chọn một thực đơn để xem chi tiết.</p>
      </div>
    );
  }

  return (
    <div className="h-150 border rounded-lg p-4 bg-white shadow-lg">
      <h2 className="text-2xl font-bold text-[#d63384] mb-4">Menu {selectedMenu.name}</h2>
      <div className="h-90 overflow-y-auto">
      {selectedMenu.Dishes.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {selectedMenu.Dishes.map((dish) => (
            <li key={dish.id} className="flex items-center gap-4 py-3">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-16 h-16 object-cover rounded-lg border"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-gray-500">{dish.description}</p>
              </div>
              <span className="font-bold text-[#d63384]">{dish.price.toLocaleString()} đ</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Chưa có món ăn trong thực đơn này.</p>
      )}
      </div>
      <p className="mt-4">Số món ăn: {selectedMenu.Dishes.length}</p>
      <p className="mt-2">Tổng giá: {selectedMenu.Dishes.reduce((total, dish) => total + dish.price, 0).toLocaleString()} đ</p>
      <div className="flex justify-end">
        <button className="bg-[#d63384] text-white px-4 py-2 rounded-md mt-2">Chi tiết</button>
      </div>
    </div>
  );
}
