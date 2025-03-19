// src/components/thiepcuoi/ThiepCuoiEditor.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './thiepcuoi.module.css';

const ThiepCuoiEditor = () => {
  const { id } = useParams(); // Lấy ID mẫu từ URL
  const navigate = useNavigate();

  // Dữ liệu mẫu dựa trên ID
  const templates = {
    cloudy: { name: 'Cloudy', bgColor: '#f0f8ff', border: '2px solid #87ceeb', font: 'Roboto' },
    'blue-horizon': { name: 'Blue Horizon', bgColor: '#e6f3ff', border: '2px solid #1e90ff', font: 'Playfair Display' },
    gentle: { name: 'Gentle', bgColor: '#f5f5f5', border: '1px solid #ccc', font: 'Open Sans' },
    'carrot-craze': { name: 'Carrot Craze', bgColor: '#fff0f0', border: '2px dashed #ff4500', font: 'Dancing Script' },
    brownleaf: { name: 'Brownleaf', bgColor: '#f5e8c7', border: '2px solid #8b4513', font: 'Great Vibes' },
    'viet-vibes': { name: 'Viet Vibes', bgColor: '#f0e4d7', border: '2px solid #d4a017', font: 'Noto Serif' },
  };

  const [design, setDesign] = useState({
    brideName: '',
    groomName: '',
    date: '',
    venue: '',
    story: '',
    images: [],
  });

  const [generatedLink, setGeneratedLink] = useState('');

  const template = templates[id] || templates.cloudy; // Mẫu mặc định nếu không tìm thấy

  useEffect(() => {
    // Có thể fetch dữ liệu mẫu từ server nếu cần
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDesign((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setDesign((prev) => ({ ...prev, images: [...prev.images, ...imageUrls] }));
  };

  const removeImage = (index) => {
    setDesign((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const generateLink = () => {
    const uniqueId = Math.random().toString(36).substring(2, 15);
    const link = `${window.location.origin}/wedding-card/${uniqueId}`;
    setGeneratedLink(link);
    alert('Thiệp đã được tạo! Chia sẻ link với mọi người nhé.');
    // Lưu design lên server ở đây
  };

  return (
    <div className={styles.weddingCardDesigner}>
      <div className={styles.designerPanel}>
        <h2>Chỉnh Sửa Thiệp Cưới - {template.name}</h2>

        <div className={styles.inputGroup}>
          <input
            type="text"
            name="brideName"
            value={design.brideName}
            onChange={handleChange}
            placeholder="Tên cô dâu"
            className={styles.input}
          />
          <input
            type="text"
            name="groomName"
            value={design.groomName}
            onChange={handleChange}
            placeholder="Tên chú rể"
            className={styles.input}
          />
          <input
            type="date"
            name="date"
            value={design.date}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="venue"
            value={design.venue}
            onChange={handleChange}
            placeholder="Địa điểm tổ chức"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Thêm ảnh:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            name="story"
            value={design.story}
            onChange={handleChange}
            placeholder="Câu chuyện tình yêu của bạn..."
            className={styles.input}
            rows="4"
          />
        </div>

        <button className={styles.button} onClick={generateLink}>
          Tạo Thiệp & Lấy Link
        </button>

        {generatedLink && (
          <div className={styles.linkSection}>
            <p>
              Link thiệp của bạn:{' '}
              <a href={generatedLink} target="_blank" rel="noopener noreferrer">
                {generatedLink}
              </a>
            </p>
          </div>
        )}
      </div>

      <div className={styles.previewPanel}>
        <div
          className={styles.cardPreview}
          style={{
            background: template.bgColor,
            border: template.border,
            fontFamily: template.font,
          }}
        >
          <h1>{design.brideName || 'Cô Dâu'} & {design.groomName || 'Chú Rể'}</h1>
          <p>Ngày: {design.date || 'Chưa chọn ngày'}</p>
          <p>Địa điểm: {design.venue || 'Chưa chọn địa điểm'}</p>

          {design.images.length > 0 && (
            <div className={styles.imageGallery}>
              {design.images.map((img, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <img src={img} alt={`Ảnh ${index + 1}`} className={styles.previewImage} />
                  <button
                    className={styles.removeButton}
                    onClick={() => removeImage(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}

          {design.story && (
            <div className={styles.storySection}>
              <h3>Câu Chuyện Của Chúng Tôi</h3>
              <p>{design.story}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThiepCuoiEditor;