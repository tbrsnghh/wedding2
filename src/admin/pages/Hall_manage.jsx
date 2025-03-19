import React, { useState } from "react";

export default function HallManage() {
  // Mock dữ liệu sảnh
  const [halls] = useState([
    {
      id: 1,
      name: "Grand Ballroom",
      description: "Sảnh lớn sức chứa 500 người",
      maxCapacity: 500,
      price: 50000000,
      status: "Hoạt động",
      schedule: [
        { date: "2024-06-15", time: "18:00 - 22:00", event: "Đám cưới A" },
        { date: "2024-06-20", time: "12:00 - 15:00", event: "Tiệc công ty" },
      ],
    },
    {
      id: 2,
      name: "Royal Hall",
      description: "Sảnh trung bình, sức chứa 300 người",
      maxCapacity: 300,
      price: 30000000,
      status: "Bảo trì",
      schedule: [
        { date: "2024-06-18", time: "19:00 - 23:00", event: "Sinh nhật B" },
      ],
    },
  ]);

  // State lưu sảnh được chọn
  const [selectedHall, setSelectedHall] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hàm mở modal
  const openModal = (hall) => {
    setSelectedHall(hall);
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHall(null);
  };

  return (
    <div className="w-full p-6 bg-[#f8f9fa] min-h-screen">
      {/* Tiêu đề */}
      <h1 className="text-4xl font-bold text-[#d63384] mb-6 text-center">
        Quản lý sảnh tiệc
      </h1>

      {/* Nút thêm sảnh */}
      <div className="mb-4">
        <button className="bg-[#d63384] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#c21867] transition">
          ➕ Thêm sảnh
        </button>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-6">
        {/* Danh sách sảnh */}
        <div className="border rounded-lg p-4 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-[#d63384] mb-4">
            Danh sách sảnh
          </h2>
          <table className="w-full border-collapse text-center">
            <thead className="bg-[#f9c5d1] text-[#d63384]">
              <tr className="border-b">
                <th className="p-3">Tên sảnh</th>
                <th className="p-3">Sức chứa</th>
                <th className="p-3">Trạng thái</th>
                <th className="p-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {halls.map((hall) => (
                <tr key={hall.id} className="border-b hover:bg-[#fff5f7] transition">
                  <td className="p-3">{hall.name}</td>
                  <td className="p-3">{hall.maxCapacity} người</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        hall.status === "Hoạt động" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {hall.status}
                    </span>
                  </td>
                  <td className="p-3 space-x-2">
                    <button className="bg-[#17a2b8] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#138496] transition">
                      ✏️
                    </button>
                    <button className="bg-[#dc3545] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#b02a37] transition">
                      🗑️
                    </button>
                    <button
                      className="bg-[#ffc107] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#d39e00] transition"
                      onClick={() => openModal(hall)}
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Lịch trình của sảnh được chọn */}
        <div className="border rounded-lg p-4 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-[#d63384] mb-4">
            Lịch trình sảnh
          </h2>
          {selectedHall ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {selectedHall.name}
              </h3>
              <ul>
                {selectedHall.schedule.map((event, index) => (
                  <li key={index} className="p-3 border-b last:border-0 hover:bg-[#fff5f7] transition">
                    <span className="font-semibold">{event.date}</span>: {event.time} - {event.event}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500">Chọn một sảnh để xem lịch trình</p>
          )}
        </div>
      </div>

      {/* Modal hiển thị chi tiết sảnh */}
      {isModalOpen && selectedHall && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-[#d63384] mb-4">{selectedHall.name}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Mô tả:</strong> {selectedHall.description}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Sức chứa:</strong> {selectedHall.maxCapacity} người
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Giá cơ bản:</strong> {selectedHall.price.toLocaleString()} VND
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Trạng thái:</strong> {selectedHall.status}
            </p>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700 transition"
              onClick={closeModal}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
